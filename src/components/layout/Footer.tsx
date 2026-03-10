import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer id="layout-footer" className="mt-5 leading-[1.5]">
      <div className="bg-neutral-50">
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 p-4 md:grid-cols-4 xl:px-0">
          <div className="footer-col-1 flex flex-col gap-6">
            <section className="text-neutral-800">
              <p className="text-md mb-3 font-semibold">
                Tổng đài hỗ trợ miễn phí
              </p>
              <ul className="disable-phone-link flex flex-col gap-1.25 text-base">
                <li>
                  <div className="">
                    Mua hàng - bảo hành{" "}
                    <Link href="tel:18002044">
                      <strong>1800.2044</strong>
                    </Link>{" "}
                    (7h30 - 22h00)
                  </div>
                </li>
                <li>
                  <div className="">
                    Khiếu nại{" "}
                    <Link href="tel:18002063">
                      <strong>1800.2063</strong>
                    </Link>{" "}
                    (8h00 - 21h30)
                  </div>
                </li>
              </ul>
            </section>
            <section className="text-neutral-800">
              <p className="text-md mb-3 font-semibold">
                Phương thức thanh toán
              </p>
              <ul className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <li className="h-10 md:h-8">
                  <Link
                    href="https://cellphones.com.vn/sforum/apple-pay-viet-nam"
                    title="Apple Pay"
                    target="_blank"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-10 w-15 rounded-sm border border-neutral-100 object-contain md:h-8 md:w-12">
                      <Image
                        fill
                        alt="Apple Pay"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-10 w-15 rounded-sm border border-neutral-100 object-contain opacity-100 transition-opacity duration-500 md:h-8 md:w-12"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/apple-pay-og.png"
                      />
                    </span>
                  </Link>
                </li>
                <li className="h-10 md:h-8">
                  <Link
                    href="https://cellphones.com.vn/sforum/vnpay-la-gi-cach-dang-ky-vnpay-thanh-toan-vnpay-chi-tiet"
                    title="Vnpay"
                    target="_blank"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-10 w-15 rounded-sm border border-neutral-100 object-contain md:h-8 md:w-12">
                      <Image
                        fill
                        alt="Vnpay"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-10 w-15 rounded-sm border border-neutral-100 object-contain opacity-100 transition-opacity duration-500 md:h-8 md:w-12"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/payment/vnpay-logo.png"
                      />
                    </span>
                  </Link>
                </li>
                <li className="h-10 md:h-8">
                  <Link
                    href="https://cellphones.com.vn/huong-dan-thanh-toan-qua-vi-momo-cellphones"
                    title="MoMo"
                    target="_blank"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-10 w-15 rounded-sm border border-neutral-100 object-contain md:h-8 md:w-12">
                      <Image
                        fill
                        alt="MoMo"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-10 w-15 rounded-sm border border-neutral-100 object-contain opacity-100 transition-opacity duration-500 md:h-8 md:w-12"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/momo_1.png"
                      />
                    </span>
                  </Link>
                </li>
                <li className="h-10 md:h-8">
                  <Link
                    href="https://cellphones.com.vn/huong-dan-mua-hang-va-thanh-toan-qua-cong-onepay"
                    title="Onepay"
                    target="_blank"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-10 w-15 rounded-sm border border-neutral-100 object-contain md:h-8 md:w-12">
                      <Image
                        fill
                        alt="Onepay"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-10 w-15 rounded-sm border border-neutral-100 object-contain opacity-100 transition-opacity duration-500 md:h-8 md:w-12"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/payment/onepay-logo.png"
                      />
                    </span>
                  </Link>
                </li>
                <li className="h-10 md:h-8">
                  <Link
                    href="https://cellphones.com.vn/huong-dan-mua-hang-online"
                    title="Mpos"
                    target="_blank"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-10 w-15 rounded-sm border border-neutral-100 object-contain md:h-8 md:w-12">
                      <Image
                        fill
                        alt="Mpos"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-10 w-15 rounded-sm border border-neutral-100 object-contain opacity-100 transition-opacity duration-500 md:h-8 md:w-12"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/payment/mpos-logo.png"
                      />
                    </span>
                  </Link>
                </li>
                <li className="h-10 md:h-8">
                  <Link
                    href="https://cellphones.com.vn/uu-dai-doi-tac/kredivo"
                    title="Kredivo"
                    target="_blank"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-10 w-15 rounded-sm border border-neutral-100 object-contain md:h-8 md:w-12">
                      <Image
                        fill
                        alt="Kredivo"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-10 w-15 rounded-sm border border-neutral-100 object-contain opacity-100 transition-opacity duration-500 md:h-8 md:w-12"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/payment/kredivo-logo.png"
                      />
                    </span>
                  </Link>
                </li>
                <li className="h-10 md:h-8">
                  <Link
                    href="https://cellphones.com.vn/sforum/huong-dan-toan-bang-zalopay-khi-mua-hang-tren-website-cellphones"
                    title="Zalopay"
                    target="_blank"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-10 w-15 rounded-sm border border-neutral-100 object-contain md:h-8 md:w-12">
                      <Image
                        fill
                        alt="Zalopay"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-10 w-15 rounded-sm border border-neutral-100 object-contain opacity-100 transition-opacity duration-500 md:h-8 md:w-12"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/payment/zalopay-logo.png"
                      />
                    </span>
                  </Link>
                </li>
                <li className="h-10 md:h-8">
                  <Link
                    href="https://cellphones.com.vn/huong-dan-mua-hang-online"
                    title="Alepay"
                    target="_blank"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-10 w-15 rounded-sm border border-neutral-100 object-contain md:h-8 md:w-12">
                      <Image
                        fill
                        alt="Alepay"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-10 w-15 rounded-sm border border-neutral-100 object-contain opacity-100 transition-opacity duration-500 md:h-8 md:w-12"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/payment/alepay-logo.png"
                      />
                    </span>
                  </Link>
                </li>
                <li className="h-10 md:h-8">
                  <Link
                    href="https://cellphones.com.vn/huong-dan-thanh-toan-qua-cong-fundiin-tren-website-cellphones"
                    title="Fundiin"
                    target="_blank"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-10 w-15 rounded-sm border border-neutral-100 object-contain md:h-8 md:w-12">
                      <Image
                        fill
                        alt="Fundiin"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-10 w-15 rounded-sm border border-neutral-100 object-contain opacity-100 transition-opacity duration-500 md:h-8 md:w-12"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/fundiin.png"
                      />
                    </span>
                  </Link>
                </li>
              </ul>
            </section>
            <div className="popup-email gap-1x-small flex flex-col">
              <p className="font-semi-bold text-medium text-neutral-800">
                ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI
              </p>
              <div className="gap-3x-small p-small rounded-small flex flex-col bg-neutral-100 py-1.5">
                <p className="text-primary-500 font-semi-bold text-small">
                  Nhận ngay voucher 10%
                </p>
                <p className="text-small text-neutral-500">
                  Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới
                </p>
              </div>
              <div className="cpsui:flex cpsui:gap-2x-small cpsui:group cpsui:flex-col gap-0">
                <label
                  data-slot="label"
                  className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:font-medium cpsui:select-none cpsui:group-data-[disabled=true]:pointer-events-none cpsui:group-data-[disabled=true]:opacity-50 cpsui:peer-data-[disabled=true]:cursor-not-allowed cpsui:peer-data-[disabled=true]:opacity-50 cpsui:text-small"
                >
                  Email
                </label>
                <div className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small cpsui:peer">
                  <div className="cpsui:p-1x-small cpsui:cursor-text cpsui:flex cpsui:items-center cpsui:gap-1x-small cpsui:min-w-0 cpsui:border cpsui:transition-colors cpsui:data-[disabled=true]:bg-neutral-100 cpsui:data-[disabled=true]:cursor-not-allowed cpsui:border-neutral-300 cpsui:focus-within:border-neutral-600 cpsui:data-[disabled=true]:border-neutral-200 cpsui:text-small cpsui:min-h-[40px] cpsui:rounded-small cpsui:pl-medium bg-pure-white text-base">
                    <input
                      data-slot="input"
                      className="cpsui:w-full cpsui:bg-transparent cpsui:border-none cpsui:outline-none cpsui:shadow-none cpsui:ring-0 cpsui:focus:outline-none cpsui:focus:border-none cpsui:focus:ring-0 cpsui:focus-visible:outline-none cpsui:focus-visible:border-none cpsui:focus-visible:ring-0 cpsui:placeholder:text-neutral-300 cpsui:placeholder:select-none cpsui:disabled:opacity-80 cpsui:disabled:cursor-not-allowed cpsui:disabled:text-neutral-500 cpsui:disabled:placeholder:text-neutral-400 cpsui:overflow-hidden cpsui:text-ellipsis cpsui:whitespace-nowrap"
                      placeholder="Nhập email của bạn"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              <div className="cpsui:flex cpsui:gap-2x-small cpsui:group cpsui:flex-col mt-1 gap-0">
                <label
                  data-slot="label"
                  className="cpsui:flex cpsui:items-center cpsui:gap-2x-small cpsui:font-medium cpsui:select-none cpsui:group-data-[disabled=true]:pointer-events-none cpsui:group-data-[disabled=true]:opacity-50 cpsui:peer-data-[disabled=true]:cursor-not-allowed cpsui:peer-data-[disabled=true]:opacity-50 cpsui:text-small"
                >
                  Số điện thoại
                </label>
                <div className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small cpsui:peer">
                  <div className="cpsui:p-1x-small cpsui:cursor-text cpsui:flex cpsui:items-center cpsui:gap-1x-small cpsui:min-w-0 cpsui:border cpsui:transition-colors cpsui:data-[disabled=true]:bg-neutral-100 cpsui:data-[disabled=true]:cursor-not-allowed cpsui:border-neutral-300 cpsui:focus-within:border-neutral-600 cpsui:data-[disabled=true]:border-neutral-200 cpsui:text-small cpsui:min-h-[40px] cpsui:rounded-small cpsui:pl-medium bg-pure-white text-base">
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
              <div className="gap-2x-small flex items-center justify-start">
                <Link
                  target="_blank"
                  className="text-small text-primary-500 flex items-center gap-1"
                  href="https://cellphones.com.vn/tos"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    className="size-4 fill-neutral-300"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                  </svg>
                  Tôi đồng ý với điều khoản của CellphoneS
                </Link>
              </div>
              <div className="tablet:justify-start gap-2x-small flex items-center justify-center">
                <button
                  data-slot="button"
                  className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 w-full"
                >
                  ĐĂNG KÝ NGAY
                </button>
              </div>
            </div>
          </div>
          <div className="footer-col-2 text-neutral-800">
            <p className="text-md mb-3 font-semibold">
              Thông tin về chính sách
            </p>
            <ul className="flex flex-col gap-2.5 text-base">
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Mua hàng và thanh toán Online"
                  className="hover:underline"
                  href="/chinh-sach-giao-hang"
                >
                  Mua hàng và thanh toán Online
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Mua hàng trả góp Online"
                  className="hover:underline"
                  href="/tra-gop-online-the-tin-dung"
                >
                  Mua hàng trả góp Online
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Mua hàng trả góp bằng thẻ tín dụng"
                  className="hover:underline"
                  href="/huong-dan-mua-hang-tra-gop-bang-the-tin-dung-tai-cellphones"
                >
                  Mua hàng trả góp bằng thẻ tín dụng
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Chính sách giao hàng"
                  className="hover:underline"
                  href="/chinh-sach-giao-hang"
                >
                  Chính sách giao hàng
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Chính sách đổi trả"
                  className="hover:underline"
                  href="/tos?part=refund-policy"
                >
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="nofollow"
                  title="Tra điểm Smember"
                  className="hover:underline"
                  href="https://smember.com.vn?company_id=cellphones"
                >
                  Tra điểm Smember
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Xem ưu đãi Smember"
                  className="hover:underline"
                  href="/uu-dai-smember"
                >
                  Xem ưu đãi Smember
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="nofollow"
                  title="Tra thông tin bảo hành"
                  className="hover:underline"
                  href="https://smember.com.vn/warranty?company_id=cellphones"
                >
                  Tra thông tin bảo hành
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="nofollow"
                  title="Tra cứu hoá đơn điện tử"
                  className="hover:underline"
                  href="https://hddt.cellphones.com.vn"
                >
                  Tra cứu hoá đơn điện tử
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Thông tin hoá đơn mua hàng"
                  className="hover:underline"
                  href="/quy-dinh-ve-hoa-don-khi-mua-hang-cellphones"
                >
                  Thông tin hoá đơn mua hàng
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Trung tâm bảo hành chính hãng"
                  className="hover:underline"
                  href="/bao-hanh/apple"
                >
                  Trung tâm bảo hành chính hãng
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Quy định về việc sao lưu dữ liệu"
                  className="hover:underline"
                  href="/quy-dinh-ve-viec-sao-luu-du-lieu"
                >
                  Quy định về việc sao lưu dữ liệu
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Chính sách khui hộp sản phẩm Apple"
                  className="hover:underline"
                  href="/chinh-sach-khui-hop-apple"
                >
                  Chính sách khui hộp sản phẩm Apple
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="VAT Refund"
                  className="hover:underline"
                  href="/vat-refund"
                >
                  VAT Refund
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col-3 text-neutral-800">
            <p className="text-md mb-3 font-semibold">
              Dịch vụ và thông tin khác
            </p>
            <ul className="flex flex-col gap-2.5 text-base">
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Khách hàng doanh nghiệp (B2B)"
                  className="hover:underline"
                  href="/dich-vu-khach-hang-doanh-nghiep"
                >
                  Khách hàng doanh nghiệp (B2B)
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Ưu đãi thanh toán"
                  className="hover:underline"
                  href="/danh-sach-khuyen-mai"
                >
                  Ưu đãi thanh toán
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Quy chế hoạt động"
                  className="hover:underline"
                  href="/tos"
                >
                  Quy chế hoạt động
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Chính sách bảo mật thông tin cá nhân"
                  className="hover:underline"
                  href="/tos?part=privacy-policy"
                >
                  Chính sách bảo mật thông tin cá nhân
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Chính sách Bảo hành"
                  className="hover:underline"
                  href="/chinh-sach-bao-hanh"
                >
                  Chính sách Bảo hành
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Liên hệ hợp tác kinh doanh"
                  className="hover:underline"
                  href="/lien-he-hop-tac"
                >
                  Liên hệ hợp tác kinh doanh
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="nofollow noopener"
                  title="Tuyển dụng"
                  className="hover:underline"
                  href="https://tuyendung.cellphones.com.vn"
                >
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  title="Dịch vụ bảo hành mở rộng"
                  className="hover:underline"
                  href="/bieu-phi-bao-hanh-mo-rong"
                >
                  Dịch vụ bảo hành mở rộng
                </Link>
              </li>
            </ul>
            <div className="mt-2.5">
              <div className="flex items-center gap-1">
                <span className="text-md font-bold text-neutral-800">
                  Mua sắm dễ dàng – Ưu đãi ngập tràn cùng app CellphoneS
                </span>
              </div>
              <div className="mt-2.5 flex gap-2">
                <div className="flex-1">
                  <span className="cps-image-cdn relative inline-block">
                    <Image
                      alt="QR tải app CellphoneS"
                      loading="lazy"
                      width={200}
                      height={200}
                      decoding="async"
                      data-nimg="1"
                      className="object-contain opacity-100 transition-opacity duration-500"
                      style={{ color: "transparent" }}
                      src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/QR_appGeneral.jpg"
                    />
                  </span>
                </div>
                <div className="flex w-4/7 flex-col gap-2 md:gap-0">
                  <Link
                    target="_blank"
                    title="Tải app từ Google Play"
                    href="https://play.google.com/store/apps/details?id=vn.com.cellphones.android.smember"
                    rel="nofollow"
                  >
                    <span className="cps-image-cdn relative inline-block">
                      <Image
                        alt="Tải app từ Google Play"
                        loading="lazy"
                        width={200}
                        height={67}
                        decoding="async"
                        data-nimg="1"
                        className="object-contain opacity-100 transition-opacity duration-500"
                        style={{ color: "transparent" }}
                        src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadANDROID.png"
                      />
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    title="Tải app từ App Store"
                    href="https://apps.apple.com/vn/app/smember/id6502395577?l=vi"
                    rel="nofollow"
                  >
                    <span className="cps-image-cdn relative inline-block">
                      <Image
                        alt="Tải app từ App Store"
                        loading="lazy"
                        width={200}
                        height={59}
                        decoding="async"
                        data-nimg="1"
                        className="object-contain opacity-100 transition-opacity duration-500"
                        style={{ color: "transparent" }}
                        src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadiOS.png"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-col-4 flex flex-col gap-6 text-neutral-800">
            <section className="text-neutral-800">
              <p className="text-md mt-3 mb-1 font-semibold md:mt-0 md:mb-3">
                Kết nối với CellphoneS
              </p>
              <ul className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <li className="h-7">
                  <Link
                    href="https://www.youtube.com/@CellphoneSOfficial"
                    title="CellphoneS Youtube Chanel"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-8 w-12 rounded-sm object-contain md:h-7 md:w-10">
                      <Image
                        fill
                        alt="CellphoneS Youtube Chanel"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-8 w-12 rounded-sm object-contain opacity-100 transition-opacity duration-500 md:h-7 md:w-10"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/social/cellphones-youtube.png"
                      />
                    </span>
                  </Link>
                </li>
                <li className="h-7">
                  <Link
                    href="https://www.facebook.com/CellphoneSVietnam"
                    title="CellphoneS Fanpage"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-8 w-12 rounded-sm object-contain md:h-7 md:w-10">
                      <Image
                        fill
                        alt="CellphoneS Fanpage"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-8 w-12 rounded-sm object-contain opacity-100 transition-opacity duration-500 md:h-7 md:w-10"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/social/cellphones-facebook.png"
                      />
                    </span>
                  </Link>
                </li>
                <li className="h-7">
                  <Link
                    href="https://www.instagram.com/cellphonesvn"
                    title="CellphoneS Instagram"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-8 w-12 rounded-sm object-contain md:h-7 md:w-10">
                      <Image
                        fill
                        alt="CellphoneS Instagram"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-8 w-12 rounded-sm object-contain opacity-100 transition-opacity duration-500 md:h-7 md:w-10"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/social/cellphones-instagram.png"
                      />
                    </span>
                  </Link>
                </li>
                <li className="h-7">
                  <Link
                    href="https://www.tiktok.com/@cellphones.official"
                    title="CellphoneS Tiktok"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-8 w-12 rounded-sm object-contain md:h-7 md:w-10">
                      <Image
                        fill
                        alt="CellphoneS Tiktok"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-8 w-12 rounded-sm object-contain opacity-100 transition-opacity duration-500 md:h-7 md:w-10"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/social/cellphones-tiktok.png"
                      />
                    </span>
                  </Link>
                </li>
                <li className="h-7">
                  <Link
                    href="https://oa.zalo.me/3894196696036261863"
                    title="CellphoneS Zalo"
                    target="_blank"
                    rel="nofollow"
                    className="inline-block"
                  >
                    <span className="cps-image-cdn relative inline-block h-8 w-12 rounded-sm object-contain md:h-7 md:w-10">
                      <Image
                        fill
                        alt="CellphoneS Zalo"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-8 w-12 rounded-sm object-contain opacity-100 transition-opacity duration-500 md:h-7 md:w-10"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/social/cellphones-zalo.png"
                      />
                    </span>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="text-neutral-800">
              <p className="text-md mb-3 font-semibold">Website thành viên</p>
              <ul className="flex flex-col gap-1 md:gap-3">
                <li className="text-md md:text-base">
                  <p>Hệ thống bảo hành và chăm sóc Điện thoại - Máy tính</p>
                  <Link
                    href="https://dienthoaivui.com.vn"
                    rel="nofollow"
                    title="Hệ thống bảo hành và chăm sóc Điện thoại - Máy tính"
                    target="_blank"
                    className="mt-2 inline-block h-7.5 w-full"
                  >
                    <Image
                      width={149}
                      height={30}
                      src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/dienthoaivui.png"
                      alt="Hệ thống bảo hành và chăm sóc Điện thoại - Máy tính"
                      className="object-contain"
                      loading="lazy"
                    />
                  </Link>
                </li>
                <li className="text-md md:text-base">
                  <p>Trung tâm bảo hành uỷ quyền Apple</p>
                  <Link
                    href="https://cares.vn/"
                    rel="nofollow"
                    title="Trung tâm bảo hành uỷ quyền Apple"
                    target="_blank"
                    className="mt-2 inline-block h-7.5 w-full"
                  >
                    <Image
                      width={80}
                      height={30}
                      src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Logo_CareS_1.png"
                      alt="Trung tâm bảo hành uỷ quyền Apple"
                      className="object-contain"
                      loading="lazy"
                    />
                  </Link>
                </li>
                <li className="text-md md:text-base">
                  <p>Kênh thông tin giải trí công nghệ cho giới trẻ</p>
                  <Link
                    href="https://schannel.vn/"
                    rel="nofollow"
                    title="Kênh thông tin giải trí công nghệ cho giới trẻ"
                    target="_blank"
                    className="mt-2 inline-block h-7.5 w-full"
                  >
                    <Image
                      width={73}
                      height={30}
                      src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/schanel.png"
                      alt="Kênh thông tin giải trí công nghệ cho giới trẻ"
                      className="object-contain"
                      loading="lazy"
                    />
                  </Link>
                </li>
                <li className="text-md md:text-base">
                  <p>Trang thông tin công nghệ mới nhất</p>
                  <Link
                    href="https://cellphones.com.vn/sforum"
                    rel="noopener"
                    title="Trang thông tin công nghệ mới nhất"
                    target="_blank"
                    className="mt-2 inline-block h-7.5 w-full"
                  >
                    <Image
                      height={30}
                      width={103}
                      src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/sforum.png"
                      alt="Trang thông tin công nghệ mới nhất"
                      className="object-contain"
                      loading="lazy"
                    />
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 py-4">
        <div className="mx-auto max-w-screen-xl">
          <section className="grid grid-cols-2 gap-6 text-xs md:grid-cols-4">
            <div className="flex flex-col">
              <div className="flex flex-wrap">
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="iPhone Air"
                    href="/mobile/apple/iphone-air.html"
                  >
                    iPhone Air
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="iPhone 17"
                    href="/mobile/apple/iphone-17.html"
                  >
                    iPhone 17
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="iPhone 17 Pro"
                    href="/iphone-17-pro.html"
                  >
                    iPhone 17 Pro
                  </Link>
                </p>
              </div>
              <div className="flex flex-wrap">
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Giá iPhone 17 Pro Max"
                    href="/iphone-17-pro-max.html"
                  >
                    Giá iPhone 17 Pro Max
                  </Link>
                </p>
              </div>
              <div className="flex flex-wrap">
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="iPhone 16"
                    href="/mobile/apple/iphone-16.html"
                  >
                    iPhone 16
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="iPhone 16 Pro Max"
                    href="/iphone-16-pro-max.html"
                  >
                    iPhone 16 Pro Max
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap">
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Điện thoại"
                    href="/mobile.html"
                  >
                    Điện thoại
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Điện thoại iPhone"
                    href="/mobile/apple.html"
                  >
                    Điện thoại iPhone
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Xiaomi"
                    href="/mobile/xiaomi.html"
                  >
                    Xiaomi
                  </Link>
                </p>
              </div>
              <div className="flex flex-wrap">
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Điện thoại Samsung Galaxy"
                    href="/mobile/samsung.html"
                  >
                    Điện thoại Samsung Galaxy
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Điện thoại OPPO"
                    href="/mobile/oppo.html"
                  >
                    Điện thoại OPPO
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap">
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Laptop"
                    href="/laptop.html"
                  >
                    Laptop
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Laptop Acer"
                    href="/laptop/acer.html"
                  >
                    Laptop Acer
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Laptop Dell"
                    href="/laptop/dell.html"
                  >
                    Laptop Dell
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Laptop HP"
                    href="/laptop/hp.html"
                  >
                    Laptop HP
                  </Link>
                </p>
              </div>
              <div className="flex flex-wrap">
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Tivi"
                    href="/tivi.html"
                  >
                    Tivi
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Tivi Samsung"
                    href="/tivi/samsung.html"
                  >
                    Tivi Samsung
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Tivi Sony"
                    href="/tivi/sony.html"
                  >
                    Tivi Sony
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Tivi LG"
                    href="/tivi/lg.html"
                  >
                    Tivi LG
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap">
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Đồ gia dụng"
                    href="/do-gia-dung.html"
                  >
                    Đồ gia dụng
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Máy hút bụi gia đình"
                    href="/nha-thong-minh/may-hut-bui.html"
                  >
                    Máy hút bụi gia đình
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Build PC"
                    href="/may-tinh-de-ban/build-pc.html"
                  >
                    Build PC
                  </Link>
                </p>
              </div>
              <div className="flex flex-wrap">
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="Camera"
                    href="/phu-kien/camera.html"
                  >
                    Camera
                  </Link>
                  <span className="mx-1.5">|</span>
                </p>
                <p>
                  <Link
                    className="leading-[2] text-neutral-800 hover:underline"
                    title="iPhone cũ"
                    href="/hang-cu/iphone.html"
                  >
                    iPhone cũ
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="mx-auto mt-4 max-w-screen-lg text-center text-xs leading-[2] text-neutral-500">
            <p>
              Công ty TNHH Thương Mại Tổng Hợp HTV- GPĐKKD: 0108075931 cấp tại
              Sở KH &amp; ĐT TP. Hà Nội. Địa chỉ văn phòng: 543 Đường Nguyễn
              Trãi, Phường Thanh Liệt, Thành phố Hà Nội, Việt Nam. Điện thoại:
              024.7303.0119.
            </p>
            <div className="mt-2 flex items-center justify-center gap-1">
              <Link
                href="http://online.gov.vn/Home/WebDetails/75641"
                target="_blank"
                rel="nofollow noopener"
              >
                <span className="cps-image-cdn relative inline-block h-7.5 w-20 object-contain">
                  <Image
                    alt="Đã thông báo bộ công thương"
                    loading="lazy"
                    width={80}
                    height={30}
                    decoding="async"
                    data-nimg="1"
                    className="h-7.5 w-20 object-contain opacity-100 transition-opacity duration-500"
                    style={{ color: "transparent" }}
                    src="https://cdn2.cellphones.com.vn/80x,webp/media/logo/logoSaleNoti.png"
                  />
                </span>
              </Link>
              <Link
                href="https://www.dmca.com/Protection/Status.aspx?ID=158f5667-cce3-4a18-b2d1-826225e6b022"
                target="_blank"
                rel="nofollow noopener"
              >
                <span className="cps-image-cdn relative inline-block h-7.5 w-28 object-contain">
                  <Image
                    alt="DMCA.com Protection Status"
                    loading="lazy"
                    width={149}
                    height={31}
                    decoding="async"
                    data-nimg="1"
                    className="h-7.5 w-28 object-contain opacity-100 transition-opacity duration-500"
                    style={{ color: "transparent" }}
                    src="https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022"
                  />
                </span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
