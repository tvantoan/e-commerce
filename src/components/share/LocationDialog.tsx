export default function LocationDialog() {
  return (
    <div
      role="dialog"
      id="radix-«R36p6jb»"
      aria-describedby="radix-«R36p6jbH2»"
      aria-labelledby="radix-«R36p6jbH1»"
      data-state="open"
      data-slot="dialog-content"
      className="cpsui:p-medium cpsui:bg-background cpsui:data-[state=open]:animate-in cpsui:data-[state=closed]:animate-out cpsui:data-[state=closed]:fade-out-0 cpsui:data-[state=open]:fade-in-0 cpsui:data-[state=closed]:zoom-out-95 cpsui:data-[state=open]:zoom-in-95 cpsui:fixed cpsui:top-[50%] cpsui:left-[50%] cpsui:z-10000 cpsui:flex cpsui:flex-col cpsui:w-full cpsui:max-w-[calc(100%-2rem)] cpsui:translate-x-[-50%] cpsui:translate-y-[-50%] cpsui:rounded-lg cpsui:shadow-lg cpsui:duration-200 cpsui:max-h-[calc(100vh_-_64px)] h-[80vh] max-h-[500px] w-9/10 max-w-[400px] rounded-xl px-0"
      tabIndex={-1}
      style={{ pointerEvents: "auto" }}
    >
      <div
        data-slot="dialog-header"
        className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small"
      >
        <h2
          id="radix-«R36p6jbH1»"
          data-slot="dialog-title"
          className="cpsui:text-medium cpsui:font-semibold hidden"
        >
          Thay đổi tỉnh thành
        </h2>
        <p
          id="radix-«R36p6jbH2»"
          data-slot="dialog-description"
          className="cpsui:font-regular cpsui:text-small cpsui:empty:hidden"
        ></p>
      </div>
      <div className="h-full pt-14">
        <div className="bg-primary-500 absolute top-0 right-0 left-0 z-10 flex h-16 items-center justify-between gap-2 rounded-t-xl p-2.5">
          <div className="relative flex-1">
            <input
              tabIndex={-1}
              className="w-full rounded-sm bg-white p-2 pl-9 outline-none placeholder:font-thin placeholder:text-neutral-300"
              placeholder="Nhập tên tỉnh thành"
              defaultValue=""
              name="search-province"
            />
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="absolute top-1/2 left-2 -translate-y-1/2 transform text-neutral-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </div>
          <button className="flex h-full cursor-pointer items-center gap-0.5 text-white">
            Đóng{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="mt-0.5 size-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
            </svg>
          </button>
        </div>
        <div className="scrollbar-thin scrollbar-thumb-neutral-400 scrollbar-track-neutral-50/0 h-full overflow-y-auto px-2.5">
          <p className="text-sm font-thin text-neutral-600">
            Vui lòng chọn tỉnh, thành phố để biết chính xác giá, khuyến mãi và
            tồn kho
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-0">
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Hồ Chí Minh</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Hà Nội</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="fill-primary-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>An Giang</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Bà Rịa - Vũng Tàu</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Bạc Liêu</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Bắc Giang</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Bắc Ninh</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Bến Tre</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Bình Dương</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Bình Định</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Bình Phước</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Bình Thuận</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Cà Mau</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Cần Thơ</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Đà Nẵng</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Đắk Lắk</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Đồng Nai</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Đồng Tháp</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Gia Lai</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Hà Nam</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Hà Tĩnh</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Hải Dương</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Hải Phòng</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Khánh Hòa</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Kiên Giang</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Lạng Sơn</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Lâm Đồng</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Long An</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Nam Định</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Nghệ An</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Ninh Bình</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Ninh Thuận</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Phú Thọ</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Quảng Bình</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Quảng Ngãi</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Quảng Ninh</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Sóc Trăng</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Tây Ninh</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Thái Bình</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Thái Nguyên</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Thanh Hóa</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Thừa Thiên - Huế</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Tiền Giang</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Trà Vinh</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Vĩnh Long</span>
            </button>
            <button className="hover:bg-primary-100/50 flex cursor-pointer items-center justify-between border-b border-neutral-100 p-2 text-left text-base font-thin text-neutral-700">
              <span>Vĩnh Phúc</span>
            </button>
          </div>
        </div>
      </div>
      <div
        data-slot="dialog-footer"
        className="cpsui:empty:hidden cpsui:flex cpsui:justify-end cpsui:gap-small"
      ></div>
      <div className="cpsui:absolute cpsui:top-[8px] cpsui:right-[8px] cpsui:cursor-pointer cpsui:w-[20px] cpsui:h-[20px] cpsui:flex cpsui:items-center cpsui:justify-center cpsui:rounded-full cpsui:hover:bg-neutral-100">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          height={16}
          width={16}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </div>
    </div>
  );
}
