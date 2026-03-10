import Link from "next/link";
import Image from "next/image";
import { shortenedItems } from "@/mocks/shortenedItems";
type ShortenedItem = {
  id: number;
  name: string;
  image: string;
  salePrice: string;
  basePrice: string;
};
export default function ItemList({ products }: { products: ShortenedItem[] }) {
  console.log(products.length);

  return (
    <div className="py-2">
      <div className="swiper swiper-initialized swiper-horizontal swiper-grid slide-product-list">
        <div
          className="swiper-wrapper"
          style={{
            width: "2416px",
            cursor: "grab",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              className="swiper-slide swiper-slide-active !h-auto"
              style={{
                height: "calc(50% - 4px)",
                width: "233.6px",
                marginRight: "8px",
              }}
            >
              <div className="h-full p-1.5">
                <div className="product-item animate-fade-in shadow-bottom-50 relative flex h-full min-h-51 flex-col rounded-2xl bg-white">
                  <Link
                    className="group flex-1 p-2.5 pb-0"
                    target="_self"
                    href={`/${item.id}`}
                  >
                    <span className="cps-image-cdn relative inline-block aspect-square h-auto w-full scale-90 object-contain transition-transform duration-300 group-hover:scale-95">
                      <Image
                        alt={item.name}
                        loading="lazy"
                        width={300}
                        height={300}
                        decoding="async"
                        data-nimg="1"
                        className="aspect-square h-auto w-full scale-90 object-contain opacity-100 transition-opacity transition-transform duration-300 duration-500 group-hover:scale-95"
                        src={item.image}
                        style={{ color: "transparent" }}
                      />
                    </span>
                    <h3 className="mb-1 line-clamp-2 h-9 text-xs leading-normal font-bold text-neutral-900 sm:h-10.5 sm:text-base">
                      {item.name}
                    </h3>
                    <div className="bg-negative-100 text-negative-900 mb-1 w-fit rounded-sm px-1 py-0.5 text-[10px] empty:hidden md:px-2 md:py-1 md:text-xs"></div>
                    <div className="mb-1 flex flex-wrap items-center gap-1.5">
                      <p className="sm:text-medium text-primary-600 text-xs font-bold">
                        {item.salePrice}
                      </p>
                      <p className="text-[10px] text-gray-300 line-through sm:text-xs">
                        {item.basePrice}
                      </p>
                    </div>
                    <div
                      className="absolute -top-1.5 left-2.5 flex h-5.5 w-19.5 items-center justify-center text-[10px] font-medium text-white"
                      style={{
                        backgroundImage: `url(&quot;https://cdn2.cellphones.com.vn/x/media/wysiwyg/discount-badge-ui-2025.png&quot;)`,
                      }}
                    >
                      Giảm{" "}
                      <span className="ml-0.5 text-xs font-medium">
                        {/* {item.basePrice && item.salePrice
                          ? Math.round(
                              (1 -
                                parseInt(item.salePrice.replace(/\./g, "")) /
                                  parseInt(item.basePrice.replace(/\./g, ""))) *
                                100,
                            )
                          : 0} */}
                        30 %
                      </span>
                    </div>
                    <div
                      className="absolute top-0 -right-1.25 flex h-7.25 w-18.75 items-center justify-center overflow-hidden text-[10px] font-medium text-blue-500"
                      style={{
                        backgroundImage: `url(&quot;https://cdn2.cellphones.com.vn/x/media/wysiwyg/zero-ins-badge-ui-2025.png&quot;)`,
                      }}
                    >
                      <span className="mb-2 line-clamp-1 text-[10px] font-normal md:mb-1.5">
                        Trả góp <span className="text-xs font-medium">0%</span>
                      </span>
                    </div>
                    <div className="mb-1 flex items-center gap-1 rounded-sm bg-neutral-100 p-1 text-[10px] text-neutral-900 sm:text-xs">
                      <div className="line-clamp-2 has-[.promotion]:line-clamp-none">
                        <div className="promotion">
                          <p className="coupon-price">
                            Tặng Hút bụi lau nhà không dây Magic A-061 (hết quà
                            trừ thẳng 300K) và <b>1 km</b> khác
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="mt-auto flex items-center justify-between px-2.5 pt-1.5 pb-2.5 empty:hidden">
                    <button
                      data-slot="button"
                      className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-small cpsui:px-1x-small cpsui:py-2x-small cpsui:min-h-[24px] cpsui:rounded-small cpsui:border-pure-white cpsui:text-info-500 cpsui:bg-pure-white cpsui:hover:border-neutral-50 cpsui:hover:bg-neutral-50 cpsui:disabled:border-pure-white cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white group ml-auto flex h-8 items-center gap-1"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:animate-heartbeat size-5.5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <span className="hidden sm:inline-block">Yêu thích</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="swiper-button-prev shadow-bottom-400 absolute top-1/2 left-0 z-10 flex h-14 w-7 -translate-y-1/2 !cursor-default cursor-pointer items-center justify-center rounded-r-full border-neutral-100 bg-white/80 p-0 opacity-0 transition-all duration-150 after:hidden hover:bg-white/100 md:h-18 md:w-9">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="mr-1 size-6 text-neutral-800 md:mr-1.5 md:size-7.5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={48}
              d="M328 112 184 256l144 144"
            ></path>
          </svg>
        </button>
        <button className="swiper-button-next shadow-bottom-400 absolute top-1/2 right-0 z-10 flex h-14 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-l-full border-neutral-100 bg-white/80 p-0 transition-all duration-150 after:hidden hover:bg-white/100 md:h-18 md:w-9">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="ml-1 size-6 text-neutral-800 md:ml-1.5 md:size-7.5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={48}
              d="m184 112 144 144-144 144"
            ></path>
          </svg>
        </button>
        <div className="swiper-pagination mx-auto mt-4 flex justify-center gap-1 empty:hidden in-only:hidden"></div>
      </div>
      <Link
        data-slot="button"
        className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-medium cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[48px] cpsui:rounded-base cpsui:border-info-50 cpsui:text-info-500 cpsui:bg-info-50 cpsui:hover:border-info-200 cpsui:hover:bg-info-200 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 animate-fade-in mx-auto mt-3 mb-3 w-fit text-red-800 transition-all duration-300 sm:mt-6 sm:mb-0"
        href="/nha-thong-minh/may-hut-bui/robot-hut-bui.html"
      >
        Xem tất cả Robot hút bụi
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          className="size-5 md:size-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="m184 112 144 144-144 144"
          ></path>
        </svg>
      </Link>
    </div>
  );
}
