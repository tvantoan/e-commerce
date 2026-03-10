import Link from "next/link";
import Image from "next/image";
export default function LogIn() {
  return (
    <div className="flex w-full items-stretch justify-center">
      <div className="px-1x-small py-large tablet:px-large tablet:py-4x-large flex min-h-screen flex-5 items-center justify-center bg-neutral-50">
        <div className="w-full max-w-[840px]">
          <div className="gap-large tablet:gap-3x-large relative flex w-full flex-col items-center justify-center">
            <div className="gap-small tablet:gap-medium flex w-full flex-col items-center justify-center">
              <div className="gap-medium flex items-center">
                <Link
                  className="bg-primary-500 px-medium py-1x-small flex select-none"
                  href="https://cellphones.com.vn"
                >
                  <Image
                    alt="CellphoneS"
                    title="CellphoneS"
                    loading="lazy"
                    width={156}
                    height={26}
                    decoding="async"
                    data-nimg="1"
                    className="object-contain"
                    style={{ color: "transparent" }}
                    src="https://cdn-static.smember.com.vn/_next/static/media/cellphones-long-icon.6a80e2a6.svg"
                  />
                </Link>
                <Link
                  className="bg-primary-500 px-medium py-1x-small flex select-none"
                  href="https://dienthoaivui.com.vn"
                >
                  <Image
                    alt="Điện thoại vui"
                    title="Điện thoại vui"
                    loading="lazy"
                    width={137}
                    height={26}
                    decoding="async"
                    data-nimg="1"
                    className="object-contain"
                    style={{ color: "transparent" }}
                    src="https://cdn-static.smember.com.vn/_next/static/media/dtv-long-icon.40a11e1d.svg"
                  />
                </Link>
              </div>
              <div className="tablet:text-1x-large laptop:text-2x-large flex flex-col items-center justify-center text-base font-medium">
                <span className="text-center">
                  Nhập hội khách hàng thành viên
                  <span className="text-primary-500 text-1x-large tablet:text-3x-large laptop:text-4x-large align-middle font-bold">
                    SMEMBER
                  </span>
                </span>
                <span className="text-center">
                  Để không bỏ lỡ các ưu đãi hấp dẫn từ CellphoneS
                </span>
              </div>
            </div>
            <div className="tablet:max-w-[600px] w-full max-w-[400px]">
              <div className="relative h-fit min-h-[140px] w-full min-w-[140px]">
                <div className="border-primary-500 pointer-events-none absolute top-[-3px] left-[-3px] z-1 h-[70px] w-[70px] rounded-tl-[25px] border-t-[6px] border-l-[6px] bg-transparent select-none">
                  <div className="bg-primary-500 absolute bottom-[-3px] left-[-6px] h-[6px] w-[6px] rounded-full"></div>
                  <div className="bg-primary-500 absolute top-[-6px] right-[-3px] h-[6px] w-[6px] rounded-full"></div>
                </div>
                <div className="border-primary-500 pointer-events-none absolute top-[-3px] right-[-3px] z-1 h-[70px] w-[70px] rounded-tr-[25px] border-t-[6px] border-r-[6px] bg-transparent select-none">
                  <div className="bg-primary-500 absolute top-[-6px] left-[-3px] h-[6px] w-[6px] rounded-full"></div>
                  <div className="bg-primary-500 absolute right-[-6px] bottom-[-3px] h-[6px] w-[6px] rounded-full"></div>
                </div>
                <div className="border-primary-500 pointer-events-none absolute bottom-[-3px] left-[-3px] z-1 h-[70px] w-[70px] rounded-bl-[25px] border-b-[6px] border-l-[6px] bg-transparent select-none">
                  <div className="bg-primary-500 absolute top-[-3px] left-[-6px] h-[6px] w-[6px] rounded-full"></div>
                  <div className="bg-primary-500 absolute right-[-3px] bottom-[-6px] h-[6px] w-[6px] rounded-full"></div>
                </div>
                <div className="border-primary-500 pointer-events-none absolute right-[-3px] bottom-[-3px] z-1 h-[70px] w-[70px] rounded-br-[25px] border-r-[6px] border-b-[6px] bg-transparent select-none">
                  <div className="bg-primary-500 absolute bottom-[-6px] left-[-3px] h-[6px] w-[6px] rounded-full"></div>
                  <div className="bg-primary-500 absolute top-[-3px] right-[-6px] h-[6px] w-[6px] rounded-full"></div>
                </div>
                <div
                  className="text-small tablet:text-base p-medium tablet:p-3x-large relative h-full min-h-[200px] w-full overflow-hidden rounded-[25px]"
                  style={{ background: "linear-gradient(" }}
                >
                  <Image
                    alt="Pattern"
                    title="Pattern"
                    loading="lazy"
                    width={400}
                    height={270}
                    decoding="async"
                    data-nimg="1"
                    className="pointer-events-none absolute top-0 right-0 z-[0] max-h-[270px] w-[70%] max-w-[400px] object-contain select-none"
                    style={{ color: "transparent" }}
                    src="https://cdn-static.smember.com.vn/_next/static/media/promotion-smember.088823eb.png"
                  />
                  <div className="gap-1x-small tablet:gap-small relative flex w-full flex-col">
                    <div className="gap-1x-small flex w-full items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="text-primary-500 text-2x-large flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z"></path>
                      </svg>
                      <div className="">
                        <strong>Chiết khấu đến 5%</strong> khi mua các sản phẩm
                        mua tại CellphoneS
                      </div>
                    </div>
                    <div className="gap-1x-small flex w-full items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="text-primary-500 text-2x-large flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z"></path>
                      </svg>
                      <div className="">
                        <strong>Miễn phí giao hàng</strong> cho thành viên SMEM,
                        SVIP và cho đơn hàng từ 300.000đ
                      </div>
                    </div>
                    <div className="gap-1x-small flex w-full items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="text-primary-500 text-2x-large flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z"></path>
                      </svg>
                      <div className="">
                        <strong>Tặng voucher sinh nhật đến 500.000đ</strong> cho
                        khách hàng thành viên
                      </div>
                    </div>
                    <div className="gap-1x-small flex w-full items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="text-primary-500 text-2x-large flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z"></path>
                      </svg>
                      <div className="">
                        Trợ giá thu cũ lên đời<strong> đến 1 triệu</strong>
                      </div>
                    </div>
                    <div className="gap-1x-small flex w-full items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="text-primary-500 text-2x-large flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z"></path>
                      </svg>
                      <div className="">
                        Thăng hạng nhận voucher<strong> đến 300.000đ</strong>
                      </div>
                    </div>
                    <div className="gap-1x-small flex w-full items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="text-primary-500 text-2x-large flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z"></path>
                      </svg>
                      <div className="">
                        Đặc quyền S-Student/S-Teacher
                        <strong>ưu đãi thêm đến 10%</strong>
                      </div>
                    </div>
                    <div className="gap-1x-small flex w-full items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="text-primary-500 text-2x-large flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z"></path>
                      </svg>
                      <div className="">
                        <strong>S-Business:</strong>Chiết khấu đến 10% dành
                        riêng cho khách hàng doanh nghiệp
                      </div>
                    </div>
                  </div>
                  <Link
                    className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-pure-white cpsui:text-primary-500 cpsui:bg-pure-white cpsui:hover:border-neutral-50 cpsui:hover:bg-neutral-50 cpsui:disabled:border-pure-white cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white gap-2x-small text-small tablet:text-base flex w-full items-center border-transparent bg-transparent pb-0 hover:border-transparent hover:bg-transparent hover:underline"
                    data-slot="button"
                    href="https://cellphones.com.vn/uu-dai-smember"
                  >
                    <span className="text-primary-500 font-medium">
                      Xem chi tiết chính sách ưu đãi Smember
                    </span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height={16}
                      width={16}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <Image
                alt="Ant Promotion Smember"
                title="Ant Promotion Smember"
                loading="eager"
                width={660}
                height={476}
                decoding="async"
                data-nimg="1"
                className="tablet:mt-[-50px] pointer-events-none relative z-1 mx-auto mt-[-40px] w-full max-w-[500px] object-contain select-none"
                style={{ color: "transparent" }}
                src="https://cdn-static.smember.com.vn/_next/static/media/smember-promotion-ant.a7833c47.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tablet:flex px-large py-4x-large hidden min-h-screen flex-4 justify-center">
        <div className="flex w-full justify-center">
          <div className="flex h-full w-full max-w-[440px] flex-col items-center pt-[30px]">
            <div className="gap-medium tablet:gap-2x-large flex w-full flex-col items-center justify-between">
              <div className="gap-medium tablet:gap-2x-large flex w-full flex-col">
                <h1 className="tablet:block text-3x-large laptop:text-4x-large text-primary-500 hidden text-center font-bold">
                  Đăng nhập SMEMBER
                </h1>
                <form className="gap-medium tablet:gap-1x-large flex w-full flex-col">
                  <div className="cpsui:flex cpsui:gap-2x-small cpsui:group cpsui:flex-col">
                    <label
                      data-slot="label"
                      className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:font-medium cpsui:select-none cpsui:group-data-[disabled=true]:pointer-events-none cpsui:group-data-[disabled=true]:opacity-50 cpsui:peer-data-[disabled=true]:cursor-not-allowed cpsui:peer-data-[disabled=true]:opacity-50 cpsui:text-base"
                    >
                      Số điện thoại
                    </label>
                    <div className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small cpsui:peer">
                      <div className="cpsui:p-1x-small cpsui:cursor-text cpsui:flex cpsui:items-center cpsui:gap-1x-small cpsui:min-w-0 cpsui:border cpsui:transition-colors cpsui:data-[disabled=true]:bg-neutral-100 cpsui:data-[disabled=true]:cursor-not-allowed cpsui:border-neutral-300 cpsui:focus-within:border-neutral-600 cpsui:data-[disabled=true]:border-neutral-200 cpsui:text-base cpsui:min-h-[48px] cpsui:rounded-base cpsui:pl-medium">
                        <input
                          data-slot="input"
                          className="cpsui:w-full cpsui:bg-transparent cpsui:border-none cpsui:outline-none cpsui:shadow-none cpsui:ring-0 cpsui:focus:outline-none cpsui:focus:border-none cpsui:focus:ring-0 cpsui:focus-visible:outline-none cpsui:focus-visible:border-none cpsui:focus-visible:ring-0 cpsui:placeholder:text-neutral-300 cpsui:placeholder:select-none cpsui:disabled:opacity-80 cpsui:disabled:cursor-not-allowed cpsui:disabled:text-neutral-500 cpsui:disabled:placeholder:text-neutral-400 cpsui:overflow-hidden cpsui:text-ellipsis cpsui:whitespace-nowrap"
                          placeholder="Nhập số điện thoại của bạn"
                          maxLength={10}
                          defaultValue=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="cpsui:flex cpsui:gap-2x-small cpsui:group cpsui:flex-col">
                    <label
                      data-slot="label"
                      className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:font-medium cpsui:select-none cpsui:group-data-[disabled=true]:pointer-events-none cpsui:group-data-[disabled=true]:opacity-50 cpsui:peer-data-[disabled=true]:cursor-not-allowed cpsui:peer-data-[disabled=true]:opacity-50 cpsui:text-base"
                    >
                      Mật khẩu
                    </label>
                    <div className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small cpsui:peer">
                      <div className="cpsui:p-1x-small cpsui:cursor-text cpsui:flex cpsui:items-center cpsui:gap-1x-small cpsui:min-w-0 cpsui:border cpsui:transition-colors cpsui:data-[disabled=true]:bg-neutral-100 cpsui:data-[disabled=true]:cursor-not-allowed cpsui:border-neutral-300 cpsui:focus-within:border-neutral-600 cpsui:data-[disabled=true]:border-neutral-200 cpsui:text-base cpsui:min-h-[48px] cpsui:rounded-base cpsui:pl-medium">
                        <input
                          type="password"
                          data-slot="input"
                          className="cpsui:w-full cpsui:bg-transparent cpsui:border-none cpsui:outline-none cpsui:shadow-none cpsui:ring-0 cpsui:focus:outline-none cpsui:focus:border-none cpsui:focus:ring-0 cpsui:focus-visible:outline-none cpsui:focus-visible:border-none cpsui:focus-visible:ring-0 cpsui:placeholder:text-neutral-300 cpsui:placeholder:select-none cpsui:disabled:opacity-80 cpsui:disabled:cursor-not-allowed cpsui:disabled:text-neutral-500 cpsui:disabled:placeholder:text-neutral-400 cpsui:overflow-hidden cpsui:text-ellipsis cpsui:whitespace-nowrap cpsui:[&amp;::-ms-reveal]:hidden cpsui:[&amp;::-ms-clear]:hidden cpsui:appearance-none cpsui:-webkit-appearance-none"
                          autoComplete="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          placeholder="Nhập mật khẩu của bạn"
                          defaultValue=""
                        />
                        <button
                          type="button"
                          tabIndex={-1}
                          className="cpsui:flex cpsui:cursor-pointer cpsui:items-center cpsui:justify-center cpsui:rounded-full cpsui:bg-neutral-200 cpsui:text-neutral-600 cpsui:hover:bg-neutral-300 cpsui:focus:outline-none cpsui:transition-colors cpsui:w-[20px] cpsui:h-[20px] cpsui:flex-shrink-0"
                          aria-label="Show password"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 576 512"
                            height="0.8em"
                            width="0.8em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <button
                      data-slot="button"
                      className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-medium cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[48px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 w-full font-medium"
                      type="submit"
                    >
                      Đăng nhập
                    </button>
                    <Link
                      data-slot="button"
                      className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-medium cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[48px] cpsui:rounded-base cpsui:border-pure-white cpsui:text-info-500 cpsui:bg-pure-white cpsui:hover:border-neutral-50 cpsui:hover:bg-neutral-50 cpsui:disabled:border-pure-white cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white w-full font-medium hover:border-transparent hover:bg-transparent hover:underline"
                      type="button"
                      href="/restore-password"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>
                </form>
                <div className="gap-medium tablet:gap-1x-large flex w-full items-center justify-between">
                  <div className="h-[1px] flex-1 bg-neutral-200"></div>
                  <div className="text-regular tablet:text-medium flex-shrink-0 text-center text-base text-neutral-500">
                    Hoặc đăng nhập bằng
                  </div>
                  <div className="h-[1px] flex-1 bg-neutral-200"></div>
                </div>
                <div className="gap-medium tablet:gap-large tablet:justify-between flex w-full items-center justify-center">
                  <button
                    type="button"
                    className="rounded-base tablet:flex-1 tablet:min-w-[120px] tablet:w-auto gap-2x-small inline-flex h-[60px] w-[60px] cursor-pointer items-center justify-center font-medium text-neutral-900 transition-all duration-300 active:scale-95"
                  >
                    <Image
                      alt="Google"
                      title="Google"
                      loading="lazy"
                      width={25}
                      height={24}
                      decoding="async"
                      data-nimg="1"
                      className="object-contain"
                      style={{ color: "transparent" }}
                      src="https://cdn-static.smember.com.vn/_next/static/media/logo-google.b6f9570f.svg"
                    />
                    <span className="tablet:block hidden">Google</span>
                  </button>
                  <button
                    type="button"
                    className="rounded-base tablet:flex-1 tablet:min-w-[120px] tablet:w-auto gap-2x-small inline-flex h-[60px] w-[60px] cursor-pointer items-center justify-center font-medium text-neutral-900 transition-all duration-300 active:scale-95"
                  >
                    <Image
                      alt="Google"
                      title="Google"
                      loading="lazy"
                      width={21}
                      height={20}
                      decoding="async"
                      data-nimg="1"
                      className="object-contain"
                      style={{ color: "transparent" }}
                      src="https://cdn-static.smember.com.vn/_next/static/media/logo-zalo.120d889f.svg"
                    />
                    <span className="tablet:block hidden">Zalo</span>
                  </button>
                </div>
              </div>
              <div className="mt-[30px] flex w-full items-center justify-center">
                <span className="text-medium flex-shrink-0 text-neutral-500">
                  Bạn chưa có tài khoản?
                </span>
                <Link
                  data-slot="button"
                  className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-medium cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[48px] cpsui:rounded-base cpsui:border-pure-white cpsui:text-primary-500 cpsui:bg-pure-white cpsui:hover:border-neutral-50 cpsui:hover:bg-neutral-50 cpsui:disabled:border-pure-white cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white px-1x-small border-transparent bg-transparent font-medium hover:border-transparent hover:bg-transparent hover:underline"
                  type="button"
                  href="/register?pre_uri=%2Flogin"
                >
                  Đăng ký ngay
                </Link>
              </div>
              <div className="text-medium flex w-full items-center justify-center text-center text-neutral-500">
                <span>
                  Mua sắm, sửa chữa tại <br />
                  <Link
                    className="text-primary-500 font-medium hover:underline"
                    href="https://cellphones.com.vn"
                  >
                    cellphones.com.vn
                  </Link>
                  <Link
                    className="text-primary-500 font-medium hover:underline"
                    href="https://dienthoaivui.com.vn"
                  >
                    dienthoaivui.com.vn
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
