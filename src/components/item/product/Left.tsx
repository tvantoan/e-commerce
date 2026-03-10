import Item from "@/types/Item";
import Image from "next/image";
import Link from "next/link";
export default function Left({ product }: { product: Item }) {
  return (
    <div className="box-detail-product__box-left column">
      <div className="box-header box-header-desktop">
        <div className="box-product-name">
          <h1> {product.name}</h1>
        </div>{" "}
        <div className="is-flex is-align-items-center mt-2"></div>{" "}
        <div className="box-header__bottom">
          <div className="box-bottom-item">
            <button id="wishListBtn">
              <div className="btn__effect button__add-wishlist inactive">
                <svg
                  viewBox="20 18 29 28"
                  aria-hidden="true"
                  focusable="false"
                  className="heart-border icon-svg icon-svg--color-cps"
                >
                  <path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path>
                </svg>{" "}
                <svg
                  viewBox="0 0 19.2 18.5"
                  aria-hidden="true"
                  focusable="false"
                  className="heart-stroke icon-svg icon-svg--color-silver"
                >
                  <path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path>
                </svg>{" "}
                <svg
                  viewBox="0 0 19.2 18.5"
                  aria-hidden="true"
                  focusable="false"
                  className="heart-full icon-svg icon-svg--color-cps"
                >
                  <path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path>
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="5.707 17 48 20"
                  className="broken-heart"
                >
                  <g fill="#3b82f6">
                    <path
                      d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z"
                      className="broken-heart--left"
                    ></path>{" "}
                    <path
                      d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z"
                      className="broken-heart--right"
                    ></path>
                  </g>{" "}
                  <path
                    fill="none"
                    stroke="#FFF"
                    strokeMiterlimit={10}
                    d="M29.865 18.205v14.573"
                    className="broken-heart--crack"
                  ></path>
                </svg>{" "}
                <span className="effect-group">
                  <span className="effect"></span>{" "}
                  <span className="effect"></span>{" "}
                  <span className="effect"></span>{" "}
                  <span className="effect"></span>{" "}
                  <span className="effect"></span>
                </span>
              </div>{" "}
              <span className="text-wishlist" style={{ display: "none" }}>
                &nbsp;Yêu thích
              </span>
            </button>{" "}
            <span className="label">Yêu thích</span>
          </div>{" "}
        </div>
      </div>{" "}
      <div className="box-gallery">
        <div className="gallery-product-detail mb-2">
          <div className="gallery-slide gallery-top swiper-container swiper-container-initialized swiper-container-horizontal">
            <div
              className="swiper-wrapper"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <div
                id="v2Gallery"
                className="swiper-slide ksp-gallery swiper-slide-active"
                style={{ width: "586px", marginRight: "20px" }}
              >
                <div className="box-ksp is-flex is-flex-direction-row">
                  <Image
                    src={product.images[0]}
                    width={358}
                    height={358}
                    alt={product.name}
                    loading="lazy"
                    title={product.name}
                    className="mr-2 mb-1"
                  />{" "}
                  <div>
                    <p className="title desktop">Tính năng nổi bật</p>{" "}
                    <div className="desktop">
                      <ul>
                        <li>
                          Lực hút mạnh 21.000Pa kết hợp công nghệ chống rối
                          ZeroTangle 2.0, làm sạch hiệu quả tóc và lông thú
                        </li>
                        <li>
                          Lau nhà OZMO Turbo 2.0 với giẻ xoay áp lực cao, tự
                          giặt nước nóng 75°C và sấy khí nóng 45°C diệt khuẩn
                          tốt
                        </li>
                        <li>
                          Điều hướng Mini-ToF + AIVI 3D 3.0 giúp né vật cản
                          thông minh, lập bản đồ chính xác với TrueMapping 2.0
                        </li>
                        <li>
                          Trạm OMNI tự động hút bụi, giặt giẻ, sấy khô, pha dung
                          dịch, pin lớn 6400mAh cho thời gian hoạt động dài
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                  <div className="mobile">
                    <p className="title">Tính năng nổi bật</p>{" "}
                    <div>
                      <ul>
                        <li>
                          Lực hút mạnh 21.000Pa kết hợp công nghệ chống rối
                          ZeroTangle 2.0, làm sạch hiệu quả tóc và lông thú
                        </li>
                        <li>
                          Lau nhà OZMO Turbo 2.0 với giẻ xoay áp lực cao, tự
                          giặt nước nóng 75°C và sấy khí nóng 45°C diệt khuẩn
                          tốt
                        </li>
                        <li>
                          Điều hướng Mini-ToF + AIVI 3D 3.0 giúp né vật cản
                          thông minh, lập bản đồ chính xác với TrueMapping 2.0
                        </li>
                        <li>
                          Trạm OMNI tự động hút bụi, giặt giẻ, sấy khô, pha dung
                          dịch, pin lớn 6400mAh cho thời gian hoạt động dài
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div
                className="swiper-slide swiper-slide-next"
                style={{ width: "586px", marginRight: "20px" }}
              >
                <Link
                  href="https://cdn2.cellphones.com.vn/x/media/catalog/product/r/o/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2-13.jpg"
                  className="spotlight"
                >
                  <Image
                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2-13.jpg"
                    width={358}
                    height={358}
                    alt="Robot hút bụi lau nhà Ecovacs Deebot T50 Pro Gen 2 - 1"
                    title="Robot hút bụi lau nhà Ecovacs Deebot T50 Pro Gen 2"
                    rel="preload"
                  />
                </Link>
              </div>
            </div>{" "}
            <div
              className="swiper-button-next button__view-gallery-next"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
              aria-hidden="true"
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
            </div>{" "}
            <div
              className="swiper-button-prev button__view-gallery-prev"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
              aria-hidden="true"
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
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>{" "}
          <div className="thumbnail-slide swiper-container gallery-thumbs swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-thumbs">
            <div
              className="swiper-wrapper"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <div
                className="swiper-slide ksp-thumbs button__view-gallery-thumb swiper-slide-thumb-active swiper-slide-visible swiper-slide-active"
                style={{ marginRight: "10px" }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.73 3.50989L15.49 7.02989C15.73 7.51989 16.37 7.98989 16.91 8.07989L20.1 8.60989C22.14 8.94989 22.62 10.4299 21.15 11.8899L18.67 14.3699C18.25 14.7899 18.02 15.5999 18.15 16.1799L18.86 19.2499C19.42 21.6799 18.13 22.6199 15.98 21.3499L12.99 19.5799C12.45 19.2599 11.56 19.2599 11.01 19.5799L8.02003 21.3499C5.88003 22.6199 4.58003 21.6699 5.14003 19.2499L5.85003 16.1799C5.98003 15.5999 5.75003 14.7899 5.33003 14.3699L2.85003 11.8899C1.39003 10.4299 1.86003 8.94989 3.90003 8.60989L7.09003 8.07989C7.62003 7.98989 8.26003 7.51989 8.50003 7.02989L10.26 3.50989C11.22 1.59989 12.78 1.59989 13.73 3.50989Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                <p>Tính năng nổi bật</p>
              </div>{" "}
              <div
                className="swiper-slide button__view-gallery swiper-slide-visible swiper-slide-next"
                style={{ marginRight: "10px" }}
              >
                <Image
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:58:58/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2-13.jpg"
                  width={58}
                  height={58}
                  alt="Robot hút bụi lau nhà Ecovacs Deebot T50 Pro Gen 2 - 1"
                  title="Robot hút bụi lau nhà Ecovacs Deebot T50 Pro Gen 2"
                />
              </div>
            </div>{" "}
            <div
              className="swiper-button-next button-navigate-thumbnail__next"
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
            </div>{" "}
            <div
              className="swiper-button-prev button-navigate-thumbnail__prev swiper-button-disabled"
              tabIndex={0}
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
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div>{" "}
      <div className="mt-5">
        <div className="box-warranty-info">
          <div className="box-title">
            <p>Cam kết sản phẩm</p>
          </div>{" "}
          <div className="warranty-info box-content">
            <div className="swiper-container swiper-pdp swiper-container-initialized swiper-container-horizontal swiper-container-multirow">
              <div
                className="swiper-wrapper"
                style={{
                  width: "598px",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{
                    order: "0",
                    width: "289px",
                    height: "166px",
                    marginRight: "10px",
                  }}
                >
                  <div className="item-warranty-info">
                    <div className="icon">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2841_934)">
                          <path
                            d="M8.625 15.75H6C5.60218 15.75 5.22064 15.592 4.93934 15.3107C4.65804 15.0294 4.5 14.6478 4.5 14.25V3.75C4.5 3.35218 4.65804 2.97064 4.93934 2.68934C5.22064 2.40804 5.60218 2.25 6 2.25H12C12.3978 2.25 12.7794 2.40804 13.0607 2.68934C13.342 2.97064 13.5 3.35218 13.5 3.75V10.875M8.25 3H9.75M9 12.75V12.7575M11.25 14.25L12.75 15.75L15.75 12.75"
                            stroke="url(#paint0_linear_2841_934)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>{" "}
                        <defs>
                          <linearGradient
                            id="paint0_linear_2841_934"
                            x1="10.125"
                            y1="2.25"
                            x2="10.125"
                            y2="15.75"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFF5F0"></stop>{" "}
                            <stop offset="0.67" stopColor="#F4C8D0"></stop>
                          </linearGradient>{" "}
                          <clipPath id="clip0_2841_934">
                            <rect width={18} height={18} fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>{" "}
                    <div className="description">
                      Mới, đầy đủ phụ kiện từ nhà sản xuất
                    </div>
                  </div>
                </div>{" "}
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
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
                aria-
              >
                <div>
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
                className="swiper-button-next swiper-button-disabled swiper-button-lock"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
                aria-
              >
                <div>
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
            <div className="swiper-container is-hidden swiper-container-initialized swiper-container-horizontal swiper-container-multirow">
              <div
                className="swiper-wrapper"
                style={{ transitionDuration: "0ms" }}
              >
                <div className="swiper-slide" style={{ height: "166px" }}></div>
              </div>
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </div>
      </div>{" "}
      <div
        id="thong-so-ky-thuat"
        promotion-pack="[object Object]"
        show-button-print="true"
        className="cps-block-technicalInfo"
      >
        <div className="box-title is-flex is-justify-content-space-between is-align-items-center">
          <h2 className="title">Thông số kỹ thuật</h2>{" "}
          <button className="button button__show-modal-technical is-flex is-justify-content-center">
            Xem tất cả
            <div className="icon-svg">
              <svg
                height={15}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
              </svg>
            </div>
          </button>
        </div>{" "}
        <table className="technical-content">
          <tbody>
            <tr className="technical-content-item">
              <td>Tính năng</td>{" "}
              <td>
                <p>
                  Hoạt động êm ái, Hỗ trợ tường ảo, Lưu trữ nhiều bản đồ, Hỗ trợ
                  lau nhà, Tự động điều chỉnh sức hút, Chống rối tóc - lông thú,
                  Tự động hút bụi, Tự động giặt giẻ, Tự động sấy giẻ
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
      <div id="boxFAQ" className="is-hidden"></div>{" "}
      <div className="compare-apple-devices"></div>{" "}
      <div>
        <div product-data="[object Object]" className="upsell"></div>
      </div>
    </div>
  );
}
