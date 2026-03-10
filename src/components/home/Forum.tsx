import Link from "next/link";
import Image from "next/image";
export default function Forum() {
  return (
    <div className="flex-1">
      <section
        className="animate-fade-in static rounded-2xl p-0 transition-all duration-100 sm:sticky sm:bg-neutral-50 sm:p-4"
        style={{ top: "166px" }}
      >
        <div className="mb-2 flex items-center justify-between sm:mb-4">
          <div className="text-md font-semibold text-neutral-800 sm:text-xl">
            Tin tức sản phẩm
          </div>
          <Link
            href="https://cellphones.com.vn/sforum/tag/gia-dung"
            className="flex items-center gap-0.5 text-xs text-blue-500 hover:text-blue-600 sm:gap-1 sm:text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Xem tất cả
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="size-4 sm:size-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={48}
                d="m184 112 144 144-144 144"
              ></path>
            </svg>
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:flex sm:flex-col sm:gap-4">
          <li className="shadow-bottom-300 overflow-hidden rounded-2xl bg-white p-0 hover:underline nth-[n_+_5]:hidden sm:rounded-xl sm:p-3 sm:shadow-none sm:nth-[n_+_5]:block">
            <Link
              className="flex flex-col gap-0 sm:flex-row sm:gap-3"
              href="https://cellphones.com.vn/sforum/review-noi-com-dien-tefal-1-8l"
              title="Review nồi cơm điện Tefal 1.8L có thực sự đáng mua cho căn bếp hiện đại?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cps-image-cdn relative inline-block aspect-16/9 w-full rounded-t-2xl object-cover sm:aspect-3/2 sm:w-30 sm:rounded-lg">
                <Image
                  fill
                  alt="Review nồi cơm điện Tefal 1.8L có thực sự đáng mua cho căn bếp hiện đại?"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="aspect-16/9 w-full rounded-t-2xl object-contain object-cover opacity-100 transition-opacity duration-500 sm:aspect-3/2 sm:w-30 sm:rounded-lg"
                  src="https://cdn-media.sforum.vn/storage/app/media/nhuy/Nhu-Y-1/review-noi-com-dien-tefal-1-8l.jpg"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                />
              </span>
              <div className="sm:text-md m-2 line-clamp-2 h-11 flex-1 text-base font-bold text-neutral-800 sm:m-0 sm:line-clamp-3 sm:h-18 sm:font-medium">
                Review nồi cơm điện Tefal 1.8L có thực sự đáng mua cho căn bếp
                hiện đại?
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
