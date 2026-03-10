import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <Link className="mb-2 block md:mb-4" href="/">
      <span className="cps-image-cdn relative inline-block h-auto w-full object-contain md:hidden">
        <Image
          alt="Thiết bị gia đình"
          loading="lazy"
          width={1200}
          height={150}
          decoding="async"
          data-nimg="1"
          className="h-auto w-full object-contain opacity-100 transition-opacity duration-500 md:hidden"
          style={{ color: "transparent" }}
          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:150/q:90/plain/https://dashboard.cellphones.com.vn/storage/dien-gia-dinh-mobi-1.jpg"
        />
      </span>
      <span className="cps-image-cdn relative hidden h-auto w-full object-contain md:block">
        <Image
          alt="Thiết bị gia đình"
          loading="lazy"
          width={1200}
          height={120}
          decoding="async"
          data-nimg="1"
          className="hidden h-auto w-full object-contain opacity-100 transition-opacity duration-500 md:block"
          style={{ color: "transparent" }}
          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:120/q:90/plain/https://dashboard.cellphones.com.vn/storage/dien-gia-dinh-des.png"
        />
      </span>
    </Link>
  );
}
