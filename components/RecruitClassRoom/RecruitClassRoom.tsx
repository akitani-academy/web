"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Scrollbar, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
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

  return (
    <div className={css.root}>
      <Swiper
        modules={[Thumbs, Autoplay]}
        slidesPerView={1}
        speed={800}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className={css.main}
      >
        {IMAGES.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt="" className={css.mainImg} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={css.thumbsWrap}>
        <div
          className={`swiper-button-prev ${css.navBtn} ${css.prev}`}
          onClick={() => thumbsRef.current?.slidePrev()}
          role="button"
          aria-label="prev"
        />

        <div className={css.thumbsArea}>
          <Swiper
            observer
            observeParents
            modules={[Thumbs, Scrollbar]}
            breakpoints={{
              0: { spaceBetween: 14 },
              961: { spaceBetween: 23 },
            }}
            onSwiper={(swiper) => {
              thumbsRef.current = swiper;
              setThumbsSwiper(swiper);
            }}
            watchSlidesProgress
            speed={500}
            slidesPerView={3}
            centeredSlides
            slideActiveClass={css.active}
            scrollbar={{
              el: `.${css.scrollbar}`,
              hide: false,
            }}
            className={css.thumbs}
          >
            {IMAGES.map((src, i) => (
              <SwiperSlide key={i} className={css.thumbSlide}>
                <img src={src} alt="" className={css.thumbImg} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={`swiper-scrollbar ${css.scrollbar}`} />
        </div>

        <div
          className={`swiper-button-next ${css.navBtn}  ${css.next}`}
          onClick={() => thumbsRef.current?.slideNext()}
          role="button"
          aria-label="next"
        />
      </div>
    </div>
  );
}
