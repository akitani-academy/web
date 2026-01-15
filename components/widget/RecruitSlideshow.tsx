"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "styles/RecruitSlideshow.module.scss";

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
        if (!images?.length) return;

        const intervalId = setInterval(() => {
            setCurrentIndex((prev: number) => (prev + 1) % images.length);
        }, seconds * 1000);

        return () => clearInterval(intervalId);
    }, [seconds, images, isMobile]);

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
                    <img
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    />
                </div>
                );
            })}
        </div>
    );
};