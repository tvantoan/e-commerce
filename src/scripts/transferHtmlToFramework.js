"use strict";

const fs = require("fs");
const path = require("path");

const ROOT_DIR = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve("src");

const IMPORT_BLOCK_LINES = [
  "import Link from 'next/link';",
  "import Image from 'next/image';",
];

const HTML_TO_JSX_ATTR_MAP = {
  class: "className",
  for: "htmlFor",

  maxlength: "maxLength",
  minlength: "minLength",
  readonly: "readOnly",
  tabindex: "tabIndex",
  autocomplete: "autoComplete",
  autocapitalize: "autoCapitalize",
  autocorrect: "autoCorrect",
  inputmode: "inputMode",
  formaction: "formAction",
  formenctype: "formEncType",
  formmethod: "formMethod",
  formnovalidate: "formNoValidate",
  formtarget: "formTarget",

  srcset: "srcSet",
  crossorigin: "crossOrigin",
  referrerpolicy: "referrerPolicy",
  usemap: "useMap",
  playsinline: "playsInline",

  contenteditable: "contentEditable",
  spellcheck: "spellCheck",
  allowfullscreen: "allowFullScreen",
  frameborder: "frameBorder",
  marginheight: "marginHeight",
  marginwidth: "marginWidth",

  viewbox: "viewBox",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-miterlimit": "strokeMiterlimit",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "flood-color": "floodColor",
  "flood-opacity": "floodOpacity",
  "color-interpolation": "colorInterpolation",
  "color-interpolation-filters": "colorInterpolationFilters",
};

const BOOLEAN_HTML_ATTRS = new Set([
  "disabled",
  "checked",
  "readonly",
  "required",
  "multiple",
  "selected",
  "autofocus",
  "novalidate",
  "controls",
  "loop",
  "muted",
  "playsinline",
  // "hidden",
]);

function readTypescriptFiles(rootDir) {
  const results = [];

  function _walk(dir) {
    let list;
    try {
      list = fs.readdirSync(dir, { withFileTypes: true });
    } catch (err) {
      console.error(`Failed to read directory ${dir}: ${err.message}`);
      return;
    }
    for (const entry of list) {
      const full = path.resolve(dir, entry.name);
      if (entry.isDirectory()) {
        _walk(full);
      } else if (entry.isFile() && full.endsWith(".tsx")) {
        results.push(full);
      }
    }
  }

  _walk(rootDir);
  return results;
}

function convertStyleAttribute(style, tag) {
  let match =
    style.match(/background-image\s*:\s*(url\(.+\))/i) ||
    style.match(/background\s*:\s*(url\(.+\))/i);
  let value = match ? match[1] : null;
  let styleModified = style
    .replace(/background-image\s*:\s*url\(.+\);?/i, "")
    .replace(/background\s*:\s*url\(.+\);?/i, "")
    .split(";")
    .map((rule) => rule.trim())
    .filter((rule) => rule && rule.includes(":"))
    .map((rule) => {
      let [key, value] = rule.split(/:(.+)/).map((s) => s.trim());
      if (!key || !value) return null;
      if (key.startsWith("--")) {
        return `'${key}': '${value}'`;
      }
      if (key.startsWith("-webkit-")) {
        key = "Webkit" + key.slice(7);
      }

      key = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return `${key}: '${value}'`;
    })
    .filter(Boolean)
    .join(", ");
  return styleModified;
}

function transformContent(original) {
  let content = original;
  content = content.replace(/<br>/g, "<br />");
  content = content.replace(/xlink:href/g, "xlinkHref");
  content = content.replace(/xmlns:xlink/g, "xmlnsXlink");

  content = content.replace(/<!--[\s\S]*?-->\s*/g, "");

  content = content.replace(/<([a-zA-Z][\w-]*)\s*\n\s*>/g, "<$1>");
  content = content.replace(/\s*<\s*\/\s*([a-zA-Z][\w-]*)\s*>/g, "</$1>");

  content = content.replace(
    /\s(?!id=|data-)([a-zA-Z_:][\w:.-]*)\s*=\s*"(\d+)"(?=(\s|>))/g,
    (_m, attr, num) => ` ${attr}={${num}}`,
  );

  content = content.replace(
    /\s(?!id=|data-)([a-zA-Z_:][\w:.-]*)\s*=\s*'(\d+)'(?=(\s|>))/g,
    (_m, attr, num) => ` ${attr}={${num}}`,
  );
  content = content.replace(
    /(<h[1-6]\b[^>]*?)\sname=(?:"[^"]*"|'[^']*')([^>]*>)/gi,
    "$1$2",
  );

  content = content.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  content = content.replace(/<input\b([^>]*)?>/gi, (fullMatch, props) => {
    let newProps = props.replace(/\/\s*$/, "").trim();
    if (newProps && !newProps.startsWith(" ")) newProps = " " + newProps;
    return `<input${newProps} />`;
  });

  content = content.replace(
    /<a\b([^>]*)>([\s\S]*?)<\/a>/gi,
    (_, props = "", inner = "") => {
      const cleanedProps = props.trim();
      return cleanedProps.includes("href=")
        ? `<Link ${cleanedProps}>${inner}</Link>`
        : `<a ${cleanedProps}>${inner}</a>`;
    },
  );
  content = content.replace(/<img\b([^>]*)\/?>/gi, (_, props = "") => {
    const cleaned = props.trim();
    return cleaned ? `<Image ${cleaned} />` : `<Image />`;
  });

  const htmlAttrKeys = Object.keys(HTML_TO_JSX_ATTR_MAP).sort(
    (a, b) => b.length - a.length,
  );

  for (const attr of BOOLEAN_HTML_ATTRS) {
    const reFalseDouble = new RegExp(`${attr}=\"[a-z]+\"`, "gi");
    content = content.replace(reFalseDouble, "");
  }
  content = content.replace(
    /<style\b[^>]*>([\s\S]*?)<\/style>/gi,
    (_, css) => `<style>{\`${css}\`}</style>`,
  );
  content = content.replace(/style\s*=\s*"([^"]*?)"/gi, (_m, styleStr) => {
    const jsStyle = convertStyleAttribute(styleStr);
    return jsStyle ? `style={{${jsStyle}}}` : "";
  });

  content = content.replace(/style\s*=\s*'([^']*?)'/gi, (_m, styleStr) => {
    const jsStyle = convertStyleAttribute(styleStr);
    return jsStyle ? `style={{${jsStyle}}}` : "";
  });

  for (const [htmlAttr, jsxAttr] of Object.entries(HTML_TO_JSX_ATTR_MAP)) {
    const re = new RegExp(`\\b${htmlAttr}(?=\\s*=)`, "gi");
    content = content.replace(re, jsxAttr);
  }

  content = content.replace(/\bvalue\s*=\s*""/gi, `defaultValue=""`);

  if (content.startsWith("\uFEFF")) content = content.slice(1);

  return content;
}

function processFile(filePath) {
  try {
    const original = fs.readFileSync(filePath, "utf-8");
    let content = original;

    const transformed = transformContent(content);

    if (transformed !== original) {
      fs.writeFileSync(filePath, transformed, "utf-8");
      console.log(`Transformed: ${filePath}`);
    } else {
      console.log(`No changes: ${filePath}`);
    }
  } catch (err) {
    console.error(`Failed to process ${filePath}: ${err.message}`);
  }
}

function main() {
  console.log(`Starting transformation in: ${ROOT_DIR}`);

  processFile(path.resolve(ROOT_DIR, "components/home/ImageSlider.tsx"));
  console.log("Done.");
}

if (require.main === module) {
  main();
}
