import Link from "next/link";
import Image from "next/image";
import "@/styles/payment-info.css";
export default function PaymentInfo() {
  return (
    <div id="__layout">
      <div
        data-fetch-key="data-v-1546f1ba:0"
        className="bg-main"
        data-v-1546f1ba=""
      >
        <div data-v-1546f1ba="">
          <header
            id="cpsHeader"
            className="cps-header d-flex align-items-center"
          >
            <nav className="d-flex align-items-center justify-content-between">
              <div className="box-logo">
                <Link href="https://cellphones.com.vn/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="269.231"
                    height={50}
                    viewBox="0 0 269.231 50"
                    className="logo-desk"
                  >
                    <defs>
                      <pattern
                        id="patternLogo"
                        preserveAspectRatio="xMidYMid slice"
                        width="100%"
                        height="100%"
                        viewBox="0 0 530 95"
                      >
                        <image
                          width={530}
                          height={95}
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAABfCAYAAAC9ZC4kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQzNUE1OThENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQzNUE1OTlENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDM1QTU5NkQ2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDM1QTU5N0Q2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMJt2kAAAPtSURBVHja7Nzbbts6FEDB0ND//zL7mhg1oqoSuS8zjwdBj8SbV4RYY875BQBwxcsQAABCAgAQEgCAkAAAhAQAgJAAAB5wGIJyznyfdwT4N7vPg/GCOGdid/91HnkiYWPZhHvG17gCJXgiAYDfuv3Sc5knEgCAkAAAhAQAICQAACEBACAkAAAhAQAICQCgBi+kAoCfMr95dvmLtzyRAACEBAAgJAAAIQEACAkAACEBAAgJAEBIAABCAgBo7uk3W+54O9hIeu3Dcty2ZnaN/yx6b7PovM3C69F5l/M+QryB86h8c8muezaPihno/z8Kj+0oNn9P39s0Z/Zb8JDZ/nl7FFqYla57NtpgM/A1jaLjPYrO393zNt2X/SYmfvd6YDH4IDOmVe5vFh73WXh8ZpDxibgenXeEDQkRYXOJnV73JgLNmXmLY+vTHN/awIFB1bmb1iViIkdIeBrhWn1wujdjIZCczU1j4uh2wwGu28F9fQxGwY1v7p7/APVHfM67p/dE6zV2JFuUFaJn+FAz/o0Owifmzrzlm7Pq89Y6JlaGxAg26RGue3w5FLuP/9i4trPO3RPzNjff45Pz5rwTE4/yx5Z54sf4u7+z/+YIMHaj+Nq4e4w7zFkHLX8xfFmgPiyxtjCuxu6262wXE55IAMT5IBQpseb66pOiVjEhJADgXFSICSEBAMuCokVMCAkAuBYUZ6JiVg8MIbGfr38C5I+KKzFR4vw/rAEf8gDOu1uC4rdwGN9+dr79bNo/tPVEAgDuj4px4mfeQyNlzAkJAHg2KD693v1vsZEuKIQEAKyLijMxkSoohAQArA2KM//tPSjCRoWQAICYgfEpKoQEAHApJsIFha9/3jOpAM47Vgvx1VFPJAAgd9BtfUIhJAAgf0x87YoJIQEAdWJCSAAAeWJiVUh4hzsAFIwJTyQEEIDzTkykCIlpc2Fuja25syeo5bVhkUZYqMPman9YmtOc42zunHcEs+uFVDPQpsmyuTq+LMaBZh7pOWdejpXIq/GEW6hYK/XHwtwZh6shJYAXhgQ4gI2J6wQh0XLDOmgAAcgnnkosDAkxQcVD19rIOT7mznknJpKGROYNbHNhPdQYK3NnjMTEYsfDC3Um3VwWjcOVXPvd/DnvVsSEdbYwJLJv7syLZRQaC+sn17XYNzmvxYejmAgdEgBQLSb4xtc/AQAhAQAICQBASAAAQgIAQEgAAEICABASAICQAACa82ZLAPjJa7D/gScSAICQAACEBAAgJAAAIQEAICQAACEBAAgJAKAGL6QCoINpCIQEdXhrHLDyvBERQgIA/PISkb+RAACEBAAgJAAAIQEAdPBHgAEAruC43nH9c2MAAAAASUVORK5CYII="
                        ></image>
                      </pattern>
                    </defs>{" "}
                    <rect
                      id="header__logo--bg"
                      width="269.231"
                      height={50}
                      fill="url(#patternLogo)"
                    ></rect>
                  </svg>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 120 120"
                    className="logo-mobile"
                  >
                    <title>Logo CellphoneS</title>{" "}
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <image
                          width={120}
                          height={120}
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAIAAAC2BqGFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTFGN0JGRkVDMEM1MTFFQTkwMkZBOEFENzdFODgwMUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTFGN0JGRkZDMEM1MTFFQTkwMkZBOEFENzdFODgwMUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MUY3QkZGQ0MwQzUxMUVBOTAyRkE4QUQ3N0U4ODAxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MUY3QkZGREMwQzUxMUVBOTAyRkE4QUQ3N0U4ODAxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgpTqXEAAAhlSURBVHja7JwLbBTH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"
                        ></image>
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>{" "}
              <div id="changeProvince" className="mb-1">
                <div className="box-local-store">
                  <button type="button" className="btn btn-secondary disabled">
                    <div className="box-icon">
                      <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 100 100"
                      >
                        <image
                          width={100}
                          height={100}
                          xlinkHref="data:image/png;base64,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"
                        ></image>
                      </svg>{" "}
                      <p className="title">Xem giá tại</p>
                    </div>{" "}
                    <div className="box-content">
                      <p className="text-center">
                        <span style={{ width: "100%" }}>Hà Nội</span>
                      </p>
                    </div>
                  </button>
                </div>
              </div>{" "}
              <div className="box-search">
                <form>
                  <div className="cps-group-input d-flex">
                    <div className="input-group-btn">
                      <button
                        type="submit"
                        className="text-dark border-0 pr-0 shadow-none outline-none"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="search"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="svg-inline--fa fa-search"
                        >
                          <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                            className=""
                          ></path>
                        </svg>
                      </button>
                    </div>{" "}
                    <input
                      id="inp$earch"
                      type="text"
                      placeholder="Bạn cần tìm gì?"
                      autoComplete="off"
                      defaultValue=""
                      className="cps-input"
                    />{" "}
                    <div
                      id="search_autocomplete"
                      className="box-search-result search-autocomplete is-hidden"
                    >
                      <div className="category-box is-hidden mb-1">
                        <p className="title-box">Có phải bạn muốn tìm</p>{" "}
                        <div className="list-cate"></div>
                      </div>{" "}
                      <div className="product-box mt-2">
                        <p className="title-box">Sản phẩm gợi ý</p>
                      </div>
                    </div>{" "}
                    <div className="is-hidden">
                      <span id="btn-close-search">×</span>
                    </div>{" "}
                    <div
                      className="suggest-search"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                </form>{" "}
                <div className="header-overlay"></div>
              </div>{" "}
              <Link
                href="tel:18002097"
                className="item-about about-1 about-contact"
              >
                <div className="about__box-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30.83 30.94"
                    width={24}
                    height={24}
                  >
                    <defs>
                      <style>{`
                .cls-1 {
                  fill: none;
                  stroke: #fff;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 1.8px;
                `}</style>
                    </defs>{" "}
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          d="M6.78,20.27a31,31,0,0,0,10.29,8.06A15.91,15.91,0,0,0,22.82,30h.41a4.77,4.77,0,0,0,3.7-1.59,0,0,0,0,0,0,0,14.62,14.62,0,0,1,1.17-1.2c.28-.28.57-.56.85-.85A2.91,2.91,0,0,0,29,22L25.33,18.4a2.94,2.94,0,0,0-2.13-1,3.07,3.07,0,0,0-2.15,1l-2.16,2.17c-.2-.12-.4-.22-.6-.32a6.74,6.74,0,0,1-.66-.36,22.82,22.82,0,0,1-5.47-5A13.11,13.11,0,0,1,10.32,12c.56-.52,1.09-1.05,1.61-1.58l.55-.56a3.07,3.07,0,0,0,1-2.17,3.08,3.08,0,0,0-1-2.18l-1.8-1.8L10.07,3c-.4-.41-.82-.83-1.23-1.21A3,3,0,0,0,6.72.9a3.07,3.07,0,0,0-2.15.94L2.31,4.09a4.64,4.64,0,0,0-1.38,3,11.09,11.09,0,0,0,.84,4.83,28.11,28.11,0,0,0,5,8.37Z"
                          className="cls-1"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>{" "}
                <div className="about__box-content">
                  <p className="title mb-0">
                    Gọi mua hàng
                    <br />
                    <strong>1800.2097</strong>
                  </p>
                </div>
              </Link>{" "}
              <Link
                rel="noopener"
                target="_blank"
                href="https://cellphones.com.vn/dia-chi-cua-hang"
                className="item-about about-2 about-store"
              >
                <div className="about__box-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 23.22 30.36"
                    width={25}
                    height={25}
                  >
                    <defs>
                      <style>{`
                .cls-1 {
                  fill: none;
                  stroke: #fff;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 1.8px;
                `}</style>
                    </defs>{" "}
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          d="M11.61.9A10.77,10.77,0,0,0,.9,11.69C.9,20.14,10.6,28.87,11,29.23a.87.87,0,0,0,1.18,0c.42-.36,10.12-9.09,10.12-17.54A10.77,10.77,0,0,0,11.61.9Z"
                          className="cls-1"
                        ></path>{" "}
                        <path
                          d="M11.61,16.35a4.74,4.74,0,1,1,4.74-4.74,4.75,4.75,0,0,1-4.74,4.74Z"
                          className="cls-1"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>{" "}
                <div className="about__box-content">
                  <p className="title mb-0">
                    Cửa hàng
                    <br />
                    gần bạn
                  </p>
                </div>
              </Link>{" "}
              <Link
                rel="noopener"
                target="_blank"
                href="https://smember.com.vn/order?company_id=cellphones"
                className="item-about about-3 about-delivery-tracking"
              >
                <div className="about__box-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44.22 25.85"
                    height={24}
                  >
                    <defs>
                      <style>{`
                .cls-1,
                .cls-2,
                .cls-3 {
                  fill: none;
                  stroke: #fff;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                }

                .cls-1 {
                  stroke-width: 1.66px;
                }

                .cls-2 {
                  stroke-width: 1.66px;
                }

                .cls-3 {
                  stroke-width: 1.8px;
                `}</style>
                    </defs>{" "}
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <circle
                          cx="7.66"
                          cy="22.02"
                          r={3}
                          className="cls-1"
                        ></circle>{" "}
                        <circle
                          cx="24.79"
                          cy="22.02"
                          r={3}
                          className="cls-2"
                        ></circle>{" "}
                        <path
                          d="M28.61,22h4.13a1.44,1.44,0,0,0,1.44-1.44v-6"
                          className="cls-3"
                        ></path>{" "}
                        <path
                          d="M27.12.9H14.82a1.44,1.44,0,0,0-1.44,1.44V20.58A1.44,1.44,0,0,0,14.82,22h6.29"
                          className="cls-3"
                        ></path>{" "}
                        <path
                          d="M10.27,5.92H6.75A2.65,2.65,0,0,0,4.54,7.11L1.33,12A2.64,2.64,0,0,0,.9,13.47v6.46A2.1,2.1,0,0,0,3,22h.75"
                          className="cls-3"
                        ></path>{" "}
                        <path
                          d="M34.18,3.47V2.34A1.44,1.44,0,0,0,32.74.9H25.08"
                          className="cls-3"
                        ></path>{" "}
                        <line
                          x1="43.32"
                          y1="6.97"
                          x2="32.57"
                          y2="6.97"
                          className="cls-3"
                        ></line>{" "}
                        <line
                          x1="40.5"
                          y1="11.05"
                          x2="32.57"
                          y2="11.05"
                          className="cls-3"
                        ></line>{" "}
                        <line
                          x1="42.09"
                          y1="16.33"
                          x2="38.07"
                          y2="16.33"
                          className="cls-3"
                        ></line>
                      </g>
                    </g>
                  </svg>
                </div>{" "}
                <div className="about__box-content">
                  <p className="title mb-0">
                    Tra cứu
                    <br />
                    đơn hàng
                  </p>
                </div>
              </Link>{" "}
              <Link
                href="javascript:void(0)"
                className="item-about about-4 about-cart"
              >
                <div className="about__box-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28.95 35.07"
                    width={25}
                    height={25}
                  >
                    <defs>
                      <style>{`
                .cls-1 {
                  fill: none;
                  stroke: #fff;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 1.8px;
                `}</style>
                    </defs>{" "}
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          d="M10,10.54V5.35A4.44,4.44,0,0,1,14.47.9h0a4.45,4.45,0,0,1,4.45,4.45v5.19"
                          className="cls-1"
                        ></path>{" "}
                        <path
                          d="M23.47,34.17h-18A4.58,4.58,0,0,1,.91,29.24L2.5,8.78A1.44,1.44,0,0,1,3.94,7.46H25a1.43,1.43,0,0,1,1.43,1.32L28,29.24A4.57,4.57,0,0,1,23.47,34.17Z"
                          className="cls-1"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>{" "}
                <div className="about__box-content">
                  <p className="title mb-0">
                    Giỏ
                    <br />
                    hàng
                  </p>{" "}
                  <span id="items_in_cart">2</span>
                </div>
              </Link>{" "}
              <div className="header-item-smember smember-laptop">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1663 11C20.1663 5.93743 16.0623 1.83337 10.9997 1.83337C5.93706 1.83337 1.83301 5.93743 1.83301 11C1.83301 16.0627 5.93706 20.1667 10.9997 20.1667C16.0623 20.1667 20.1663 16.0627 20.1663 11Z"
                    stroke="white"
                    strokeWidth="1.5"
                  ></path>{" "}
                  <path
                    d="M13.75 9.16675C13.75 10.6855 12.5188 11.9167 11 11.9167C9.48124 11.9167 8.25 10.6855 8.25 9.16675C8.25 7.64796 9.48124 6.41675 11 6.41675C12.5188 6.41675 13.75 7.64796 13.75 9.16675Z"
                    stroke="white"
                    strokeWidth="1.5"
                  ></path>{" "}
                  <path
                    d="M16.5 18.3334C16.5 16.3084 14.0376 14.6667 11 14.6667C7.96243 14.6667 5.5 16.3084 5.5 18.3334"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>{" "}
                <span>Toan</span>
              </div>{" "}
              <div className="header-item-smember smember-mobile">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1663 11C20.1663 5.93743 16.0623 1.83337 10.9997 1.83337C5.93706 1.83337 1.83301 5.93743 1.83301 11C1.83301 16.0627 5.93706 20.1667 10.9997 20.1667C16.0623 20.1667 20.1663 16.0627 20.1663 11Z"
                    stroke="white"
                    strokeWidth="1.5"
                  ></path>{" "}
                  <path
                    d="M13.75 9.16675C13.75 10.6855 12.5188 11.9167 11 11.9167C9.48124 11.9167 8.25 10.6855 8.25 9.16675C8.25 7.64796 9.48124 6.41675 11 6.41675C12.5188 6.41675 13.75 7.64796 13.75 9.16675Z"
                    stroke="white"
                    strokeWidth="1.5"
                  ></path>{" "}
                  <path
                    d="M16.5 18.3334C16.5 16.3084 14.0376 14.6667 11 14.6667C7.96243 14.6667 5.5 16.3084 5.5 18.3334"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>{" "}
                <span>Toan</span>
              </div>
            </nav>
          </header>{" "}
          <div className="clear"></div>{" "}
          <div className="modal-noti" data-v-4c858671="">
            <div
              className="modal-overlay"
              style={{ display: "none" }}
              data-v-4c858671=""
            ></div>
          </div>{" "}
          <div className="modal-noti" data-v-18d26ba4="">
            <div
              className="modal-overlay"
              style={{ display: "none" }}
              data-v-18d26ba4=""
            ></div>
          </div>
        </div>{" "}
        <div
          data-v-e0eaf940=""
          data-v-1546f1ba=""
          className="super-cart-container"
        >
          <div data-v-9572cbae="" data-v-e0eaf940="" className="cart-header">
            <div data-v-9572cbae="" className="go-back">
              <a
                data-v-9572cbae=""
                className="d-flex align-items-center button__back"
              >
                <svg
                  data-v-9572cbae=""
                  width={20}
                  height={17}
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-v-9572cbae=""
                    d="M19 8.5L1 8.5M1 8.5L8 1M1 8.5L8 16"
                    stroke="#121219"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                <p data-v-9572cbae=""></p>
              </a>{" "}
              <p data-v-9572cbae="" className="title">
                Thông tin
              </p>{" "}
              <div data-v-9572cbae=""></div>
            </div>
          </div>{" "}
          <div data-v-e0eaf940="" className="block-info">
            <div data-v-e0eaf940="" className="block-box container">
              <div data-v-62fbaf78="" data-v-e0eaf940="" className="nav">
                <div data-v-62fbaf78="" className="nav__item nav__item--active">
                  <span data-v-62fbaf78="">1. Thông tin</span>
                </div>
                <div data-v-62fbaf78="" className="nav__item">
                  <span data-v-62fbaf78="">2. Thanh toán</span>
                </div>
              </div>{" "}
              <div data-v-1c31d12e="" data-v-e0eaf940="" className="view-list">
                <div data-v-1c31d12e="" className="view-list__wrapper">
                  <div data-v-1c31d12e="" className="item">
                    <Image
                      width={85}
                      height={85}
                      data-v-1c31d12e=""
                      src="https://cdn2.cellphones.com.vn/358x,webp,q100/media/catalog/product/r/o/robot-hut-bui-ecovacs-deebot-t50-pro-gen-2-1_1.jpg"
                      alt="Robot hút bụi lau nhà Ecovacs Deebot T50 PRro Gen 2-Đen"
                      loading="lazy"
                      className="item__img"
                    />{" "}
                    <div data-v-1c31d12e="" className="item__info">
                      <p data-v-1c31d12e="" className="item__name">
                        Robot hút bụi lau nhà Ecovacs Deebot T50 PRro Gen 2-Đen
                      </p>{" "}
                      <div data-v-1c31d12e="" className="item__price">
                        <div data-v-1c31d12e="">
                          <div data-v-1c31d12e="" className="block-box-price">
                            <span
                              className="title-price"
                              style={{ display: "none" }}
                            >
                              :
                            </span>{" "}
                            <div className="box-info__box-price">
                              <p className="product__price--show">
                                15.490.000đ
                              </p>{" "}
                              <p className="product__price--through">
                                21.990.000đ
                              </p>{" "}
                            </div>
                          </div>
                        </div>{" "}
                        <p data-v-1c31d12e="">
                          Số lượng:
                          <span data-v-1c31d12e="" className="text-danger">
                            1
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div
                data-v-7c33153a=""
                data-v-e0eaf940=""
                className="block-customer"
              >
                <p data-v-7c33153a="">Thông tin khách hàng</p>{" "}
                <div data-v-7c33153a="" className="block-customer__wrapper">
                  <div data-v-7c33153a="" className="block-customer__main">
                    <div data-v-7c33153a="" className="customer-input__1">
                      <div data-v-7c33153a="" className="customer-name">
                        <p data-v-7c33153a="">Tran Van Toan</p>{" "}
                        <span
                          data-v-04f8aa41=""
                          data-v-7c33153a=""
                          className="level"
                          style={{
                            color: "rgb(231, 55, 183)",
                            border: "1px solid rgb(231, 55, 183)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          S-NULL
                        </span>
                      </div>{" "}
                      <p data-v-7c33153a="" className="customer-phone">
                        0792106261
                      </p>
                    </div>{" "}
                    <div data-v-7c33153a="" className="customer-input__2">
                      <div
                        data-v-1beb6092=""
                        data-v-7c33153a=""
                        className="box-input"
                      >
                        <input
                          data-v-1beb6092=""
                          type="email"
                          placeholder="Email"
                          maxLength={100}
                          autoComplete="off"
                          className="box-input__main"
                        />{" "}
                        <label data-v-1beb6092="">EMAIL</label>{" "}
                        <div
                          data-v-1beb6092=""
                          className="box-input__line"
                        ></div>
                      </div>{" "}
                      <br />{" "}
                      <span data-v-7c33153a="">
                        (*) Hóa đơn VAT sẽ được gửi qua email này
                      </span>
                    </div>
                  </div>{" "}
                  <div data-v-7c33153a="" className="block-customer__bottom">
                    <div data-v-7c33153a="" className="bottom__item">
                      <input
                        data-v-7c33153a=""
                        type="checkbox"
                        name="emailPromo"
                        id="emailPromo"
                      />{" "}
                      <label data-v-7c33153a="" htmlFor="emailPromo">
                        Nhận email thông báo và ưu đãi từ CellphoneS
                      </label>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div
                data-v-5ce7e51d=""
                data-v-e0eaf940=""
                className="block-payment-info"
              >
                <p data-v-5ce7e51d="" className="block-payment-info__title">
                  Thông tin nhận hàng
                </p>{" "}
                <div data-v-5ce7e51d="" className="block-payment-info__main">
                  <div data-v-5ce7e51d="" className="payment-info-method">
                    <div data-v-5ce7e51d="">
                      <input
                        data-v-5ce7e51d=""
                        id="payment-info-method-pickup"
                        value="pickup"
                        type="radio"
                      />{" "}
                      <label data-v-5ce7e51d="" className="mb-0">
                        Nhận tại cửa hàng
                      </label>
                    </div>{" "}
                    <div data-v-5ce7e51d="">
                      <input
                        data-v-5ce7e51d=""
                        id="payment-info-method-shipping"
                        value="shipping"
                        type="radio"
                      />{" "}
                      <label data-v-5ce7e51d="" className="mb-0">
                        Giao hàng tận nơi
                      </label>
                    </div>
                  </div>{" "}
                  <div data-v-5ce7e51d="" className="payment-info-main">
                    <div data-v-5ce7e51d="" className="payment-info-wrapper">
                      <div
                        data-v-034a50b0=""
                        data-v-5ce7e51d=""
                        className="pickup-wrapper"
                      >
                        <div data-v-034a50b0="" className="field-group">
                          <div
                            data-v-047571b3=""
                            data-v-034a50b0=""
                            className="box-input box-input--hasvalue"
                          >
                            <input
                              data-v-047571b3=""
                              type="text"
                              placeholder="Hà Nội"
                              autoComplete="off"
                              className="box-input__main"
                            />{" "}
                            <label data-v-047571b3="">TỈNH / THÀNH PHỐ</label>{" "}
                            <div
                              data-v-047571b3=""
                              className="box-input__line"
                            ></div>{" "}
                            <div
                              data-v-047571b3=""
                              className="box-input__arrow"
                            >
                              <svg
                                data-v-047571b3=""
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                              >
                                <path
                                  data-v-047571b3=""
                                  d="M8.00004 10.6668C7.84427 10.6671 7.69331 10.6128 7.57337 10.5135L3.57337 7.18012C3.28986 6.94448 3.25106 6.52362 3.4867 6.24012C3.72234 5.95661 4.1432 5.91781 4.4267 6.15345L8.00004 9.14012L11.5734 6.26012C11.7111 6.14827 11.8877 6.09594 12.0642 6.11471C12.2406 6.13348 12.4023 6.2218 12.5134 6.36012C12.6368 6.49869 12.6969 6.68244 12.6792 6.86716C12.6614 7.05188 12.5675 7.22086 12.42 7.33345L8.42004 10.5535C8.29665 10.6371 8.14877 10.677 8.00004 10.6668Z"
                                  fill="#717171"
                                ></path>
                              </svg>
                            </div>
                          </div>{" "}
                          <div
                            data-v-047571b3=""
                            data-v-034a50b0=""
                            className="box-input"
                          >
                            <input
                              data-v-047571b3=""
                              type="text"
                              placeholder="Chọn quận/huyện"
                              autoComplete="off"
                              className="box-input__main"
                            />{" "}
                            <label data-v-047571b3="">QUẬN / HUYỆN</label>{" "}
                            <div
                              data-v-047571b3=""
                              className="box-input__line"
                            ></div>{" "}
                            <div
                              data-v-047571b3=""
                              className="box-input__arrow"
                            >
                              <svg
                                data-v-047571b3=""
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                              >
                                <path
                                  data-v-047571b3=""
                                  d="M8.00004 10.6668C7.84427 10.6671 7.69331 10.6128 7.57337 10.5135L3.57337 7.18012C3.28986 6.94448 3.25106 6.52362 3.4867 6.24012C3.72234 5.95661 4.1432 5.91781 4.4267 6.15345L8.00004 9.14012L11.5734 6.26012C11.7111 6.14827 11.8877 6.09594 12.0642 6.11471C12.2406 6.13348 12.4023 6.2218 12.5134 6.36012C12.6368 6.49869 12.6969 6.68244 12.6792 6.86716C12.6614 7.05188 12.5675 7.22086 12.42 7.33345L8.42004 10.5535C8.29665 10.6371 8.14877 10.677 8.00004 10.6668Z"
                                  fill="#717171"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>{" "}
                        <div
                          data-v-047571b3=""
                          data-v-034a50b0=""
                          className="box-input"
                        >
                          <input
                            data-v-047571b3=""
                            type="text"
                            placeholder="Chọn địa chỉ cửa hàng"
                            autoComplete="off"
                            className="box-input__main"
                          />{" "}
                          <label data-v-047571b3="">CỬA HÀNG</label>{" "}
                          <div
                            data-v-047571b3=""
                            className="box-input__line"
                          ></div>{" "}
                          <div data-v-047571b3="" className="box-input__arrow">
                            <svg
                              data-v-047571b3=""
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon"
                            >
                              <path
                                data-v-047571b3=""
                                d="M8.00004 10.6668C7.84427 10.6671 7.69331 10.6128 7.57337 10.5135L3.57337 7.18012C3.28986 6.94448 3.25106 6.52362 3.4867 6.24012C3.72234 5.95661 4.1432 5.91781 4.4267 6.15345L8.00004 9.14012L11.5734 6.26012C11.7111 6.14827 11.8877 6.09594 12.0642 6.11471C12.2406 6.13348 12.4023 6.2218 12.5134 6.36012C12.6368 6.49869 12.6969 6.68244 12.6792 6.86716C12.6614 7.05188 12.5675 7.22086 12.42 7.33345L8.42004 10.5535C8.29665 10.6371 8.14877 10.677 8.00004 10.6668Z"
                                fill="#717171"
                              ></path>
                            </svg>
                          </div>
                        </div>{" "}
                        <div
                          data-v-1beb6092=""
                          data-v-034a50b0=""
                          className="box-input"
                        >
                          <input
                            data-v-1beb6092=""
                            type="text"
                            placeholder="Ghi chú khác (nếu có)"
                            maxLength={255}
                            autoComplete="off"
                            className="box-input__main"
                          />{" "}
                          <label data-v-1beb6092="">GHI CHÚ</label>{" "}
                          <div
                            data-v-1beb6092=""
                            className="box-input__line"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div
                  data-v-5ce7e51d=""
                  className="block-payment-info__main"
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  <div
                    data-v-1c7cd350=""
                    data-v-5ce7e51d=""
                    className="vat-info"
                  >
                    <div data-v-1c7cd350="" className="block-payment__checkvat">
                      <div data-v-1c7cd350="" className="checkvat__checkbox">
                        <div data-v-1c7cd350="" className="checkvat-confirm">
                          <p data-v-1c7cd350="">
                            Quý khách có muốn xuất hóa đơn công ty không?
                          </p>{" "}
                          <div data-v-1c7cd350="">
                            <div data-v-1c7cd350="">
                              <input
                                data-v-1c7cd350=""
                                id="VAT-Yes"
                                type="radio"
                                name="VAT"
                                value="true"
                              />{" "}
                              <label data-v-1c7cd350="" htmlFor="VAT-Yes">
                                Có
                              </label>
                            </div>{" "}
                            <div data-v-1c7cd350="">
                              <input
                                data-v-1c7cd350=""
                                id="VAT-No"
                                type="radio"
                                name="VAT"
                                value="false"
                              />{" "}
                              <label data-v-1c7cd350="" htmlFor="VAT-No">
                                Không
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div
                  data-v-5ce7e51d=""
                  style={{
                    marginTop: "20px",
                    marginBottom: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></div>
              </div>
            </div>
          </div>{" "}
          <div data-v-7fbfadac="" data-v-e0eaf940=""></div>{" "}
          <div data-v-e71a4ed4="" data-v-e0eaf940="">
            <div data-v-e71a4ed4="" className="bottom-bar container mt-auto">
              <div
                data-v-e71a4ed4=""
                className="total-box d-flex justify-content-between align-items-start"
              >
                <p data-v-e71a4ed4="" className="title-temp">
                  Tổng tiền tạm tính:
                </p>{" "}
                <div
                  data-v-e71a4ed4=""
                  className="price d-flex flex-column align-items-end"
                >
                  <span data-v-e71a4ed4="" className="total">
                    15.490.000đ
                  </span>
                </div>
              </div>{" "}
              <div data-v-e71a4ed4="" className="btn-submit mt-2">
                <button
                  data-v-e71a4ed4=""
                  className="button__go-next btn btn-danger d-flex flex-column justify-content-center align-items-center w-100"
                >
                  Tiếp tục
                </button>
              </div>
            </div>{" "}
            <div data-v-e71a4ed4="" className="clear"></div>
          </div>{" "}
          <div data-v-e0eaf940=""></div>
        </div>{" "}
        <div data-v-1546f1ba=""></div>{" "}
        <button
          id="backToTop"
          title="Back to top"
          className="btn-back-to-top button__back-to-top"
          data-v-1546f1ba=""
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-up"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="icon-up svg-inline--fa fa-chevron-up"
          >
            <path
              fill="currentColor"
              d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
              className=""
            ></path>
          </svg>{" "}
          <strong>Lên đầu</strong>
        </button>
      </div>
    </div>
  );
}
