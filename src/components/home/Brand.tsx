import brands from "@/mocks/brands";
import Image from "next/image";
import Link from "next/link";
export default function Brand() {
  return (
    <div className="mb-3 w-full empty:hidden">
      <div className="flex flex-col gap-3">
        <div className="xs:grid-cols-4 grid grid-cols-3 gap-2 border-y border-neutral-300 py-2 empty:hidden sm:flex sm:flex-wrap sm:border-y-0 sm:py-0">
          {brands.map((brand) => (
            <Link
              className="flex h-10 items-center justify-center rounded-md border border-neutral-300 px-1 py-0.5 hover:border-neutral-400 sm:w-auto"
              href={`/${brand.toLowerCase()}`}
              key={brand}
            >
              <span className="cps-image-cdn relative inline-block h-5 w-full min-w-auto object-contain sm:min-w-24.5">
                <Image
                  fill
                  alt={brand}
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="h-5 w-full min-w-auto object-contain opacity-100 transition-opacity duration-500 sm:min-w-24.5"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                  src={`/assets/brands/${brand.toLowerCase()}.png`}
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
