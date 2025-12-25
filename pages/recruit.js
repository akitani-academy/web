// import Layout from "components/layout";
import Header from "components/header";
import Footer from "components/footer";
import Head from "components/head";
import LinkList from "components/widget/LinkList";
import ContactButton from "components/ContactButton/ContactButton";

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import css from "styles/recruit.module.scss";

// swiper
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page({ wpDATA }) {
    return (
        <>
            <Head
                url={"/recruit"}
                title={wpDATA.subTitle}
                breadcrumb={[
                    ["トップページ", ""],
                    [wpDATA.subTitle, "/recruit"],
                ]}
            />
            <h1
                className={css.h1}
                dangerouslySetInnerHTML={{
                    __html: parser.translateHTMLString(wpDATA.subTitle),
                }}
            ></h1>

            <div className={css.swiper}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    breakpoints={{
                        961: {
                            slidesPerView: 3,
                        },
                    }}
                    slidesPerView={1}
                    // spaceBetween={60}
                    centeredSlides={true}
                    loop={true}
                    speed={1500}
                    autoplay={{
                        delay: 3000,
                    }}
                    navigation
                    className={css.swiper_wrapper}
                >
                    {[...wpDATA.cfs.slide, ...wpDATA.cfs.slide].map((e, i) => (
                        <>
                            <SwiperSlide className={css.slide_image} key={i}>
                                <img src={e.image} alt="" />
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>

            <article
                className={css.lead_text}
                dangerouslySetInnerHTML={{
                    __html: parser.translateHTMLString(
                        "<p>" + wpDATA.cfs.donyu + "</p>"
                    ),
                }}
            />
            <LinkList
                data={[
                    ["講師", "#0"],
                    ["事務運営スタッフ", "#1"],
                ]}
            />

            {wpDATA.cfs.recruit.map((e, i) => (
                <>
                    <div className={css.main_content}>
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: parser.translateHTMLString(e.title),
                            }}
                            id={i}
                            className={css.h2}
                            key={i}
                        ></h2>
                        <article
                            className={css.treatment}
                            dangerouslySetInnerHTML={{
                                __html: parser.translateHTMLString(e.body),
                            }}
                        ></article>
                        {e.loop.map((e2, i2) => (
                            <>
                                <div className={css.result_row}>
                                    <h3
                                        className={css.h3}
                                        dangerouslySetInnerHTML={{
                                            __html: parser.translateHTMLString(
                                                e2.title
                                            ),
                                        }}
                                        key={i2}
                                    ></h3>
                                    <article
                                        dangerouslySetInnerHTML={{
                                            __html: parser.translateHTMLString(
                                                e2.body
                                            ),
                                        }}
                                    ></article>

                                    {e2.loop2?.map((e3, i3) => (
                                        <>
                                            <div className={css.row_content}>
                                                <h4
                                                    className={css.h4}
                                                    dangerouslySetInnerHTML={{
                                                        __html: parser.translateHTMLString(
                                                            e3.title
                                                        ),
                                                    }}
                                                    key={i3}
                                                ></h4>
                                                <article
                                                    dangerouslySetInnerHTML={{
                                                        __html: parser.translateHTMLString(
                                                            e3.body
                                                        ),
                                                    }}
                                                ></article>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </>
                        ))}
                    </div>
                    <ContactButton />
                </>
            ))}
        </>
    );
}

Page.getLayout = function getLayout(page) {
    return (
        <>
            <Header />
            {page}
            <Footer />
        </>
    );
};

export async function getStaticProps() {
    let wpDATA = await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?slug=recruit"
    ).then((res) => res.json());
    wpDATA = wpDATA[0];

    return {
        props: {
            wpDATA,
        },
    };
}
