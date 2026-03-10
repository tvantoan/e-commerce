"use client";
import Link from "next/link";
import Image from "next/image";
import "@/styles/do-gia-dung.css";
import BreadCrumb from "@/components/home/BreadCrumb";
import Header from "@/components/layout/Header";
import ImageSlider from "@/components/home/ImageSlider";
import Brand from "@/components/home/Brand";
import ItemList from "@/components/home/ItemList";
import Category from "@/components/home/Category";
import Description from "@/components/home/Description";
import Forum from "@/components/home/Forum";
import Comments from "@/components/home/Comments";
import Footer from "@/components/layout/Footer";
import CategoryTab from "@/components/home/CategoryTab";
import Banner from "@/components/home/Banner";
import Sort from "@/components/home/Sort";
import Notification from "@/components/share/Notification";
import {
  homeAppliances,
  kitchenAppliances,
  healthAndBeauty,
} from "../mocks/categories_nav";
import DialogOverlay from "@/components/share/DialogOverlay";
import LocationDialog from "@/components/share/LocationDialog";
import React, { useEffect } from "react";
import axios from "axios";

const sortCriteria = [
  {
    name: "Phổ biến",
    criteria: "popular",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        className="size-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Star">
          <path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "Khuyến mãi HOT",
    criteria: "hot_deal",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        className="size-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Discount_1">
          <path d="M21.953,12c0,0.591 -0.346,1.124 -0.839,1.61c-0.295,0.29 -0.639,0.568 -0.942,0.85c-0.242,0.225 -0.46,0.446 -0.562,0.692c-0.107,0.257 -0.114,0.576 -0.105,0.913c0.011,0.416 0.056,0.855 0.059,1.265c0.006,0.691 -0.123,1.304 -0.526,1.708c-0.404,0.403 -1.017,0.532 -1.708,0.526c-0.41,-0.004 -0.849,-0.048 -1.264,-0.059c-0.337,-0.009 -0.657,-0.002 -0.914,0.105c-0.246,0.102 -0.467,0.32 -0.692,0.562c-0.282,0.303 -0.56,0.647 -0.85,0.941c-0.486,0.494 -1.019,0.84 -1.61,0.84c-0.591,-0 -1.124,-0.346 -1.61,-0.84c-0.29,-0.294 -0.568,-0.638 -0.85,-0.941c-0.225,-0.242 -0.447,-0.46 -0.692,-0.562c-0.257,-0.107 -0.577,-0.114 -0.913,-0.105c-0.416,0.011 -0.855,0.055 -1.265,0.059c-0.691,0.006 -1.305,-0.123 -1.708,-0.526c-0.404,-0.404 -0.532,-1.017 -0.526,-1.708c0.003,-0.41 0.048,-0.849 0.059,-1.265c0.009,-0.337 0.002,-0.656 -0.105,-0.914c-0.102,-0.245 -0.32,-0.466 -0.562,-0.691c-0.302,-0.282 -0.646,-0.56 -0.941,-0.85c-0.493,-0.486 -0.84,-1.019 -0.84,-1.61c0,-0.591 0.347,-1.124 0.84,-1.61c0.295,-0.29 0.639,-0.568 0.941,-0.85c0.242,-0.225 0.46,-0.446 0.562,-0.691c0.107,-0.258 0.114,-0.577 0.105,-0.914c-0.011,-0.416 -0.056,-0.855 -0.059,-1.265c-0.006,-0.691 0.122,-1.304 0.526,-1.708c0.403,-0.403 1.017,-0.532 1.708,-0.526c0.41,0.004 0.849,0.048 1.265,0.059c0.336,0.009 0.656,0.002 0.913,-0.105c0.245,-0.102 0.467,-0.32 0.692,-0.562c0.282,-0.303 0.56,-0.647 0.85,-0.941c0.486,-0.494 1.019,-0.84 1.61,-0.84c0.591,0 1.124,0.346 1.61,0.84c0.29,0.294 0.568,0.638 0.85,0.941c0.225,0.242 0.446,0.46 0.692,0.562c0.257,0.107 0.577,0.114 0.914,0.105c0.415,-0.011 0.854,-0.055 1.264,-0.059c0.691,-0.006 1.304,0.123 1.708,0.526c0.403,0.404 0.532,1.017 0.526,1.708c-0.003,0.41 -0.048,0.849 -0.059,1.265c-0.009,0.337 -0.002,0.656 0.105,0.913c0.102,0.246 0.32,0.467 0.562,0.692c0.303,0.282 0.647,0.56 0.942,0.85c0.493,0.486 0.839,1.019 0.839,1.61Zm-1,0c0,-0.188 -0.088,-0.355 -0.206,-0.518c-0.164,-0.226 -0.388,-0.437 -0.622,-0.646c-0.583,-0.521 -1.205,-1.04 -1.439,-1.604c-0.242,-0.585 -0.177,-1.399 -0.136,-2.178c0.017,-0.315 0.027,-0.622 -0.015,-0.895c-0.029,-0.191 -0.08,-0.365 -0.204,-0.489c-0.125,-0.125 -0.299,-0.176 -0.49,-0.205c-0.273,-0.042 -0.58,-0.032 -0.895,-0.015c-0.779,0.041 -1.593,0.106 -2.177,-0.136c-0.565,-0.234 -1.084,-0.855 -1.605,-1.439c-0.209,-0.234 -0.42,-0.458 -0.646,-0.622c-0.163,-0.118 -0.33,-0.206 -0.518,-0.206c-0.187,0 -0.355,0.088 -0.518,0.206c-0.226,0.164 -0.437,0.388 -0.646,0.622c-0.521,0.584 -1.04,1.205 -1.605,1.439c-0.584,0.242 -1.398,0.177 -2.177,0.136c-0.315,-0.017 -0.622,-0.027 -0.895,0.015c-0.192,0.029 -0.365,0.08 -0.49,0.205c-0.125,0.124 -0.175,0.298 -0.204,0.489c-0.042,0.273 -0.032,0.58 -0.016,0.895c0.042,0.779 0.107,1.593 -0.135,2.177c-0.234,0.565 -0.855,1.084 -1.439,1.605c-0.234,0.209 -0.458,0.42 -0.622,0.646c-0.118,0.163 -0.206,0.33 -0.206,0.518c0,0.188 0.088,0.355 0.206,0.518c0.164,0.226 0.388,0.437 0.622,0.646c0.584,0.521 1.205,1.04 1.439,1.605c0.242,0.584 0.177,1.398 0.135,2.177c-0.016,0.315 -0.026,0.622 0.016,0.895c0.029,0.191 0.079,0.365 0.204,0.489c0.125,0.125 0.298,0.176 0.49,0.205c0.273,0.042 0.58,0.032 0.895,0.015c0.779,-0.041 1.593,-0.106 2.177,0.136c0.565,0.234 1.084,0.855 1.605,1.439c0.209,0.234 0.42,0.458 0.646,0.622c0.163,0.118 0.331,0.206 0.518,0.206c0.188,-0 0.355,-0.088 0.518,-0.206c0.226,-0.164 0.437,-0.388 0.646,-0.622c0.521,-0.584 1.04,-1.205 1.605,-1.439c0.584,-0.242 1.398,-0.177 2.177,-0.136c0.315,0.017 0.622,0.027 0.895,-0.015c0.191,-0.029 0.365,-0.08 0.49,-0.205c0.124,-0.124 0.175,-0.298 0.204,-0.489c0.042,-0.273 0.032,-0.58 0.015,-0.895c-0.041,-0.779 -0.106,-1.593 0.136,-2.178c0.234,-0.564 0.856,-1.083 1.439,-1.604c0.234,-0.209 0.458,-0.42 0.622,-0.646c0.118,-0.163 0.206,-0.33 0.206,-0.518Zm-10.531,-1.762c-0.396,0.396 -1.039,0.396 -1.435,-0c-0.396,-0.396 -0.396,-1.04 -0,-1.436c0.396,-0.396 1.039,-0.396 1.435,0c0.396,0.396 0.396,1.04 0,1.436Zm4.471,-1.838c0.195,-0.195 0.512,-0.195 0.707,0c0.195,0.195 0.195,0.512 -0,0.707l-6.493,6.493c-0.195,0.195 -0.512,0.195 -0.707,0c-0.195,-0.195 -0.195,-0.512 -0,-0.707l6.493,-6.493Zm-1.315,5.363c0.396,-0.396 1.039,-0.396 1.435,0c0.396,0.396 0.396,1.04 0,1.436c-0.396,0.396 -1.039,0.396 -1.435,-0c-0.397,-0.396 -0.397,-1.04 -0,-1.436Z"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "Giá Thấp - Cao",
    criteria: "price_asc",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        className="size-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.5 17.25a.75.75 0 0 1-1.5 0V7.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L18.5 7.56v9.69Zm-15.75.25a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5h-9.5Zm0-5a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 0 1.5h-5.5Zm0-5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5h-3.5Z"></path>
      </svg>
    ),
  },
  {
    name: "Giá Cao - Thấp",
    criteria: "price_desc",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        className="size-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.5 16.44V6.75a.75.75 0 0 0-1.5 0v9.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22ZM2 7.25a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 2 7.25Zm0 5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z"></path>
      </svg>
    ),
  },
];

export default function Home() {
  const [products, setProducts] = React.useState([]);
  const isDialogOpen = false;
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div id="layout-provider" style={{ paddingTop: "30px" }}>
      {/* <DialogOverlay /> */}
      {/* <LocationDialog /> */}
      {/* <Notification /> */}
      <Header />
      <main className="mx-auto max-w-screen-xl">
        <BreadCrumb />
        <div className="animate-fade-in px-2.5 sm:px-0">
          <div className="mb-3 w-full">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <ImageSlider />
            </div>
          </div>
          <h1 className="mt-3 mb-0 text-base font-bold text-neutral-800 sm:mb-1 sm:text-xl">
            Đồ gia dụng
          </h1>
          <Brand />
          <CategoryTab />
          <div className="my-3 w-full"></div>
          <div className="my-3 w-full">
            <div className="mb-0 md:mb-10">
              <h2 className="sub-cate-title h-0 overflow-hidden">
                Thiết bị gia đình
              </h2>
              <div className="border-t border-neutral-200 pt-2 md:border-none">
                <Banner />
                <Category categories={homeAppliances} name="homeAppliances" />
                {/* <Category categories={kitchenAppliances} />
                <Category categories={healthAndBeauty} /> */}
                <div className="mb-3 flex items-center justify-between gap-4 overflow-x-auto pb-3">
                  <div className="hidden text-xl font-bold whitespace-nowrap text-neutral-800 sm:inline-block">
                    Sắp xếp theo
                  </div>
                  <div className="flex items-center gap-4">
                    {sortCriteria.map((criteria) => (
                      <Sort
                        key={criteria.criteria}
                        name={criteria.name}
                        criteria={criteria.criteria}
                        icon={criteria.icon}
                      />
                    ))}
                  </div>
                </div>
                <ItemList products={products} />
              </div>
            </div>
          </div>
          <div className="relative my-3 flex flex-col-reverse gap-6 md:flex-row">
            <Description />
            <Forum />
          </div>
          <Comments />
        </div>
      </main>
      <Footer />
      <button
        data-slot="button"
        className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 fixed right-2.5 bottom-23 z-10 flex-col-reverse gap-1 rounded-lg border-black bg-black p-0.5 text-xs font-normal whitespace-nowrap opacity-100 transition-all duration-300 hover:border-black/85 hover:bg-black/85 sm:w-29 sm:flex-row sm:rounded-xl sm:px-4 sm:py-2 sm:text-base sm:font-semibold xl:right-[calc(50%_-_600px)] xl:bottom-20"
      >
        Lên đầu
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4.5 sm:size-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="17 11 12 6 7 11"></polyline>
          <polyline points="17 18 12 13 7 18"></polyline>
        </svg>
      </button>
      <button
        data-slot="popover-trigger"
        className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 fixed right-2.5 bottom-3 z-10 flex-col-reverse gap-1 rounded-lg p-0.5 text-xs font-normal transition-all duration-300 sm:bottom-11 sm:w-29 sm:flex-row sm:rounded-xl sm:px-4 sm:py-2 sm:text-base sm:font-semibold xl:right-[calc(50%_-_600px)] xl:bottom-8"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-«R19d6jb»"
        data-state="closed"
      >
        Liên hệ
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="size-4.5 sm:size-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M19 14v4h-2v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9z"></path>
        </svg>
      </button>
    </div>
  );
}
