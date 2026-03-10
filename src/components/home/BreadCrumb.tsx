import Link from "next/link";

export default function BreadCrumb() {
  return (
    <div className="block-breadcrumbs tablet:px-0 py-1x-small h-[48px] w-full overflow-x-auto px-2.5 sm:px-0">
      <ul className="flex h-full w-full items-center gap-2.5">
        <li className="gap-2x-small flex shrink-0 items-center justify-center">
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
            <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
          </svg>
          <Link className="text-small font-regular text-neutral-900" href="/">
            Trang chủ
          </Link>
        </li>
        <li className="text-small font-regular flex shrink-0 items-center justify-center gap-2.5 text-neutral-900 last:text-neutral-500">
          <div>/</div>
          <span>Đồ gia dụng</span>
        </li>
      </ul>
    </div>
  );
}
