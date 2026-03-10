import Image from "next/image";

export default function Comments() {
  return (
    <div className="my-3">
      <div className="mt-large p-medium rounded-2xl bg-neutral-50">
        <h3 className="mb-2 text-xl font-semibold">Hỏi và đáp</h3>
        <div className="p-small tablet:p-1x-large bg-pure-white w-full rounded-2xl">
          <div className="gap-small flex w-full items-center justify-center">
            <Image
              alt="404 Not Found"
              loading="lazy"
              width={160}
              height={160}
              decoding="async"
              data-nimg="1"
              className="tablet:block tablet:max-w-[160px] hidden max-w-[80px]"
              style={{ color: "transparent" }}
              src="https://cdn2.cellphones.com.vn/insecure/rs:fill:320:0/q:100/plain/https://cellphones.com.vn/media/wysiwyg/ant-hello-2025.png"
            />
            <div className="flex-1">
              <div className="flex items-center">
                <Image
                  alt="404 Not Found"
                  loading="lazy"
                  width={160}
                  height={160}
                  decoding="async"
                  data-nimg="1"
                  className="tablet:hidden tablet:max-w-[160px] block max-w-[80px]"
                  style={{ color: "transparent" }}
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:320:0/q:100/plain/https://cellphones.com.vn/media/wysiwyg/ant-hello-2025.png"
                />
                <p className="tablet:text-xl font-semi-bold text-lg text-neutral-900">
                  Hãy đặt câu hỏi cho chúng tôi
                </p>
              </div>
              <p className="mt-2x-small tablet:text-medium text-base text-neutral-500">
                CellphoneS sẽ phản hồi trong vòng 1 giờ. Nếu Quý khách gửi câu
                hỏi sau 22h, chúng tôi sẽ trả lời vào sáng hôm sau.
                <br />
                Thông tin có thể thay đổi theo thời gian, vui lòng đặt câu hỏi
                để nhận được cập nhật mới nhất!
              </p>
              <div className="mt-1x-small tablet:mt-medium h-auto w-full">
                <div className="gap-1x-small reply-comment-0 flex w-full">
                  <textarea
                    rows={1}
                    className="p-1x-small text-medium min-h-[50px] flex-1 resize-none rounded-lg border border-neutral-300 outline-none placeholder:text-base focus:border-neutral-500"
                    placeholder="Viết câu hỏi của bạn tại đây"
                  ></textarea>
                  <button
                    data-slot="button"
                    className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 gap-2x-small flex items-center text-base"
                  >
                    Gửi câu hỏi
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="tablet:max-w-[24px] max-w-[20px]"
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="m53.12 199.94 400-151.39a8 8 0 0 1 10.33 10.33l-151.39 400a8 8 0 0 1-15-.34l-67.4-166.09a16 16 0 0 0-10.11-10.11L53.46 215a8 8 0 0 1-.34-15.06zM460 52 227 285"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-small tablet:p-1x-large rounded-1x-large bg-pure-white mt-small tablet:mt-medium w-full">
          <div className="py-medium tablet:py-large comment-item comment-item-1576302 relative border-b border-b-neutral-100 first:pt-0">
            <div className="w-full">
              <div className="tablet:gap-medium relative flex items-start justify-start gap-2.5">
                <div className="tablet:left-5 tablet:top-[45px] left-small w-small tablet:h-[calc(100%-56px)] absolute top-[30px] h-[calc(100%-40px)] rounded-bl-md border-b border-l border-b-neutral-300 border-l-neutral-300"></div>
                <div
                  className="tablet:h-4x-large tablet:w-4x-large text-small tablet:text-medium h-1x-large w-1x-large flex shrink-0 items-center justify-center rounded-full font-medium text-neutral-800"
                  style={{ background: "rgb(255, 209, 164)" }}
                >
                  H
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap">
                    <p
                      className="tablet:text-medium font-semi-bold inline-block text-base"
                      translate="no"
                    >
                      Hồ Phụng
                    </p>
                    <div className="ml-1x-small gap-2x-small inline-flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="text-neutral-400"
                        height={14}
                        width={14}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.5 7.25a.75.75 0 0 0-1.5 0v5.5c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744-1.302L12.5 12.315V7.25Z"></path>
                        <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path>
                      </svg>
                      <span className="text-small text-neutral-400">
                        1 năm trước
                      </span>
                    </div>
                  </div>
                  <div className="text-base text-neutral-700">
                    <div className="render-html">
                      Mua máy hút bụi dyson v12 detect slim total clean
                    </div>
                  </div>
                  <div className="mt-1 w-full">
                    <div className="gap-3x-small text-primary-500 text-small inline-flex cursor-pointer items-center select-none">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height={14}
                        width={14}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
                        <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
                      </svg>
                      Phản hồi
                    </div>
                  </div>
                  <div className="gap-2x-small text-small hover:text-info-500 mt-1 inline-flex cursor-pointer items-center text-neutral-900 select-none">
                    Thu gọn phản hồi
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="rotate-[-180deg] transition-all duration-300"
                      height={16}
                      width={16}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="tablet:pl-[56px] pl-[36px]">
              <div className="pt-medium tablet:pt-large comment-item-1576330 relative w-full">
                <div className="tablet:gap-medium relative flex items-start justify-start gap-2.5">
                  <div className="tablet:left-large tablet:top-[45px] left-small w-small absolute top-[30px] border-l border-l-neutral-300"></div>
                  <div className="tablet:w-4x-large tablet:h-4x-large p-2x-small tablet:p-1x-small bg-primary-500 h-1x-large w-1x-large overflow-hidden rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="none"
                      viewBox="0 0 40 40"
                    >
                      <path fill="url(#a)" d="M0 0h40v40H0z"></path>
                      <defs>
                        <pattern
                          id="a"
                          width={1}
                          height={1}
                          patternContentUnits="objectBoundingBox"
                        >
                          <use xlinkHref="#b" transform="scale(.00333)"></use>
                        </pattern>
                        <image
                          xlinkHref="data:image/png;base64,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"
                          id="b"
                          width={300}
                          height={300}
                        ></image>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="gap-1x-small flex flex-wrap items-center">
                      <p
                        className="tablet:text-medium font-semi-bold inline-block text-base"
                        translate="no"
                      >
                        Quản trị viên
                      </p>
                      <div className="flex h-full items-center">
                        <span className="bg-primary-500 text-pure-white text-1x-small flex h-[18px] items-center justify-center rounded-sm p-0 px-1.5 leading-0">
                          QTV
                        </span>
                      </div>
                      <div className="gap-2x-small inline-flex items-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          className="text-neutral-400"
                          height={14}
                          width={14}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.5 7.25a.75.75 0 0 0-1.5 0v5.5c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744-1.302L12.5 12.315V7.25Z"></path>
                          <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path>
                        </svg>
                        <span className="text-small text-neutral-400">
                          1 năm trước
                        </span>
                      </div>
                    </div>
                    <div className="text-base text-neutral-900">
                      <div className="render-html">
                        CellphoneS xin chào anh Phụng
                      </div>
                      <div className="render-html"></div>
                      <div className="render-html">
                        Dạ MÁY HÚT BỤI DYSON V12 DETECT SLIM TOTAL CLEAN VÀNG
                        XÁM_NEW giá khuyến mãi hiện tại 21.090.000 ( khu vực HCM
                        )
                      </div>
                      <div className="render-html"></div>
                      <div className="render-html">
                        Không biết mình ở quận nào để em kiểm tra chi nhánh gần
                        nhất giúp mình ạ
                      </div>
                      <div className="render-html"></div>
                      <div className="render-html">
                        Mong nhận được phản hồi từ mình ạ.
                      </div>
                      <div className="render-html"></div>
                    </div>
                    <div className="mt-1 w-full">
                      <div className="gap-3x-small text-primary-500 text-small inline-flex cursor-pointer items-center select-none">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          height={16}
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
                          <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
                        </svg>
                        Phản hồi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
