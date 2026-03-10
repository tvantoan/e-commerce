"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const folderPath = "slides";
const slides = [
  "10.png",
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "1.png",
];
const slides_2 = [
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "1.png",
  "2.png",
];
export default function ImageSlider() {
  const [index, setIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [resetInterval, setResetInterval] = useState(0);

  const toggleResetInterval = () => {
    if (resetInterval === 0) {
      setResetInterval(1);
    } else {
      setResetInterval(0);
    }
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setIndex((i) => {
      if (i === 0) {
        setTimeout(() => {
          setIsAnimating(false);
          setIndex(slides.length - 2);
        }, 500);

        return slides.length - 2;
      }
      return i - 1;
    });
    toggleResetInterval();
  };

  const handleNext = () => {
    setIsAnimating(true);
    setIndex((i) => i + 1);
    toggleResetInterval();
  };

  const handleDotClick = (i: number) => {
    setIsAnimating(true);
    setIndex(i + 1);
    toggleResetInterval();
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setIndex((i) => i + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [resetInterval]);

  useEffect(() => {
    if (index === slides.length - 1) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        setIndex(1);
      }, 500); //

      return () => clearTimeout(timeout);
    }
  }, [index]);
  return (
    <div
      className="cpsui:relative cpsui:mb-4 group"
      role="region"
      aria-roledescription="carousel"
      data-slot="carousel"
    >
      <div
        className="cpsui:overflow-hidden cpsui:h-full cpsui:-ml-4"
        data-slot="carousel-content"
      >
        <motion.div
          className="cpsui:flex"
          animate={{ x: `-${index * 100}%` }}
          transition={
            isAnimating ? { duration: 0.5, ease: "easeInOut" } : { duration: 0 }
          }
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              data-slot="carousel-item"
              className="cpsui:min-w-0 cpsui:shrink-0 cpsui:grow-0 cpsui:basis-11/12 cpsui:pl-4 shrink-0 basis-full"
            >
              <Link
                className="block h-fit w-full py-0 leading-none"
                href="/qua-tang-8-3"
              >
                <span className="cps-image-cdn relative block h-auto w-full rounded-sm">
                  <img
                    src={`/assets/${folderPath}/${slide}`}
                    alt={`${slide}`}
                    className="block h-auto w-full rounded-sm object-contain opacity-100 transition-opacity duration-500"
                    style={{ color: "transparent" }}
                  />
                </span>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
      <div
        className="cpsui:bg-pure-white cpsui:w-[24px] cpsui:h-[24px] cpsui:select-none cpsui:cursor-pointer cpsui:rounded-full cpsui:flex cpsui:items-center cpsui:justify-center cpsui:absolute cpsui:shadow-sm cpsui:top-1/2 cpsui:left-6 cpsui:-translate-y-1/2 left-3 opacity-0 transition-all duration-150 group-hover:opacity-100"
        onClick={handlePrev}
      >
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
          <path d="M15 6l-6 6l6 6"></path>
        </svg>
      </div>
      <div
        className="cpsui:bg-pure-white cpsui:w-[24px] cpsui:h-[24px] cpsui:select-none cpsui:cursor-pointer cpsui:rounded-full cpsui:flex cpsui:items-center cpsui:justify-center cpsui:absolute cpsui:shadow-sm cpsui:top-1/2 cpsui:right-6 cpsui:-translate-y-1/2 right-3 opacity-0 transition-all duration-150 group-hover:opacity-100"
        onClick={handleNext}
      >
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
            {Array.from({ length: slides.length - 2 }).map((_, i) => (
              <button
                key={i}
                className={`cpsui:h-0.5 cpsui:cursor-pointer cpsui:rounded-full cpsui:transition-all cpsui:duration-200 cpsui:bg-neutral-300 cpsui:w-2 ${index === i + 1 && "cpsui:bg-primary-500 cpsui:w-4"}`}
                onClick={() => handleDotClick(i)}
              ></button>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
