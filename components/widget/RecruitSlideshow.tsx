"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "styles/Slideshow.module.scss";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

export default function RecruitSlideshow({ images, seconds }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

    useEffect(() => {
        if (isMobile === null) return;

        const intervalId = setInterval(() => {
            setCurrentIndex((prev: number) => (prev + 1) % images.length);
        }, seconds * 1000);

        return () => clearInterval(intervalId);
    }, [seconds, images.length, isMobile]);

    if (isMobile === null) return null;

    return (
        <div className={styles.slideshow}>
            {images.map((item: any, index: number) => {
                const img = isMobile ? item.sp : item.pc;

                return (
                <div
                    key={index}
                    className={classNames(styles.slide, {
                    [styles.hidden]: index !== currentIndex,
                    })}
                >
                    <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes={isMobile ? "100vw" : "(max-width: 1000px) 100vw, 1000px"}
                    />
                </div>
                );
            })}
        </div>
    );
};