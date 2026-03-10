"use client";
import Image from "next/image";
import Link from "next/link";
import {
  featuredCategories,
  kitchenCategories,
  healthAndBeautyCategories,
  homeAppliancesCategories,
} from "@/mocks/categories";
import { useState } from "react";
const category_tabs = [
  {
    name: "Sản phẩm nổi bật",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 317 46"
        className="absolute top-0 left-0 h-full w-full origin-left scale-x-100 scale-y-100 duration-200"
      >
        <path
          d="M0 25.6C0 16.6392 0 12.1587 1.7439 8.73615C3.27787 5.72556 5.72556 3.27787 8.73615 1.7439C12.1587 0 16.6392 0 25.6 0H261.618C268.375 0 271.754 0 274.875 0.857308C277.64 1.61681 280.246 2.86561 282.57 4.54449C285.194 6.43956 287.311 9.07273 291.545 14.3391L317 46H0V25.6Z"
          fill="url(#paint0_linear_1_2818)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_1_2818"
            gradientUnits="userSpaceOnUse"
            x1="304.32"
            x2="304.32"
            y1="-6.10937"
            y2="46"
          >
            <stop stop-color="#E45464"></stop>
            <stop offset="1" stop-color="#DE2D41"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
    categories: featuredCategories,
  },
  {
    name: "Gia dụng nhà bếp",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 h-full w-full origin-bottom scale-y-100 duration-200"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 317 46"
      >
        <path
          d="M27.4973 13.5673C31.7271 8.57826 33.842 6.08374 36.4214 4.29134C38.7069 2.70311 41.2513 1.52454 43.9408 0.808305C46.976 0 50.2464 0 56.7872 0H261.618C268.375 0 271.754 0 274.875 0.857308C277.64 1.61681 280.246 2.86561 282.57 4.54449C285.194 6.43956 287.311 9.07273 291.545 14.3391L317 46H0L27.4973 13.5673Z"
          fill="url(#paint0_linear_1_2711)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_1_2711"
            gradientUnits="userSpaceOnUse"
            x1="304.32"
            x2="304.32"
            y1="-6.10937"
            y2="46"
          >
            <stop stop-color="#E45464"></stop>
            <stop offset="1" stop-color="#DE2D41"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
    categories: kitchenCategories,
  },
  {
    name: "Sức khỏe & Làm đẹp",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 h-full w-full origin-bottom scale-y-100 duration-200"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 317 46"
      >
        <path
          d="M27.4973 13.5673C31.7271 8.57826 33.842 6.08374 36.4214 4.29134C38.7069 2.70311 41.2513 1.52454 43.9408 0.808305C46.976 0 50.2464 0 56.7872 0H261.618C268.375 0 271.754 0 274.875 0.857308C277.64 1.61681 280.246 2.86561 282.57 4.54449C285.194 6.43956 287.311 9.07273 291.545 14.3391L317 46H0L27.4973 13.5673Z"
          fill="url(#paint0_linear_1_2711)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_1_2711"
            gradientUnits="userSpaceOnUse"
            x1="304.32"
            x2="304.32"
            y1="-6.10937"
            y2="46"
          >
            <stop stop-color="#E45464"></stop>
            <stop offset="1" stop-color="#DE2D41"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
    categories: healthAndBeautyCategories,
  },
  {
    name: "Thiết bị điện gia đình",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 317 46"
        className="absolute top-0 right-0 h-full w-full origin-right scale-x-100 duration-200"
      >
        <path
          d="M317 25.6C317 16.6392 317 12.1587 315.256 8.73615C313.722 5.72556 311.274 3.27787 308.264 1.7439C304.841 0 300.361 0 291.4 0H55.382C48.625 0 45.246 0 42.125 0.857308C39.36 1.61681 36.754 2.86561 34.43 4.54449C31.806 6.43956 29.689 9.07273 25.455 14.3391L0 46H317V25.6Z"
          fill="url(#paint0_linear_1_2818)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_1_2818"
            gradientUnits="userSpaceOnUse"
            x1="12.68"
            x2="12.68"
            y1="-6.10937"
            y2="46"
          >
            <stop stop-color="#E45464"></stop>
            <stop offset="1" stop-color="#DE2D41"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
    categories: homeAppliancesCategories,
  },
];
export default function CategoryTab() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="animate-scale-in mb-3 w-full">
      <div className="scrollbar-hidden w-full overflow-x-auto">
        <div className="flex min-w-[820px] justify-between overflow-x-auto rounded-t-2xl bg-neutral-50">
          {category_tabs.map((tab, index) => (
            <div
              key={index}
              className={`p-1x-small font-semi-bold relative flex w-full flex-1 shrink-0 cursor-pointer items-center justify-center text-center duration-200 after:absolute after:right-0 after:h-2/5 after:w-[1px] after:bg-neutral-300 last:after:content-none ${activeTab === index ? "text-pure-white" : "text-(--color-woodsmoke-800)"} hover:text-pure-white`}
              onClick={() => setActiveTab(index)}
            >
              {activeTab === index && tab.svg}
              <span className="text-small tablet:text-medium z-10 font-bold">
                {tab.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full overflow-x-auto bg-neutral-50">
        <div className="scrollbar-hidden tablet:px-8 p-small tablet:py-6 tablet:rounded-tl-none w-full overflow-x-auto rounded-b-2xl bg-gradient-to-b from-[#DE2E42] to-[#B70014] text-white duration-200">
          <div className="laptop:grid-cols-6 gap-1x-large grid w-full min-w-[790px] grid-cols-5">
            {category_tabs[activeTab].categories.map((category, index) => (
              <Link
                key={index}
                className="font-semi-bold flex shrink-0 grow items-center gap-2.5"
                href="https://cellphones.com.vn/nha-thong-minh/may-loc-khong-khi.html"
              >
                <div className="bg-pure-white flex items-center justify-center rounded-full">
                  <span className="cps-image-cdn tablet:h-[50px] tablet:w-[50px] relative inline-block h-[40px] w-[40px] shrink-0">
                    <Image
                      alt={category}
                      loading="lazy"
                      width={50}
                      height={50}
                      decoding="async"
                      data-nimg="1"
                      className="tablet:h-[50px] tablet:w-[50px] h-[40px] w-[40px] shrink-0 object-contain opacity-100 transition-opacity duration-500"
                      src={`/assets/categories/${category}.png`}
                      style={{ color: "transparent" }}
                    />
                  </span>
                </div>
                <span className="text-base font-medium">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
