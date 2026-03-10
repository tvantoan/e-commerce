import Link from "next/link";
import Image from "next/image";
export default function Register() {
  return (
    <div className="min-h-screen w-full">
      <div className="px-1x-small py-large tablet:px-large tablet:py-4x-large w-full">
        <div className="gap-medium mx-auto flex w-full max-w-[800px] flex-col items-center justify-center">
          <h1 className="text-medium tablet:text-3x-large laptop:text-4x-large tablet:text-primary-500 text-center font-bold">
            Đăng ký trở thành SMEMBER
          </h1>
          <Image
            alt="Register Ant"
            title="Register Ant"
            loading="lazy"
            width={300}
            height={300}
            decoding="async"
            data-nimg="1"
            className="tablet:w-[180px] tablet:h-[180px] h-[112px] w-[112px] object-contain"
            src="https://cdn-static.smember.com.vn/_next/static/media/register-ant.b75b959d.png"
            style={{ color: "transparent" }}
          />
          <span className="font-regular tablet:text-medium text-base text-neutral-500">
            Đăng ký bằng tài khoản mạng xã hội
          </span>
          <div className="gap-medium tablet:gap-large tablet:justify-between flex w-full max-w-[450px] items-center justify-center">
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
                src="https://cdn-static.smember.com.vn/_next/static/media/logo-google.b6f9570f.svg"
                style={{ color: "transparent" }}
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
                src="https://cdn-static.smember.com.vn/_next/static/media/logo-zalo.120d889f.svg"
                style={{ color: "transparent" }}
              />
              <span className="tablet:block hidden">Zalo</span>
            </button>
          </div>
          <span className="font-regular tablet:text-medium text-base text-neutral-500">
            Hoặc điền thông tin sau
          </span>
          <form className="gap-medium relative flex w-full flex-col">
            <h2 className="text-medium tablet:text-large font-bold">
              Thông tin cá nhân
            </h2>
            <div className="tablet:grid-cols-2 gap-medium grid w-full grid-cols-1 items-stretch">
              <div className="cpsui:flex cpsui:gap-2x-small cpsui:group cpsui:flex-col">
                <label
                  data-slot="label"
                  className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:font-medium cpsui:select-none cpsui:group-data-[disabled=true]:pointer-events-none cpsui:group-data-[disabled=true]:opacity-50 cpsui:peer-data-[disabled=true]:cursor-not-allowed cpsui:peer-data-[disabled=true]:opacity-50 cpsui:text-base"
                >
                  Họ và tên
                </label>
                <div className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small cpsui:peer">
                  <div className="cpsui:p-1x-small cpsui:cursor-text cpsui:flex cpsui:items-center cpsui:gap-1x-small cpsui:min-w-0 cpsui:border cpsui:transition-colors cpsui:data-[disabled=true]:bg-neutral-100 cpsui:data-[disabled=true]:cursor-not-allowed cpsui:border-neutral-300 cpsui:focus-within:border-neutral-600 cpsui:data-[disabled=true]:border-neutral-200 cpsui:text-base cpsui:min-h-[48px] cpsui:rounded-base cpsui:pl-medium">
                    <input
                      data-slot="input"
                      className="cpsui:w-full cpsui:bg-transparent cpsui:border-none cpsui:outline-none cpsui:shadow-none cpsui:ring-0 cpsui:focus:outline-none cpsui:focus:border-none cpsui:focus:ring-0 cpsui:focus-visible:outline-none cpsui:focus-visible:border-none cpsui:focus-visible:ring-0 cpsui:placeholder:text-neutral-300 cpsui:placeholder:select-none cpsui:disabled:opacity-80 cpsui:disabled:cursor-not-allowed cpsui:disabled:text-neutral-500 cpsui:disabled:placeholder:text-neutral-400 cpsui:overflow-hidden cpsui:text-ellipsis cpsui:whitespace-nowrap"
                      placeholder="Nhập họ và tên"
                      maxLength={255}
                      defaultValue=""
                      name="name"
                    />
                  </div>
                </div>
              </div>
              <div className="cpsui:flex cpsui:gap-2x-small cpsui:group cpsui:flex-col">
                <label
                  data-slot="label"
                  className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:font-medium cpsui:select-none cpsui:group-data-[disabled=true]:pointer-events-none cpsui:group-data-[disabled=true]:opacity-50 cpsui:peer-data-[disabled=true]:cursor-not-allowed cpsui:peer-data-[disabled=true]:opacity-50 cpsui:text-base"
                >
                  Ngày sinh
                </label>
                <div className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small cpsui:peer">
                  <div className="cpsui:p-1x-small cpsui:cursor-text cpsui:flex cpsui:items-center cpsui:gap-1x-small cpsui:min-w-0 cpsui:border cpsui:transition-colors cpsui:data-[disabled=true]:bg-neutral-100 cpsui:data-[disabled=true]:cursor-not-allowed cpsui:border-neutral-300 cpsui:focus-within:border-neutral-600 cpsui:data-[disabled=true]:border-neutral-200 cpsui:text-base cpsui:min-h-[48px] cpsui:rounded-base cpsui:pl-medium">
                    <input
                      data-slot="input"
                      className="cpsui:w-full cpsui:bg-transparent cpsui:border-none cpsui:outline-none cpsui:shadow-none cpsui:ring-0 cpsui:focus:outline-none cpsui:focus:border-none cpsui:focus:ring-0 cpsui:focus-visible:outline-none cpsui:focus-visible:border-none cpsui:focus-visible:ring-0 cpsui:placeholder:text-neutral-300 cpsui:placeholder:select-none cpsui:disabled:opacity-80 cpsui:disabled:cursor-not-allowed cpsui:disabled:text-neutral-500 cpsui:disabled:placeholder:text-neutral-400 cpsui:overflow-hidden cpsui:text-ellipsis cpsui:whitespace-nowrap"
                      placeholder="dd/mm/yyyy"
                      min="1900-01-01"
                      max="2999-12-31"
                      lang="vi-VN"
                      type="text"
                      defaultValue=""
                      name="birthday"
                    />
                    <div className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:aspect-square">
                      <div
                        className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:select-none cpsui:cursor-pointer cpsui:rounded-base cpsui:hover:bg-neutral-100 cpsui:h-[30px] cpsui:w-[30px]"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-«r3»"
                        data-state="closed"
                        data-slot="popover-trigger"
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="cpsui:text-neutral-600"
                          height={20}
                          width={20}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect
                            width={18}
                            height={18}
                            x={3}
                            y={4}
                            rx={2}
                          ></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      placeholder="Nhập số điện thoại"
                      maxLength={10}
                      defaultValue=""
                      name="phone"
                    />
                  </div>
                </div>
              </div>
              <div className="cpsui:flex cpsui:gap-2x-small cpsui:group cpsui:flex-col">
                <label
                  data-slot="label"
                  className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:font-medium cpsui:select-none cpsui:group-data-[disabled=true]:pointer-events-none cpsui:group-data-[disabled=true]:opacity-50 cpsui:peer-data-[disabled=true]:cursor-not-allowed cpsui:peer-data-[disabled=true]:opacity-50 cpsui:text-base"
                >
                  <span>
                    Email
                    <span className="text-small font-regular text-neutral-400">
                      (Không bắt buộc)
                    </span>
                  </span>
                </label>
                <div className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small cpsui:peer">
                  <div className="cpsui:p-1x-small cpsui:cursor-text cpsui:flex cpsui:items-center cpsui:gap-1x-small cpsui:min-w-0 cpsui:border cpsui:transition-colors cpsui:data-[disabled=true]:bg-neutral-100 cpsui:data-[disabled=true]:cursor-not-allowed cpsui:border-neutral-300 cpsui:focus-within:border-neutral-600 cpsui:data-[disabled=true]:border-neutral-200 cpsui:text-base cpsui:min-h-[48px] cpsui:rounded-base cpsui:pl-medium">
                    <input
                      data-slot="input"
                      className="cpsui:w-full cpsui:bg-transparent cpsui:border-none cpsui:outline-none cpsui:shadow-none cpsui:ring-0 cpsui:focus:outline-none cpsui:focus:border-none cpsui:focus:ring-0 cpsui:focus-visible:outline-none cpsui:focus-visible:border-none cpsui:focus-visible:ring-0 cpsui:placeholder:text-neutral-300 cpsui:placeholder:select-none cpsui:disabled:opacity-80 cpsui:disabled:cursor-not-allowed cpsui:disabled:text-neutral-500 cpsui:disabled:placeholder:text-neutral-400 cpsui:overflow-hidden cpsui:text-ellipsis cpsui:whitespace-nowrap"
                      placeholder="Nhập email"
                      maxLength={255}
                      defaultValue=""
                      name="email"
                    />
                  </div>
                  <div className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:text-positive-700 cpsui:text-small">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="cpsui:shrink-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                    Hóa đơn VAT khi mua hàng sẽ được gửi qua email này
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-medium tablet:text-large font-bold">
              Tạo mật khẩu
            </h2>
            <div className="tablet:grid-cols-2 gap-medium grid w-full grid-cols-1 items-stretch">
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
                      data-slot="input"
                      className="cpsui:w-full cpsui:bg-transparent cpsui:border-none cpsui:outline-none cpsui:shadow-none cpsui:ring-0 cpsui:focus:outline-none cpsui:focus:border-none cpsui:focus:ring-0 cpsui:focus-visible:outline-none cpsui:focus-visible:border-none cpsui:focus-visible:ring-0 cpsui:placeholder:text-neutral-300 cpsui:placeholder:select-none cpsui:disabled:opacity-80 cpsui:disabled:cursor-not-allowed cpsui:disabled:text-neutral-500 cpsui:disabled:placeholder:text-neutral-400 cpsui:overflow-hidden cpsui:text-ellipsis cpsui:whitespace-nowrap cpsui:[&amp;::-ms-reveal]:hidden cpsui:[&amp;::-ms-clear]:hidden cpsui:appearance-none cpsui:-webkit-appearance-none"
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      placeholder="Nhập mật khẩu của bạn"
                      type="password"
                      defaultValue=""
                      name="password"
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
                  <div className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:text-neutral-600 cpsui:text-small">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="cpsui:shrink-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                    </svg>
                    Mật khẩu tối thiểu 6 ký tự, có ít nhất 1 chữ số và 1 số
                  </div>
                </div>
              </div>
              <div className="cpsui:flex cpsui:gap-2x-small cpsui:group cpsui:flex-col">
                <label
                  data-slot="label"
                  className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:font-medium cpsui:select-none cpsui:group-data-[disabled=true]:pointer-events-none cpsui:group-data-[disabled=true]:opacity-50 cpsui:peer-data-[disabled=true]:cursor-not-allowed cpsui:peer-data-[disabled=true]:opacity-50 cpsui:text-base"
                >
                  Nhập lại mật khẩu
                </label>
                <div className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small cpsui:peer">
                  <div className="cpsui:p-1x-small cpsui:cursor-text cpsui:flex cpsui:items-center cpsui:gap-1x-small cpsui:min-w-0 cpsui:border cpsui:transition-colors cpsui:data-[disabled=true]:bg-neutral-100 cpsui:data-[disabled=true]:cursor-not-allowed cpsui:border-neutral-300 cpsui:focus-within:border-neutral-600 cpsui:data-[disabled=true]:border-neutral-200 cpsui:text-base cpsui:min-h-[48px] cpsui:rounded-base cpsui:pl-medium">
                    <input
                      data-slot="input"
                      className="cpsui:w-full cpsui:bg-transparent cpsui:border-none cpsui:outline-none cpsui:shadow-none cpsui:ring-0 cpsui:focus:outline-none cpsui:focus:border-none cpsui:focus:ring-0 cpsui:focus-visible:outline-none cpsui:focus-visible:border-none cpsui:focus-visible:ring-0 cpsui:placeholder:text-neutral-300 cpsui:placeholder:select-none cpsui:disabled:opacity-80 cpsui:disabled:cursor-not-allowed cpsui:disabled:text-neutral-500 cpsui:disabled:placeholder:text-neutral-400 cpsui:overflow-hidden cpsui:text-ellipsis cpsui:whitespace-nowrap cpsui:[&amp;::-ms-reveal]:hidden cpsui:[&amp;::-ms-clear]:hidden cpsui:appearance-none cpsui:-webkit-appearance-none"
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      placeholder="Nhập lại mật khẩu của bạn"
                      type="password"
                      defaultValue=""
                      name="confirmPassword"
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
            </div>
            <div className="gap-medium py-medium grid w-full grid-cols-1 items-stretch">
              <div className="gap-1x-small flex items-center">
                <button
                  type="button"
                  role="checkbox"
                  aria-
                  data-state="unchecked"
                  value="on"
                  data-slot="checkbox"
                  className="cpsui:font-bold cpsui:block cpsui:rounded-[4px] cpsui:border cpsui:border-neutral-300 cpsui:bg-neutral-50 cpsui:hover:border-blue-500 cpsui:cursor-pointer cpsui:disabled:border-neutral-100 cpsui:disabled:bg-neutral-50 cpsui:disabled:cursor-not-allowed cpsui:w-[20px] cpsui:h-[20px] cpsui:data-[state=checked]:bg-blue-500 cpsui:data-[state=checked]:border-blue-500 cpsui:data-[state=checked]:cpsui:text-pure-white cpsui:hover:shadow-[0_0px_4px_rgba(59,130,246,0.7)] cpsui:hover:disabled:border-neutral-300 cpsui:disabled:data-[state=checked]:border-neutral-200 cpsui:disabled:data-[state=checked]:border-neutral-100 cpsui:disabled:data-[state=checked]:bg-neutral-50 cpsui:hover:disabled:shadow-none cpsui:disabled:data-[state=unchecked]:border-neutral-100 cpsui:disabled:data-[state=unchecked]:bg-neutral-50 cpsui:hover:disabled:shadow-none"
                  id="checkbox-promotionConsent"
                ></button>
                <input
                  aria-
                  tabIndex={-1}
                  type="checkbox"
                  value="on"
                  name="promotionConsent"
                  style={{
                    transform: "translateX(-100%)",
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: "0",
                    margin: "0px",
                    width: "20px",
                    height: "20px",
                  }}
                />
                <label
                  data-slot="label"
                  className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:font-medium cpsui:select-none cpsui:group-data-[disabled=true]:pointer-events-none cpsui:group-data-[disabled=true]:opacity-50 cpsui:peer-data-[disabled=true]:cursor-not-allowed cpsui:peer-data-[disabled=true]:opacity-50 cpsui:text-base font-regular text-small"
                  htmlFor="checkbox-promotionConsent"
                >
                  Đăng ký nhận tin khuyến mãi từ CellphoneS
                </label>
              </div>
              <div className="gap-1x-small flex items-center">
                <label
                  data-slot="label"
                  className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:font-medium cpsui:select-none cpsui:group-data-[disabled=true]:pointer-events-none cpsui:group-data-[disabled=true]:opacity-50 cpsui:peer-data-[disabled=true]:cursor-not-allowed cpsui:peer-data-[disabled=true]:opacity-50 cpsui:text-base font-regular !inline-block text-base"
                >
                  Bằng việc Đăng ký, bạn đã đọc và đồng ý với
                  <Link
                    className="text-info-500 font-bold"
                    target="_blank"
                    href="https://cellphones.com.vn/tos"
                  >
                    Điều khoản sử dụng
                  </Link>
                  và
                  <Link
                    className="text-info-500 font-bold"
                    target="_blank"
                    href="https://cellphones.com.vn/tos?part=privacy-policy"
                  >
                    Chính sách bảo mật của CellphoneS
                  </Link>
                  .
                </label>
              </div>
            </div>
            <div
              className="h-0 w-full border-t-[1px]"
              style={{ borderImage: "repeating-linear-gradient(" }}
            ></div>
            <div className="py-medium gap-medium flex w-full flex-col">
              <div className="w-full">
                <h2 className="gap-1x-small flex items-center">
                  <label
                    data-slot="label"
                    className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:font-medium cpsui:select-none cpsui:group-data-[disabled=true]:pointer-events-none cpsui:group-data-[disabled=true]:opacity-50 cpsui:peer-data-[disabled=true]:cursor-not-allowed cpsui:peer-data-[disabled=true]:opacity-50 cpsui:text-base text-medium tablet:text-large font-bold"
                    htmlFor="switch-isStudent"
                  >
                    Tôi là Học sinh - sinh viên / Giáo viên - giảng viên
                  </label>
                  <button
                    type="button"
                    role="switch"
                    aria-
                    data-state="unchecked"
                    value="on"
                    data-slot="switch"
                    className="cpsui:relative cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:hover:disabled:after:hidden cpsui:hover:after:rounded-full cpsui:hover:after:content-[''] cpsui:hover:after:absolute cpsui:hover:after:inset-0 cpsui:hover:after:bg-overlay-white-400 cpsui:w-[40px] cpsui:h-[24px] cpsui:inline-flex cpsui:shrink-0 cpsui:items-center cpsui:data-[state=checked]:bg-blue-500 cpsui:data-[state=checked]:disabled:bg-blue-200 cpsui:data-[state=unchecked]:bg-neutral-300 cpsui:data-[state=unchecked]:disabled:bg-neutral-100 cpsui:rounded-full cpsui:border-none cpsui:outline-none cpsui:transition-all cpsui:duration-200"
                    id="switch-isStudent"
                  >
                    <span
                      data-state="unchecked"
                      data-slot="switch-thumb"
                      className="cpsui:block cpsui:pointer-events-none cpsui:bg-pure-white cpsui:rounded-full cpsui:transition-transform cpsui:duration-200 cpsui:data-[state=checked]:translate-x-[calc(100%-5px)] cpsui:data-[state=unchecked]:translate-x-[1px] cpsui:size-[22px] cpsui:z-10 cpsui:data-[disabled=false]:shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
                    ></span>
                  </button>
                  <input
                    aria-
                    tabIndex={-1}
                    type="checkbox"
                    value="on"
                    name="isStudent"
                    style={{
                      transform: "translateX(-100%)",
                      position: "absolute",
                      pointerEvents: "none",
                      opacity: "0",
                      margin: "0px",
                      width: "40px",
                      height: "24px",
                    }}
                  />
                </h2>
                <div className="mt-3x-small p-2x-small text-small font-regular w800:justify-start gap-2x-small rounded-small flex w-full items-center justify-between bg-neutral-50">
                  <div className="gap-2x-small flex items-center justify-start">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="shrink-0 text-base"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.75 3.75A3.75 3.75 0 0 1 7.5 0c1.455 0 3.436.901 4.5 3.11C13.064.901 15.044 0 16.5 0a3.75 3.75 0 0 1 3 6h1.75c.966 0 1.75.784 1.75 1.75v2.5c0 .698-.409 1.301-1 1.582v8.418A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-8.418c-.591-.282-1-.884-1-1.582v-2.5C1 6.784 1.784 6 2.75 6H4.5a3.733 3.733 0 0 1-.75-2.25ZM20.5 12h-7.75v8.5h7.5a.25.25 0 0 0 .25-.25Zm-9.25 8.5V12H3.5v8.25c0 .138.112.25.25.25Zm10-10a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-8.5v3Zm-18.5 0h8.5v-3h-8.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25Zm16-6.75A2.25 2.25 0 0 0 16.5 1.5c-1.15 0-3.433 1.007-3.72 4.5h3.72a2.25 2.25 0 0 0 2.25-2.25ZM11.22 6c-.287-3.493-2.57-4.5-3.72-4.5a2.25 2.25 0 1 0 0 4.5Z"></path>
                    </svg>
                    Nhận thêm ưu đãi tới
                    <span className="font-bold">700k/sản phẩm</span>
                  </div>
                  <div className="text-info-500 gap-3x-small flex cursor-pointer items-center font-bold select-none">
                    Xem chi tiết
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-medium gap-medium flex w-full flex-col">
              <div className="w-full">
                <h2 className="gap-1x-small flex items-center">
                  <label
                    data-slot="label"
                    className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:font-medium cpsui:select-none cpsui:group-data-[disabled=true]:pointer-events-none cpsui:group-data-[disabled=true]:opacity-50 cpsui:peer-data-[disabled=true]:cursor-not-allowed cpsui:peer-data-[disabled=true]:opacity-50 cpsui:text-base text-medium tablet:text-large font-bold"
                    htmlFor="switch-isStudent"
                  >
                    Tôi là Khách hàng Doanh nghiệp
                  </label>
                  <button
                    type="button"
                    role="switch"
                    aria-
                    data-state="unchecked"
                    value="on"
                    data-slot="switch"
                    className="cpsui:relative cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:hover:disabled:after:hidden cpsui:hover:after:rounded-full cpsui:hover:after:content-[''] cpsui:hover:after:absolute cpsui:hover:after:inset-0 cpsui:hover:after:bg-overlay-white-400 cpsui:w-[40px] cpsui:h-[24px] cpsui:inline-flex cpsui:shrink-0 cpsui:items-center cpsui:data-[state=checked]:bg-blue-500 cpsui:data-[state=checked]:disabled:bg-blue-200 cpsui:data-[state=unchecked]:bg-neutral-300 cpsui:data-[state=unchecked]:disabled:bg-neutral-100 cpsui:rounded-full cpsui:border-none cpsui:outline-none cpsui:transition-all cpsui:duration-200"
                    id="switch-isStudent"
                  >
                    <span
                      data-state="unchecked"
                      data-slot="switch-thumb"
                      className="cpsui:block cpsui:pointer-events-none cpsui:bg-pure-white cpsui:rounded-full cpsui:transition-transform cpsui:duration-200 cpsui:data-[state=checked]:translate-x-[calc(100%-5px)] cpsui:data-[state=unchecked]:translate-x-[1px] cpsui:size-[22px] cpsui:z-10 cpsui:data-[disabled=false]:shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
                    ></span>
                  </button>
                  <input
                    aria-
                    tabIndex={-1}
                    type="checkbox"
                    value="on"
                    name="isStudent"
                    style={{
                      transform: "translateX(-100%)",
                      position: "absolute",
                      pointerEvents: "none",
                      opacity: "0",
                      margin: "0px",
                      width: "40px",
                      height: "24px",
                    }}
                  />
                </h2>
                <div className="mt-3x-small p-2x-small text-small font-regular w800:justify-start gap-2x-small rounded-small flex w-full items-center justify-between bg-neutral-50">
                  <div className="gap-2x-small flex items-center justify-start">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="shrink-0 text-base"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.75 3.75A3.75 3.75 0 0 1 7.5 0c1.455 0 3.436.901 4.5 3.11C13.064.901 15.044 0 16.5 0a3.75 3.75 0 0 1 3 6h1.75c.966 0 1.75.784 1.75 1.75v2.5c0 .698-.409 1.301-1 1.582v8.418A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-8.418c-.591-.282-1-.884-1-1.582v-2.5C1 6.784 1.784 6 2.75 6H4.5a3.733 3.733 0 0 1-.75-2.25ZM20.5 12h-7.75v8.5h7.5a.25.25 0 0 0 .25-.25Zm-9.25 8.5V12H3.5v8.25c0 .138.112.25.25.25Zm10-10a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-8.5v3Zm-18.5 0h8.5v-3h-8.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25Zm16-6.75A2.25 2.25 0 0 0 16.5 1.5c-1.15 0-3.433 1.007-3.72 4.5h3.72a2.25 2.25 0 0 0 2.25-2.25ZM11.22 6c-.287-3.493-2.57-4.5-3.72-4.5a2.25 2.25 0 1 0 0 4.5Z"></path>
                    </svg>
                    <span>
                      Nhận quyền lợi hấp dẫn lên đến
                      <span className="font-bold">1 triệu/đơn hàng</span>
                    </span>
                  </div>
                  <div className="text-info-500 gap-3x-small flex shrink-0 cursor-pointer items-center font-bold select-none">
                    Xem chi tiết
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-medium flex w-full flex-col items-center pb-[100px]"></div>
            <div className="shadow-group-button px-1x-small tablet:px-medium py-medium gap-medium bg-pure-white tablet:translate-x-[-16px] sticky right-0 bottom-0 left-0 z-20 box-content grid w-full translate-x-[-8px] grid-cols-2">
              <Link
                className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-medium cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[48px] cpsui:rounded-base cpsui:border-neutral-300 cpsui:text-neutral-800 cpsui:bg-pure-white cpsui:hover:border-neutral-400 cpsui:hover:bg-neutral-50 cpsui:disabled:border-black-300 cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white tablet:px-medium gap-1x-small flex w-full items-center px-0 font-medium"
                data-slot="button"
                type="button"
                href="/login?pre_uri=%2Flogin"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="tablet:inline-block hidden"
                  height={22}
                  width={22}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                </svg>
                Quay lại đăng nhập
              </Link>
              <button
                data-slot="button"
                className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-medium cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[48px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 tablet:px-medium w-full px-0 font-medium"
                type="submit"
              >
                Hoàn tất đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
