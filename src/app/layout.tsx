import type { Metadata } from "next";
import "./globals.css";
// import SideBar from "@/components/layout/SideBar";
// import TopBar from "@/components/layout/TopBar";
// import Footer from "@/components/layout/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cookies } from "next/headers";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Web selling household appliances use Next.js",
};
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    //   <body
    //     className={`min-h-screen w-full ${plusJakarta.className}`}
    //     style={{ WebkitTextFillColor: "inherit" }}
    //   >
    //     <div className="mx-auto max-w-[1440px]">
    //       {/* <TopBar /> */}
    //       <div className="flex w-full pt-31">
    //         {/* <div className="min-h-screen min-w-[290px]">
    //           <SideBar /></div> */}
    //         <main className="flex-1 bg-gray-100">{children}</main>
    //       </div>
    //       {/* <Footer /> */}
    //     </div>
    //   </body>
    // </html>
    <html lang="en">
      <body
        className={`min-h-screen w-full ${plusJakarta.className}`}
        style={{ WebkitTextFillColor: "inherit" }}
      >
        {children}
      </body>
    </html>
  );
}
