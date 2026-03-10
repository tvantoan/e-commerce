import Link from "next/link";
import Image from "next/image";
export default function Notification() {
  return (
    <div
      data-radix-popper-content-wrapper=""
      style={
        {
          position: "fixed",
          left: "0px",
          top: "0px",
          transform: "translate(1000px, 130.4px)",
          minWidth: "max-content",
          "--radix-popper-transform-origin": "302.5px -10px",
          zIndex: "10000",
          "--radix-popper-available-width": "1528px",
          "--radix-popper-available-height": "568.4000244140625px",
          "--radix-popper-anchor-width": "115px",
          "--radix-popper-anchor-height": "40px",
        } as React.CSSProperties
      }
    >
      <div
        data-side="bottom"
        data-align="end"
        data-state="open"
        role="dialog"
        id="radix-«R1d16p6jb»"
        data-slot="popover-content"
        className="cpsui:bg-popover cpsui:text-popover-foreground cpsui:data-[state=open]:animate-in cpsui:data-[state=closed]:animate-out cpsui:data-[state=closed]:fade-out-0 cpsui:data-[state=open]:fade-in-0 cpsui:data-[state=closed]:zoom-out-95 cpsui:data-[state=open]:zoom-in-95 cpsui:data-[side=bottom]:slide-in-from-top-2 cpsui:data-[side=left]:slide-in-from-right-2 cpsui:data-[side=right]:slide-in-from-left-2 cpsui:data-[side=top]:slide-in-from-bottom-2 cpsui:z-10000 cpsui:origin-(--radix-popover-content-transform-origin) cpsui:outline-hidden h-200 max-h-[70vh] w-[360px] overflow-hidden rounded-xl shadow-lg"
        tabIndex={-1}
        style={
          {
            "--radix-popover-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-popover-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-popover-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-popover-trigger-height":
              "var(--radix-popper-anchor-height)",
          } as React.CSSProperties
        }
      >
        <div className="flex size-full flex-col bg-white">
          <Link
            href="https://smember.com.vn/?company_id=cellphones&amp;_gl=1*ul1wjf*_gcl_aw*R0NMLjE3Njk1OTExNDQuQ2owS0NRaUFoT2ZMQmhDQ0FSSXNBSlBpb3BQVU5SWmJ4VmprRFpKcjZTdGo2QVVzMk9nS3lPaWR1QjdPNHlHU1huMGtUWGJhM21ZaGVUQWFBbEtaRUFMd193Y0I.*_gcl_au*MTYyNDkxOTY5MS4xNzY3NTQ3Nzcz*_ga*ODA1NjkzMjUxLjE3NDU0Nzk3MzM.*_ga_QLK8WFHNK9*czE3NzI1NTg3MTQkbzkxJGcxJHQxNzcyNTYwMTg5JGoyJGwwJGg4NTIyMDM5NjQ."
            className="text-primary-500 border-primary-500 text-md m-2.5 flex items-center gap-2 rounded-lg border px-2 py-1.5 transition-transform duration-200 hover:scale-95"
          >
            <Image
              alt="Smember"
              loading="lazy"
              width={50}
              height={50}
              decoding="async"
              data-nimg="1"
              className="size-9"
              src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/smember230625.png"
              style={{ color: "transparent" }}
            />
            Truy cập Smember
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="ml-auto size-5"
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
          <div className="flex h-[calc(80vh_-_120px)] flex-col md:h-[calc(70vh_-_72px)]">
            <div className="flex justify-between border-b border-neutral-300 p-2.5">
              <p className="text-md font-semibold">Thông báo</p>
              <div className="flex items-center gap-0.5 text-xs text-green-600">
                Bạn đã đọc tất cả thông báo{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  className="size-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"></path>
                  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"></path>
                </svg>
              </div>
            </div>
            <div className="scrollbar-none flex flex-nowrap gap-2 overflow-x-auto border-b border-neutral-300 p-2.5">
              <button
                data-slot="button"
                className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-small cpsui:px-1x-small cpsui:py-2x-small cpsui:min-h-[24px] cpsui:rounded-full cpsui:border-primary-500 cpsui:text-primary-500 cpsui:bg-pure-white cpsui:hover:bg-primary-50 cpsui:disabled:border-black-300 cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white whitespace-nowrap"
              >
                Tất cả
              </button>
              <button
                data-slot="button"
                className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-small cpsui:px-1x-small cpsui:py-2x-small cpsui:min-h-[24px] cpsui:rounded-full cpsui:border-neutral-300 cpsui:text-neutral-800 cpsui:bg-pure-white cpsui:hover:border-neutral-400 cpsui:hover:bg-neutral-50 cpsui:disabled:border-black-300 cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white whitespace-nowrap"
              >
                Đơn hàng
              </button>
            </div>
            <div className="scrollbar-thin scrollbar-thumb-neutral-400 scrollbar-track-neutral-50/0 flex-1 overflow-y-auto">
              <ul className="flex flex-col gap-0.25">
                <li className="group flex gap-2.5 bg-white p-2.5 text-sm select-none">
                  <div className="relative px-2">
                    <svg
                      width={35}
                      height={35}
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-8"
                    >
                      <path
                        d="M9.22308 32.1545C7.00758 32.1545 5.20508 30.352 5.20508 28.1365C5.20508 25.921 7.00758 24.1185 9.22308 24.1185C11.4386 24.1185 13.2411 25.921 13.2411 28.1365C13.2411 30.352 11.4386 32.1545 9.22308 32.1545ZM9.22308 26.215C8.16258 26.215 7.30158 27.076 7.30158 28.1365C7.30158 29.197 8.16258 30.058 9.22308 30.058C10.2836 30.058 11.1446 29.197 11.1446 28.1365C11.1446 27.076 10.2836 26.215 9.22308 26.215Z"
                        fill="#1D1D1B"
                      ></path>
                      <path
                        d="M27.4194 32.1545C25.2039 32.1545 23.4014 30.352 23.4014 28.1365C23.4014 25.921 25.2039 24.1185 27.4194 24.1185C29.6349 24.1185 31.4374 25.921 31.4374 28.1365C31.4374 30.352 29.6349 32.1545 27.4194 32.1545ZM27.4194 26.215C26.3589 26.215 25.4979 27.076 25.4979 28.1365C25.4979 29.197 26.3589 30.058 27.4194 30.058C28.4799 30.058 29.3409 29.197 29.3409 28.1365C29.3409 27.076 28.4799 26.215 27.4194 26.215Z"
                        fill="#1D1D1B"
                      ></path>
                      <path
                        d="M24.4475 29.1831H12.194C11.6165 29.1831 11.1475 28.7141 11.1475 28.1366C11.1475 27.5591 11.6165 27.0901 12.194 27.0901H24.4475C25.025 27.0901 25.494 27.5591 25.494 28.1366C25.494 28.7141 25.025 29.1831 24.4475 29.1831Z"
                        fill="#1D1D1B"
                      ></path>
                      <path
                        d="M6.25493 29.183H1.79943C1.22193 29.183 0.75293 28.714 0.75293 28.1365V7.34655C0.75293 6.76905 1.22193 6.30005 1.79943 6.30005H21.4799C22.0574 6.30005 22.5264 6.76905 22.5264 7.34655V20.7095C22.5264 21.287 22.0574 21.756 21.4799 21.756C20.9024 21.756 20.4334 21.287 20.4334 20.7095V8.39655H2.84593V27.09H6.25493C6.83243 27.09 7.30143 27.559 7.30143 28.1365C7.30143 28.714 6.83243 29.183 6.25493 29.183Z"
                        fill="#1D1D1B"
                      ></path>
                      <path
                        d="M33.3587 29.183H30.3872C29.8097 29.183 29.3407 28.714 29.3407 28.1365C29.3407 27.559 29.8097 27.09 30.3872 27.09H32.3087V19.229C32.3087 14.8925 28.7807 11.368 24.4477 11.368H21.4762C20.8987 11.368 20.4297 10.899 20.4297 10.3215C20.4297 9.74402 20.8987 9.27502 21.4762 9.27502H24.4477C29.9392 9.27502 34.4052 13.741 34.4052 19.2325V28.1435C34.4052 28.721 33.9362 29.19 33.3587 29.19V29.183Z"
                        fill="#1D1D1B"
                      ></path>
                      <path
                        d="M10.5734 21.7245C10.1744 21.7245 9.77536 21.574 9.47436 21.2695L4.49386 16.289C3.88486 15.68 3.88486 14.6965 4.49386 14.0875C5.10286 13.4785 6.08636 13.4785 6.69536 14.0875L10.5769 17.969L16.5794 11.599C17.1884 10.99 18.1719 10.99 18.7809 11.599C19.3899 12.208 19.3899 13.1915 18.7809 13.8005L11.6794 21.273C11.3749 21.5775 10.9759 21.728 10.5804 21.728L10.5734 21.7245Z"
                        fill="#009500"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.25">
                    <p className="text-[13px] text-neutral-600">
                      Đơn hàng <strong>00056S2502000262</strong> vừa được giao
                      thành công. Cảm ơn bạn đã đặt hàng tại CellphoneS.
                    </p>
                    <div className="flex justify-between">
                      <span className="text-[10px] text-neutral-300">
                        1 năm trước
                      </span>
                      <button className="cursor-pointer text-[13px] text-blue-600 hover:text-blue-700">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="my-3 text-center text-xs text-neutral-400 italic">
                Không còn thông báo nào nữa ạ!
              </div>
            </div>
            <button className="h-12.5 w-full cursor-pointer border-t border-neutral-300 font-semibold text-blue-500">
              Đóng
            </button>
          </div>
        </div>
        <span
          style={{
            position: "absolute",
            top: "0px",
            transformOrigin: "center 0px",
            transform: "rotate(180deg)",
            left: "292.5px",
          }}
        >
          <svg
            className="fill-white"
            width={20}
            height={10}
            viewBox="0 0 30 10"
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            <polygon points="0,0 30,0 15,10"></polygon>
          </svg>
        </span>
      </div>
    </div>
  );
}
