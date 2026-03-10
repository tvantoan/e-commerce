"use client";
import Image from "next/image";
import { useState } from "react";

export default function Category({
  name,
  categories,
}: {
  name: string;
  categories: { name: string; url: string }[];
}) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="hover:scrollbar-thumb-neutral-300 scrollbar-track-neutral-50/0 scrollbar scrollbar-thumb-transparent mx-auto mb-2 flex w-fit max-w-full items-start justify-start gap-2 overflow-x-auto md:mb-4 md:gap-4">
      {categories.map((category, index) => (
        <div
          key={category.url}
          className="group flex h-full w-auto min-w-21.25 cursor-pointer flex-col items-center justify-center gap-2 md:w-30"
          onClick={() => setActiveCategory(index)}
        >
          <div
            className={`to-primary-400 relative size-12.5 rounded-full sm:size-16 ${activeCategory === index ? "bg-gradient-to-b from-white" : "bg-gray-100"} group-hover:bg-gradient-to-b`}
          >
            <span className="cps-image-cdn relative inline-block size-full object-contain sm:size-16">
              <Image
                alt={category.name}
                loading="lazy"
                width={128}
                height={128}
                decoding="async"
                data-nimg="1"
                className="size-full object-contain opacity-100 transition-opacity duration-500 sm:size-16"
                style={{ color: "transparent" }}
                src={`/assets/categories/${name}/${category.url}.png`}
              />
            </span>
          </div>
          <span className="sm:text-md text-center text-xs text-neutral-800 transition-colors duration-200 ease-in-out group-hover:text-red-600">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
}
