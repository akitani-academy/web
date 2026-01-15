"use client";

import { useRef, useState, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Scrollbar, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import css from "./style.module.scss";

const IMAGES = [
  "/img/recruit/classroom_img_01.png",
  "/img/recruit/classroom_img_02.png",
  "/img/recruit/classroom_img_03.png",
  "/img/recruit/classroom_img_04.png",
  "/img/recruit/classroom_img_05.png",
  "/img/recruit/classroom_img_06.png",
  "/img/recruit/classroom_img_07.png",
  "/img/recruit/classroom_img_08.png",
  "/img/recruit/classroom_img_09.png",
  "/img/recruit/classroom_img_10.png",
  "/img/recruit/classroom_img_11.png",
  "/img/recruit/classroom_img_12.png",
  "/img/recruit/classroom_img_13.png",
  "/img/recruit/classroom_img_14.png",
  "/img/recruit/classroom_img_15.png",
  "/img/recruit/classroom_img_16.png",
];

export default function RecruitSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const thumbsRef = useRef<SwiperType | null>(null);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!thumbsRef.current) return;
    if (!prevRef.current || !nextRef.current) return;

    const swiper = thumbsRef.current;

    swiper.params.navigation = {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    };

    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  return (
    <div className={css.root}>
      <Swiper
        modules={[Thumbs, Autoplay]}
        slidesPerView={1}
        loop={false}
        speed={800}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className={css.main}
      >
        {IMAGES.map((src, i) => (
          <SwiperSlide key={`${src}-${i}`} className={css.mainSlide}>
            <img src={src} alt="" className={css.mainImg} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={css.thumbsWrap}>
        <div
          ref={prevRef}
          className={`swiper-button-prev ${css.navBtn} ${css.prev}`}
          aria-label="prev"
        />

        <div className={css.thumbsArea}>
            <Swiper
                observer
                observeParents
                modules={[Navigation, Thumbs, Scrollbar]}
                breakpoints={{
                  0:   { spaceBetween: 14 },
                  961: { spaceBetween: 23 },
                }}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress
                loop={false}
                speed={500}
                slidesPerView={3}
                centeredSlides
                slideActiveClass={css.active}
                navigation={{
                    enabled: true,
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    const nav = swiper.params.navigation;
                    if (!nav || typeof nav === "boolean") return;
                    nav.prevEl = prevRef.current;
                    nav.nextEl = nextRef.current;
                }}
                scrollbar={{
                    el: `.${css.scrollbar}`,
                    draggable: false,
                    hide: false,
                    dragClass: css.swiper_scrollbar_drag,
                }}
                className={css.thumbs}
            >

            {IMAGES.map((src, i) => (
              <SwiperSlide key={`thumb-${src}-${i}`} className={css.thumbSlide}>
                <img src={src} alt="" className={css.thumbImg} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={`swiper-scrollbar ${css.scrollbar}`} />
        </div>

        <div
          ref={nextRef}
          className={`swiper-button-next ${css.navBtn} ${css.next}`}
          aria-label="next"
        />
      </div>
    </div>
  );
}
