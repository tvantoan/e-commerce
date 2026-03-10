export default function FQA() {
  return (
    <div>
      <p className="text-md mb-2.5 font-bold sm:text-xl">Câu hỏi thường gặp</p>
      <div className="space-y-2">
        <div className="cursor-pointer rounded-lg bg-gray-100 px-4 py-2 transition hover:bg-gray-300/50">
          <div className="flex w-full items-center justify-between rounded-lg py-2.5 text-left text-base font-semibold">
            Đồ gia dụng thông minh có giao hỏa tốc 2H không?
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="size-4 transition-transform duration-300"
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
          </div>
          <div
            className="overflow-hidden opacity-0 transition-all duration-300 ease-in-out"
            style={{ maxHeight: "0" }}
          >
            <div className="text-xs text-neutral-700">
              <div className="BlockFaqs_faqsAnswer__z8byi text-justify">
                <div>
                  Với khách hàng mua đồ gia dụng nội thành Hà Nội và Hồ Chí
                  Minh, khi mua hàng online sẽ được giao hành trong 2 giờ nhanh
                  chóng. Với các đơn hàng tỉnh và ngoại thành sẽ được CellphoneS
                  giao hàng trong vòng 4 ngày.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
