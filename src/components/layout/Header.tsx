import Image from "next/image";
import Link from "next/link";

const menuItems: { name: string; href: string; icon: React.ReactNode }[] = [
  {
    name: "Cửa hàng gần bạn",
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
        viewBox="0 0 25 25"
        className="size-4"
      >
        <path
          stroke="white"
          stroke-linecap="round"
          stroke-width="1.5"
          d="M8.32 22.66h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.653 7.857c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878c0 2.203 1.87 3.989 4.18 3.989Z"
        ></path>
        <path
          fill="white"
          d="M8.9 12.916V9.66h7v2.816l-.987-1.222h-4.419V12l2.004 2.175-.128.183-3.47-1.441Z"
        ></path>
        <path
          fill="white"
          d="M8.9 18.778v-2.922l1.097 1.327h4.309V15.83l-1.95-2.236.135-.179 3.409 1.61v3.754h-7Z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Tra cứu đơn hàng",
    href: "/member",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        fill="none"
        className="size-4"
      >
        <path
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9.833 2v2.667a.667.667 0 0 0 .667.666h2.667"
        ></path>
        <path
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M13.167 8v4.667a1.187 1.187 0 0 1-2.067.933 1.1 1.1 0 0 0-1.733 0 1.1 1.1 0 0 1-1.734 0 1.1 1.1 0 0 0-1.733 0 1.187 1.187 0 0 1-2.067-.933V3.333A1.333 1.333 0 0 1 5.167 2h4.666l3.334 3.333v2.834"
        ></path>
      </svg>
    ),
  },
  {
    name: "1800 2097",
    href: "#",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 256 256"
        className="size-4"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M144.27,45.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,208,112a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,144.27,45.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,176,120a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,168,232C88.6,232,24,167.4,24,88A56.26,56.26,0,0,1,72.92,32.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,109.39,104c-.18.27-.37.52-.57.77L88,129.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,223.88,183.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L96,95.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,40,88,128.14,128.14,0,0,0,168,216,40.21,40.21,0,0,0,208,181.07Z"></path>
      </svg>
    ),
  },
];

export default function Header() {
  return (
    <header
      id="header"
      className="from-primary-300 to-primary-500 fixed top-0 right-0 left-0 z-1000 flex max-w-screen flex-col items-center justify-center bg-linear-to-b text-white"
    >
      <div className="mx-auto mt-2 flex h-4.5 w-full max-w-screen-xl gap-6 overflow-hidden px-2 text-xs opacity-100 transition-all duration-200 ease-in-out xl:px-1">
        <div className="scrollbar-none flex overflow-x-auto focus-visible:outline-none">
          <div className="animate-scroll-left-infinite flex gap-6">
            <div className="before:bg-primary-200 relative flex items-center gap-1 whitespace-nowrap text-white before:absolute before:top-1/2 before:-left-3 before:size-[5px] before:-translate-y-1/2 before:rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.5 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
                ></path>
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m8.5 10 2.267 3.927 1.065-2.156 2.399.155L11.964 8M5.035 8l-2.267 3.927 2.399-.156 1.065 2.155L8.499 10"
                ></path>
              </svg>
              Sản phẩm<strong>Chính hãng - Xuất VAT</strong>đầy đủ
            </div>
            <div className="before:bg-primary-200 relative flex items-center gap-1 whitespace-nowrap text-white before:absolute before:top-1/2 before:-left-3 before:size-[5px] before:-translate-y-1/2 before:rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 17 16"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3.833 11.333a1.333 1.333 0 1 0 2.667 0 1.333 1.333 0 0 0-2.667 0ZM10.5 11.333a1.333 1.333 0 1 0 2.667 0 1.333 1.333 0 0 0-2.667 0Z"
                ></path>
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3.833 11.333H2.5V8.667m-.667-5.334h7.334v8m-2.667 0h4m2.667 0H14.5v-4m0 0H9.167m5.333 0L12.5 4H9.167M2.5 6h2.667"
                ></path>
              </svg>
              <strong>Giao nhanh - Miễn phí</strong>cho đơn 300k
            </div>
            <div className="before:bg-primary-200 relative flex items-center gap-1 whitespace-nowrap text-white before:absolute before:top-1/2 before:-left-3 before:size-[5px] before:-translate-y-1/2 before:rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3.167 8V6a2 2 0 0 1 2-2h8.666m0 0-2-2m2 2-2 2M13.833 8v2a2 2 0 0 1-2 2H3.167m0 0 2 2m-2-2 2-2"
                ></path>
              </svg>
              <strong>Thu cũ</strong>giá ngon - <strong>Lên đời</strong>tiết
              kiệm
            </div>
            <div className="before:bg-primary-200 relative flex items-center gap-1 whitespace-nowrap text-white before:absolute before:top-1/2 before:-left-3 before:size-[5px] before:-translate-y-1/2 before:rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.5 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
                ></path>
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m8.5 10 2.267 3.927 1.065-2.156 2.399.155L11.964 8M5.035 8l-2.267 3.927 2.399-.156 1.065 2.155L8.499 10"
                ></path>
              </svg>
              Sản phẩm<strong>Chính hãng - Xuất VAT</strong>đầy đủ
            </div>
            <div className="before:bg-primary-200 relative flex items-center gap-1 whitespace-nowrap text-white before:absolute before:top-1/2 before:-left-3 before:size-[5px] before:-translate-y-1/2 before:rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 17 16"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3.833 11.333a1.333 1.333 0 1 0 2.667 0 1.333 1.333 0 0 0-2.667 0ZM10.5 11.333a1.333 1.333 0 1 0 2.667 0 1.333 1.333 0 0 0-2.667 0Z"
                ></path>
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3.833 11.333H2.5V8.667m-.667-5.334h7.334v8m-2.667 0h4m2.667 0H14.5v-4m0 0H9.167m5.333 0L12.5 4H9.167M2.5 6h2.667"
                ></path>
              </svg>
              <strong>Giao nhanh - Miễn phí</strong>cho đơn 300k
            </div>
            <div className="before:bg-primary-200 relative flex items-center gap-1 whitespace-nowrap text-white before:absolute before:top-1/2 before:-left-3 before:size-[5px] before:-translate-y-1/2 before:rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3.167 8V6a2 2 0 0 1 2-2h8.666m0 0-2-2m2 2-2 2M13.833 8v2a2 2 0 0 1-2 2H3.167m0 0 2 2m-2-2 2-2"
                ></path>
              </svg>
              <strong>Thu cũ</strong>giá ngon - <strong>Lên đời</strong>tiết
              kiệm
            </div>
          </div>
        </div>
        <div className="hidden items-center gap-7.5 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              className="before:bg-primary-200 relative flex cursor-pointer items-center gap-1 whitespace-nowrap transition-all duration-300 before:absolute before:top-1/2 before:-left-[15px] before:h-3 before:w-0.5 before:-translate-y-1/2 hover:scale-95"
              href={item.href}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-screen-xl items-center gap-3 px-2 py-4 xl:px-1">
        <Link
          title="CellphoneS"
          className="flex h-10 items-center transition-all duration-300 md:hover:scale-95"
          href="/"
        >
          <div className="flex w-0 items-center overflow-hidden transition-all duration-200 lg:w-[169px]">
            <span className="cps-image-cdn relative inline-block">
              <Image
                alt="CellphoneS Logo"
                loading="lazy"
                width={530}
                height={95}
                decoding="async"
                data-nimg="1"
                className="object-contain opacity-100 transition-opacity duration-500"
                style={{ color: "transparent" }}
                src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Web/Logo/Logo_CPS.png"
              />
            </span>
          </div>
        </Link>
        <button
          data-slot="button"
          className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 bg-primary-300 hover:bg-primary-500 hidden border-none md:flex"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.7041 4H10.7041V10H4.7041V4Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M14.7041 4H20.7041V10H14.7041V4Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M4.7041 14H10.7041V20H4.7041V14Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M14.7041 17C14.7041 17.7956 15.0202 18.5587 15.5828 19.1213C16.1454 19.6839 16.9085 20 17.7041 20C18.4998 20 19.2628 19.6839 19.8254 19.1213C20.388 18.5587 20.7041 17.7956 20.7041 17C20.7041 16.2044 20.388 15.4413 19.8254 14.8787C19.2628 14.3161 18.4998 14 17.7041 14C16.9085 14 16.1454 14.3161 15.5828 14.8787C15.0202 15.4413 14.7041 16.2044 14.7041 17Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          Danh mục
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="size-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={48}
              d="m112 184 144 144 144-144"
            ></path>
          </svg>
        </button>

        <button
          data-slot="button"
          className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 bg-primary-300 hover:bg-primary-500 hidden h-10 border-none md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            fill="none"
            className="size-6"
          >
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M7.5 9.528a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"
            ></path>
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10.85 18.033a1.666 1.666 0 0 1-2.027-.255l-3.537-3.536a6.667 6.667 0 1 1 11.34-5.462M17.5 12.861h-2.083a1.25 1.25 0 0 0 0 2.5h.833a1.25 1.25 0 0 1 0 2.5h-2.083M15.833 17.861v.834m0-6.667v.833"
            ></path>
          </svg>
          <span>Hồ Chí Minh</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            className="size-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="m112 184 144 144 144-144"
            ></path>
          </svg>
        </button>
        <div className="relative h-fit flex-1">
          <form>
            <div className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small cpsui:peer z-10 w-full overflow-hidden rounded-lg text-neutral-600">
              <div className="cpsui:p-1x-small cpsui:cursor-text cpsui:flex cpsui:items-center cpsui:gap-1x-small cpsui:min-w-0 cpsui:border cpsui:transition-colors cpsui:data-[disabled=true]:bg-neutral-100 cpsui:data-[disabled=true]:cursor-not-allowed cpsui:border-neutral-300 cpsui:focus-within:border-neutral-600 cpsui:data-[disabled=true]:border-neutral-200 cpsui:text-small cpsui:min-h-[40px] cpsui:rounded-small bg-pure-white text-medium h-[40px] focus-within:border-none focus-within:shadow-none focus-within:ring-0">
                <div className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:aspect-square">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="text-pure-black"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
                    ></path>
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M338.29 338.29 448 448"
                    ></path>
                  </svg>
                </div>
                <input
                  data-slot="input"
                  className="cpsui:w-full cpsui:bg-transparent cpsui:border-none cpsui:outline-none cpsui:shadow-none cpsui:ring-0 cpsui:focus:outline-none cpsui:focus:border-none cpsui:focus:ring-0 cpsui:focus-visible:outline-none cpsui:focus-visible:border-none cpsui:focus-visible:ring-0 cpsui:placeholder:text-neutral-300 cpsui:placeholder:select-none cpsui:disabled:opacity-80 cpsui:disabled:cursor-not-allowed cpsui:disabled:text-neutral-500 cpsui:disabled:placeholder:text-neutral-400 cpsui:overflow-hidden cpsui:text-ellipsis cpsui:whitespace-nowrap"
                  placeholder="Bạn muốn mua gì hôm nay?"
                  defaultValue=""
                />
              </div>
            </div>
          </form>
        </div>
        <span
          data-slot="button"
          className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 button__cart hover:bg-primary-500 hidden border-none bg-transparent md:flex"
        >
          <span className="hidden lg:inline-block">Giỏ hàng</span>
          <span className="relative">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="size-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={176}
                cy={416}
                r={16}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
              ></circle>
              <circle
                cx={400}
                cy={416}
                r={16}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
              ></circle>
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M48 80h64l48 272h256"
              ></path>
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
              ></path>
            </svg>
            <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full border border-white bg-orange-500 px-1 py-0.25 text-[10px] leading-none text-white">
              1
            </span>
          </span>
        </span>
        <button
          data-slot="popover-trigger"
          className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 bg-primary-300 hover:bg-primary-500 disabled:bg-primary-300 disabled:hover:bg-primary-300 hidden min-w-[115px] border-none disabled:text-neutral-100 md:flex"
          translate="no"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-«Rmgjd6jb»"
          data-state="closed"
        >
          Toan
          <span className="relative">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 496 512"
              className="size-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path>
            </svg>
          </span>
        </button>
        <button
          data-slot="button"
          className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 bg-primary-300 hover:bg-primary-500 flex h-10 border-none px-2 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={21}
            fill="none"
            className="size-5"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M7.5 9.528a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"
            ></path>
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.85 18.033a1.666 1.666 0 0 1-2.027-.255l-3.537-3.536a6.667 6.667 0 1 1 11.34-5.462M17.5 12.861h-2.083a1.25 1.25 0 0 0 0 2.5h.833a1.25 1.25 0 0 1 0 2.5h-2.083M15.833 17.861v.834m0-6.667v.833"
            ></path>
          </svg>
          <div className="flex flex-col items-start">
            <span className="text-[10px]">Xem giá tại</span>
            <span className="text-xs">Hà Nội</span>
          </div>
        </button>
        <Link className="relative flex px-1 md:hidden" href="/cart">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="size-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={176}
              cy={416}
              r={16}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
            ></circle>
            <circle
              cx={400}
              cy={416}
              r={16}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
            ></circle>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M48 80h64l48 272h256"
            ></path>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
            ></path>
          </svg>
          <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full bg-orange-500 px-1 py-0.25 text-[10px] leading-none text-white">
            1
          </span>
        </Link>
      </div>
      {/* <div id="bottom-header" className="w-full empty:hidden">
        <nav className="flex h-12.5 w-full items-center justify-between bg-white shadow-md">
          <ul className="scrollbar-none animate-fade-in-fast mx-auto flex w-full max-w-screen-xl justify-around overflow-x-auto px-2 text-black md:px-0">
            <li
              data-slot="button"
              className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-full cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 px-4 py-1.5 text-base font-bold whitespace-nowrap select-none sm:text-lg"
            >
              Thiết bị gia đình
            </li>
            <li
              data-slot="button"
              className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-full cpsui:border-pure-white cpsui:text-neutral-800 cpsui:bg-pure-white cpsui:hover:border-neutral-50 cpsui:hover:bg-neutral-50 cpsui:disabled:border-pure-white cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white px-4 py-1.5 text-base font-bold whitespace-nowrap select-none sm:text-lg"
            >
              Gia dụng nhà bếp
            </li>
            <li
              data-slot="button"
              className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-full cpsui:border-pure-white cpsui:text-neutral-800 cpsui:bg-pure-white cpsui:hover:border-neutral-50 cpsui:hover:bg-neutral-50 cpsui:disabled:border-pure-white cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white px-4 py-1.5 text-base font-bold whitespace-nowrap select-none sm:text-lg"
            >
              Sức khỏe - Làm đẹp
            </li>
          </ul>
        </nav>
      </div> */}
    </header>
  );
}
