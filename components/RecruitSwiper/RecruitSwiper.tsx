"use client";

import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import css from "./style.module.scss";

export default function RecruitSwiper() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
      <div className={css.swiper}>
        <div className="slider-nav">
            <button ref={prevRef} className={`swiper-button-prev ${css.swiper_button} ${css.swiper_button_prev}`} />
            <button ref={nextRef} className={`swiper-button-next ${css.swiper_button} ${css.swiper_button_next}`} />
        </div>
        
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            // breakpoints={{
            //     961: {
            //         slidesPerView: 3,
            //     },
            // }}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={1500}
            autoplay={{
                delay: 3000,
            }}
            navigation={true}
            onSwiper={(swiper) => {
                const navigation = swiper.params.navigation;

                if (
                    !navigation ||
                    typeof navigation === "boolean"
                ) {
                    return;
                }

                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
            }}
            className={css.swiper_wrapper}
        >
            {/* {[...wpDATA.cfs.slide, ...wpDATA.cfs.slide].map(
                (e, i) => (
                    <> */}
            <>
                <SwiperSlide
                    className={css.slide_image}
                    // key={i}
                >
                    <div className={css.row}>
                            <figure>
                                <picture>
                                    <source
                                        srcSet="/img/recruit/staff_01-sp.png"
                                        media="(max-width:960px)"
                                    />
                                    <img
                                        src="/img/recruit/staff_01.png"
                                        alt=""
                                    />
                                </picture>
                            </figure>
                        <div className={css.row__item}>
                            <div className={css.box__text}>
                                <h3>
                                    <div
                                        className={
                                            css.subTitle
                                        }
                                    >
                                        英検1級 TOEIC 980
                                        東京外国語大学英米語学科卒
                                    </div>
                                    <div
                                        className={
                                            css.title
                                        }
                                    >
                                        <span
                                            className={
                                                css.title__inner
                                            }
                                        >
                                            齊藤 美智
                                        </span>
                                    </div>
                                </h3>
                            </div>
                            <div className={css.box__text}>
                                <p>
                                    高校時代にAFSの交換留学制度で選抜され、1年間海外で学びました。英語はまさにLingua
                                    franca。身につければ世界中の人とつながり、視野も仕事の可能性も広がります。
                                    <br />
                                    一方で、習得には地道な努力が欠かせず、多くの生徒が途中で不安や壁にぶつかります。そんな時、そっと背中を押し、小さな成長を一緒に喜べるのがこの仕事の魅力です。
                                    <br />
                                    秋谷光子アカデミィには、自分自身も試行錯誤しながら英語をものにしてきた講師が集まっています。生徒の「できた！」を心から喜べる方、そして仲間と学び続けたい方と、教室を一緒につくっていきたいです。
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className={css.slide_image}
                    // key={i}
                >
                    <div className={css.row}>
                            <figure>
                                <picture>
                                    <source
                                        srcSet="/img/recruit/staff_02-sp.png"
                                        media="(max-width:960px)"
                                    />
                                    <img
                                        src="/img/recruit/staff_02.png"
                                        alt=""
                                    />
                                </picture>
                            </figure>
                        <div className={css.row__item}>
                            <div className={css.box__text}>
                                <h3>
                                    <div
                                        className={
                                            css.subTitle
                                        }
                                    >
                                        英検1級 TOEIC 960
                                        慶應義塾大学経済学部卒
                                    </div>
                                    <div
                                        className={
                                            css.title
                                        }
                                    >
                                        <span
                                            className={
                                                css.title__inner
                                            }
                                        >
                                            安永 光希
                                        </span>
                                    </div>
                                </h3>
                            </div>
                            <div className={css.box__text}>
                                <p>
                                    英語を学ぶことはスポーツにとてもよく似ています。新しい技を覚えたあと、何度も反復し、身体に染み込むまで続けてはじめて試合で使えるようになりますよね。
                                    <br />
                                    授業でも同じで、生徒が自分の力でプレーできるようになるまで、基本のフォームづくりと反復練習を一緒に重ねていきます。
                                    <br />
                                    生徒とともに英調していきたい、のびのびと楽しく英語を操るコツを伝えたい、部活のコーチのように生徒の成長を見守りたい――そんな方に、秋谷光子アカデミィの講師という仕事を楽しんでいただけると思います。
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className={css.slide_image}
                    // key={i}
                >
                    <div className={css.row}>
                            <figure>
                                <picture>
                                    <source
                                        srcSet="/img/recruit/staff_03-sp.png"
                                        media="(max-width:960px)"
                                    />
                                    <img
                                        src="/img/recruit/staff_03.png"
                                        alt=""
                                    />
                                </picture>
                            </figure>
                        <div className={css.row__item}>
                            <div className={css.box__text}>
                                <h3>
                                    <div
                                        className={
                                            css.subTitle
                                        }
                                    >
                                        英検1級 TOEIC 950
                                        関西学院大学卒
                                    </div>
                                    <div
                                        className={
                                            css.title
                                        }
                                    >
                                        <span
                                            className={
                                                css.title__inner
                                            }
                                        >
                                            黒宮 幸子
                                        </span>
                                    </div>
                                </h3>
                            </div>
                            <div className={css.box__text}>
                                <p>
                                    日本語を身につけたとき、私たちはまず耳で聞き、真似して声に出し、あとから文字を覚えました。英語も本来は同じで、耳・目・口・手を総動員してインプットとアウトプットを回し続けてこそ「使える力」になります。
                                    <br />
                                    秋谷光子アカデミィでは、定期テストや入試だけでなく、その先の大学・社会で夢をかなえるための「道具」として英語をとらえ、授業をデザインしています。
                                    <br />
                                    中学生の基礎から難関大志望の高校生、社会人まで多様な生徒と向き合いながら、講師で指導法を磨き合う文化があります。
                                    <br />
                                    英語教育を一生の仕事にしたい方にとって、大きく成長できる場です。
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </>
            {/* </>
                )
            )} */}
        </Swiper>
    </div>
    );
}