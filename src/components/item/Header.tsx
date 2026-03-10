import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header id="cpsHeader" className="bannerTopHead">
      <div id="topBarHeader" style={{ background: "#FFF1BF", display: "none" }}>
        <div className="is-flex is-justify-content-center is-align-content-center">
          <div
            className="pulsingButton mr-3"
            style={{ background: "radial-gradient(#BC1B24, #BC1B24)" }}
          ></div>{" "}
          <Link
            href="https://cellphones.com.vn/qua-tang-tet"
            style={{
              background:
                "linear-gradient(to right, rgb(188, 27, 36), rgb(188, 27, 36)) text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tết “ANt” khang - Deal như ý! Mua ngay!
          </Link>
        </div>
      </div>{" "}
      <div id="topInfoBar" className="top-info-bar">
        <div className="promo-info">
          <div className="promo-content">
            <span className="promo-item">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 6C4.5 7.06087 4.92143 8.07828 5.67157 8.82843C6.42172 9.57857 7.43913 10 8.5 10C9.56087 10 10.5783 9.57857 11.3284 8.82843C12.0786 8.07828 12.5 7.06087 12.5 6C12.5 4.93913 12.0786 3.92172 11.3284 3.17157C10.5783 2.42143 9.56087 2 8.5 2C7.43913 2 6.42172 2.42143 5.67157 3.17157C4.92143 3.92172 4.5 4.93913 4.5 6Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M8.5 10L10.7667 13.9267L11.832 11.7713L14.2307 11.926L11.964 8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M5.03461 8L2.76794 11.9267L5.16661 11.7713L6.23194 13.926L8.49861 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>{" "}
              <span>
                Sản phẩm <strong>Chính hãng - Xuất VAT</strong> đầy đủ
              </span>
            </span>{" "}
          </div>
        </div>{" "}
        <div className="quick-action">
          <Link href="/dia-chi-cua-hang">
            <svg
              width={17}
              height={16}
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.71314 14.6667H11.2869C12.8261 14.6667 14.0738 13.476 14.0738 12.0072V8.7554C14.0738 8.28325 14.2704 7.83043 14.6202 7.49657C15.4308 6.72304 15.3255 5.44141 14.3984 4.79798L10.1392 1.84204C9.16199 1.16382 7.83809 1.16382 6.86086 1.84204L2.60171 4.79798C1.67462 5.44141 1.56924 6.72304 2.37983 7.49657C2.72969 7.83043 2.92624 8.28325 2.92624 8.7554V12.0072C2.92624 13.476 4.17398 14.6667 5.71314 14.6667Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
              <mask id="path-2-inside-1_4926_351287" fill="white">
                <path d="M6.10022 8.1706V6H10.7669V7.87744L10.1092 7.0628H7.16303V7.55936L8.49892 9.00931L8.41359 9.13139L6.10022 8.1706Z"></path>
              </mask>{" "}
              <path
                d="M6.10022 8.1706V6H10.7669V7.87744L10.1092 7.0628H7.16303V7.55936L8.49892 9.00931L8.41359 9.13139L6.10022 8.1706Z"
                fill="white"
              ></path>{" "}
              <path
                d="M6.10022 8.1706H4.60022V9.17184L5.52489 9.55587L6.10022 8.1706ZM6.10022 6V4.5H4.60022V6H6.10022ZM10.7669 6H12.2669V4.5H10.7669V6ZM10.7669 7.87744L9.59979 8.81971L12.2669 12.1232V7.87744H10.7669ZM10.1092 7.0628L11.2763 6.12053L10.826 5.5628H10.1092V7.0628ZM7.16303 7.0628V5.5628H5.66303V7.0628H7.16303ZM7.16303 7.55936H5.66303V8.14502L6.05987 8.57574L7.16303 7.55936ZM8.49892 9.00931L9.72837 9.86865L10.4194 8.88001L9.60208 7.99292L8.49892 9.00931ZM8.41359 9.13139L7.83826 10.5167L8.95209 10.9793L9.64304 9.99073L8.41359 9.13139ZM6.10022 8.1706H7.60022V6H6.10022H4.60022V8.1706H6.10022ZM6.10022 6V7.5H10.7669V6V4.5H6.10022V6ZM10.7669 6H9.26689V7.87744H10.7669H12.2669V6H10.7669ZM10.7669 7.87744L11.934 6.93517L11.2763 6.12053L10.1092 7.0628L8.94208 8.00508L9.59979 8.81971L10.7669 7.87744ZM10.1092 7.0628V5.5628H7.16303V7.0628V8.5628H10.1092V7.0628ZM7.16303 7.0628H5.66303V7.55936H7.16303H8.66303V7.0628H7.16303ZM7.16303 7.55936L6.05987 8.57574L7.39576 10.0257L8.49892 9.00931L9.60208 7.99292L8.26619 6.54297L7.16303 7.55936ZM8.49892 9.00931L7.26948 8.14997L7.18415 8.27205L8.41359 9.13139L9.64304 9.99073L9.72837 9.86865L8.49892 9.00931ZM8.41359 9.13139L8.98893 7.74611L6.67555 6.78532L6.10022 8.1706L5.52489 9.55587L7.83826 10.5167L8.41359 9.13139Z"
                fill="white"
                mask="url(#path-2-inside-1_4926_351287)"
              ></path>{" "}
              <mask id="path-4-inside-2_4926_351287" fill="white">
                <path d="M6.10022 12.0786V10.1306L6.83164 11.0156H9.70409V10.1129L8.40388 8.62193L8.49407 8.50281L10.7669 9.57617V12.0786H6.10022Z"></path>
              </mask>{" "}
              <path
                d="M6.10022 12.0786V10.1306L6.83164 11.0156H9.70409V10.1129L8.40388 8.62193L8.49407 8.50281L10.7669 9.57617V12.0786H6.10022Z"
                fill="white"
              ></path>{" "}
              <path
                d="M6.10022 12.0786H4.60022V13.5786H6.10022V12.0786ZM6.10022 10.1306L7.25643 9.17499L4.60022 5.96117V10.1306H6.10022ZM6.83164 11.0156L5.67543 11.9712L6.12537 12.5156H6.83164V11.0156ZM9.70409 11.0156V12.5156H11.2041V11.0156H9.70409ZM9.70409 10.1129H11.2041V9.55067L10.8346 9.12697L9.70409 10.1129ZM8.40388 8.62193L7.20796 7.71651L6.47189 8.68875L7.27338 9.60782L8.40388 8.62193ZM8.49407 8.50281L9.13462 7.14646L8.03332 6.62635L7.29815 7.59739L8.49407 8.50281ZM10.7669 9.57617H12.2669V8.6257L11.4074 8.21982L10.7669 9.57617ZM10.7669 12.0786V13.5786H12.2669V12.0786H10.7669ZM6.10022 12.0786H7.60022V10.1306H6.10022H4.60022V12.0786H6.10022ZM6.10022 10.1306L4.94401 11.0862L5.67543 11.9712L6.83164 11.0156L7.98785 10.06L7.25643 9.17499L6.10022 10.1306ZM6.83164 11.0156V12.5156H9.70409V11.0156V9.51556H6.83164V11.0156ZM9.70409 11.0156H11.2041V10.1129H9.70409H8.20409V11.0156H9.70409ZM9.70409 10.1129L10.8346 9.12697L9.53438 7.63604L8.40388 8.62193L7.27338 9.60782L8.57359 11.0987L9.70409 10.1129ZM8.40388 8.62193L9.5998 9.52735L9.68998 9.40823L8.49407 8.50281L7.29815 7.59739L7.20796 7.71651L8.40388 8.62193ZM8.49407 8.50281L7.85351 9.85916L10.1263 10.9325L10.7669 9.57617L11.4074 8.21982L9.13462 7.14646L8.49407 8.50281ZM10.7669 9.57617H9.26689V12.0786H10.7669H12.2669V9.57617H10.7669ZM10.7669 12.0786V10.5786H6.10022V12.0786V13.5786H10.7669V12.0786Z"
                fill="white"
                mask="url(#path-4-inside-2_4926_351287)"
              ></path>
            </svg>{" "}
            <span>Cửa hàng gần bạn</span>
          </Link>{" "}
        </div>
      </div>{" "}
      <div id="mainHead" className="cps-container nav-container">
        <nav className="cps-navbar">
          <Link
            href="https://cellphones.com.vn/"
            className="navbar__item button__home"
          >
            <div className="cps-navbar__logo logo__desktop">
              <Image
                width={169}
                height={43}
                src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Web/Logo/Logo_CPS.png"
                alt="CellphoneS"
              />
            </div>{" "}
            {/* <div className="cps-navbar__logo logo__mobile">
              <Image
                fill
                src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Web/Logo/Logo-CPS-m.png"
                alt="CellphoneS"
              />
            </div> */}
          </Link>{" "}
          <div className="button-group menu-change-province">
            <button className="navbar__item button__menu">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.7041 4H10.7041V10H4.7041V4Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14.7041 4H20.7041V10H14.7041V4Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M4.7041 14H10.7041V20H4.7041V14Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14.7041 17C14.7041 17.7956 15.0202 18.5587 15.5828 19.1213C16.1454 19.6839 16.9085 20 17.7041 20C18.4998 20 19.2628 19.6839 19.8254 19.1213C20.388 18.5587 20.7041 17.7956 20.7041 17C20.7041 16.2044 20.388 15.4413 19.8254 14.8787C19.2628 14.3161 18.4998 14 17.7041 14C16.9085 14 16.1454 14.3161 15.5828 14.8787C15.0202 15.4413 14.7041 16.2044 14.7041 17Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>{" "}
              <span className="navbar__item-text">Danh mục</span>{" "}
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.7041 9L12.7041 15L18.7041 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>{" "}
            <div
              id="menu-main"
              className="menu-container"
              style={{ display: "none" }}
            >
              <div className="menu-wrapper space-bread-crumb">
                <div className="menu-tree">
                  <div className="label-menu-tree">
                    <div className="label-item multiple">
                      <div className="right-content">
                        <i className="icons-cate"></i>{" "}
                        <Link
                          href="https://cellphones.com.vn/mobile.html"
                          className="multiple-link"
                        >
                          <span>Điện thoại</span>
                        </Link>{" "}
                        <span>,&nbsp;</span>
                        <Link
                          href="https://cellphones.com.vn/tablet.html"
                          className="multiple-link"
                        >
                          <span>Tablet</span>
                        </Link>{" "}
                        <span style={{ display: "none" }}>,&nbsp;</span>
                      </div>{" "}
                      <div className="icon-right">
                        <svg
                          height={15}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className="menu-tree-child columns box m-0"
                  style={{ display: "none" }}
                ></div>
              </div>
            </div>{" "}
            <button className="navbar__item button__change-province">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.7041 11C9.7041 11.7956 10.0202 12.5587 10.5828 13.1213C11.1454 13.6839 11.9085 14 12.7041 14C13.4998 14 14.2628 13.6839 14.8254 13.1213C15.388 12.5587 15.7041 11.7956 15.7041 11C15.7041 10.2044 15.388 9.44129 14.8254 8.87868C14.2628 8.31607 13.4998 8 12.7041 8C11.9085 8 11.1454 8.31607 10.5828 8.87868C10.0202 9.44129 9.7041 10.2044 9.7041 11Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M13.7239 21.206C13.3419 21.4323 12.8955 21.525 12.455 21.4696C12.0145 21.4142 11.605 21.2138 11.2909 20.9L7.04692 16.657C6.14375 15.7536 5.47005 14.647 5.08221 13.4298C4.69436 12.2127 4.60364 10.9203 4.81763 9.66088C5.03162 8.40146 5.5441 7.2116 6.3122 6.19084C7.0803 5.17008 8.08168 4.34811 9.23257 3.79368C10.3835 3.23926 11.6504 2.96851 12.9274 3.00408C14.2043 3.03965 15.4542 3.38051 16.5725 3.99814C17.6907 4.61578 18.6448 5.49222 19.3548 6.55416C20.0649 7.6161 20.5104 8.83264 20.6539 10.102"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M21.7041 15H19.2041C18.8063 15 18.4247 15.158 18.1434 15.4393C17.8621 15.7206 17.7041 16.1022 17.7041 16.5C17.7041 16.8978 17.8621 17.2794 18.1434 17.5607C18.4247 17.842 18.8063 18 19.2041 18H20.2041C20.6019 18 20.9835 18.158 21.2648 18.4393C21.5461 18.7206 21.7041 19.1022 21.7041 19.5C21.7041 19.8978 21.5461 20.2794 21.2648 20.5607C20.9835 20.842 20.6019 21 20.2041 21H17.7041"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M19.7041 21V22M19.7041 14V15"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>{" "}
              <span className="navbar__item-text">
                <span className="action-text">Xem giá tại</span>
                Hà Nội
              </span>{" "}
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-chevron-down"
              >
                <path
                  d="M6.7041 9L12.7041 15L18.7041 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>{" "}
          <div className="box-search navbar__item form-search">
            <form>
              <div className="cps-group-input is-flex">
                <div className="input-group-btn">
                  <button
                    type="submit"
                    className="text-dark border-0 shadow-none outline-none"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_4895_10933)">
                        <path
                          d="M3.7041 10C3.7041 10.9193 3.88516 11.8295 4.23694 12.6788C4.58873 13.5281 5.10434 14.2997 5.75435 14.9497C6.40436 15.5998 7.17604 16.1154 8.02532 16.4672C8.8746 16.8189 9.78485 17 10.7041 17C11.6234 17 12.5336 16.8189 13.3829 16.4672C14.2322 16.1154 15.0038 15.5998 15.6538 14.9497C16.3039 14.2997 16.8195 13.5281 17.1713 12.6788C17.523 11.8295 17.7041 10.9193 17.7041 10C17.7041 9.08075 17.523 8.1705 17.1713 7.32122C16.8195 6.47194 16.3039 5.70026 15.6538 5.05025C15.0038 4.40024 14.2322 3.88463 13.3829 3.53284C12.5336 3.18106 11.6234 3 10.7041 3C9.78485 3 8.8746 3.18106 8.02532 3.53284C7.17604 3.88463 6.40436 4.40024 5.75435 5.05025C5.10434 5.70026 4.58873 6.47194 4.23694 7.32122C3.88516 8.1705 3.7041 9.08075 3.7041 10Z"
                          stroke="#1D1D20"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M21.7041 21L15.7041 15"
                          stroke="#1D1D20"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>{" "}
                      <defs>
                        <clipPath id="clip0_4895_10933">
                          <rect
                            width={24}
                            height={24}
                            fill="white"
                            transform="translate(0.704102)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>{" "}
                <input
                  id="inp$earch"
                  type="text"
                  placeholder="Bạn muốn mua gì hôm nay?"
                  autoComplete="off"
                  defaultValue=""
                  className="cps-input"
                />{" "}
                <span id="btn-close-search" style={{ display: "none" }}>
                  ×
                </span>{" "}
                <div
                  id="search_autocomplete"
                  className="box-search-result search-autoComplete is-hidden mb-0"
                >
                  <div className="category-box is-hidden mb-1">
                    <p className="title-box">Có phải bạn muốn tìm</p>{" "}
                    <div className="list-cate"></div>
                  </div>{" "}
                  <div className="product-box mt-2">
                    <p className="title-box">Sản phẩm gợi ý</p>
                  </div>
                </div>{" "}
                <div
                  id="suggestSearch"
                  className="suggest-search"
                  style={{ display: "none" }}
                ></div>
              </div>
            </form>{" "}
            <div id="overlaySearch" className="header-overlay"></div>
          </div>{" "}
          <Link className="navbar__item button__noti" href="#">
            <span className="navbar__item-text">Thông báo</span>{" "}
            <div className="noti-box">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 5.36133C10 4.8309 10.2107 4.32219 10.5858 3.94711C10.9609 3.57204 11.4696 3.36133 12 3.36133C12.5304 3.36133 13.0391 3.57204 13.4142 3.94711C13.7893 4.32219 14 4.8309 14 5.36133C15.1484 5.90436 16.1274 6.74965 16.8321 7.80663C17.5367 8.8636 17.9404 10.0924 18 11.3613V14.3613C18.0753 14.983 18.2954 15.5784 18.6428 16.0995C18.9902 16.6205 19.4551 17.0527 20 17.3613H4C4.54494 17.0527 5.00981 16.6205 5.35719 16.0995C5.70457 15.5784 5.92474 14.983 6 14.3613V11.3613C6.05956 10.0924 6.4633 8.8636 7.16795 7.80663C7.8726 6.74965 8.85159 5.90436 10 5.36133Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M9 17.3613V18.3613C9 19.157 9.31607 19.92 9.87868 20.4826C10.4413 21.0453 11.2044 21.3613 12 21.3613C12.7956 21.3613 13.5587 21.0453 14.1213 20.4826C14.6839 19.92 15 19.157 15 18.3613V17.3613"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>{" "}
              <span className="items-in-noti">1</span>
            </div>
          </Link>{" "}
          <div className="button-group">
            <Link className="navbar__item button__cart" href="/cart">
              <span className="navbar__item-text">Giỏ hàng</span>{" "}
              <div className="cart-box">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 20C16.5 19.4477 16.9477 19 17.5 19C18.0523 19 18.5 19.4477 18.5 20C18.5 20.5523 18.0523 21 17.5 21C16.9477 21 16.5 20.5523 16.5 20Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M6.5 20C6.5 19.4477 6.94772 19 7.5 19C8.05228 19 8.5 19.4477 8.5 20C8.5 20.5523 8.05228 21 7.5 21C6.94772 21 6.5 20.5523 6.5 20Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M2.5 3H3.26772C3.74998 3 4.16354 3.3442 4.2511 3.81845L4.65385 6M4.65385 6L6.1978 14.3631C6.37291 15.3116 7.20004 16 8.16457 16H17.3968C17.8625 16 18.2665 15.6786 18.3712 15.2249L20.2173 7.22486C20.3619 6.59824 19.886 6 19.2429 6H4.65385Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>{" "}
                <span className="items-in-cart">1</span>
              </div>
            </Link>{" "}
            <div className="navbar__item button__login">
              <button className="smember">
                <span className="navbar__item-text">Toan</span>{" "}
                <span className="noti-box">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4926_290388)">
                      <path
                        d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M9 10C9 10.7956 9.31607 11.5587 9.87868 12.1213C10.4413 12.6839 11.2044 13 12 13C12.7956 13 13.5587 12.6839 14.1213 12.1213C14.6839 11.5587 15 10.7956 15 10C15 9.20435 14.6839 8.44129 14.1213 7.87868C13.5587 7.31607 12.7956 7 12 7C11.2044 7 10.4413 7.31607 9.87868 7.87868C9.31607 8.44129 9 9.20435 9 10Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M6.16797 18.849C6.41548 18.0252 6.92194 17.3032 7.61222 16.79C8.30249 16.2768 9.13982 15.9997 9.99997 16H14C14.8612 15.9997 15.6996 16.2774 16.3904 16.7918C17.0811 17.3062 17.5874 18.0298 17.834 18.855"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </g>{" "}
                    <defs>
                      <clipPath id="clip0_4926_290388">
                        <rect width={24} height={24} fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
