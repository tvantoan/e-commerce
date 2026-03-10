const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../mocks/items.jsonl");
const directionPath = path.join(__dirname, "../mocks/shortenedItems.ts");

// Đọc file .jsonl (mỗi dòng là một JSON object)
const content = fs.readFileSync(filePath, "utf8");
const items = content
  .split("\n")
  .filter(Boolean) // Loại bỏ dòng trống
  .map(JSON.parse); // Parse mỗi dòng thành object

const shortenedItems = items.map(
  ({ name, base_price, sale_price, images }) => ({
    name,
    basePrice: base_price,
    salePrice: sale_price,
    image: images[0],
  }),
);

const tsContent = `export const shortenedItems = ${JSON.stringify(
  shortenedItems,
  null,
  2,
)};\n`;

fs.writeFileSync(directionPath, tsContent);
console.log("✓ Done: Generated", directionPath);
