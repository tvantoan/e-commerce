import Link from "next/link";
import Image from "next/image";
import "@/styles/auth.css";
export default function Member() {
  return (
    <div className="tablet:pb-0 w-full bg-neutral-200 pb-[70px]">
      <header
        id="header"
        className="from-primary-300 to-primary-500 tablet:flex fixed top-0 right-0 left-0 z-1000 hidden max-w-screen flex-col items-center justify-center bg-linear-to-b text-white"
      >
        <div className="px-3x-large mx-auto flex h-[72px] w-full max-w-[1440px] items-center py-[16px]">
          <Link
            title="CellphoneS"
            className="mr-[28px] flex h-10 items-center transition-all duration-300 md:hover:scale-95"
            href="https://cellphones.com.vn"
          >
            <div>
              <svg
                className="w-[130px] overflow-hidden transition-all duration-200 lg:w-[169px]"
                width={169}
                height={28}
                viewBox="0 0 169 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Logo CellphoneS</title>
                <path
                  d="M4.41629 20.9623H4.40528C0.348454 20.6122 -0.0258864 18.2113 0.00127161 17.1954V17.1638V10.1468V10.1365C0.24863 6.97884 3.82982 6.94287 3.98176 6.94287H12.6151V9.75923H5.48719C4.79356 9.75923 4.28563 9.91924 3.97882 10.2356C3.60668 10.6187 3.62136 11.1443 3.6265 11.3175C3.6265 11.3373 3.62724 11.3535 3.62724 11.366V16.6405C3.62724 18.0417 5.55913 18.129 5.57821 18.129H12.6143V20.963H4.41482L4.41629 20.9623Z"
                  fill="white"
                ></path>
                <path
                  d="M12.3499 7.20715H3.98227C3.74666 7.20715 0.490631 7.28569 0.266761 10.1564V17.1631C0.266761 17.412 0.0164668 20.3171 4.42708 20.6974H12.3499V18.3941H5.57872C5.34311 18.3941 3.36204 18.2018 3.36204 16.6405V11.366C3.36204 11.1568 3.19616 9.4943 5.48697 9.4943H12.3499V7.20789V7.20715Z"
                  fill="white"
                ></path>
                <path
                  d="M37.4663 20.9623V0.000732422L33.7831 0.000732422V20.9623H37.4663Z"
                  fill="white"
                ></path>
                <path
                  d="M37.2014 0.265747H34.0488V20.6974H37.2014V0.265747Z"
                  fill="white"
                ></path>
                <path
                  d="M44.458 20.9623V0.000732422L40.7748 0.000732422V20.9623H44.458Z"
                  fill="white"
                ></path>
                <path
                  d="M44.1931 0.265747H41.0405V20.6974H44.1931V0.265747Z"
                  fill="white"
                ></path>
                <path
                  d="M78.6971 20.9623V12.216C78.6971 10.7333 77.6908 10.4221 76.846 10.4221H70.891C70.3794 10.4221 70.3794 10.6357 70.3794 10.7634V20.9623H66.7256V0.000732422H70.3794V6.94218H77.5793C79.7761 6.94218 80.9212 7.87289 81.4951 8.65313C82.1132 9.49356 82.3334 10.5109 82.3334 11.1818V20.9623H78.6971Z"
                  fill="white"
                ></path>
                <path
                  d="M66.9907 0.265747V20.6974H70.1146V10.7634C70.1146 10.6064 70.1322 10.1571 70.8912 10.1571H76.8462C77.6183 10.1571 78.9623 10.4236 78.9623 12.2168V20.6981H82.0686V11.1825C82.0686 10.1571 81.4667 7.20793 77.5794 7.20793H70.1146V0.266481H66.9907V0.265747Z"
                  fill="white"
                ></path>
                <path
                  d="M90.1226 20.9623C86.5069 20.9623 85.2246 18.9577 85.2246 17.2416V10.6452C85.2246 8.08718 87.5448 6.94214 89.8437 6.94214H96.3146C98.6135 6.94214 100.934 8.08718 100.934 10.6452V17.2416C100.934 18.9577 99.6507 20.9623 96.035 20.9623H90.1226ZM90.9168 9.7585C89.2675 9.7585 88.9306 10.7678 88.9306 11.0379V16.9143C88.9306 17.6402 89.9171 18.1283 90.8383 18.1283H95.3193C96.2405 18.1283 97.227 17.6402 97.227 16.9143V11.0379C97.227 10.7678 96.8901 9.7585 95.2408 9.7585H90.9168Z"
                  fill="white"
                ></path>
                <path
                  d="M96.3138 7.20715H89.8429C88.0108 7.20715 85.4888 8.05346 85.4888 10.6452V17.2417C85.4888 18.9952 86.8239 20.6974 90.1218 20.6974H96.0342C99.3328 20.6974 100.667 18.9959 100.667 17.2417V10.6452C100.667 8.05346 98.1451 7.20715 96.3131 7.20715H96.3138ZM97.4919 16.9143C97.4919 17.8171 96.3659 18.3933 95.3192 18.3933H90.8382C89.7907 18.3933 88.6655 17.8171 88.6655 16.9143V11.0379C88.6655 10.6584 89.0846 9.49357 90.9167 9.49357H95.2407C97.0728 9.49357 97.4919 10.6584 97.4919 11.0379V16.9143Z"
                  fill="white"
                ></path>
                <path
                  d="M115.45 20.9623V11.8321C115.45 10.8353 114.486 10.422 113.97 10.422H108.77C108.254 10.422 107.29 10.836 107.29 11.8321V20.9623H103.619V10.8199C103.619 9.32104 104.837 6.94214 108.107 6.94214H114.634C117.904 6.94214 119.122 9.3203 119.122 10.8199V20.9623H115.451H115.45Z"
                  fill="white"
                ></path>
                <path
                  d="M114.633 7.20715H108.106C104.93 7.20715 103.883 9.49357 103.883 10.8199V20.6974H107.024V11.8321C107.024 10.6452 108.141 10.1571 108.77 10.1571H113.97C114.598 10.1571 115.716 10.6459 115.716 11.8321V20.6974H118.857V10.8199C118.857 9.49357 117.81 7.20715 114.634 7.20715H114.633Z"
                  fill="white"
                ></path>
                <path
                  d="M47.7385 27.9984V10.3971C47.7385 9.00835 48.819 6.94287 51.7946 6.94287H59.15C60.7149 6.94287 63.3632 7.67027 63.3632 10.3971V17.2688C63.3632 18.6487 62.6578 20.963 57.9323 20.963H51.3917V27.9992H47.7378L47.7385 27.9984ZM53.2567 9.7585C51.5025 9.7585 51.3931 11.0511 51.3931 11.0643V17.7657C51.3931 18.0006 51.6853 18.1254 51.7572 18.129H57.9514C59.4304 18.129 59.7629 17.0978 59.7629 16.7359V11.0291C59.7629 9.81282 58.0043 9.7585 57.9859 9.7585H53.2567Z"
                  fill="white"
                ></path>
                <path
                  d="M59.1509 7.20716H51.7955C49.021 7.20716 48.0044 9.07445 48.0044 10.3964V27.7328H51.1283V20.6966H57.9347C62.1097 20.6966 63.1006 18.8513 63.1006 17.2674V10.3957C63.1006 7.62113 60.1734 7.20642 59.1524 7.20642L59.1509 7.20716ZM60.0281 16.736C60.0281 17.2593 59.5745 18.3941 57.9516 18.3941H51.7566C51.5819 18.3941 51.1283 18.1849 51.1283 17.7658V11.0643C51.1283 10.7854 51.4425 9.49357 53.2576 9.49357H57.9868C58.458 9.49357 60.0288 9.73799 60.0288 11.0291V16.736H60.0281Z"
                  fill="white"
                ></path>
                <path
                  d="M19.9069 20.9623C17.2645 20.9623 15.4185 19.4106 15.4185 17.1895V10.8022C15.4185 9.21387 16.1319 8.05122 17.4825 7.43906C18.5798 6.94214 19.774 6.94214 20.166 6.94214H26.2413C28.1798 6.94214 29.5531 7.43612 30.3231 8.41088C31.0086 9.27773 31.0086 10.2811 31.0086 10.6107V15.3435H19.0371V16.0907C19.0371 16.9436 19.2742 17.5338 19.7417 17.845C20.1271 18.1012 20.6034 18.1305 20.9286 18.1305C20.9697 18.1305 21.0086 18.1305 21.0431 18.1298C21.0739 18.1298 21.1018 18.1298 21.1275 18.1298H31.0079V20.9638H19.9054L19.9069 20.9623ZM27.3181 12.5793V10.8683C27.3181 10.1739 26.3874 9.75923 25.4867 9.75923H21.2853C19.4188 9.75923 19.0371 10.7788 19.0371 11.0518V12.58H27.3173L27.3181 12.5793Z"
                  fill="white"
                ></path>
                <path
                  d="M30.7443 15.0778V10.61C30.7443 9.71961 30.5696 7.20712 26.242 7.20712H20.2562C19.5581 7.20712 15.6841 7.13739 15.6841 10.8023V17.1895C15.6841 19.1787 17.3246 20.6973 19.9075 20.6973H30.745V18.394H21.1296C20.6063 18.394 18.7735 18.5335 18.7735 16.0907V15.0785H30.745L30.7443 15.0778ZM18.7728 11.0511C18.7728 10.698 19.2043 9.49354 21.286 9.49354H25.4874C26.5084 9.49354 27.5837 9.99119 27.5837 10.8676V12.8443H18.7728V11.0511Z"
                  fill="white"
                ></path>
                <path
                  d="M126.744 20.9535C124.102 20.9535 122.256 19.4018 122.256 17.1807V10.7935C122.256 9.20508 122.97 8.04243 124.32 7.43027C125.417 6.93335 126.611 6.93335 127.003 6.93335H133.079C135.017 6.93335 136.391 7.42733 137.16 8.40209C137.846 9.26894 137.846 10.2723 137.846 10.6019V15.3347H125.874V16.0819C125.874 16.9348 126.112 17.525 126.579 17.8362C126.964 18.0924 127.441 18.1217 127.766 18.1217C127.807 18.1217 127.846 18.1217 127.881 18.121C127.911 18.121 127.939 18.121 127.965 18.121H137.846V20.955H126.744L126.744 20.9535ZM134.173 12.5793V10.8683C134.173 10.174 133.242 9.75925 132.342 9.75925H128.14C126.274 9.75925 125.893 10.7788 125.893 11.0518V12.58H134.173V12.5793Z"
                  fill="white"
                ></path>
                <path
                  d="M137.582 15.069V10.6012C137.582 9.71082 137.407 7.19834 133.079 7.19834H127.094C126.396 7.19834 122.521 7.1286 122.521 10.7935C122.521 11.5612 122.521 12.8355 122.521 12.8355V17.1807C122.521 19.1699 124.162 20.6885 126.745 20.6885H137.582V18.3852H127.967C127.444 18.3852 125.611 18.5247 125.611 16.0819V15.0698H137.582L137.582 15.069ZM125.628 11.0511C125.628 10.6981 126.059 9.49356 128.141 9.49356H132.342C133.363 9.49356 134.439 9.99121 134.439 10.8676V12.8443H125.628V11.0511Z"
                  fill="white"
                ></path>
                <path
                  d="M144.158 0.00109863V27.9988H168.704V0.00109863H144.158ZM168.49 27.7838H144.373V0.215427H168.49V27.7838Z"
                  fill="white"
                ></path>
                <path
                  d="M148.322 10.9811V3.43774H164.54V9.96228L162.254 7.13124H152.016V8.85687L156.658 13.8958L156.362 14.32L148.322 10.9811Z"
                  fill="white"
                ></path>
                <path
                  d="M148.322 24.5623V17.7926L150.864 20.868H160.847V17.7309L156.328 12.5496L156.641 12.1356L164.54 15.8658V24.5623H148.322Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </Link>
          <div className="overlay pointer-events-none fixed inset-0 top-[72px] z-[1000] bg-black/55 opacity-0 backdrop-blur-[3px] transition-opacity duration-200"></div>
          <div className="relative mr-[21px] h-fit max-w-[779px] flex-1">
            <form>
              <div className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small cpsui:peer z-10 w-full overflow-hidden rounded-[10px] border-0 border-transparent text-neutral-600">
                <div className="cpsui:p-1x-small cpsui:cursor-text cpsui:flex cpsui:items-center cpsui:gap-1x-small cpsui:min-w-0 cpsui:border cpsui:transition-colors cpsui:data-[disabled=true]:bg-neutral-100 cpsui:data-[disabled=true]:cursor-not-allowed cpsui:border-neutral-300 cpsui:focus-within:border-neutral-600 cpsui:data-[disabled=true]:border-neutral-200 cpsui:text-small cpsui:min-h-[40px] cpsui:rounded-small bg-pure-white text-medium h-[40px] border-0 focus-within:border-none focus-within:shadow-none focus-within:ring-0">
                  <div className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:aspect-square">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="text-pure-black mr-[5px] ml-[9px]"
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit={10}
                        strokeWidth={32}
                        d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
                      ></path>
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeMiterlimit={10}
                        strokeWidth={32}
                        d="M338.29 338.29 448 448"
                      ></path>
                    </svg>
                  </div>
                  <input
                    data-slot="input"
                    className="cpsui:w-full cpsui:bg-transparent cpsui:border-none cpsui:outline-none cpsui:shadow-none cpsui:ring-0 cpsui:focus:outline-none cpsui:focus:border-none cpsui:focus:ring-0 cpsui:focus-visible:outline-none cpsui:focus-visible:border-none cpsui:focus-visible:ring-0 cpsui:placeholder:text-neutral-300 cpsui:placeholder:select-none cpsui:disabled:opacity-80 cpsui:disabled:cursor-not-allowed cpsui:disabled:text-neutral-500 cpsui:disabled:placeholder:text-neutral-400 cpsui:overflow-hidden cpsui:text-ellipsis cpsui:whitespace-nowrap"
                    placeholder="Bạn muốn mua gì hôm nay?"
                    defaultValue=""
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="mx-auto mr-[20px] ml-[1px] flex max-w-screen-xl gap-6 overflow-hidden px-2 text-xs transition-all duration-200 ease-in-out xl:px-1">
            <div className="hidden items-center gap-7.5 md:flex">
              <Link
                className="before:bg-primary-200 relative flex items-center gap-1 text-[12px] whitespace-nowrap before:absolute before:top-1/2 before:-left-[15px] before:h-3 before:w-0.5 before:-translate-y-1/2"
                target="blank"
                href="https://cellphones.com.vn/dia-chi-cua-hang"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  fill="none"
                  viewBox="0 0 25 25"
                  className="size-[17px]"
                >
                  <path
                    stroke="white"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M8.32 22.66h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.653 7.857c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878c0 2.203 1.87 3.989 4.18 3.989Z"
                  ></path>
                  <path
                    fill="white"
                    d="M8.9 12.916V9.66h7v2.816l-.987-1.222h-4.419V12l2.004 2.175-.128.183-3.47-1.441Z"
                  ></path>
                  <path
                    fill="white"
                    d="M8.9 18.778v-2.922l1.097 1.327h4.309V15.83l-1.95-2.236.135-.179 3.409 1.61v3.754h-7Z"
                  ></path>
                </svg>
                <span className="cursor-pointer transition-all duration-300 hover:scale-95">
                  Cửa hàng gần bạn
                </span>
              </Link>
              <Link
                className="before:bg-primary-200 relative flex items-center gap-1 text-[12px] whitespace-nowrap before:absolute before:top-1/2 before:-left-[15px] before:h-3 before:w-0.5 before:-translate-y-1/2"
                href="tel:18002097"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 256 256"
                  className="size-[17px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M144.27,45.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,208,112a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,144.27,45.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,176,120a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,168,232C88.6,232,24,167.4,24,88A56.26,56.26,0,0,1,72.92,32.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,109.39,104c-.18.27-.37.52-.57.77L88,129.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,223.88,183.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L96,95.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,40,88,128.14,128.14,0,0,0,168,216,40.21,40.21,0,0,0,208,181.07Z"></path>
                </svg>
                <span className="cursor-pointer transition-all duration-300 hover:scale-95">
                  1800 2097
                </span>
              </Link>
            </div>
          </div>
          <span
            data-slot="button"
            className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-primary-500 cpsui:bg-primary-500 cpsui:text-pure-white cpsui:hover:border-primary-700 cpsui:hover:bg-primary-700 cpsui:disabled:text-black-300 cpsui:disabled:bg-neutral-200 cpsui:disabled:border-neutral-200 button__cart hover:bg-primary-500 hidden border-none bg-transparent md:flex"
          >
            <span className="hidden lg:inline-block">Giỏ hàng</span>
            <span className="relative">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="size-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={176}
                  cy={416}
                  r={16}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                ></circle>
                <circle
                  cx={400}
                  cy={416}
                  r={16}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                ></circle>
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M48 80h64l48 272h256"
                ></path>
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
                ></path>
              </svg>
              <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full border border-white bg-orange-500 px-1 py-0.25 text-[10px] leading-none text-white">
                2
              </span>
            </span>
          </span>
        </div>
      </header>
      <div className="max-w-max-width-screen py-1x-small tablet:pt-[84px] tablet:pb-3x-large tablet:px-3x-large relative mx-auto min-h-screen w-full px-0">
        <div className="tablet:hidden pointer-events-none fixed top-0 left-0 z-[0] h-[259px] w-full overflow-hidden select-none">
          <div className="mobile-large:w-[130%] bg-gradient-peach-header absolute top-0 left-1/2 h-[200%] w-[160%] translate-x-[-50%] translate-y-[-50%] rounded-full"></div>
        </div>
        <div className="relative w-full">
          <div className="px-1x-small tablet:px-0 w-full">
            <div className="bg-pure-white px-small py-small tablet:px-1x-large tablet:py-medium rounded-1x-large mb-small tablet:flex-row tablet:items-center gap-small tablet:gap-medium flex w-full flex-col justify-between">
              <div className="gap-1x-small laptop:gap-small desktop:gap-medium flex items-center">
                <div className="tablet:w-[72px] bg-gradient-peach flex aspect-square w-[65px] items-center justify-center rounded-full">
                  <Image
                    alt="avatar"
                    title="avatar"
                    loading="lazy"
                    width={44}
                    height={44}
                    decoding="async"
                    data-nimg="1"
                    className="h-[44px] w-[44px] object-contain"
                    style={{ color: "transparent" }}
                    src="https://cdn-static.smember.com.vn/_next/static/media/avata-ant.b574f3e9.svg"
                  />
                </div>
                <div className="gap-3x-small tablet:gap-2x-small flex flex-col">
                  <div className="text-medium tablet:text-base laptop:text-medium font-bold">
                    Tran Van Toan
                  </div>
                  <div className="text-small font-regular gap-1x-small flex items-center text-neutral-500">
                    079*****61
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="cursor-pointer"
                      height={18}
                      width={18}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path>
                      <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path>
                      <path d="M3 3l18 18"></path>
                    </svg>
                  </div>
                  <div className="gap-2x-small flex">
                    <div className="text-small px-1x-small py-3x-small bg-snull text-pure-black shrink-0 rounded-full font-bold select-none">
                      S-NULL
                    </div>
                    <div className="text-small px-1x-small py-3x-small bg-sstudent text-pure-white shrink-0 rounded-full font-bold select-none">
                      S-Student
                    </div>
                  </div>
                  <div
                    style={{
                      background:
                        "linear-gradient(90deg, #f7f7f8 0%, #fff 100.69%)",
                    }}
                    className="gap-2x-small text-1x-small tablet:text-small font-regular p-2x-small rounded-1x-small flex items-center"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height={14}
                      width={14}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                      <path d="M12 12h3.5"></path>
                      <path d="M12 7v5"></path>
                    </svg>
                    Cập nhật lại sau 01/01/2027
                  </div>
                </div>
              </div>
              <div className="gap-1x-small laptop:gap-medium tablet:flex-1 tablet:max-w-[600px] flex max-w-[400px] flex-col">
                <div className="gap-2x-small tablet:gap-medium flex justify-between">
                  <div className="gap-2x-small tablet:gap-1x-small laptop:gap-small desktop:gap-medium flex items-center">
                    <div className="tablet:block bg-primary-500 hidden h-full w-[3px] shrink-0 rounded-full"></div>
                    <div className="laptop:w-[48px] laptop:h-[48px] bg-gradient-peach flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full">
                      <Image
                        alt="icon-cart"
                        title="icon-cart"
                        loading="lazy"
                        width={28}
                        height={26}
                        decoding="async"
                        data-nimg="1"
                        className="laptop:w-[26px] laptop:h-[28px] h-[19px] w-[20px] object-contain"
                        style={{ color: "transparent" }}
                        src="https://cdn-static.smember.com.vn/_next/static/media/cart-icon.3e4e1d83.svg"
                      />
                    </div>
                    <div>
                      <div className="text-large tablet:text-1x-large laptop:text-2x-large font-bold">
                        2
                      </div>
                      <div className="text-1x-small tablet:text-small laptop:text-base font-regular line-clamp-2 text-ellipsis text-neutral-500">
                        Tổng số đơn hàng
                        <span className="tablet:inline hidden">đã mua</span>
                      </div>
                    </div>
                  </div>
                  <div className="gap-2x-small tablet:gap-1x-small laptop:gap-small desktop:gap-medium flex items-center">
                    <div className="tablet:block bg-primary-500 hidden h-full w-[3px] shrink-0 rounded-full"></div>
                    <div className="laptop:w-[48px] laptop:h-[48px] bg-gradient-peach flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full">
                      <Image
                        alt="icon-cart"
                        title="icon-cart"
                        loading="lazy"
                        width={28}
                        height={28}
                        decoding="async"
                        data-nimg="1"
                        className="laptop:w-[28px] laptop:h-[28px] h-[19px] w-[20px] object-contain"
                        style={{ color: "transparent" }}
                        src="https://cdn-static.smember.com.vn/_next/static/media/money-icon.3e6b67af.svg"
                      />
                    </div>
                    <div>
                      <div className="text-large tablet:text-1x-large laptop:text-2x-large font-bold">
                        2.380.000đ
                      </div>
                      <div className="text-1x-small tablet:text-small laptop:text-base font-regular line-clamp-2 text-ellipsis text-neutral-500">
                        <span>
                          Tổng tiền tích lũy
                          <span className="tablet:w-[7px] tablet:h-[7px] inline-block h-[4px] w-[4px] rounded-full bg-neutral-100"></span>
                          Từ 01/01/2025
                        </span>
                      </div>
                      <div
                        style={{ background: "linear-gradient(" }}
                        className="tablet:block text-1x-small font-regular p-2x-small rounded-1x-small hidden"
                      >
                        Cần chi tiêu thêm<strong>620.000</strong> để lên hạng{" "}
                        <strong>S-NEW</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #f7f7f8 0%, #fff 100.69%)",
                  }}
                  className="tablet:hidden text-1x-small font-regular px-1x-small py-2x-small rounded-1x-small"
                >
                  Cần chi tiêu thêm <strong>620.000đ</strong> để lên hạng
                  <strong>S-NEW</strong>
                </div>
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #f7f7f8 0%, #fff 100.69%)",
                  }}
                  className="rounded-1x-small p-2x-small tablet:flex gap-2x-small text-small font-regular hidden items-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-medium"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                    <path d="M9 7l4 0"></path>
                    <path d="M9 11l4 0"></path>
                  </svg>
                  Tổng tiền và số đơn hàng được tính chung từ CellphoneS và Điện
                  Thoại Vui.
                </div>
              </div>
              <div className="">
                <div className="tablet:flex gap-1x-small hidden flex-col items-end justify-center">
                  <span className="text-small laptop:text-base font-regular">
                    Bạn đang ở kênh thành viên
                  </span>
                  <div className="tablet:flex gap-2x-small hidden items-center">
                    <Link
                      className="inline-block h-[56px] w-[56px]"
                      href="https://cellphones.com.vn"
                    >
                      <Image
                        alt="icon-company"
                        title="icon-company"
                        loading="lazy"
                        width={56}
                        height={56}
                        decoding="async"
                        data-nimg="1"
                        className="rounded-base aspect-square h-[56px] w-[56px] object-contain"
                        style={{ color: "transparent" }}
                        src="https://cdn-static.smember.com.vn/_next/static/media/cellphones-icon.1b92082f.svg"
                      />
                    </Link>
                    <div className="gap-2x-small flex max-w-[180px] flex-col">
                      <div className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small cpsui:peer w-[180px] !text-base">
                        <input type="hidden" value="cellphones" />
                        <div
                          aria-controls="radix-«R2dedblhlb»"
                          aria-expanded="false"
                          aria-haspopup="dialog"
                          data-slot="popover-trigger"
                          data-state="closed"
                          className="cpsui:flex cpsui:flex-col cpsui:gap-2x-small cpsui:peer cpsui:w-full"
                        >
                          <div className="cpsui:p-1x-small cpsui:cursor-text cpsui:flex cpsui:items-center cpsui:gap-1x-small cpsui:min-w-0 cpsui:border cpsui:transition-colors cpsui:data-[disabled=true]:bg-neutral-100 cpsui:data-[disabled=true]:cursor-not-allowed cpsui:border-neutral-300 cpsui:focus-within:border-neutral-600 cpsui:data-[disabled=true]:border-neutral-200 cpsui:text-small cpsui:min-h-[40px] cpsui:rounded-small cpsui:pl-medium py-2x-small !h-[32px] !min-h-[32px] !text-base">
                            <input
                              type="text"
                              data-slot="input"
                              className="cpsui:w-full cpsui:bg-transparent cpsui:border-none cpsui:outline-none cpsui:shadow-none cpsui:ring-0 cpsui:focus:outline-none cpsui:focus:border-none cpsui:focus:ring-0 cpsui:focus-visible:outline-none cpsui:focus-visible:border-none cpsui:focus-visible:ring-0 cpsui:placeholder:text-neutral-300 cpsui:placeholder:select-none cpsui:disabled:opacity-80 cpsui:disabled:cursor-not-allowed cpsui:disabled:text-neutral-500 cpsui:disabled:placeholder:text-neutral-400 cpsui:overflow-hidden cpsui:text-ellipsis cpsui:whitespace-nowrap"
                              value="CellphoneS"
                            />
                            <div className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:aspect-square">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                className="cpsui:text-large"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link
                        className="pl-medium pr-1x-small py-3x-small text-small text-primary-500 rounded-small gap-2x-small flex w-full items-center bg-neutral-50 font-medium"
                        href="https://cellphones.com.vn"
                      >
                        <span>cellphones.com.vn</span>
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height={12}
                          width={12}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                          <path d="M11 13l9 -9"></path>
                          <path d="M15 4h5v5"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-1x-small tablet:px-0 w-full">
            <div className="bg-pure-white px-small py-small tablet:px-1x-large tablet:py-medium rounded-1x-large mb-small w-full">
              <div className="gap-y-small tablet:flex gap-1x-small tablet:gap-2x-large desktop:gap-3x-large grid w-full grid-cols-4 justify-start">
                <Link
                  className="tablet:flex-row gap-1x-small relative flex flex-col items-center"
                  href="/promotion"
                >
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-50">
                    <Image
                      alt="Hạng thành viên"
                      title="Hạng thành viên"
                      loading="lazy"
                      width={24}
                      height={24}
                      decoding="async"
                      data-nimg="1"
                      className="h-[24px] w-[24px] object-contain"
                      style={{ color: "transparent" }}
                      src="https://cdn-static.smember.com.vn/_next/static/media/rank-icon.d0f44c06.svg"
                    />
                  </div>
                  <div className="text-1x-small tablet:text-base tablet:text-left text-center font-medium">
                    Hạng thành viên
                  </div>
                </Link>
                <Link
                  className="tablet:flex-row gap-1x-small relative flex flex-col items-center"
                  href="/promotion"
                >
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-50">
                    <Image
                      alt="Mã giảm giá"
                      title="Mã giảm giá"
                      loading="lazy"
                      width={24}
                      height={24}
                      decoding="async"
                      data-nimg="1"
                      className="h-[24px] w-[24px] object-contain"
                      style={{ color: "transparent" }}
                      src="https://cdn-static.smember.com.vn/_next/static/media/promotion-icon.99af272d.svg"
                    />
                  </div>
                  <div className="text-1x-small tablet:text-base tablet:text-left text-center font-medium">
                    Mã giảm giá
                  </div>
                </Link>
                <Link
                  className="tablet:flex-row gap-1x-small relative flex flex-col items-center"
                  href="/order"
                >
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-50">
                    <Image
                      alt="Lịch sử mua hàng"
                      title="Lịch sử mua hàng"
                      loading="lazy"
                      width={24}
                      height={24}
                      decoding="async"
                      data-nimg="1"
                      className="h-[24px] w-[24px] object-contain"
                      style={{ color: "transparent" }}
                      src="https://cdn-static.smember.com.vn/_next/static/media/history-icon.2ebe1813.svg"
                    />
                  </div>
                  <div className="text-1x-small tablet:text-base tablet:text-left text-center font-medium">
                    Lịch sử mua hàng
                  </div>
                </Link>
                <Link
                  className="tablet:flex-row gap-1x-small relative flex flex-col items-center"
                  href="/user-info"
                >
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-50">
                    <Image
                      alt="Sổ địa chỉ"
                      title="Sổ địa chỉ"
                      loading="lazy"
                      width={24}
                      height={24}
                      decoding="async"
                      data-nimg="1"
                      className="h-[24px] w-[24px] object-contain"
                      style={{ color: "transparent" }}
                      src="https://cdn-static.smember.com.vn/_next/static/media/address-icon.169a4d95.svg"
                    />
                  </div>
                  <div className="text-1x-small tablet:text-base tablet:text-left text-center font-medium">
                    Sổ địa chỉ
                  </div>
                </Link>
                <Link
                  className="tablet:flex-row gap-1x-small relative flex flex-col items-center"
                  href="/promotion/s-edu"
                >
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-50">
                    <Image
                      alt="S-Student &amp; S-Teacher"
                      title="S-Student &amp; S-Teacher"
                      loading="lazy"
                      width={24}
                      height={24}
                      decoding="async"
                      data-nimg="1"
                      className="h-[24px] w-[24px] object-contain"
                      style={{ color: "transparent" }}
                      src="https://cdn-static.smember.com.vn/_next/static/media/edu-icon.76bd96ea.svg"
                    />
                  </div>
                  <div className="text-1x-small tablet:text-base tablet:text-left text-center font-medium">
                    S-Student &amp; S-Teacher
                  </div>
                </Link>
                <Link
                  className="tablet:flex-row gap-1x-small relative flex flex-col items-center"
                  href="/user-info"
                >
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-50">
                    <Image
                      alt="Liên kết tài khoản"
                      title="Liên kết tài khoản"
                      loading="lazy"
                      width={24}
                      height={24}
                      decoding="async"
                      data-nimg="1"
                      className="h-[24px] w-[24px] object-contain"
                      style={{ color: "transparent" }}
                      src="https://cdn-static.smember.com.vn/_next/static/media/link-icon.1de266bc.svg"
                    />
                  </div>
                  <div className="text-1x-small tablet:text-base tablet:text-left text-center font-medium">
                    Liên kết tài khoản
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex items-stretch">
            <div className="tablet:block laptop:w-[340px] mr-small sticky top-[32px] left-0 hidden min-h-[calc(100vh-280px)] w-[280px] shrink-0">
              <div className="bg-pure-white rounded-1x-large h-full w-full">
                <div className="flex h-full w-full flex-col justify-between">
                  <div className="py-medium flex w-full flex-col">
                    <Link
                      className="laptop:text-medium group hover:bg-primary-50 hover:text-primary-500 bg-primary-50 text-primary-500 after:bg-primary-500 relative items-center text-base after:absolute after:right-0 after:bottom-0 after:left-0 after:h-full after:w-[4px] after:rounded-r-full"
                      target="_self"
                      href="/"
                    >
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-r-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"></path>
                          <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0"></path>
                        </svg>
                        <span className="font-medium">Tổng quan</span>
                      </div>
                    </Link>
                    <Link
                      className="laptop:text-medium group hover:bg-primary-50 hover:text-primary-500 relative items-center text-base"
                      target="_self"
                      href="/order"
                    >
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-r-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                          <path d="M9 7l4 0"></path>
                          <path d="M9 11l4 0"></path>
                        </svg>
                        <span className="font-medium">Lịch sử mua hàng</span>
                      </div>
                    </Link>
                    <Link
                      className="laptop:text-medium group hover:bg-primary-50 hover:text-primary-500 relative items-center text-base"
                      target="_self"
                      href="/warranty"
                    >
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-r-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 21a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3c.539 1.832 .627 3.747 .283 5.588"></path>
                          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                          <path d="M20.2 20.2l1.8 1.8"></path>
                        </svg>
                        <span className="font-medium">Tra cứu bảo hành</span>
                      </div>
                    </Link>
                    <Link
                      className="laptop:text-medium group hover:bg-primary-50 hover:text-primary-500 relative items-center text-base"
                      target="_self"
                      href="/tradein"
                    >
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-r-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                          <path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3"></path>
                          <path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3"></path>
                        </svg>
                        <span className="font-medium">Lịch sử thu cũ</span>
                      </div>
                    </Link>
                    <div className="px-medium w-full">
                      <div className="h-[1px] w-full bg-neutral-200"></div>
                    </div>
                    <Link
                      className="laptop:text-medium group hover:bg-primary-50 hover:text-primary-500 relative items-center text-base"
                      target="_self"
                      href="/promotion"
                    >
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-r-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.316 5h-12.632l-3.418 4.019a1.089 1.089 0 0 0 .019 1.447l9.714 10.534l9.715 -10.49a1.09 1.09 0 0 0 .024 -1.444l-3.422 -4.066z"></path>
                          <path d="M9 11l3 3l3 -3"></path>
                        </svg>
                        <span className="font-medium">
                          Hạng thành viên và ưu đãi
                        </span>
                      </div>
                    </Link>
                    <Link
                      className="laptop:text-medium group hover:bg-primary-50 hover:text-primary-500 relative items-center text-base"
                      target="_self"
                      href="/promotion/s-business"
                    >
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-r-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                          <path d="M12 12l0 .01"></path>
                          <path d="M3 13a20 20 0 0 0 18 0"></path>
                        </svg>
                        <span className="font-medium">
                          Ưu đãi và đơn hàng S-Business
                        </span>
                      </div>
                    </Link>
                    <Link
                      className="laptop:text-medium group hover:bg-primary-50 hover:text-primary-500 relative items-center text-base"
                      target="_self"
                      href="/promotion/s-edu"
                    >
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-r-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
                          <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
                        </svg>
                        <span className="font-medium">
                          Ưu đãi S-Student và S-Teacher
                        </span>
                      </div>
                    </Link>
                    <div className="px-medium w-full">
                      <div className="h-[1px] w-full bg-neutral-200"></div>
                    </div>
                    <Link
                      className="laptop:text-medium group hover:bg-primary-50 hover:text-primary-500 relative items-center text-base"
                      target="_self"
                      href="/user-info"
                    >
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-r-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        </svg>
                        <span className="font-medium">Thông tin tài khoản</span>
                      </div>
                    </Link>
                    <Link
                      className="laptop:text-medium group hover:bg-primary-50 hover:text-primary-500 relative items-center text-base"
                      target="_blank"
                      href="https://cellphones.com.vn/dia-chi-cua-hang"
                    >
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-r-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                        </svg>
                        <span className="font-medium">Tìm kiếm cửa hàng</span>
                      </div>
                    </Link>
                    <Link
                      className="laptop:text-medium group hover:bg-primary-50 hover:text-primary-500 relative items-center text-base"
                      target="_blank"
                      href="https://cellphones.com.vn/chinh-sach-bao-hanh"
                    >
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-r-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                          <path d="M9 9l1 0"></path>
                          <path d="M9 13l6 0"></path>
                          <path d="M9 17l6 0"></path>
                        </svg>
                        <span className="font-medium">Chính sách bảo hành</span>
                      </div>
                    </Link>
                    <Link
                      className="laptop:text-medium group hover:bg-primary-50 hover:text-primary-500 relative items-center text-base"
                      target="_self"
                      href="/support"
                    >
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-r-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                          <path d="M3 7l9 6l9 -6"></path>
                        </svg>
                        <span className="font-medium">
                          Góp ý - Phản hồi - Hỗ trợ
                        </span>
                      </div>
                    </Link>
                    <Link
                      className="laptop:text-medium group hover:bg-primary-50 hover:text-primary-500 relative items-center text-base"
                      target="_blank"
                      href="https://cellphones.com.vn/tos"
                    >
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-r-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13 15v-6a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4"></path>
                          <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"></path>
                          <path d="M16 22l5 -5"></path>
                          <path d="M21 21.5v-4.5h-4.5"></path>
                          <path d="M16 9h2"></path>
                        </svg>
                        <span className="font-medium">Điều khoản sử dụng</span>
                      </div>
                    </Link>
                    <div className="px-medium w-full">
                      <div className="h-[1px] w-full bg-neutral-200"></div>
                    </div>
                    <button className="text-medium group hover:bg-primary-50 hover:text-primary-500 relative cursor-pointer items-center">
                      <div className="group-hover:bg-primary-500 absolute top-0 left-0 h-full w-[4px] shrink-0 rounded-tr-full rounded-br-full bg-transparent"></div>
                      <div className="px-1x-large py-medium gap-1x-small flex w-full items-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                          <path d="M9 12h12l-3 -3"></path>
                          <path d="M18 15l3 -3"></path>
                        </svg>
                        <span className="font-medium">Đăng xuất</span>
                      </div>
                    </button>
                  </div>
                  <div className="relative flex w-full flex-1 items-end justify-end">
                    <div className="px-1x-large py-medium sticky bottom-0 left-0 w-full">
                      <span className="pb-small gap-1x-small text-small tablet:font-regular tablet:text-medium flex w-full items-center text-neutral-500">
                        Mua sắm dễ dàng - Ưu đãi ngập tràn cùng app CellphoneS
                      </span>
                      <div className="gap-small tablet:gap-medium flex items-center justify-center">
                        <div className="rounded-base p-2x-small flex h-[100px] max-h-[100px] w-[100px] shrink-0 items-center justify-center bg-neutral-50">
                          <Image
                            alt="Qr Install App"
                            title="Qr Install App"
                            loading="lazy"
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg="1"
                            className="h-[100%] w-[100%] object-contain"
                            style={{ color: "transparent" }}
                            src="https://cdn-static.smember.com.vn/_next/static/media/qr-install-app.c92a5dbb.webp"
                          />
                        </div>
                        <div className="app-downloader__stores flex max-h-[100px] flex-col justify-center gap-2">
                          <Link
                            href="https://play.google.com/store/apps/details?id=vn.com.cellphones.android.smember"
                            rel="nofollow"
                            className="p-0"
                          >
                            <Image
                              alt="Tải app từ Google Play"
                              title="Tải app từ Google Play"
                              loading="lazy"
                              width={300}
                              height={44}
                              decoding="async"
                              data-nimg="1"
                              className="h-[auto] w-[150px] object-contain"
                              style={{ color: "transparent" }}
                              src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadANDROID.png"
                            />
                          </Link>
                          <Link
                            href="https://apps.apple.com/vn/app/smember/id6502395577?l=vi"
                            rel="nofollow"
                            className="p-0"
                          >
                            <Image
                              alt="Tải app từ App Store"
                              title="Tải app từ App Store"
                              loading="lazy"
                              width={300}
                              height={44}
                              decoding="async"
                              data-nimg="1"
                              className="h-[auto] w-[150px] object-contain"
                              style={{ color: "transparent" }}
                              src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadiOS.png"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-0 flex-auto">
              <div className="px-1x-small tablet:px-0 w-full">
                <div className="w-full"></div>
                <div className="w-full">
                  <div className="gap-1x-small p-1x-small rounded-base border-info-400 bg-info-50 text-info-500 mb-1x-small tablet:mb-small flex min-h-[56px] items-center border-[1px]">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                    <span className="flex-1 text-base font-medium text-neutral-800">
                      Đăng ký S-Business để nhận ưu đãi đặc quyền!
                    </span>
                    <div className="shrink-0">
                      <button
                        data-slot="button"
                        className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-pure-white cpsui:text-info-500 cpsui:bg-pure-white cpsui:hover:border-neutral-50 cpsui:hover:bg-neutral-50 cpsui:disabled:border-pure-white cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white click_dangky_sbusiness border-none bg-transparent font-medium hover:bg-transparent"
                      >
                        Đăng ký ngay
                      </button>
                    </div>
                    <div className="">
                      <div className="w-2x-large h-2x-large flex cursor-pointer items-center justify-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          className="text-neutral-900"
                          height={16}
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="gap-1x-small p-1x-small rounded-base border-info-400 bg-info-50 text-info-500 mb-1x-small tablet:mb-small flex min-h-[56px] items-center border-[1px]">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 9h.01"></path>
                      <path d="M11 12h1v4h1"></path>
                    </svg>
                    <span className="flex-1 text-base font-medium text-neutral-800">
                      Thêm địa chỉ để đặt đơn hàng nhanh hơn.
                    </span>
                    <div className="shrink-0">
                      <button
                        data-slot="button"
                        className="cpsui:flex cpsui:items-center cpsui:justify-center cpsui:gap-2x-small cpsui:cursor-pointer cpsui:disabled:cursor-not-allowed cpsui:border cpsui:border-[1px] cpsui:text-base cpsui:px-medium cpsui:py-1x-small cpsui:min-h-[40px] cpsui:rounded-base cpsui:border-pure-white cpsui:text-info-500 cpsui:bg-pure-white cpsui:hover:border-neutral-50 cpsui:hover:bg-neutral-50 cpsui:disabled:border-pure-white cpsui:disabled:text-black-300 cpsui:disabled:bg-pure-white border-none bg-transparent font-medium hover:bg-transparent"
                      >
                        Thêm địa chỉ
                      </button>
                    </div>
                    <div className="">
                      <div className="w-2x-large h-2x-large flex cursor-pointer items-center justify-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          className="text-neutral-900"
                          height={16}
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-small grid w-full grid-cols-6">
                  <div className="p-small tablet:p-medium bg-pure-white rounded-1x-large tablet:order-3 laptop:col-span-3 w1200:col-span-4 order-2 col-span-6">
                    <div className="flex w-full items-center justify-between">
                      <div className="text-medium font-bold">
                        Đơn hàng gần đây
                      </div>
                      <Link
                        className="link-action gap-2x-small font-regular text-small text-info-500 flex shrink-0 items-center"
                        href="/order"
                        style={{ display: "none" }}
                      >
                        Xem tất cả
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height={16}
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 6l6 6l-6 6"></path>
                        </svg>
                      </Link>
                    </div>
                    <div className="mt-1x-small tablet:mt-small w-full">
                      <div className="gap-1x-small tablet:gap-small mt-1x-small tablet:mt-small flex h-full w-full flex-col overflow-hidden">
                        <Link
                          className="bg-pure-white gap-1x-small px-1x-small py-2x-small tablet:px-medium tablet:py-1x-small rounded-base flex w-full cursor-pointer flex-col border border-neutral-200"
                          href="order/order-detail?order-id=00056S2503001570"
                        >
                          <div className="gap-2x-small flex w-full items-start justify-between">
                            <div className="tablet:flex-row gap-3x-small tablet:items-center text-small tablet:text-base font-regular flex flex-col flex-wrap text-neutral-500">
                              <span>
                                Đơn hàng:
                                <strong className="text-neutral-800">
                                  #00056S2503001570
                                </strong>
                              </span>
                              <span className="mx-1x-small tablet:inline-block hidden h-[7px] w-[7px] rounded-full bg-neutral-200"></span>
                              <span>
                                Ngày đặt hàng:
                                <strong className="text-neutral-800">
                                  21/03/2025
                                </strong>
                              </span>
                            </div>
                            <div
                              className="status-tag px-2x-small py-3x-small rounded-small text-small shrink-0 font-medium"
                              style={{
                                color: "rgb(27, 76, 47)",
                                backgroundColor: "rgb(223, 249, 232)",
                              }}
                            >
                              Đã nhận hàng
                            </div>
                          </div>
                          <div className="tablet:items-center gap-2x-small laptop:flex-nowrap flex w-full flex-wrap justify-between">
                            <div className="gap-2x-small tablet:gap-1x-small flex">
                              <div className="gap-3x-small flex flex-col">
                                <div className="text-small tablet:text-base line-clamp-2 font-bold text-ellipsis">
                                  CHAI VỆ SINH MÀN HÌNH HYPERWORK HPW-C02
                                </div>
                                <div className="gap-2x-small flex flex-wrap items-center">
                                  <span className="text-small font-bold">
                                    0đ
                                  </span>
                                </div>
                                <div className="text-small py-3x-small px-2x-small rounded-1x-small w-fit bg-cyan-100 text-center font-medium text-cyan-900">
                                  Đã xuất VAT
                                </div>
                              </div>
                            </div>
                            <div className="tablet:w-auto gap-3x-small flex w-full flex-auto shrink-0 flex-col items-end">
                              <div className="gap-3x-small flex items-end">
                                <span className="text-small font-regular text-neutral-800">
                                  Tổng thanh toán:
                                </span>
                                <span className="text-primary-500 text-base font-bold">
                                  0đ
                                </span>
                              </div>
                              <div className="text-small gap-3x-small -mr-3x-small flex items-center font-medium text-neutral-900">
                                Xem chi tiết
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  height={16}
                                  width={16}
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9 6l6 6l-6 6"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link
                          className="bg-pure-white gap-1x-small px-1x-small py-2x-small tablet:px-medium tablet:py-1x-small rounded-base flex w-full cursor-pointer flex-col border border-neutral-200"
                          href="order/order-detail?order-id=00056S2502000262"
                        >
                          <div className="gap-2x-small flex w-full items-start justify-between">
                            <div className="tablet:flex-row gap-3x-small tablet:items-center text-small tablet:text-base font-regular flex flex-col flex-wrap text-neutral-500">
                              <span>
                                Đơn hàng:
                                <strong className="text-neutral-800">
                                  #00056S2502000262
                                </strong>
                              </span>
                              <span className="mx-1x-small tablet:inline-block hidden h-[7px] w-[7px] rounded-full bg-neutral-200"></span>
                              <span>
                                Ngày đặt hàng:
                                <strong className="text-neutral-800">
                                  04/02/2025
                                </strong>
                              </span>
                            </div>
                            <div
                              className="status-tag px-2x-small py-3x-small rounded-small text-small shrink-0 font-medium"
                              style={{
                                color: "rgb(27, 76, 47)",
                                backgroundColor: "rgb(223, 249, 232)",
                              }}
                            >
                              Đã nhận hàng
                            </div>
                          </div>
                          <div className="tablet:items-center gap-2x-small laptop:flex-nowrap flex w-full flex-wrap justify-between">
                            <div className="gap-2x-small tablet:gap-1x-small flex">
                              <Image
                                alt="MÀN HÌNH MSI MP251 E2 25 120HZ (FHD/IPS/120HZ/1MS/LOA)"
                                title="MÀN HÌNH MSI MP251 E2 25 120HZ (FHD/IPS/120HZ/1MS/LOA)"
                                loading="lazy"
                                width={356}
                                height={356}
                                decoding="async"
                                data-nimg="1"
                                className="tablet:w-[64px] tablet:h-[64px] h-[54px] w-[54px] shrink-0 object-contain"
                                src="https://cdn2.cellphones.com.vn/356x356/media/catalog/product/g/r/group_179_3_5.png"
                                style={{ color: "transparent" }}
                              />
                              <div className="gap-3x-small flex flex-col">
                                <div className="text-small tablet:text-base line-clamp-2 font-bold text-ellipsis">
                                  MÀN HÌNH MSI MP251 E2 25 120HZ
                                  (FHD/IPS/120HZ/1MS/LOA)
                                </div>
                                <div className="gap-2x-small flex flex-wrap items-center">
                                  <span className="text-small font-bold">
                                    2.990.000đ
                                  </span>
                                </div>
                                <div className="text-1x-small tablet:text-small font-regular text-neutral-800">
                                  Cùng 1 sản phẩm khác
                                </div>
                                <div className="text-small py-3x-small px-2x-small rounded-1x-small w-fit bg-cyan-100 text-center font-medium text-cyan-900">
                                  Đã xuất VAT
                                </div>
                              </div>
                            </div>
                            <div className="tablet:w-auto gap-3x-small flex w-full flex-auto shrink-0 flex-col items-end">
                              <div className="gap-3x-small flex items-end">
                                <span className="text-small font-regular text-neutral-800">
                                  Tổng thanh toán:
                                </span>
                                <span className="text-primary-500 text-base font-bold">
                                  2.380.000đ
                                </span>
                              </div>
                              <div className="text-small gap-3x-small -mr-3x-small flex items-center font-medium text-neutral-900">
                                Xem chi tiết
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  height={16}
                                  width={16}
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9 6l6 6l-6 6"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-small tablet:p-medium bg-pure-white rounded-1x-large tablet:order-4 laptop:col-span-3 w1200:col-span-2 order-3 col-span-6">
                    <div className="flex w-full items-center justify-between">
                      <div className="text-medium font-bold">
                        Ưu đãi của bạn
                      </div>
                      <Link
                        className="link-action gap-2x-small font-regular text-small text-info-500 flex shrink-0 items-center"
                        href="/promotion"
                        style={{ display: "none" }}
                      >
                        Xem tất cả
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height={16}
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 6l6 6l-6 6"></path>
                        </svg>
                      </Link>
                    </div>
                    <div className="mt-1x-small tablet:mt-small w-full">
                      <div className="gap-1x-small tablet:gap-small mt-1x-small tablet:mt-small flex w-full flex-col">
                        <div className="p-medium tablet:justify-center gap-medium tablet:gap-small bg-pure-white rounded-base flex w-full flex-col items-center">
                          <Image
                            alt="empty"
                            title="empty"
                            loading="lazy"
                            width={420}
                            height={312}
                            decoding="async"
                            data-nimg="1"
                            className="tablet:w-[140px] tablet:h-[104px] h-[65px] w-[88px] object-contain"
                            style={{ color: "transparent" }}
                            src="https://cdn-static.smember.com.vn/_next/static/media/empty.f8088c4d.png"
                          />
                          <div className="tablet:flex-row tablet:items-center text-small font-regular tablet:text-center flex flex-col flex-wrap justify-center text-center text-neutral-400">
                            <span className="mr-1x-small">
                              Bạn chưa có ưu đãi nào.
                            </span>
                            <Link
                              className="text-primary-500 shrink-0 hover:underline"
                              href="https://cellphones.com.vn"
                            >
                              Xem sản phẩm
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1x-small tablet:mt-small w-full">
                  <div className="p-small tablet:p-medium bg-pure-white rounded-1x-large tablet:order-2 laptop:col-span-3 w1200:col-span-4 order-4 col-span-6">
                    <div className="flex w-full items-center justify-between">
                      <div className="text-medium font-bold">
                        Sản phẩm yêu thích
                      </div>
                      <button
                        className="button-action gap-2x-small font-regular text-small text-info-500 flex shrink-0 cursor-pointer items-center select-none"
                        style={{ display: "none" }}
                      >
                        Xem tất cả
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height={16}
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 6l6 6l-6 6"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="mt-1x-small tablet:mt-small w-full">
                      <div
                        dir="ltr"
                        data-slot="scroll-area"
                        className="cpsui:relative w-full"
                        style={{
                          position: "relative",
                          // "--radix-scroll-area-corner-width": "0px",
                          // "--radix-scroll-area-corner-height": "0px",
                        }}
                      >
                        <style>
                          {`[data-radix-scroll-area-viewport] {scrollbar - width}: none;
                      -ms-overflow-style: none;
                      -webkit-overflow-scrolling: touch;
                      }
                      [data-radix-scroll-area-viewport]::-webkit-scrollbar {display}: none;
                      }`}
                        </style>
                        <div
                          data-radix-scroll-area-viewport=""
                          data-slot="scroll-area-viewport"
                          className="cpsui:size-full cpsui:rounded-[inherit] cpsui:outline-none cpsui:transition-[color,box-shadow] cpsui:focus-visible:ring-[3px] cpsui:focus-visible:outline-1 cpsui:focus-visible:ring-ring/50"
                          style={{ overflow: "scroll hidden" }}
                        >
                          <div style={{ minWidth: "100%", display: "table" }}>
                            <div className="p-medium tablet:justify-center gap-medium tablet:gap-small bg-pure-white rounded-base flex h-full w-full flex-col items-center">
                              <Image
                                alt="empty"
                                title="empty"
                                loading="lazy"
                                width={420}
                                height={312}
                                decoding="async"
                                data-nimg="1"
                                className="tablet:w-[140px] tablet:h-[104px] h-[65px] w-[88px] object-contain"
                                src="https://cdn-static.smember.com.vn/_next/static/media/empty.f8088c4d.png"
                                style={{ color: "transparent" }}
                              />
                              <div className="tablet:flex-row tablet:items-center text-small font-regular tablet:text-center flex flex-col flex-wrap justify-center text-center text-neutral-400">
                                <span className="mr-1x-small">
                                  Bạn chưa có sản phẩm nào yêu thích? Hãy bắt
                                  đầu mua sắm ngay nào!
                                </span>
                                <Link
                                  className="text-primary-500 shrink-0 hover:underline"
                                  href="https://cellphones.com.vn"
                                >
                                  Mua sắm ngay
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1x-small tablet:mt-small w-full">
                  <div className="p-small tablet:p-medium bg-pure-white rounded-1x-large w-full">
                    <div className="flex w-full items-center justify-between">
                      <div className="text-medium font-bold">
                        Chương trình nổi bật
                      </div>
                    </div>
                    <div className="mt-1x-small tablet:mt-small w-full">
                      <div className="w-full">
                        <div
                          className="cpsui:relative cpsui:mb-4 w-full"
                          role="region"
                          aria-roledescription="carousel"
                          data-slot="carousel"
                        >
                          <div
                            className="cpsui:overflow-hidden cpsui:h-full cpsui:-ml-4 -ml-small"
                            data-slot="carousel-content"
                          >
                            <div
                              className="cpsui:flex"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                              }}
                            >
                              <div
                                role="group"
                                aria-roledescription="slide"
                                data-slot="carousel-item"
                                className="cpsui:min-w-0 cpsui:shrink-0 cpsui:grow-0 cpsui:basis-11/12 cpsui:pl-4 mobile-large:basis-[50%] tablet:basis-1/3 !pl-small aspect-[23/10] basis-full"
                              >
                                <Link
                                  target="_blank"
                                  className="rounded-base inline-block h-full w-full overflow-hidden shadow-sm"
                                  href="https://cellphones.com.vn/smember/promotion/s-student"
                                >
                                  <Image
                                    alt="SAY HI S-STUDENT &amp; S-TEACHER"
                                    title="SAY HI S-STUDENT &amp; S-TEACHER"
                                    loading="lazy"
                                    width={690}
                                    height={300}
                                    decoding="async"
                                    data-nimg="1"
                                    className="h-full w-full object-cover"
                                    src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/edu-uu-dai-sinh-vien.jpg"
                                    style={{ color: "transparent" }}
                                  />
                                </Link>
                              </div>
                              <div
                                role="group"
                                aria-roledescription="slide"
                                data-slot="carousel-item"
                                className="cpsui:min-w-0 cpsui:shrink-0 cpsui:grow-0 cpsui:basis-11/12 cpsui:pl-4 mobile-large:basis-[50%] tablet:basis-1/3 !pl-small aspect-[23/10] basis-full"
                              >
                                <Link
                                  target="_blank"
                                  className="rounded-base inline-block h-full w-full overflow-hidden shadow-sm"
                                  href="https://cellphones.com.vn/mua-hang-online"
                                >
                                  <Image
                                    alt="ĐẶC QUYỀN ONLINE - ƯU ĐÃI ĐẾN 50%++"
                                    title="ĐẶC QUYỀN ONLINE - ƯU ĐÃI ĐẾN 50%++"
                                    loading="lazy"
                                    width={690}
                                    height={300}
                                    decoding="async"
                                    data-nimg="1"
                                    className="h-full w-full object-cover"
                                    src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/dac-quyen-online-home.jpg"
                                    style={{ color: "transparent" }}
                                  />
                                </Link>
                              </div>
                              <div
                                role="group"
                                aria-roledescription="slide"
                                data-slot="carousel-item"
                                className="cpsui:min-w-0 cpsui:shrink-0 cpsui:grow-0 cpsui:basis-11/12 cpsui:pl-4 mobile-large:basis-[50%] tablet:basis-1/3 !pl-small aspect-[23/10] basis-full"
                              >
                                <Link
                                  target="_blank"
                                  className="rounded-base inline-block h-full w-full overflow-hidden shadow-sm"
                                  href="https://cellphones.com.vn/qua-tang-tri-an-khach-hang"
                                >
                                  <Image
                                    alt="MUA ĐIỆN THOẠI LAPTOP - TẶNG VOUCHER 10%"
                                    title="MUA ĐIỆN THOẠI LAPTOP - TẶNG VOUCHER 10%"
                                    loading="lazy"
                                    width={690}
                                    height={300}
                                    decoding="async"
                                    data-nimg="1"
                                    className="h-full w-full object-cover"
                                    src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/combo-voucher.png"
                                    style={{ color: "transparent" }}
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="cpsui:absolute cpsui:-bottom-4 cpsui:left-1/2 cpsui:-translate-x-1/2">
                            <nav
                              role="navigation"
                              aria-label="pagination"
                              data-slot="pagination"
                              className="cpsui:mx-auto cpsui:flex cpsui:w-full cpsui:justify-center"
                            >
                              <ul
                                data-slot="pagination-content"
                                className="cpsui:flex cpsui:flex-row cpsui:items-center cpsui:gap-1"
                              >
                                <button className="cpsui:h-0.5 cpsui:cursor-pointer cpsui:rounded-full cpsui:transition-all cpsui:duration-200 cpsui:bg-primary-500 cpsui:w-4"></button>
                                <button className="cpsui:h-0.5 cpsui:cursor-pointer cpsui:rounded-full cpsui:transition-all cpsui:duration-200 cpsui:bg-neutral-300 cpsui:w-2"></button>
                                <button className="cpsui:h-0.5 cpsui:cursor-pointer cpsui:rounded-full cpsui:transition-all cpsui:duration-200 cpsui:bg-neutral-300 cpsui:w-2"></button>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tablet:hidden mt-1x-small tablet:mt-small w-full">
                  <div className="p-small tablet:p-medium bg-pure-white rounded-1x-large w-full">
                    <span className="pb-small gap-1x-small text-small tablet:font-regular tablet:text-medium flex w-full items-center text-neutral-500">
                      Mua sắm dễ dàng - Ưu đãi ngập tràn cùng app CellphoneS
                    </span>
                    <div className="gap-small tablet:gap-medium flex items-center justify-center">
                      <div className="rounded-base p-2x-small flex h-[100px] max-h-[100px] w-[100px] shrink-0 items-center justify-center bg-neutral-50">
                        <Image
                          alt="Qr Install App"
                          title="Qr Install App"
                          loading="lazy"
                          width={300}
                          height={300}
                          decoding="async"
                          data-nimg="1"
                          className="h-[100%] w-[100%] object-contain"
                          style={{ color: "transparent" }}
                          src="https://cdn-static.smember.com.vn/_next/static/media/qr-install-app.c92a5dbb.webp"
                        />
                      </div>
                      <div className="app-downloader__stores flex max-h-[100px] flex-col justify-center gap-2">
                        <Link
                          href="https://play.google.com/store/apps/details?id=vn.com.cellphones.android.smember"
                          rel="nofollow"
                          className="p-0"
                        >
                          <Image
                            alt="Tải app từ Google Play"
                            title="Tải app từ Google Play"
                            loading="lazy"
                            width={300}
                            height={44}
                            decoding="async"
                            data-nimg="1"
                            className="h-[auto] w-[150px] object-contain"
                            style={{ color: "transparent" }}
                            src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadANDROID.png"
                          />
                        </Link>
                        <Link
                          href="https://apps.apple.com/vn/app/smember/id6502395577?l=vi"
                          rel="nofollow"
                          className="p-0"
                        >
                          <Image
                            alt="Tải app từ App Store"
                            title="Tải app từ App Store"
                            loading="lazy"
                            width={300}
                            height={44}
                            decoding="async"
                            data-nimg="1"
                            className="h-[auto] w-[150px] object-contain"
                            style={{ color: "transparent" }}
                            src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadiOS.png"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pure-white tablet:hidden py-small fixed right-0 bottom-0 left-0 z-[999] w-full rounded-t-[20px]">
        <div className="px-1x-large grid w-full grid-cols-4">
          <Link
            className='gap-2x-small text-primary-500 after:bg-primary-500 relative flex flex-col items-center justify-center after:absolute after:top-[-8px] after:left-1/2 after:h-[3px] after:w-[30px] after:translate-x-[-50%] after:rounded-b-full after:content-[""]'
            href="/"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
              height={24}
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"></path>
              <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0"></path>
            </svg>
            <span className="text-1x-small">Tổng quan</span>
          </Link>
          <button className="gap-2x-small relative flex flex-col items-center justify-center text-neutral-500">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
              height={24}
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
              <path d="M9 7l4 0"></path>
              <path d="M9 11l4 0"></path>
            </svg>
            <span className="text-1x-small">Lịch sử</span>
          </button>
          <Link
            className="gap-2x-small relative flex flex-col items-center justify-center text-neutral-500"
            href="/promotion"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
              height={24}
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 14l6 -6"></path>
              <circle cx="9.5" cy="8.5" r=".5" fill="currentColor"></circle>
              <circle cx="14.5" cy="13.5" r=".5" fill="currentColor"></circle>
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path>
            </svg>
            <span className="text-1x-small">Ưu đãi</span>
          </Link>
          <Link
            className="gap-2x-small relative flex flex-col items-center justify-center text-neutral-500"
            href="/account"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
              height={24}
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
            </svg>
            <span className="text-1x-small">Tài khoản</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
