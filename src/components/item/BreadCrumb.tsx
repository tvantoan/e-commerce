"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function BreadCrumb() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const handleSegment = (index: number) => {
    return segments.slice(0, index + 1).join("/");
  };
  return (
    <div id="breadcrumbs" className="bannerTopHead">
      <div className="block-breadcrumbs">
        <div className="cps-container">
          <ul>
            <li>
              <div>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2841_7864)">
                    <path
                      d="M3.33333 8H2L8 2L14 8H12.6667"
                      stroke="#18181B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M3.3335 8V12.6667C3.3335 13.0203 3.47397 13.3594 3.72402 13.6095C3.97407 13.8595 4.31321 14 4.66683 14H11.3335C11.6871 14 12.0263 13.8595 12.2763 13.6095C12.5264 13.3594 12.6668 13.0203 12.6668 12.6667V8"
                      stroke="#18181B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M6 14V9.99996C6 9.64634 6.14048 9.3072 6.39052 9.05715C6.64057 8.8071 6.97971 8.66663 7.33333 8.66663H8.66667C9.02029 8.66663 9.35943 8.8071 9.60948 9.05715C9.85952 9.3072 10 9.64634 10 9.99996V14"
                      stroke="#18181B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>{" "}
                  <defs>
                    <clipPath id="clip0_2841_7864">
                      <rect width={16} height={16} fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>{" "}
              <Link href="https://cellphones.com.vn/" className="button__home">
                Trang chủ
              </Link>
            </li>{" "}
            {segments.map((segment, index) => (
              <li
                key={index}
                ins-init-condition="#LmJyZWFkY3J1bWJzIGxpOm5vdCg6Zmlyc3QsIDpsYXN0KSwgLmJsb2NrLWJyZWFkY3J1bWJzIGxpOm5vdCg6Zmlyc3QsIDpsYXN0KQ=="
              >
                <div className="separator">/</div>{" "}
                <Link
                  href={handleSegment(index)}
                  className="button__breadcrumb-item"
                >
                  {segment.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
            <li>
              <div className="separator">/</div>{" "}
              <p>{segments[segments.length - 1]?.replace(/-/g, " ")}</p>
            </li>
          </ul>
        </div>
      </div>{" "}
      <div className="clear"></div>
    </div>
  );
}
