import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer data-fetch-key="Footer:0" className="cps-footer">
      <div className="cps-footer__top">
        <div className="cps-container">
          <div className="columns columns is-flex is-flex-wrap-wrap">
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile top__box-one">
              <div className="box-one__store">
                <div className="store__title">
                  <p className="title mb-3">Tổng đài hỗ trợ miễn phí</p>
                </div>{" "}
                <div className="box-two__call mb-3 box-content">
                  <ul className="list-link">
                    <li className="link">
                      <div>
                        Mua hàng - bảo hành{" "}
                        <Link href="tel:18002097">
                          <strong>1800.2097</strong>
                        </Link>{" "}
                        (7h30 - 22h00)
                      </div>
                    </li>
                    <li className="link">
                      <div>
                        Khiếu nại{" "}
                        <Link href="tel:18002063">
                          <strong>1800.2063</strong>
                        </Link>{" "}
                        (8h00 - 21h30)
                      </div>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              <div className="box-one__pay-gate-way">
                <div className="pay-gate-way__title">
                  <p className="title mb-3">Phương thức thanh toán</p>
                </div>{" "}
                <div className="pay-gate-way__content box-content">
                  <ul className="list-link">
                    <li className="link icon-cps rounded border">
                      <Link href="https://cellphones.com.vn/sforum/apple-pay-viet-nam">
                        <Image
                          width={48}
                          height={29}
                          src="https://cdn2.cellphones.com.vn/x35,webp/media/wysiwyg/apple-pay-og.png"
                          alt="Apple Pay"
                          loading="lazy"
                        />
                      </Link>
                    </li>
                    <li className="link icon-cps rounded border">
                      <Link href="https://cellphones.com.vn/sforum/vnpay-la-gi-cach-dang-ky-vnpay-thanh-toan-vnpay-chi-tiet">
                        <Image
                          width={48}
                          height={29}
                          src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/vnpay-logo.png"
                          alt="Vnpay"
                          loading="lazy"
                        />
                      </Link>
                    </li>
                    <li className="link icon-cps rounded border">
                      <Link href="https://cellphones.com.vn/huong-dan-thanh-toan-qua-vi-momo-cellphones">
                        <Image
                          width={48}
                          height={29}
                          src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/momo_1.png"
                          alt="MoMo"
                          loading="lazy"
                        />
                      </Link>
                    </li>
                    <li className="link icon-cps rounded border">
                      <Link href="https://cellphones.com.vn/huong-dan-mua-hang-va-thanh-toan-qua-cong-onepay">
                        <Image
                          width={48}
                          height={29}
                          src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/onepay-logo.png"
                          alt="Onepay"
                          loading="lazy"
                        />
                      </Link>
                    </li>
                    <li className="link icon-cps rounded border">
                      <Link href="https://cellphones.com.vn/huong-dan-mua-hang-online">
                        <Image
                          width={48}
                          height={29}
                          src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/mpos-logo.png"
                          alt="Mpos"
                          loading="lazy"
                        />
                      </Link>
                    </li>
                    <li className="link icon-cps rounded border">
                      <Link href="https://cellphones.com.vn/uu-dai-doi-tac/kredivo">
                        <Image
                          width={48}
                          height={29}
                          src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/kredivo-logo.png"
                          alt="Kredivo"
                          loading="lazy"
                        />
                      </Link>
                    </li>
                    <li className="link icon-cps rounded border">
                      <Link href="https://cellphones.com.vn/sforum/huong-dan-toan-bang-zalopay-khi-mua-hang-tren-website-cellphones">
                        <Image
                          width={48}
                          height={29}
                          src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/zalopay-logo.png"
                          alt="Zalopay"
                          loading="lazy"
                        />
                      </Link>
                    </li>
                    <li className="link icon-cps rounded border">
                      <Link href="https://cellphones.com.vn/huong-dan-mua-hang-online">
                        <Image
                          width={48}
                          height={29}
                          src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/alepay-logo.png"
                          alt="Alepay"
                          loading="lazy"
                        />
                      </Link>
                    </li>
                    <li className="link icon-cps rounded border">
                      <Link href="https://cellphones.com.vn/huong-dan-thanh-toan-qua-cong-fundiin-tren-website-cellphones">
                        <Image
                          width={48}
                          height={29}
                          src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/fundiin.png"
                          alt="Fundiin"
                          loading="lazy"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              <div id="subscriber-form">
                <p className="subscribe-title">ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</p>{" "}
                <div className="subscribe-voucher">
                  <p className="voucher-title">Nhận ngay voucher 10%</p>{" "}
                  <p className="voucher-tip">
                    Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới
                  </p>
                </div>{" "}
                <div className="control mb-3">
                  <label htmlFor="inputEmail">Email</label>{" "}
                  <input
                    id="inputEmail"
                    type="text"
                    name="EMAIL"
                    autoComplete="off"
                    placeholder="Nhập email của bạn"
                    defaultValue=""
                    className="input subscriber-form-email"
                  />
                </div>{" "}
                <div className="control mb-3">
                  <label htmlFor="inputPhone">Số điện thoại</label>{" "}
                  <input
                    id="inputPhone"
                    type="tel"
                    name="SMS"
                    autoComplete="off"
                    maxLength={10}
                    placeholder="Nhập số điện thoại của bạn"
                    defaultValue=""
                    className="input subscriber-form-phone"
                  />
                </div>{" "}
                <div className="checkbox disabled mb-3">
                  <label className="subscriber-form-label-rule">
                    <input
                      id="OPT_IN"
                      type="checkbox"
                      name="OPT_IN"
                      className="subscriber-form-rule"
                    />{" "}
                    <Link
                      href="https://cellphones.com.vn/tos?part=privacy-policy"
                      target="_blank"
                      rel="noopener"
                    >
                      Tôi đồng ý với điều khoản của CellphoneS
                    </Link>
                  </label>
                </div>{" "}
                <div className="group-btn">
                  <button className="subscriber-form-submit button button-default">
                    ĐĂNG KÝ NGAY
                  </button>
                </div>
              </div>
            </div>{" "}
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile top__box-two">
              <div className="store__title">
                <p className="title mb-3">Thông tin và chính sách</p>
              </div>{" "}
              <div className="box-three__search box-content">
                <ul className="list-link">
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/chinh-sach-giao-hang"
                    >
                      Mua hàng và thanh toán Online
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/tra-gop-online-the-tin-dung"
                    >
                      Mua hàng trả góp Online
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/huong-dan-mua-hang-tra-gop-bang-the-tin-dung-tai-cellphones"
                    >
                      Mua hàng trả góp bằng thẻ tín dụng
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/chinh-sach-giao-hang"
                    >
                      Chính sách giao hàng
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/tos?part=refund-policy"
                    >
                      Chính sách đổi trả
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="nofollow"
                      href="https://smember.com.vn?company_id=cellphones"
                    >
                      Tra điểm Smember
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/uu-dai-smember"
                    >
                      Xem ưu đãi Smember
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="nofollow"
                      href="https://smember.com.vn/warranty?company_id=cellphones"
                    >
                      Tra thông tin bảo hành
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="nofollow"
                      href="https://hddt.cellphones.com.vn/"
                    >
                      Tra cứu hoá đơn điện tử
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/quy-dinh-ve-hoa-don-khi-mua-hang-cellphones"
                    >
                      Thông tin hoá đơn mua hàng
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/bao-hanh/apple"
                    >
                      Trung tâm bảo hành chính hãng
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/quy-dinh-ve-viec-sao-luu-du-lieu"
                    >
                      Quy định về việc sao lưu dữ liệu
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/chinh-sach-khui-hop-apple"
                    >
                      Chính sách khui hộp sản phẩm Apple
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/vat-refund"
                    >
                      VAT Refund
                    </Link>
                  </li>
                </ul>
              </div>
            </div>{" "}
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile top__box-three">
              <div className="store__title">
                <p className="title mb-3">Dịch vụ và thông tin khác</p>
              </div>{" "}
              <div className="box-four--information box-content">
                <ul className="list-link">
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/dich-vu-khach-hang-doanh-nghiep"
                    >
                      Khách hàng doanh nghiệp (B2B)
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/danh-sach-khuyen-mai"
                    >
                      Ưu đãi thanh toán
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/tos"
                    >
                      Quy chế hoạt động
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/tos?part=privacy-policy"
                    >
                      Chính sách bảo mật thông tin cá nhân
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/chinh-sach-bao-hanh"
                    >
                      Chính sách Bảo hành
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/lien-he-hop-tac"
                    >
                      Liên hệ hợp tác kinh doanh
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="nofollow noopener"
                      href="https://tuyendung.cellphones.com.vn/"
                    >
                      Tuyển dụng
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://cellphones.com.vn/bieu-phi-bao-hanh-mo-rong"
                    >
                      Dịch vụ bảo hành mở rộng
                    </Link>
                  </li>{" "}
                  <li className="link">
                    <div className="app-downloader">
                      <p
                        className="title is-flex is-align-items-center my-3"
                        style={{ gap: "5px" }}
                      >
                        Mua sắm dễ dàng – Ưu đãi ngập tràn cùng app CellphoneS
                      </p>{" "}
                      <div className="is-flex mt-2">
                        <Image
                          src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/QR_appGeneral.jpg"
                          alt="QR tải app"
                          loading="lazy"
                          width={113}
                          height={120}
                        />{" "}
                        <div
                          className="is-flex is-flex-direction-column"
                          style={{ width: "55%" }}
                        >
                          <Link
                            href="https://play.google.com/store/apps/details?id=vn.com.cellphones.android.smember"
                            rel="nofollow"
                            className="p-1"
                          >
                            <Image
                              width={147}
                              height={43}
                              src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadANDROID.png"
                              alt="Tải app từ Google Play"
                              loading="lazy"
                            />
                          </Link>{" "}
                          <Link
                            href="https://apps.apple.com/vn/app/smember/id6502395577?l=vi"
                            rel="nofollow"
                            className="p-1"
                          >
                            <Image
                              width={147}
                              height={49}
                              src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadiOS.png"
                              alt="Tải app từ App Store"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{" "}
            <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile top__box-four">
              <div className="store__title">
                <p className="title mb-3">Kết nối với CellphoneS</p>
              </div>{" "}
              <div className="box-tow__social is-flex">
                <div className="social-logo">
                  <Link
                    href="https://www.youtube.com/@CellphoneSOfficial"
                    target="_blank"
                    rel="nofollow"
                  >
                    <Image
                      width={44}
                      height={32}
                      src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-youtube.png"
                      alt="CellphoneS Youtube Chanel"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="social-logo">
                  <Link
                    href="https://www.facebook.com/CellphoneSVietnam"
                    target="_blank"
                    rel="nofollow"
                  >
                    <Image
                      width={44}
                      height={32}
                      src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-facebook.png"
                      alt="CellphoneS Fanpage"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="social-logo">
                  <Link
                    href="https://www.instagram.com/cellphonesvn/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <Image
                      width={44}
                      height={32}
                      src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-instagram.png"
                      alt="CellphoneS Instagram"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="social-logo">
                  <Link
                    href="https://www.tiktok.com/@cellphones.official"
                    target="_blank"
                    rel="nofollow"
                  >
                    <Image
                      width={44}
                      height={32}
                      src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-tiktok.png"
                      alt="CellphoneS Tiktok"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="social-logo">
                  <Link
                    href="https://oa.zalo.me/3894196696036261863"
                    target="_blank"
                    rel="nofollow"
                  >
                    <Image
                      width={44}
                      height={32}
                      src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-zalo.png"
                      alt="CellphoneS Zalo"
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>{" "}
              <div className="store__title">
                <p className="title mb-3">Website thành viên</p>
              </div>{" "}
              <div className="box-tow__corp-members is-flex is-flex-wrap-wrap">
                <div className="corp-member">
                  <p className="corp-member__name">
                    Hệ thống bảo hành và chăm sóc Điện thoại - Máy tính
                  </p>{" "}
                  <Link
                    href="https://dienthoaivui.com.vn"
                    target="_blank"
                    rel="nofollow"
                  >
                    <Image
                      width={149}
                      height={30}
                      src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/dienthoaivui.png"
                      alt="Hệ thống bảo hành và chăm sóc Điện thoại - Máy tính"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="corp-member">
                  <p className="corp-member__name">
                    Trung tâm bảo hành uỷ quyền Apple
                  </p>{" "}
                  <Link href="https://cares.vn/" target="_blank" rel="nofollow">
                    <Image
                      width={80}
                      height={30}
                      src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Logo_CareS_1.png"
                      alt="Trung tâm bảo hành uỷ quyền Apple"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="corp-member">
                  <p className="corp-member__name">
                    Kênh thông tin giải trí công nghệ cho giới trẻ
                  </p>{" "}
                  <Link
                    href="https://schannel.vn/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <Image
                      width={73}
                      height={30}
                      src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/schanel.png"
                      alt="Kênh thông tin giải trí công nghệ cho giới trẻ"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="corp-member">
                  <p className="corp-member__name">
                    Trang thông tin công nghệ mới nhất
                  </p>{" "}
                  <Link
                    href="https://cellphones.com.vn/sforum"
                    target="_blank"
                    rel="noopener"
                  >
                    <Image
                      width={103}
                      height={30}
                      src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/sforum.png"
                      alt="Trang thông tin công nghệ mới nhất"
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="cps-footer__bottom">
        <div className="cps-container">
          <div className="bottom__cms">
            <div className="columns">
              <div className="column cms__cms-row">
                <span className="cms-row__cms-line">
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/mobile/apple/iphone-air.html"
                      >
                        <span>iPhone Air</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/mobile/apple/iphone-17.html"
                      >
                        <span>iPhone 17</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/iphone-17-pro.html"
                      >
                        <span>iPhone 17 Pro</span>
                      </Link>
                    </span>
                  </span>{" "}
                  <br />
                </span>
                <span className="cms-row__cms-line">
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/iphone-17-pro-max.html"
                      >
                        <span>Giá iPhone 17 Pro Max</span>
                      </Link>
                    </span>
                  </span>{" "}
                  <br />
                </span>
                <span className="cms-row__cms-line">
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/mobile/apple/iphone-16.html"
                      >
                        <span>iPhone 16</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/iphone-16-pro-max.html"
                      >
                        <span>iPhone 16 Pro Max</span>
                      </Link>
                    </span>
                  </span>
                </span>
              </div>
              <div className="column cms__cms-row">
                <span className="cms-row__cms-line">
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/mobile.html"
                      >
                        <span>Điện thoại</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/mobile/apple.html"
                      >
                        <span>Điện thoại iPhone</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/mobile/xiaomi.html"
                      >
                        <span>Xiaomi</span>
                      </Link>
                    </span>
                  </span>{" "}
                  <br />
                </span>
                <span className="cms-row__cms-line">
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/mobile/samsung.html"
                      >
                        <span>Điện thoại Samsung Galaxy</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/mobile/oppo.html"
                      >
                        <span>Điện thoại OPPO</span>
                      </Link>
                    </span>
                  </span>
                </span>
              </div>
              <div className="column cms__cms-row">
                <span className="cms-row__cms-line">
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/laptop.html"
                      >
                        <span>Laptop</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/laptop/acer.html"
                      >
                        <span>Laptop Acer</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/laptop/dell.html"
                      >
                        <span>Laptop Dell</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/laptop/hp.html"
                      >
                        <span>Laptop HP</span>
                      </Link>
                    </span>
                  </span>{" "}
                  <br />
                </span>
                <span className="cms-row__cms-line">
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/tivi.html"
                      >
                        <span>Tivi</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/tivi/samsung.html"
                      >
                        <span>Tivi Samsung</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/tivi/sony.html"
                      >
                        <span>Tivi Sony</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/tivi/lg.html"
                      >
                        <span>Tivi LG</span>
                      </Link>
                    </span>
                  </span>
                </span>
              </div>
              <div className="column cms__cms-row">
                <span className="cms-row__cms-line">
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/do-gia-dung.html"
                      >
                        <span>Đồ gia dụng</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/nha-thong-minh/may-hut-bui.html"
                      >
                        <span>Máy hút bụi gia đình</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/may-tinh-de-ban/build-pc.html"
                      >
                        <span>Build PC</span>
                      </Link>
                    </span>
                  </span>{" "}
                  <br />
                </span>
                <span className="cms-row__cms-line">
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/phu-kien/camera.html"
                      >
                        <span>Camera</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/hang-cu/iphone.html"
                      >
                        <span>iPhone cũ</span>
                      </Link>{" "}
                      <span>&nbsp;|&nbsp;</span>
                    </span>
                  </span>
                  <span className="item">
                    <span>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://cellphones.com.vn/qua-tang-8-3"
                      >
                        <span>Quà 8/3</span>
                      </Link>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="bottom__company-information">
            <div>
              <div className="company-information__address is-flex">
                <p>
                  Công ty TNHH Thương Mại Tổng Hợp HTV- GPĐKKD: 0108075931 cấp
                  tại Sở KH &amp; ĐT TP. Hà Nội. Địa chỉ văn phòng: 543 Đường
                  Nguyễn Trãi, Phường Thanh Liệt, Thành phố Hà Nội, Việt Nam.
                  Điện thoại: 024.7303.0119.
                </p>
              </div>{" "}
              <div className="company-information__certification is-flex">
                <Link
                  target="_blank"
                  href="http://online.gov.vn/Home/WebDetails/75641"
                  rel="nofollow noopener"
                  className="icon-cps icon-cps-tb"
                >
                  <Image
                    width={80}
                    height={30}
                    src="https://cdn2.cellphones.com.vn/80x,webp/media/logo/logoSaleNoti.png"
                    alt="Đã thông báo"
                    loading="lazy"
                  />
                </Link>{" "}
                <Link
                  target="_blank"
                  rel="noopener nofollow"
                  href="https://www.dmca.com/Protection/Status.aspx?ID=158f5667-cce3-4a18-b2d1-826225e6b022&amp;refurl=https://cellphones.com.vn/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2.html"
                  title="DMCA.com Protection Status"
                  className="dmca-badge m-l-5"
                >
                  <Image
                    src="https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022"
                    width={96}
                    height={20}
                    alt="DMCA.com Protection Status"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
