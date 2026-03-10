import Image from "next/image";
import Link from "next/link";
export default function Right() {
  return (
    <div className="box-detail-product__box-center column">
      <div className="box-product-price">
        <div className="smember-price-label">
          <div className="price-label">Giá sản phẩm</div>{" "}
          <div className="is-flex is-align-items-center">
            <div className="sale-price">15.490.000đ</div>{" "}
            <del className="base-price">21.990.000đ</del>
          </div>
        </div>
      </div>{" "}
      <div className="box-product-variants">
        <div className="box-title">
          <p>Màu sắc</p>
        </div>{" "}
        <div className="box-content">
          <ul className="list-variants">
            <li data-product-id="121083" className="item-variant active">
              <Link
                href="/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2.html?product_id=121083"
                data-index="0"
                title="Đen"
                className="button__change-color is-flex is-align-items-center"
              >
                <Image
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2-1_1.jpg"
                  width={50}
                  height={50}
                  alt="Robot hút bụi lau nhà Ecovacs Deebot T50 PRro Gen 2-Đen"
                  loading="lazy"
                />{" "}
                <div className="is-flex is-flex-direction-column">
                  <strong className="item-variant-name">Đen</strong>{" "}
                  <span className="item-variant-price">15.490.000₫</span>
                </div>
              </Link>
            </li>
            <li data-product-id="121084" className="item-variant disable">
              <Link
                href="/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2.html?product_id=121084"
                data-index="1"
                title="Trắng"
                className="button__change-color is-flex is-align-items-center disabled"
              >
                <Image
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2-2_1.jpg"
                  width={50}
                  height={50}
                  alt="Robot hút bụi lau nhà Ecovacs Deebot T50 PRro Gen 2-Trắng"
                  loading="lazy"
                />{" "}
                <div className="is-flex is-flex-direction-column">
                  <strong className="item-variant-name">Trắng</strong>{" "}
                  <span> Giá liên hệ</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>{" "}
      <div>
        <div></div>
      </div>{" "}
      <div className="block-special-promotion-banner my-3">
        <div className="swiper-container banner-slide swiper-container-initialized swiper-container-horizontal">
          <div
            className="swiper-wrapper"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            <div
              className="swiper-slide swiper-slide-active"
              style={{ width: "588px", marginRight: "10px" }}
            >
              <div>
                <Link href="javascript:void(0)">
                  <Image
                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:120/q:90/plain/https://dashboard.cellphones.com.vn/storage/ProductBanner_banmoi.png"
                    width={120}
                    height={120}
                    alt="voucher"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-next"
              style={{ width: "588px", marginRight: "10px" }}
            >
              <div>
                <Link
                  target="_blank"
                  href="https://cellphones.com.vn/bao-gia-re-dau-re-hon-cell-phone-s-giam-them"
                  className="button__special-promotion-banner"
                >
                  <Image
                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:120/q:90/plain/https://dashboard.cellphones.com.vn/storage/banner-chien-gia.png"
                    width={120}
                    height={120}
                    alt="Chiến giá gia dụng"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
            <div
              className="swiper-slide"
              style={{ width: "588px", marginRight: "10px" }}
            >
              <div>
                <Link className="button__special-promotion-banner" href="#">
                  <Image
                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:120/q:90/plain/https://dashboard.cellphones.com.vn/storage/iPhone-product-banner-v1.png"
                    width={120}
                    height={120}
                    alt="Chọn trả góp 0%, trả trước 0đ, phụ phí 0đ"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="swiper-button-prev button__view-banner-prev swiper-button-disabled"
            tabIndex={-1}
            role="button"
            aria-label="Previous slide"
            aria-
          >
            <div className="icon">
              <svg
                height={15}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"></path>
              </svg>
            </div>
          </div>
          <div
            className="swiper-button-next button__view-banner-next"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-
          >
            <div className="icon">
              <svg
                height={15}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>{" "}
        <div id="modalVoucher" className="modal" style={{ display: "none" }}>
          <div id="modalVoucherBg" className="modal-background"></div>{" "}
          <div className="modal-card">
            <section className="modal-card-body modal-card-body--rounded">
              <div className="icon-check-outline">
                <div className="icon-check">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1902_5203)">
                      <path
                        d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z"
                        stroke="#5AC955"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="#5AC955"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>{" "}
                    <defs>
                      <clipPath id="clip0_1902_5203">
                        <rect width={24} height={24} fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>{" "}
              <p className="title-promo">Ưu đãi tặng bạn mới</p>{" "}
              <p>
                CellphoneS gửi tặng bạn mã giảm giá 10% tối đa{" "}
                <strong>500.000đ</strong>, hạn sử dụng trong vòng
                <strong>trong vòng 7 ngày</strong> để mua{" "}
                <strong>Phụ kiện</strong>. Nhanh tay mua sắm ngay!
              </p>{" "}
              <div className="voucher-clipboard-outline"></div>
            </section>{" "}
            <footer className="modal-card-foot">
              <button className="button">Đóng</button>
            </footer>
          </div>
        </div>{" "}
        <div id="modalLuckyWheel" className="modal" style={{ display: "none" }}>
          <div id="modalLuckyWheelbg" className="modal-background"></div>{" "}
          <div className="modal-card">
            <section className="modal-card-body modal-card-body--rounded">
              <button className="button close">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 18L18 30"
                    stroke="#18181B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M18 18L30 30"
                    stroke="#18181B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>{" "}
              <p className="title">Tham gia chương trình</p>{" "}
              <div>
                <p className="has-text-centered mx-auto mb-3">
                  Vui lòng nhập số điện thoại để tham gia chương trình ưu đãi
                  cho khách hàng mới.
                </p>{" "}
                <div className="field">
                  <p className="control has-icons-right">
                    <input
                      id="phoneGuest"
                      type="text"
                      placeholder="Nhập số điện thoại"
                      maxLength={10}
                      className="input"
                    />{" "}
                    <span
                      className="icon is-small is-right"
                      style={{ display: "none" }}
                    >
                      <svg
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30 18L18 30"
                          stroke="#18181B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M18 18L30 30"
                          stroke="#18181B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>{" "}
              <div style={{ display: "none" }}>
                <p className="has-text-centered mx-auto mb-3">
                  Vui lòng nhập OTP vừa được gửi đến số điện thoại
                  <br />
                  <strong></strong>
                </p>{" "}
                <div className="otp-input">
                  <input type="number" min={0} max={9} />{" "}
                  <input type="number" min={0} max={9} />{" "}
                  <input type="number" min={0} max={9} />{" "}
                  <input type="number" min={0} max={9} />
                </div>
              </div>{" "}
              <button className="button submit-phone">Tiếp tục</button>
            </section>
          </div>
        </div>
      </div>{" "}
      <div data-v-31ed5646="" className="box-delivery-address">
        <div data-v-31ed5646="" className="head">
          <svg
            data-v-31ed5646=""
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              data-v-31ed5646=""
              d="M5 17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19C7.53043 19 8.03914 18.7893 8.41421 18.4142C8.78929 18.0391 9 17.5304 9 17C9 16.4696 8.78929 15.9609 8.41421 15.5858C8.03914 15.2107 7.53043 15 7 15C6.46957 15 5.96086 15.2107 5.58579 15.5858C5.21071 15.9609 5 16.4696 5 17Z"
              stroke="#A1A1AA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              data-v-31ed5646=""
              d="M15 17C15 17.5304 15.2107 18.0391 15.5858 18.4142C15.9609 18.7893 16.4696 19 17 19C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17C19 16.4696 18.7893 15.9609 18.4142 15.5858C18.0391 15.2107 17.5304 15 17 15C16.4696 15 15.9609 15.2107 15.5858 15.5858C15.2107 15.9609 15 16.4696 15 17Z"
              stroke="#A1A1AA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              data-v-31ed5646=""
              d="M5 17H3V13M2 5H13V17M9 17H15M19 17H21V11M21 11H13M21 11L18 6H13"
              stroke="#A1A1AA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              data-v-31ed5646=""
              d="M3 9H7"
              stroke="#A1A1AA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>{" "}
          <p data-v-31ed5646="" className="title">
            Thông tin vận chuyển
          </p>
        </div>{" "}
        <div data-v-31ed5646="" className="content">
          <div data-v-31ed5646="" className="btn-change-address">
            <svg
              data-v-31ed5646=""
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                data-v-31ed5646=""
                d="M6 7.33337C6 7.86381 6.21071 8.37251 6.58579 8.74759C6.96086 9.12266 7.46957 9.33337 8 9.33337C8.53043 9.33337 9.03914 9.12266 9.41421 8.74759C9.78929 8.37251 10 7.86381 10 7.33337C10 6.80294 9.78929 6.29423 9.41421 5.91916C9.03914 5.54409 8.53043 5.33337 8 5.33337C7.46957 5.33337 6.96086 5.54409 6.58579 5.91916C6.21071 6.29423 6 6.80294 6 7.33337Z"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                data-v-31ed5646=""
                d="M11.7712 11.1047L8.94251 13.9334C8.6925 14.1831 8.35356 14.3234 8.00017 14.3234C7.64678 14.3234 7.30785 14.1831 7.05784 13.9334L4.22851 11.1047C3.48265 10.3588 2.97473 9.40852 2.76896 8.37396C2.5632 7.3394 2.66883 6.26706 3.07251 5.29254C3.47618 4.31801 4.15977 3.48508 5.03683 2.89905C5.91388 2.31303 6.94502 2.00024 7.99984 2.00024C9.05466 2.00024 10.0858 2.31303 10.9629 2.89905C11.8399 3.48508 12.5235 4.31801 12.9272 5.29254C13.3308 6.26706 13.4365 7.3394 13.2307 8.37396C13.0249 9.40852 12.517 10.3588 11.7712 11.1047Z"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>{" "}
            <span data-v-31ed5646="">
              Chọn địa chỉ giao hàng để nhận ưu đãi
            </span>{" "}
            <div data-v-31ed5646="" className="label-new">
              Mới
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="box-on-stock-stores">
        <div className="box-on-stock-option-location">
          <div className="box-on-stock-count">
            <strong>Xem chi nhánh có hàng</strong>{" "}
            <p>
              Có
              <span className="count">15</span>
              cửa hàng có sản phẩm
            </p>
          </div>{" "}
          <div className="box-on-stock-option button__change-province">
            Hà Nội
            <div className="icon-down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={10}
                height={10}
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
              </svg>
            </div>
          </div>{" "}
          <div className="box-on-stock-option">
            <select id="districtOptions">
              <option defaultValue="">Quận/Huyện</option>{" "}
              <option className="button__change-district" value={84}>
                Quận Ba Đình
              </option>
              <option className="button__change-district" value={131}>
                Quận Tây Hồ
              </option>
              <option className="button__change-district" value={132}>
                Quận Đống Đa
              </option>
              <option className="button__change-district" value={155}>
                Quận Hoàn Kiếm
              </option>
              <option className="button__change-district" value={219}>
                Quận Hà Đông
              </option>
              <option className="button__change-district" value={220}>
                Quận Bắc Từ Liêm
              </option>
              <option className="button__change-district" value={222}>
                Quận Cầu Giấy
              </option>
              <option className="button__change-district" value={223}>
                Quận Hoàng Mai
              </option>
              <option className="button__change-district" value={231}>
                Huyện Đông Anh
              </option>
              <option className="button__change-district" value={258}>
                Huyện Thanh Trì
              </option>
              <option className="button__change-district" value={325}>
                Quận Nam Từ Liêm
              </option>
              <option className="button__change-district" value={451}>
                Huyện Hoài Đức
              </option>
            </select>{" "}
            <div className="icon-down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={10}
                height={10}
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
              </svg>
            </div>
          </div>
        </div>{" "}
        <div className="box-on-stock-address">
          <div className="swiper-container swiper-pdp swiper-container-initialized swiper-container-horizontal">
            <div
              className="swiper-wrapper"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              {" "}
              <div
                className="swiper-slide swiper-slide-active"
                style={{ marginRight: "10px" }}
              >
                <div className="box-on-stock-item">
                  <p
                    title="143 Nghi Tàm, P. Tây Hồ, Q. Tây Hồ, Hà Nội"
                    className="address"
                  >
                    143 Nghi Tàm, P. Tây Hồ, Q. Tây Hồ, Hà Nội
                  </p>{" "}
                  <div className="is-flex">
                    <Link href="tel:02471200143" className="phone disabled">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33333 2.66675H6L7.33333 6.00008L5.66667 7.00008C6.38064 8.44777 7.55231 9.61944 9 10.3334L10 8.66675L13.3333 10.0001V12.6667C13.3333 13.0204 13.1929 13.3595 12.9428 13.6096C12.6928 13.8596 12.3536 14.0001 12 14.0001C9.39951 13.842 6.94677 12.7377 5.10455 10.8955C3.26234 9.05331 2.15803 6.60057 2 4.00008C2 3.64646 2.14048 3.30732 2.39052 3.05727C2.64057 2.80722 2.97971 2.66675 3.33333 2.66675Z"
                          stroke="#D70018"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M10 4.66675C10.3536 4.66675 10.6928 4.80722 10.9428 5.05727C11.1929 5.30732 11.3333 5.64646 11.3333 6.00008"
                          stroke="#D70018"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M10 2C11.0609 2 12.0783 2.42143 12.8284 3.17157C13.5786 3.92172 14 4.93913 14 6"
                          stroke="#D70018"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>{" "}
                      <span>02471200143</span>
                    </Link>{" "}
                    <Link
                      title="143 Nghi Tàm, P. Tây Hồ, Q. Tây Hồ, Hà Nội"
                      target="_blank"
                      rel="noopener nofollow"
                      href="https://g.page/r/CaJ6uKTMXWaUEAI"
                      className="map"
                    >
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 7.33325C6 7.86368 6.21071 8.37239 6.58579 8.74747C6.96086 9.12254 7.46957 9.33325 8 9.33325C8.53043 9.33325 9.03914 9.12254 9.41421 8.74747C9.78929 8.37239 10 7.86368 10 7.33325C10 6.80282 9.78929 6.29411 9.41421 5.91904C9.03914 5.54397 8.53043 5.33325 8 5.33325C7.46957 5.33325 6.96086 5.54397 6.58579 5.91904C6.21071 6.29411 6 6.80282 6 7.33325Z"
                          stroke="#18181B"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M11.7712 11.1047L8.94251 13.9334C8.6925 14.1831 8.35356 14.3234 8.00017 14.3234C7.64678 14.3234 7.30785 14.1831 7.05784 13.9334L4.22851 11.1047C3.48265 10.3588 2.97473 9.40852 2.76896 8.37396C2.5632 7.3394 2.66883 6.26706 3.07251 5.29254C3.47618 4.31801 4.15977 3.48508 5.03683 2.89905C5.91388 2.31303 6.94502 2.00024 7.99984 2.00024C9.05466 2.00024 10.0858 2.31303 10.9629 2.89905C11.8399 3.48508 12.5235 4.31801 12.9272 5.29254C13.3308 6.26706 13.4365 7.3394 13.2307 8.37396C13.0249 9.40852 12.517 10.3588 11.7712 11.1047Z"
                          stroke="#18181B"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>{" "}
                      <span>Bản đồ</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
              style={{ display: "none" }}
            >
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 1"
              ></span>
            </div>
            <div
              className="swiper-button-prev swiper-button-disabled"
              tabIndex={-1}
              role="button"
              aria-label="Previous slide"
              aria-
            >
              <div className="icon">
                <svg
                  height={15}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"></path>
                </svg>
              </div>
            </div>
            <div
              className="swiper-button-next"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
              aria-
            >
              <div className="icon">
                <svg
                  height={15}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
                </svg>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div>{" "}
      <div className="box-product-promotion">
        <div className="box-product-promotion-header is-flex has-text-weight-semibold is-align-items-center">
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 15.5H11V24.5H7C5.67392 24.5 4.40215 23.9732 3.46447 23.0355C2.52678 22.0979 2 20.8261 2 19.5V15.5ZM24 11.5C24 12.0304 23.7893 12.5391 23.4142 12.9142C23.0391 13.2893 22.5304 13.5 22 13.5H13V9.457C12.664 9.483 12.329 9.5 12 9.5C11.671 9.5 11.336 9.483 11 9.457V13.5H2C1.46957 13.5 0.960859 13.2893 0.585786 12.9142C0.210714 12.5391 0 12.0304 0 11.5C0 10.4391 0.421427 9.42172 1.17157 8.67157C1.92172 7.92143 2.93913 7.5 4 7.5H5.738C5.1726 7.0016 4.7238 6.38488 4.42344 5.6936C4.12307 5.00232 3.97851 4.25341 4 3.5C4 3.23478 4.10536 2.98043 4.29289 2.79289C4.48043 2.60536 4.73478 2.5 5 2.5C5.26522 2.5 5.51957 2.60536 5.70711 2.79289C5.89464 2.98043 6 3.23478 6 3.5C6 6.122 8.371 7.03 10.174 7.341C9.50852 6.16105 9.10791 4.85037 9 3.5C9 2.70435 9.31607 1.94129 9.87868 1.37868C10.4413 0.81607 11.2044 0.5 12 0.5C12.7956 0.5 13.5587 0.81607 14.1213 1.37868C14.6839 1.94129 15 2.70435 15 3.5C14.8921 4.85037 14.4915 6.16105 13.826 7.341C15.629 7.03 18 6.122 18 3.5C18 3.23478 18.1054 2.98043 18.2929 2.79289C18.4804 2.60536 18.7348 2.5 19 2.5C19.2652 2.5 19.5196 2.60536 19.7071 2.79289C19.8946 2.98043 20 3.23478 20 3.5C20.0215 4.25341 19.8769 5.00232 19.5766 5.6936C19.2762 6.38488 18.8274 7.0016 18.262 7.5H20C21.0609 7.5 22.0783 7.92143 22.8284 8.67157C23.5786 9.42172 24 10.4391 24 11.5ZM11 3.5C11.1207 4.56283 11.4613 5.58891 12 6.513C12.5387 5.58891 12.8793 4.56283 13 3.5C13 3.23478 12.8946 2.98043 12.7071 2.79289C12.5196 2.60536 12.2652 2.5 12 2.5C11.7348 2.5 11.4804 2.60536 11.2929 2.79289C11.1054 2.98043 11 3.23478 11 3.5ZM13 24.5H17C17.6566 24.5 18.3068 24.3707 18.9134 24.1194C19.52 23.8681 20.0712 23.4998 20.5355 23.0355C20.9998 22.5712 21.3681 22.02 21.6194 21.4134C21.8707 20.8068 22 20.1566 22 19.5V15.5H13V24.5Z"
              fill="url(#paint0_linear_0_11239)"
            ></path>{" "}
            <defs>
              <linearGradient
                id="paint0_linear_0_11239"
                x1={18}
                y1="-13.5"
                x2="-5.9444"
                y2="3.07082"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ED8A95"></stop>{" "}
                <stop offset="0.815713" stopColor="#C40016"></stop>
              </linearGradient>
            </defs>
          </svg>{" "}
          <span>Khuyến mãi hấp dẫn</span>
        </div>{" "}
        <div className="box-product-promotion-content show-all">
          <div></div>{" "}
          <div className="unique-promotions mt-2">
            <div className="promotion-pack_item is-flex is-align-items-center">
              <div className="box-product-promotion-number has-text-primary-light">
                <p>1</p>
              </div>{" "}
              <p className="box-product-promotion-detail has-text-black">
                Nhận thêm 1 trong các khuyến mãi sau:
              </p>
            </div>{" "}
            <ul className="product-more-promotion-content many-promo">
              <li>
                <div className="product-more-promotion-item">
                  Nhận ngay Máy hút bụi TINECO IFLOOR 2 MAX trị giá 4tr9
                  <Link
                    target="_blank"
                    href="https://cps.onl/rup45igccn"
                    className="button__promotion"
                  >
                    &nbsp;(xem chi tiết)
                  </Link>
                </div>
              </li>{" "}
              <li style={{ display: "none" }}>
                <div className="product-more-promotion-item">
                  Nhận ngay Máy hút bụi TINECO IFLOOR 2 MAX trị giá 4tr9
                  <Link
                    target="_blank"
                    href="https://cps.onl/rup45igccn"
                    className="button__promotion"
                  >
                    &nbsp; (xem chi tiết)
                  </Link>
                </div>
              </li>
            </ul>
          </div>{" "}
          <div></div>
        </div>
      </div>{" "}
      <div>
        <div>
          <div className="box-order-button-container">
            <div
              className="is-flex is-justify-content-space-between mb-3"
              style={{ gap: "6px" }}
            >
              <div className="installment-wrapper">
                <div style={{ height: "100%" }}>
                  {" "}
                  <button
                    id="installmentCta"
                    className="btn-cta installment-group-cta"
                  >
                    <strong>Trả góp 0%</strong>
                  </button>
                </div>
              </div>{" "}
              <button className="btn-cta order-button button--large is-flex is-justify-content-center is-align-items-center">
                <strong>MUA NGAY</strong>{" "}
                <span>Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng</span>
              </button>{" "}
              <button className="btn-cta button button--small add-to-cart-button">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <circle
                    cx={6}
                    cy={19}
                    r={2}
                    stroke="#D70018"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>{" "}
                  <circle
                    cx={17}
                    cy={19}
                    r={2}
                    stroke="#D70018"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>{" "}
                  <path
                    d="M17 17H6V3H4"
                    stroke="#D70018"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M6.07126 4.00254C5.52038 3.96319 5.0419 4.37786 5.00254 4.92874C4.96319 5.47962 5.37786 5.9581 5.92874 5.99746L6.07126 4.00254ZM11.9337 6.42646C12.4846 6.46581 12.9631 6.05114 13.0025 5.50026C13.0418 4.94938 12.6271 4.4709 12.0763 4.43154L11.9337 6.42646ZM20.1329 12.1438C20.2112 11.5971 19.8315 11.0904 19.2848 11.0121C18.7381 10.9338 18.2314 11.3135 18.1531 11.8602L20.1329 12.1438ZM19 13V14C19.4975 14 19.9193 13.6343 19.9899 13.1418L19 13ZM6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14V12ZM5.92874 5.99746L11.9337 6.42646L12.0763 4.43154L6.07126 4.00254L5.92874 5.99746ZM18.1531 11.8602L18.0101 12.8582L19.9899 13.1418L20.1329 12.1438L18.1531 11.8602ZM19 12H6V14H19V12Z"
                    fill="#D70018"
                  ></path>{" "}
                  <path
                    d="M15 5C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7V5ZM21 7C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5V7ZM19 3C19 2.44772 18.5523 2 18 2C17.4477 2 17 2.44772 17 3H19ZM17 9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9H17ZM15 7H21V5H15V7ZM17 3V9H19V3H17Z"
                    fill="#D70018"
                  ></path>
                </svg>{" "}
                <strong className="">Thêm vào giỏ</strong>
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div>
        <div></div>
      </div>{" "}
      <div className="box-more-promotion my-3">
        <div className="box-more-promotion-title has-text-black has-text-weight-semibold">
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 15.5H11V24.5H7C5.67392 24.5 4.40215 23.9732 3.46447 23.0355C2.52678 22.0979 2 20.8261 2 19.5V15.5ZM24 11.5C24 12.0304 23.7893 12.5391 23.4142 12.9142C23.0391 13.2893 22.5304 13.5 22 13.5H13V9.457C12.664 9.483 12.329 9.5 12 9.5C11.671 9.5 11.336 9.483 11 9.457V13.5H2C1.46957 13.5 0.960859 13.2893 0.585786 12.9142C0.210714 12.5391 0 12.0304 0 11.5C0 10.4391 0.421427 9.42172 1.17157 8.67157C1.92172 7.92143 2.93913 7.5 4 7.5H5.738C5.1726 7.0016 4.7238 6.38488 4.42344 5.6936C4.12307 5.00232 3.97851 4.25341 4 3.5C4 3.23478 4.10536 2.98043 4.29289 2.79289C4.48043 2.60536 4.73478 2.5 5 2.5C5.26522 2.5 5.51957 2.60536 5.70711 2.79289C5.89464 2.98043 6 3.23478 6 3.5C6 6.122 8.371 7.03 10.174 7.341C9.50852 6.16105 9.10791 4.85037 9 3.5C9 2.70435 9.31607 1.94129 9.87868 1.37868C10.4413 0.81607 11.2044 0.5 12 0.5C12.7956 0.5 13.5587 0.81607 14.1213 1.37868C14.6839 1.94129 15 2.70435 15 3.5C14.8921 4.85037 14.4915 6.16105 13.826 7.341C15.629 7.03 18 6.122 18 3.5C18 3.23478 18.1054 2.98043 18.2929 2.79289C18.4804 2.60536 18.7348 2.5 19 2.5C19.2652 2.5 19.5196 2.60536 19.7071 2.79289C19.8946 2.98043 20 3.23478 20 3.5C20.0215 4.25341 19.8769 5.00232 19.5766 5.6936C19.2762 6.38488 18.8274 7.0016 18.262 7.5H20C21.0609 7.5 22.0783 7.92143 22.8284 8.67157C23.5786 9.42172 24 10.4391 24 11.5ZM11 3.5C11.1207 4.56283 11.4613 5.58891 12 6.513C12.5387 5.58891 12.8793 4.56283 13 3.5C13 3.23478 12.8946 2.98043 12.7071 2.79289C12.5196 2.60536 12.2652 2.5 12 2.5C11.7348 2.5 11.4804 2.60536 11.2929 2.79289C11.1054 2.98043 11 3.23478 11 3.5ZM13 24.5H17C17.6566 24.5 18.3068 24.3707 18.9134 24.1194C19.52 23.8681 20.0712 23.4998 20.5355 23.0355C20.9998 22.5712 21.3681 22.02 21.6194 21.4134C21.8707 20.8068 22 20.1566 22 19.5V15.5H13V24.5Z"
              fill="url(#paint0_linear_0_11239)"
            ></path>{" "}
            <defs>
              <linearGradient
                id="paint0_linear_0_11239"
                x1={18}
                y1="-13.5"
                x2="-5.9444"
                y2="3.07082"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ED8A95"></stop>{" "}
                <stop offset="0.815713" stopColor="#C40016"></stop>
              </linearGradient>
            </defs>
          </svg>{" "}
          <span>Ưu đãi thanh toán</span>
        </div>{" "}
        <div className="render-promotion">
          <ul>
            <li>
              <Link
                href="https://cellphones.com.vn/uu-dai-smember"
                target="_blank"
              >
                Xem chính sách ưu đãi dành cho thành viên Smember
              </Link>
            </li>
            <li>
              <Image
                loading="lazy"
                alt="Kredivo"
                height={16}
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:100/plain/https://cellphones.com.vn/media/wysiwyg/DUMT_ZV0.png"
                title="Kredivo"
                width={46}
              />
              &nbsp;
              <Link
                href="https://cellphones.com.vn/uu-dai-doi-tac/kredivo"
                target="_blank"
              >
                Giảm đến 5.000.000đ khi thanh toán qua Kredivo
              </Link>
            </li>
          </ul>
        </div>
      </div>{" "}
      <div>
        <div id="comboBlock">
          <div></div>
        </div>{" "}
        <div id="boxUpsell" className="my-3">
          <p className="upsell-title"> Phụ kiện mua cùng</p>{" "}
          <div className="upsell-block-product">
            <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-multirow">
              <div
                className="swiper-wrapper"
                style={{
                  width: "574px",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div
                  className="upsell-item swiper-slide swiper-slide-active"
                  style={{ width: "277px", marginRight: "10px" }}
                >
                  <div className="upsell-item-wrapper">
                    <Image
                      alt="Máy hút bụi lau sàn khô ướt Tineco iFloor 2 Max"
                      src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/may-hut-bui-cam-tay-tineco-ifloor-2-max_1_.png"
                      width={358}
                      height={358}
                      className="upsell-item-image"
                    />{" "}
                    <div className="upsell-item-info">
                      <div className="upsell-item-text">
                        <Link href="https://cellphones.com.vn/may-hut-bui-cam-tay-tineco-ifloor-2-max.html">
                          <p className="upsell-item-name">
                            Máy hút bụi lau sàn khô ướt Tineco iFloor 2 Max
                          </p>
                        </Link>
                      </div>{" "}
                      <div className="upsell-item-action">
                        <div className="block-box-price">
                          <div className="box-info__box-price">
                            <p className="product__price--show">4.950.000đ</p>{" "}
                            <p className="product__price--through">
                              4.990.000đ
                            </p>
                          </div>
                        </div>{" "}
                        <button className="button">
                          <span>Thêm vào giỏ</span>{" "}
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 3.33325V12.6666"
                              stroke="#D70018"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                            <path
                              d="M3.3335 8H12.6668"
                              stroke="#D70018"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-lock">
                <span
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 1"
                ></span>
              </div>
              <div
                className="swiper-button-prev swiper-button-disabled swiper-button-lock"
                tabIndex={-1}
                role="button"
                aria-label="Previous slide"
                aria-
              ></div>
              <div
                className="swiper-button-next swiper-button-disabled swiper-button-lock"
                tabIndex={-1}
                role="button"
                aria-label="Next slide"
                aria-
              ></div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>{" "}
          <div id="modalChooseColorRec" className="modal">
            <div className="modal-background"></div>{" "}
            <div className="modal-card">
              <div className="modal-card-head">
                <p className="modal-card-title">Chọn sản phẩm</p>{" "}
                <button aria-label="close" className="delete"></button>
              </div>{" "}
              <section className="modal-card-body">
                <div>
                  <p>Đang tải...</p>
                </div>
              </section>{" "}
              <div className="modal-card-foot">
                <button className="btn-cta button button--small add-to-cart-button-upsell">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2V2C2.81454 2 3.50205 2.60558 3.60486 3.4136L3.9 5.73333L5.08557 14.275C5.22282 15.2638 6.06825 16 7.06658 16L18.2344 16C19.2431 16 20.0939 15.2489 20.219 14.2481L20.5 12L21 8"
                      stroke="#FFF"
                      strokeWidth="1.5"
                    ></path>{" "}
                    <path
                      d="M9 20.5C9 19.6716 8.32843 19 7.5 19C6.67157 19 6 19.6716 6 20.5C6 21.3284 6.67157 22 7.5 22C8.32843 22 9 21.3284 9 20.5Z"
                      stroke="#FFF"
                      strokeWidth="1.5"
                    ></path>{" "}
                    <path
                      d="M19 20.5C19 19.6716 18.3284 19 17.5 19C16.6716 19 16 19.6716 16 20.5C16 21.3284 16.6716 22 17.5 22C18.3284 22 19 21.3284 19 20.5Z"
                      stroke="#FFF"
                      strokeWidth="1.5"
                    ></path>{" "}
                    <path
                      d="M15.4571 8H9.80026"
                      stroke="#FFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M12.6287 5.17157V10.8284"
                      stroke="#FFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>{" "}
                  <span>Thêm vào giỏ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div>
        <div></div>
      </div>
    </div>
  );
}
