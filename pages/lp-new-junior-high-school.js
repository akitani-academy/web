import { useState } from "react";
import {
    accordionData01,
    accordionData02,
    accordionData03,
    accordionData04,
} from "../components/Accordion/Accordion";

import Link from "next/link";

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Head from "components/head";
import Header from "components/lp_header";
import Footer from "components/lp_footer";
import Nav from "components/lp-new-junior-high-school_nav";
import Cta from "components/Cta/Cta_lp-newjhs";
import Modal from "components/Modal/Modal";

import css_index from "styles/lp-new-junior-high-school.module.scss";

// swiper
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page({
    teacherList,
    experiencesData,
    experiencesPostData,
}) {
    const [activeIndex01, setactiveIndex01] = useState(null);

    const toggleAccordion01 = (index) => {
        setactiveIndex01(activeIndex01 === index ? null : index);
    };

    const [activeIndex02, setactiveIndex02] = useState(null);

    const toggleAccordion02 = (index) => {
        setactiveIndex02(activeIndex02 === index ? null : index);
    };

    const [activeIndex03, setactiveIndex03] = useState(null);

    const toggleAccordion03 = (index) => {
        setactiveIndex03(activeIndex03 === index ? null : index);
    };

    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    //高校合格記
    let actuals_college = ``;
    experiencesData
        .filter((item) => item.id === 26)
        .map((e, i) => {
            e.child_list.map((e1, i1) => {
                e1.post
                    // .filter((data) => {
                    //     const match = data.date.match(/\d{4}/);
                    //     return match && parseInt(match[0], 10) === 2025;
                    // })
                    .map((e2, i2) => {
                        actuals_college += `
              <li key=${i2}>
                ${e2.student}
                ${e2.title && `<span>（${e2.title}）</span>`}
              </li>
            `;
                    });
            });
        });

    const actuals = [
        {
            id: 1,
            title: "英検合格実績",
            subtitle: "過去1年間（2024年第3回〜2025年第2回）",
            content: [
                `<div className=${css_index.row_box}>
          <h5>1級（5名）</h5>
          <ul>
            <li>東京都市大学付属中学校 3年</li>
            <li>東京学芸大学附属国際中等教育学校高校 2年</li>
            <li>自由ヶ丘学園高校 3年</li>
            <li>鶴見大学附属高校卒</li>
            <li>英語講師</li>
          </ul>
        </div>
        <div className=${css_index.row_box}>
          <h5>準1級（22名）</h5>
          <ul>
            <li>世田谷区立東深沢中学校 2年</li>
            <li>慶応高校 1年</li>
            <li>神奈川県立横浜翠嵐高校 1年</li>
          </ul>
        </div>`,
            ],
            modalContent: [
                `<div className=${css_index.row_box}>
          <h5>1級（5名）</h5>
          <ul>
            <li>東京都市大学付属中学校 3年</li>
            <li>東京学芸大学附属国際中等教育学校高校 2年</li>
            <li>自由ヶ丘学園高校 3年</li>
            <li>鶴見大学附属高校卒</li>
            <li>英語講師</li>
          </ul>
        </div>
        <div className=${css_index.row_box}>
          <h5>準1級（22名）</h5>
          <ul>
            <li>世田谷区立東深沢中学校 2年</li>
            <li>慶応高校 1年</li>
            <li>神奈川県立横浜翠嵐高校 1年</li>
            <li>鎌倉学園高校 2年</li>
            <li>浅野高校 2年</li>
            <li>東京学芸大学附属国際中等教育学校高校 2年</li>
            <li>慶応高校 2年</li>
            <li>芝高校 2年</li>
            <li>中央大学附属横浜高校 2年</li>
            <li>立教女学院高校 2年</li>
            <li>白百合学園高校 2年</li>
            <li>東京学芸大学附属高校 2年</li>
            <li>東京都市大学等々力高校 3年</li>
            <li>慶応普通部 3年</li>
            <li>明治学院高校 3年</li>
            <li>田園調布学園高校 3年</li>
            <li>慶応高校 3年</li>
            <li>慶応高校 3年</li>
            <li>田園調布雙葉高校 3年</li>
            <li>青山学院横浜英和高校 3年</li>
            <li>朋優学院高校 卒</li>
            <li>自動車会社勤務</li>
          </ul>
        </div>
        <div className=${css_index.row_box}>
          <h5>2級（26名）</h5>
          <ul>
            <li>横浜市立新田中学校 1年</li>
            <li>世田谷区立東深沢中学校 2年</li>
            <li>中央大学附属横浜中学校 3年</li>
            <li>横浜市立日吉台中学校 3年</li>
            <li>横浜雙葉中学校 3年</li>
            <li>田園調布雙葉中学校 3年</li>
            <li>中央大学附属横浜高校 1年</li>
            <li>浅野高校 1年</li>
            <li>フェリス女学院高校 1年</li>
            <li>横浜雙葉校高校 1年</li>
            <li>大妻高校 1年</li>
            <li>中央大学附属横浜高校 1年</li>
            <li>田園調布雙葉高校 1年</li>
            <li>香蘭女学校高等科 1年</li>
            <li>神奈川県立七里ガ浜高校 2年</li>
            <li>女子学院高校 2年</li>
            <li>自由ヶ丘学園高校 2年</li>
            <li>聖心女子学院高等科 2年</li>
            <li>光塩女子学院高等科 2年</li>
            <li>サレジオ学院高校 2年</li>
            <li>白百合学園高校 2年</li>
            <li>日本女子大学附属高校 3年</li>
            <li>橘学苑高校 3年</li>
            <li>東京都立目黒高校 3年</li>
            <li>文教大学付属高校 卒</li>
            <li>専門学校日本語教師</li>
          </ul>
        </div>`,
            ],
        },
        {
            id: 2,
            title: "2026年大学合格実績",
            subtitle: "",
            content: [
                `<div className=${css_index.row_box}>
          <h5>2026年大学合格実績</h5>
          <ul>
            <li>慶応大学 医学部 合格（慶応高校）</li>
            <li>上智大学 総合人間科学部 合格（等々力高校）</li>
            <li>上智大学 外国語学部 英語学科 合格（自由ヶ丘学園高校）</li>
            <li>立教大学 文学部 合格（田園調布学園高等部）</li>
          </ul>
        </div>
        <div className=${css_index.row_box}>
          <h5>内進を含む主な合格大学</h5>
          <ul>
            <li>慶応大学 合格（1名）</li>
            <li>上智大学 合格（4名）</li>
          </ul>
        </div>`,
            ],
            modalContent: [
                `<div className=${css_index.row_box}>
          <h5>2026年大学合格実績</h5>
          <ul>${actuals_college}</ul>
        </div>
        <div className=${css_index.row_box}>
          <h5>内進を含む主な合格大学</h5>
          <ul>
            <li>上智大学 合格（4名）</li>
            <li>立教大学 合格（2名）</li>
            <li>慶応大学 合格（1名）</li>
            <li>早稲田大学 合格（1名）</li>
            <li>明治大学 合格（1名）</li>
            <li>法政大学 合格（1名）</li>
            <li>明治学院大学 合格（1名）</li>
            <li>日本大学 合格（1名）</li>
          </ul>
        </div>`,
            ],
        },
        {
            id: 3,
            title: "TOEFL実績",
            subtitle: "過去2年間",
            content: [
                `<div className=${css_index.row_box}>
          <h5>IBT （120点満点）</h5>
          <ul>
            <li>105 慶応大学2年</li>
            <li>102 医師</li>
            <li>90 国家公務員</li>
            <li>90 慶應義塾高校3年</li>
          </ul>
        </div>
        <div className=${css_index.row_box}>
          <h5>ITP （677点満点）</h5>
          <ul>
            <li>610 慶應大学3年</li>
            <li>601 横浜国立大学3年</li>
          </ul>
        </div>`,
            ],
            modalContent: [
                `<div className=${css_index.row_box}>
          <h5>IBT （120点満点）</h5>
          <ul>
            <li>105 慶応大学2年</li>
            <li>102 医師</li>
            <li>90 国家公務員</li>
            <li>90 慶應義塾高校3年</li>
          </ul>
        </div>
        <div className=${css_index.row_box}>
          <h5>ITP （677点満点）</h5>
          <ul>
            <li>610 慶應大学3年</li>
            <li>601 横浜国立大学3年</li>
          </ul>
        </div>`,
            ],
        },
        {
            id: 4,
            title: "TOEIC実績",
            subtitle: "過去2年間",
            content: [
                `<div className=${css_index.row_box}>
          <h5>TOEIC （990点満点）</h5>
          <ul>
            <li>985 メーカー勤務</li>
            <li>975 IT企業勤務</li>
            <li>960 外資系企業勤務</li>
            <li>935 慶応大学3年</li>
            <li>905 早稲田大学4年</li>
            <li>900 塾講師</li>
          </ul>
        </div>`,
            ],
            modalContent: [
                `<div className=${css_index.row_box}>
          <h5>TOEIC （990点満点）</h5>
          <ul>
            <li>985 メーカー勤務</li>
            <li>975 IT企業勤務</li>
            <li>960 外資系企業勤務</li>
            <li>935 慶応大学3年</li>
            <li>905 早稲田大学4年</li>
            <li>900 塾講師</li>
          </ul>
        </div>`,
            ],
        },
    ];

    return (
        <>
            <Head
                title="英語専門塾 秋谷光子アカデミィ - 英検1級188人合格の圧倒的な実績｜横浜,綱島,自由が丘,田園調布"
                url={`/lp`}
                description="難関大学合格、内部進学、留学、全ての進路を可能にする英語力を育てます。"
                breadcrumb={[["LP", "/lp"]]}
            />

            <main className={`${css_index.main} lp_main`}>
                <div className={css_index.fv}>
                    <div className={css_index.fv__inner}>
                        <ul>
                            <li>新中学1年生</li>
                            <li>英検合格</li>
                            <li>難関高校・大学合格</li>
                        </ul>
                        <h2>
                            <span>実用英語と</span>
                            <br className={css_index.pc_sm} />
                            <span>受験英語を</span>
                            <br />
                            <span>中学1年生から</span>
                        </h2>
                        <p>
                            <span>
                                実用英語と受験英語をバランス良くマスターし、
                            </span>
                            <br />
                            <span>
                                英検上位級・難関大合格へ。全ての進路を可能にする英語力を育てます。
                            </span>
                        </p>
                        <div className={css_index.success}>
                            <picture>
                                <source
                                    srcSet="./img/top/sp/success_01.png"
                                    media="(max-width: 600px)"
                                />
                                <img
                                    src="./img/top/pc/success_01.png"
                                    alt="英検1級合格 累計 188名"
                                />
                            </picture>
                            <picture>
                                <source
                                    srcSet="./img/top/sp/success_02.png"
                                    media="(max-width: 600px)"
                                />
                                <img
                                    src="./img/top/pc/success_02.png"
                                    alt="英検1級合格 合計 42名 在籍"
                                />
                            </picture>
                        </div>
                        <p>※2026年1月時点のデータ</p>
                        <div className={css_index.cta}>
                            <p>
                                <span className={css_index.red_balloon}>
                                    最短で目標達成できるカリキュラムをご案内
                                </span>
                            </p>
                            <Link href={`/contact`}>
                                お問い合わせ・
                                <span>無料体験レッスンを申し込む</span>
                            </Link>
                            <Link href={`/contact`}>資料を請求する</Link>
                        </div>
                    </div>
                </div>

                <section
                    id="nav_01"
                    className={`${css_index.section} ${css_index.section_01}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>新中学1年生コース受講者の声</span>
                    </h2>

                    <h3>
                        秋谷光子アカデミィで、
                        <br className={css_index.sp} />
                        社会でも受験でも圧倒する英語力を。
                        <br />
                        実用英語と受験英語を両立し、
                        <br className={css_index.sp} />
                        英検突破から難関大合格へとつなげる
                        <br className={css_index.tab} />
                        「新中学1年生コース」
                    </h3>

                    <div className={css_index.swiper}>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            breakpoints={{
                                961: {
                                    slidesPerView: 3,
                                },
                            }}
                            slidesPerView={1}
                            spaceBetween={60}
                            centeredSlides={true}
                            loop={true}
                            speed={1500}
                            autoplay={{
                                delay: 3000,
                            }}
                            navigation
                            className={css_index.swiper_wrapper}
                        >
                            {experiencesPostData.map((e, i) => (
                                <SwiperSlide
                                    key={e.id}
                                    className={css_index.college}
                                >
                                    {e.title && (
                                        <h4>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: parser.translateHTMLString(
                                                        e.title,
                                                    ),
                                                }}
                                            />
                                        </h4>
                                    )}
                                    {e.student && (
                                        <h3>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: e.student,
                                                }}
                                            />
                                        </h3>
                                    )}
                                    {e.join && (
                                        <p
                                            className={css_index.join}
                                            dangerouslySetInnerHTML={{
                                                __html: e.join,
                                            }}
                                        />
                                    )}
                                    {e.description ? (
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: e.description,
                                            }}
                                        />
                                    ) : (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: e.excerpt,
                                            }}
                                        />
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* <div
                        className={`${css_index.section__inner} ${css_index.section_01__inner}`}
                    >
                        <div className={css_index.box}>
                            {actuals.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`${css_index.box__item}`}
                                >
                                    <h4>
                                        {item.title}
                                        {item.subtitle && (
                                            <span>{item.subtitle}</span>
                                        )}
                                    </h4>

                                    <div
                                        className={`${css_index.box__item__content} ${css_index.box__item_01__content}`}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item.content,
                                            }}
                                        />
                                    </div>

                                    <button
                                        onClick={() => handleItemClick(item)}
                                    >
                                        さらに見る
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </section>

                <section
                    className={`${css_index.section} ${css_index.section_02}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>
                            「中学校の英語で
                            <br className={css_index.sp} />
                            つまづかないか心配だ」
                            <br className={css_index.pc_sm} />
                            {/* <br className={css_index.sp} /> */}
                            と思っていませんか？
                        </span>
                    </h2>

                    <div
                        className={`${css_index.section__inner} ${css_index.section_02__inner}`}
                    >
                        <h3>
                            秋谷光子アカデミィにご相談いただく
                            <br />
                            保護者・生徒の課題やお悩みをご紹介
                        </h3>

                        <ul>
                            <li>
                                中学入学後、英語の
                                <br />
                                勉強の仕方が
                                <br className={css_index.pc_sm} />
                                わからない
                            </li>
                            <li>
                                高校受験英語を
                                <br />
                                できるだけ
                                <br className={css_index.pc_sm} />
                                早く対策したい
                            </li>
                            <li>
                                「聞く・話す」は
                                <br className={css_index.pc_sm} />
                                できるが、
                                <br className={css_index.pc} />
                                単語の綴りや
                                <br className={css_index.pc_sm} />
                                文法が苦手
                            </li>
                            <li>
                                私立の中学の
                                <br className={css_index.pc_sm} />
                                ハイレベルな
                                <br className={css_index.pc_xl} />
                                授業に
                                <br className={css_index.pc_sm} />
                                ついていけるか不安
                            </li>
                            <li>
                                帰国子女の
                                <br className={css_index.pc_sm} />
                                「高い英語力」を
                                <br className={css_index.pc} />
                                維持・発展させる
                                <br className={css_index.pc_md} />
                                環境がない
                            </li>
                            <li>
                                英検上位級を
                                <br className={css_index.pc_sm} />
                                早期に取得して、
                                <br />
                                高校・大学受験を
                                <br className={css_index.pc_sm} />
                                有利にしたい
                            </li>
                        </ul>

                        <h4>
                            <span>他にもこんな相談を受けております</span>
                        </h4>

                        <div className={css_index.box}>
                            <div className={css_index.box__item}>
                                <div className={css_index.image}>
                                    <picture>
                                        <source
                                            srcSet="./img/top/sp/section03_item01.png"
                                            media="(max-width: 600px)"
                                        />
                                        <img src="./img/top/pc/section03_item01.png" />
                                    </picture>
                                </div>
                                <p>
                                    <span>
                                        <span className={css_index.block}>
                                            小学校では楽しく授業を受けられていたのに、
                                        </span>
                                        <span className={css_index.block}>
                                            中学の文法問題で急に点数が取れなくなり、
                                        </span>
                                        <span className={css_index.block}>
                                            自信を失いかけている……
                                        </span>
                                    </span>
                                </p>
                            </div>
                            <div className={css_index.box__item}>
                                <div className={css_index.image}>
                                    <picture>
                                        <source
                                            srcSet="./img/top/sp/section03_item02.png"
                                            media="(max-width: 600px)"
                                        />
                                        <img src="./img/top/pc/section03_item02.png" />
                                    </picture>
                                </div>
                                <p>
                                    <span>
                                        <span className={css_index.block}>
                                            リスニングは得意だけど、ライティングや正確な読解が苦手。
                                        </span>
                                        <span className={css_index.block}>
                                            このままでは将来の難関大入試で
                                        </span>
                                        <span className={css_index.block}>
                                            通用しないと感じている。
                                        </span>
                                    </span>
                                </p>
                            </div>
                            <div className={css_index.box__item}>
                                <div className={css_index.image}>
                                    <picture>
                                        <source
                                            srcSet="./img/top/sp/section03_item03.png"
                                            media="(max-width: 600px)"
                                        />
                                        <img src="./img/top/pc/section03_item03.png" />
                                    </picture>
                                </div>
                                <p>
                                    <span>
                                        <span className={css_index.block}>
                                            中1のうちに英検3級・準2級まで取りたいけれど、
                                        </span>
                                        <span className={css_index.block}>
                                            効率的な対策方法がわからず、
                                        </span>
                                        <span className={css_index.block}>
                                            足踏みしている。
                                        </span>
                                    </span>
                                </p>
                            </div>
                            <div className={css_index.box__item}>
                                <div className={css_index.image}>
                                    <picture>
                                        <source
                                            srcSet="./img/top/sp/section03_item04.png"
                                            media="(max-width: 600px)"
                                        />
                                        <img src="./img/top/pc/section03_item04.png" />
                                    </picture>
                                </div>
                                <p>
                                    <span>
                                        <span className={css_index.block}>
                                            ただの暗記ではない、本質的な英語力を身に着けてほしい。
                                        </span>
                                        <span className={css_index.block}>
                                            実績と実力のあるプロ講師に、
                                        </span>
                                        <span className={css_index.block}>
                                            最初から正しく教わりたい。
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={css_index.stone_bg}>
                        <p>
                            秋谷光子アカデミィでは
                            <br className={css_index.sp} />
                            上記のような課題を解決するため
                            <br />
                            <span className={css_index.red}>
                                一人ひとり塾長面談
                            </span>
                            を行ったうえで、
                            <br className={css_index.pc_sm} />
                            <span className={css_index.red}>
                                最適なカリキュラムと学習法
                            </span>
                            を
                            <br className={css_index.sp} />
                            ご案内します。
                        </p>
                    </div>
                </section>
                {/* 
                <section
                    className={`${css_index.section} ${css_index.section_04}`}
                >
                    <h2>
                        <span>
                            秋谷光子アカデミィでは
                            <br className={css_index.tab} />
                            上記のような課題を解決するため
                            <br />
                            <span className={css_index.text_red}>
                                一人ひとり塾長面談
                            </span>
                            を行った上で、
                            <br className={css_index.tab} />
                            <span className={css_index.text_red}>
                                最適なカリキュラムと学習法
                            </span>
                            を<br className={css_index.sp} />
                            ご案内します。
                        </span>
                    </h2>
                    <div
                        className={`${css_index.section__inner} ${css_index.section_04__inner}`}
                    >
                        <h3>
                            <span>英語塾選びでよくある落とし穴</span>
                        </h3>

                        <h4 className={css_index.sp}>
                            当アカデミィにご相談いただく
                            <br className={css_index.sp} />
                            生徒の課題・お悩みをご紹介
                        </h4>

                        <div className={`${css_index.box} ${css_index.box_01}`}>
                            <div
                                className={`${css_index.box__item} ${css_index.box_01__item}`}
                            >
                                <h5>
                                    学力・レベルを
                                    <span>無視したクラス編成</span>
                                </h5>
                                <p>参加したクラスと自分のレベルに差がある</p>
                            </div>
                            <div
                                className={`${css_index.box__item} ${css_index.box_01__item}`}
                            >
                                <h5>
                                    大学生のアルバイトが
                                    <span>講師として教えている</span>
                                </h5>
                                <p>
                                    指導経験不足により適切でわかりやすい指導をしてくれない
                                </p>
                            </div>
                            <div
                                className={`${css_index.box__item} ${css_index.box_01__item}`}
                            >
                                <h5>
                                    ビデオ学習が<span>メインの学習方法</span>
                                </h5>
                                <p>学習中の疑問をすぐに解決できない</p>
                            </div>
                            <div
                                className={`${css_index.box__item} ${css_index.box_01__item}`}
                            >
                                <h5>大人数での集団授業</h5>
                                <p>
                                    1人1人の発音やスピーキングの確認や訂正をしてくれない質問もしにくい
                                </p>
                            </div>
                            <div
                                className={`${css_index.box__item} ${css_index.box_01__item}`}
                            >
                                <h5>
                                    授業以外の学習は<span>全て自己管理</span>
                                </h5>
                                <p>勉強の仕方がわからないから成績が伸びない</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${css_index.section_04__bottom} ${css_index.section_04__bottom}`}
                    >
                        <h2>
                            秋谷光子アカデミィなら
                            <br className={css_index.sp} />
                            上記のような心配はいりません。
                            <br />
                            <span className={css_index.text_red}>
                                最高の学習環境
                            </span>
                            と
                            <span className={css_index.text_red}>
                                実績ある講師陣
                            </span>
                            が
                            <br className={css_index.sp} />
                            目標達成へ導きます。
                            <br />
                        </h2>

                        <div className={`${css_index.box} ${css_index.box_01}`}>
                            <div
                                className={`${css_index.box__item} ${css_index.box_01__item}`}
                            >
                                <h3>当アカデミィの学習環境ご案内</h3>
                                <div>
                                    <ul>
                                        <li>
                                            レベル別コース・カリキュラムをご用意
                                        </li>
                                        <li>
                                            英検1級 講師42名、学生講師はいません
                                        </li>
                                        <li>英検1級講師が指導</li>
                                        <li>
                                            英検1級講師がグループ指導は6名までの少人数制で、1対1個別指導も実力ある英検1級講師が指導
                                        </li>
                                        <li>
                                            授業以外の学習方法から将来のキャリアで役に立つ英語力まで幅広くご指導可能
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Cta />
                </section> */}

                <section
                    className={`${css_index.section} ${css_index.section_03}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>
                            なぜ、多くの中学1年生が
                            <br className={css_index.sp} />
                            「最初」でつまづくのか？
                        </span>
                    </h2>

                    <div
                        className={`${css_index.section__inner} ${css_index.section_03__inner}`}
                    >
                        <div className={`${css_index.row} ${css_index.row_01}`}>
                            <h3>
                                <span>
                                    <img src="/img/top/text_01.png" />
                                </span>
                                単語が書けない
                            </h3>
                            <p>
                                小学校では耳で覚えて楽しめても、正確なスペルを綴る練習は不足しています。中学では「書けること」が評価の前提となるため、書き・覚えている単語量で大きく差がつきます。
                            </p>
                        </div>

                        <div className={`${css_index.row} ${css_index.row_02}`}>
                            <h3>
                                <span>
                                    <img src="/img/top/text_02.png" />
                                </span>
                                文法のルールを知らない
                            </h3>
                            <p>
                                これまでは「なんとなく」で通じていた英語も、中学からは文法の理解が不可欠に。ルールを体系的に理解していないと、応用が効かなくなります。
                            </p>
                        </div>

                        <div className={`${css_index.row} ${css_index.row_03}`}>
                            <h3>
                                <span>
                                    <img src="/img/top/text_03.png" />
                                </span>
                                読む分量の急増
                            </h3>
                            <p>
                                教科書の改訂により、中学で扱う語彙数や長文の文章量は以前より格段に増えています。正しい読み方を知らないまま進むと、早い段階で授業についていけなくなります。
                            </p>
                        </div>

                        <div className={`${css_index.row} ${css_index.row_04}`}>
                            <h3>
                                <span>
                                    <img src="/img/top/text_04.png" />
                                </span>
                                4技能の同時進行
                            </h3>
                            <p>
                                「聞く・話す」に加え、高度な「読む・書く」が同時に求められるのが中学英語。4技能のバランスを崩すと、特定のスキルが弱点となり、英語全体の苦手意識に繋がります。{" "}
                            </p>
                        </div>

                        <div className={`${css_index.row} ${css_index.row_05}`}>
                            <h3>
                                <span>
                                    <img src="/img/top/text_05.png" />
                                </span>
                                定期テストでの挫折
                            </h3>
                            <p>
                                授業は理解できていても、テストで「正確に答える」技術は別物です。解答のコツや時間配分を知らないことで、実力を出しきれないこともあります。{" "}
                            </p>
                        </div>

                        <div className={`${css_index.row} ${css_index.row_06}`}>
                            <h3>
                                <span>
                                    <img src="/img/top/text_06.png" />
                                </span>
                                自己流学習の限界
                            </h3>
                            <p>
                                英検や高校・大学受験を見据えた場合、効率の悪い暗記頼みの学習は限界が来ます。指導実績豊富な英検1級ベテラン講師が、お一人お一人に寄り添った指導をするので、効率的な学習法を体得できます。{" "}
                            </p>
                        </div>

                        <div className={`${css_index.row} ${css_index.row_07}`}>
                            <h3>
                                <span>
                                    <img src="/img/top/text_07.png" />
                                </span>
                                モチベーションの維持
                            </h3>
                            <p>
                                英語学習のモチベーション維持には、明確な目標（英検合格など）と、成功体験を積める環境がないと継続は難しく、着実にマスターしていけません。
                            </p>
                        </div>
                    </div>

                    <div
                        className={`${css_index.additionally} ${css_index.additionally_01}`}
                    >
                        <div className={`${css_index.float_text}`}></div>
                        <div className={css_index.section__inner}>
                            <h3>
                                <span className={css_index.red}>
                                    中学1年生の学習で、
                                    <br />
                                    未来の英語力は決まります。
                                </span>
                            </h3>
                            <p>
                                中学1年生の英語は、入門編ではありません。難関大学入試で問われる高度な英語力の土台は、「聞く・話す」に加え、「読む・書く」という中学英語の上に成り立っています。英語は論理的な言語なので、スタートの時点で、感覚ではなく論理的に英語を理解しておくことが、将来の難関高校・大学合格への最短ルートとなります。
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${css_index.additionally} ${css_index.additionally_02}`}
                    >
                        <div className={`${css_index.float_text}`}>
                            <span>だからこそ</span>
                        </div>
                        <div className={css_index.section__inner}>
                            <h3>
                                中学１年生の
                                <br className={css_index.sp} />
                                英語教育が重要
                            </h3>
                            <p>
                                秋谷光子アカデミィでは、小学生から社会人まで圧倒的な英検1級合格実績を誇っております。また、英検合格を可能にする講師陣が多数（英検1級レベル以上の講師45名）指導しています。英検合格だけではなく、難関大学を含む受験対策や学校の成績向上も重要視しており、生徒それぞれの目標に合わせたカリキュラムでご指導いたします。
                            </p>
                        </div>
                    </div>

                    <Cta className={css_index.cta_box} />

                    {/* <div className={css_index.stone_bg}>
                        <p>
                            これらの問題は、
                            <span className={css_index.red}>
                                生徒の学習経験
                            </span>
                            や、
                            <br className={css_index.tab} />
                            問題の程度を考慮した
                            <br />
                            <span className={css_index.red}>
                                効果的な学習方法
                            </span>
                            （適切な指導と
                            <br className={css_index.tab} />
                            定期的な実践・フィードバック）を
                            <br className={css_index.tab} />
                            通じて
                            <span className={css_index.red}>克服可能</span>
                            です。
                        </p>
                    </div> */}
                </section>

                <section
                    id="nav_02"
                    className={`${css_index.section} ${css_index.section_04}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>
                            秋谷光子アカデミィの
                            <br className={css_index.sp} />
                            新中学1年生コース
                        </span>
                    </h2>

                    <div
                        className={`${css_index.section__inner} ${css_index.section_04__inner}`}
                    >
                        <div
                            className={`${css_index.point_row} ${css_index.point_row_01}`}
                        >
                            <h3>アドバンスコース</h3>
                            <div className={css_index.course__container}>
                                <div className={css_index.course__text}>
                                    <p className={css_index.lead}>
                                        中3末までに「英検2級以上合格」を目指し、「大学入試の基礎」を完成。
                                        学校の成績向上はもちろん、将来の難関大合格や留学を見据えたスペシャリスト養成コースです。
                                    </p>
                                    <p>
                                        内容：
                                        大学受験に必要な、基礎レベルの文法を中3末までにマスターし、共通テストレベルの英文の基礎力を固めます。
                                    </p>
                                    <p>
                                        対策： 海外テキストも活用し、TEAP・TOEFL
                                        ITP・TOIEC
                                        Bridge・英検準1級といった高度な検定試験にも対応できるよう、土台となる英語力を養います。
                                    </p>
                                </div>
                                <div className={css_index.course__image}>
                                    <picture>
                                        <source
                                            srcSet="./img/lp-new-jhs/section04_item01.png"
                                            media="(max-width: 600px)"
                                        />
                                        <img
                                            src="./img/lp-new-jhs/section04_item01.png"
                                            alt="アドバンスコース"
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div
                                className={`${css_index.point_row} ${css_index.point_row_02}`}
                            >
                                <h3>ベーシックコース</h3>
                                <div className={css_index.course__container}>
                                    <div className={css_index.course__text}>
                                        <p className={css_index.lead}>
                                            学校の英語成績アップを主な目的に、ニュートレジャー・プログレス等の教科書を完璧にマスターし、中3末までの英検2級合格を目指します。
                                        </p>
                                        <p>
                                            内容：
                                            発音のルール（フォニックス）やノートの取り方など、基本的な学習方法から丁寧に指導し、着実に英語力を育てて、英語を得意科目にいたします。
                                        </p>
                                        <p>
                                            対策： 各中学校の教科書（New
                                            Treasure、Progress、New
                                            Horizon等）と、それに対応する文法を、単元ごとの文法問題集で完璧にマスターし、中間・期末テスト対策も万全。中3末までの英検2級合格を目指します。
                                        </p>
                                    </div>
                                    <div className={css_index.course__image}>
                                        <picture>
                                            <source
                                                srcSet="./img/lp-new-jhs/section04_item02.png"
                                                media="(max-width: 600px)"
                                            />
                                            <img
                                                src="./img/lp-new-jhs/section04_item02.png"
                                                alt="アドバンスコース"
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${css_index.point_row} ${css_index.point_row_03}`}
                            >
                                <h3>キャリアコース</h3>
                                <div className={css_index.course__container}>
                                    <div className={css_index.course__text}>
                                        <p className={css_index.lead}>
                                            幼少期からの英語学習経験者や、帰国子女を対象に、一人一人の英語歴や、習熟度に応じたカリキュラムで、そのアドバンテージを最大限に引き出し、英語を最強の得意科目にするコースです。
                                        </p>
                                        <p>
                                            内容：
                                            小学生時には困難だった中学英語の文法や構文等を、中学生だから理解できる理論的な説明も交えて、合理的に先取り学習・マスターして、正確な英語力を育てていきます。
                                            <br />
                                            習熟度に合わせた多くの英文で力を付け、4技能をバランスよく育てていきます。多数の生徒さんが早期に英検2級以上に合格しています。
                                        </p>
                                        <p>
                                            対策：
                                            海外で習得した英語力・コミュニケーション能力を維持するだけでなく、子供英語を超えた、政治・経済等の難度の高い語彙と、正確な文法をマスターしていきます。より高度でアカデミックな英語力を育て、英検準1級以上に多数が合格しています。
                                        </p>
                                    </div>
                                    <div className={css_index.course__image}>
                                        <picture>
                                            <source
                                                srcSet="./img/lp-new-jhs/section04_item03.png"
                                                media="(max-width: 600px)"
                                            />
                                            <img
                                                src="./img/lp-new-jhs/section04_item03.png"
                                                alt="アドバンスコース"
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="nav_03"
                    className={`${css_index.section} ${css_index.section_05} ${css_index.b_none}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>
                            秋谷光子アカデミィが
                            <br className={css_index.sp} />
                            中学英語に強い理由
                        </span>
                    </h2>
                    <div
                        className={`${css_index.section__inner} ${css_index.section_05__inner}`}
                    >
                        <div className={css_index.course}>
                            <div
                                className={`${css_index.course__item} ${css_index.course__item_01}`}
                            >
                                <h3 className={css_index.left}>
                                    <span className={css_index.block}>
                                        英検1級講師による6人までの
                                    </span>
                                    <span className={css_index.block}>
                                        グループ指導と1対1個人指導
                                    </span>
                                </h3>

                                <p>
                                    グループ指導は学年ごとに、学習目的と習熟度に合わせた6人までの少人数クラス。1対1個人指導は学習目標に合わせた個別のカリキュラムとスケジュールを作成し、倍速でレベルUP。振替え受講も可能です。
                                    入塾の際に塾長が面談を行い、お一人お一人に合わせて最短距離で目標達成できるカリキュラムと学習法をご案内いたします。
                                </p>

                                <div className={css_index.circle}>
                                    <div className={css_index.circle__item}>
                                        <dl>
                                            <dt>1対1個人指導</dt>
                                            <dd>
                                                個別マンツーマンの
                                                <br />
                                                オリジナルカリキュラム
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className={css_index.flex}>
                                        <div className={css_index.circle__item}>
                                            <dl>
                                                <dt>グループ指導</dt>
                                                <dd>
                                                    同じ目標に向けて
                                                    <br />
                                                    レベルをそろえた
                                                    <br />
                                                    6人までの少人数クラス
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className={css_index.circle__item}>
                                            <dl>
                                                <dt>
                                                    <span>*</span>
                                                    個別
                                                    <br />
                                                    グループ指導
                                                </dt>
                                                <dd>
                                                    担当講師が約3人の生徒を
                                                    <br />
                                                    各自のカリキュラムで
                                                    <br />
                                                    個別指導
                                                    <small>
                                                        ※グループ指導と同料金
                                                    </small>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>

                                <div className={css_index.center}>
                                    <Link href="/#4">コース一覧はこちら</Link>
                                </div>
                            </div>

                            <div
                                className={`${css_index.course__item} ${css_index.course__item_02}`}
                            >
                                <h3 className={css_index.right}>
                                    <span
                                        className={`${css_index.block} ${css_index.sp}`}
                                    >
                                        レベル別カリキュラムで
                                    </span>
                                    <span className={`${css_index.block}`}>
                                        試験合格だけでなく、
                                    </span>
                                    <span className={css_index.block}>
                                        社会で使える実用英語へ
                                    </span>
                                </h3>

                                <p>
                                    ①基礎力をつけたい小学生～学校英語成績を上げたい中学・高校生、②医学部受験や最難関大学を始めとする大学や大学院受験、③英検、④TOEFL・IELTS等の留学対策、⑤TOEIC・TOEIC
                                    Bridge・TEAP・GTEC等、すべての英語指導で実績を出しています。
                                </p>

                                <div className={css_index.center}>
                                    <Link
                                        href="/pdf/レベル別カリキュラム.pdf"
                                        target="_blank"
                                    >
                                        レベル別カリキュラムを
                                        <br />
                                        詳しく見る
                                    </Link>
                                </div>
                            </div>

                            <div
                                className={`${css_index.course__item} ${css_index.course__item_03}`}
                            >
                                <h3 className={css_index.left}>
                                    <span
                                        className={`${css_index.block} ${css_index.sp}`}
                                    >
                                        英検1級講師42名の
                                    </span>
                                    <span className={css_index.block}>
                                        直接指導による
                                    </span>
                                    <span className={css_index.block}>
                                        圧倒的な英検合格実績
                                    </span>
                                </h3>

                                <p>
                                    塾長をはじめとした合格実績豊富な英検1級ベテラン講師陣42名に加え、TOEICフルスコアで海外有名大学卒業など、指導実績豊富なバイリンガル講師が担任制で指導します。
                                    <br />
                                    大学生のアルバイト講師は在籍しておらず、1対1個別指導も英検1級講師が担任として指導いたします。
                                </p>

                                <div
                                    className={`${css_index.center} ${css_index.flex}`}
                                >
                                    <picture>
                                        <source
                                            srcSet="./img/top/sp/success_01.png"
                                            media="(max-width: 600px)"
                                        />
                                        <img
                                            src="./img/top/pc/success_01.png"
                                            alt="英検1級合格 累計 188名"
                                        />
                                    </picture>
                                    <picture>
                                        <source
                                            srcSet="./img/top/sp/success_02.png"
                                            media="(max-width: 600px)"
                                        />
                                        <img
                                            src="./img/top/pc/success_02.png"
                                            alt="英検1級合格 合計 42名 在籍"
                                        />
                                    </picture>
                                </div>
                            </div>

                            <div
                                className={`${css_index.course__item} ${css_index.course__item_04}`}
                            >
                                <h3 className={css_index.right}>
                                    <span
                                        className={`${css_index.block} ${css_index.sp}`}
                                    >
                                        最上級の学習環境で指導。
                                    </span>
                                    <span className={css_index.block}>
                                        自習室も完備
                                    </span>
                                </h3>

                                <p>
                                    学習効果を上げるには快適な学習環境が不可欠です。床暖房完備でこだわり抜いた素材の校舎や緑豊かな観葉植物など、最上級の学習空間で学習ができます。
                                    <br />
                                    リスニング・スピーキングはヤマハの防音設備で他の生徒を気にすることなくレッスンできます。自習室は業務時間内はいつでも利用可。1対1個別指導も1つの教室を専用利用して完全な個室でご指導いたします。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${css_index.swiper} ${css_index.constancy}`}
                    >
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            // breakpoints={slideSettings}
                            slidesPerView={2.2}
                            breakpoints={{
                                961: {
                                    slidesPerView: 3.5,
                                },
                            }}
                            loop={true}
                            speed={6000}
                            spaceBetween={10}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            className={css_index.swiper_wrapper}
                        >
                            <SwiperSlide>
                                <picture>
                                    <source
                                        srcSet="./img/top/sp/section15_item01.png"
                                        media="(max-width: 600px)"
                                    />
                                    <img
                                        src="./img/top/pc/section15_item01.png"
                                        alt=""
                                    />
                                </picture>
                            </SwiperSlide>
                            <SwiperSlide>
                                <picture>
                                    <source
                                        srcSet="./img/top/sp/section15_item02.png"
                                        media="(max-width: 600px)"
                                    />
                                    <img
                                        src="./img/top/pc/section15_item02.png"
                                        alt=""
                                    />
                                </picture>
                            </SwiperSlide>
                            <SwiperSlide>
                                <picture>
                                    <source
                                        srcSet="./img/top/sp/section15_item03.png"
                                        media="(max-width: 600px)"
                                    />
                                    <img
                                        src="./img/top/pc/section15_item03.png"
                                        alt=""
                                    />
                                </picture>
                            </SwiperSlide>
                            <SwiperSlide>
                                <picture>
                                    <source
                                        srcSet="./img/top/sp/section15_item04.png"
                                        media="(max-width: 600px)"
                                    />
                                    <img
                                        src="./img/top/pc/section15_item04.png"
                                        alt=""
                                    />
                                </picture>
                            </SwiperSlide>
                            <SwiperSlide>
                                <picture>
                                    <source
                                        srcSet="./img/top/sp/section15_item05.png"
                                        media="(max-width: 600px)"
                                    />
                                    <img
                                        src="./img/top/pc/section15_item05.png"
                                        alt=""
                                    />
                                </picture>
                            </SwiperSlide>
                            <SwiperSlide>
                                <picture>
                                    <source
                                        srcSet="./img/top/sp/section15_item06.png"
                                        media="(max-width: 600px)"
                                    />
                                    <img
                                        src="./img/top/pc/section15_item06.png"
                                        alt=""
                                    />
                                </picture>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                <Cta />

                <section
                    className={`${css_index.section} ${css_index.section_06}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>
                            新中学1年生コースを
                            <br className={css_index.sp} />
                            受講した先輩たちの声
                        </span>
                    </h2>

                    <h3>
                        基礎レベルから4技能と
                        <br className={css_index.sp} />
                        受験英語をマスターして
                        <br />
                        英検上位級・難関高校や大学合格へ
                    </h3>

                    <div className={css_index.swiper}>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            breakpoints={{
                                961: {
                                    slidesPerView: 3,
                                },
                            }}
                            slidesPerView={1}
                            spaceBetween={60}
                            centeredSlides={true}
                            loop={true}
                            speed={1500}
                            autoplay={{
                                delay: 3000,
                            }}
                            navigation
                            className={css_index.swiper_wrapper}
                        >
                            {experiencesPostData.map((e, i) => (
                                <SwiperSlide
                                    key={e.id}
                                    className={css_index.college}
                                >
                                    {e.title && (
                                        <h4>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: parser.translateHTMLString(
                                                        e.title,
                                                    ),
                                                }}
                                            />
                                        </h4>
                                    )}
                                    {e.student && (
                                        <h3>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: e.student,
                                                }}
                                            />
                                        </h3>
                                    )}
                                    {e.join && (
                                        <p
                                            className={css_index.join}
                                            dangerouslySetInnerHTML={{
                                                __html: e.join,
                                            }}
                                        />
                                    )}
                                    {e.description ? (
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: e.description,
                                            }}
                                        />
                                    ) : (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: e.excerpt,
                                            }}
                                        />
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div
                        className={`${css_index.section__inner} ${css_index.section_06__inner}`}
                    >
                        <div className={css_index.box}>
                            {actuals.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`${css_index.box__item}`}
                                >
                                    <h4>
                                        {item.title}
                                        {item.subtitle && (
                                            <span>{item.subtitle}</span>
                                        )}
                                    </h4>

                                    <div
                                        className={`${css_index.box__item__content} ${css_index.box__item_01__content}`}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item.content,
                                            }}
                                        />
                                    </div>

                                    <button
                                        onClick={() => handleItemClick(item)}
                                    >
                                        さらに見る
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    className={`${css_index.section} ${css_index.section_07}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>
                            大学受験英語も
                            <br className={css_index.sp} />
                            合格実績豊富な講師陣
                        </span>
                    </h2>
                    <div
                        className={`${css_index.section__inner} ${css_index.section_07__inner}  ${css_index.section_07__inner__01}`}
                    >
                        <h3>
                            英検１級 講師40余名による
                            <br />
                            圧倒的な英検合格実績
                        </h3>
                        <p>
                            秋谷光子アカデミィは英語専門塾として開塾37年、英検1級合格累計188人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。
                            <br className={css_index.sp} />
                            講師はグループ指導・個別指導ともに、
                            <b>
                                英検1級・TOEIC950以上の合格実績豊富なベテラン講師が指導
                            </b>
                            いたします。東大卒や東京外語大卒等の各々得意な指導分野と指導実績豊富なバイリンガル講師に、Native講師が英会話・speaking・英文添削・英文監修を担当して合格に導きます。
                            <b>大学生のアルバイト講師はおりません。</b>
                        </p>
                    </div>

                    <div
                        className={`${css_index.section__inner} ${css_index.section_07__inner} ${css_index.section_07__inner__02}`}
                    >
                        <h3>講師紹介</h3>

                        <div className={`${css_index[`swiper`]}`}>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                slidesPerView={1}
                                // initialSlide={1}
                                breakpoints={{
                                    961: {
                                        slidesPerView: 3,
                                    },
                                }}
                                spaceBetween={30}
                                loop={true}
                                speed={1500}
                                autoplay={{
                                    delay: 6000,
                                }}
                                navigation
                                className={`${css_index.swiper_wrapper} ${css_index.teacher}`}
                            >
                                {teacherList.map((e, i) => (
                                    <SwiperSlide
                                        className={css_index.teacher__item}
                                        key={i}
                                    >
                                        <h4>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: e.name,
                                                }}
                                            />
                                        </h4>
                                        <div className={css_index.box}>
                                            {e.img && (
                                                <div
                                                    className={css_index.image}
                                                >
                                                    <img src={e.img} />
                                                </div>
                                            )}

                                            {e.license && (
                                                <dl>
                                                    <dt>● 経歴</dt>
                                                    <dd>
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: e.license,
                                                            }}
                                                        />
                                                    </dd>
                                                </dl>
                                            )}

                                            {e.career && (
                                                <dl>
                                                    <dt>● 指導実績</dt>
                                                    <dd>
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: e.career,
                                                            }}
                                                        />
                                                    </dd>
                                                </dl>
                                            )}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>

                <section
                    id="nav_04"
                    className={`${css_index.section} ${css_index.section_08}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>秋谷光子アカデミィの学習ポイント</span>
                    </h2>

                    <div
                        className={`${css_index.section__inner} ${css_index.section_08__inner}`}
                    >
                        <div
                            className={`${css_index.point_row} ${css_index.point_row_01}`}
                        >
                            <h3>
                                新中学1年生に特化した
                                <br className={css_index.sp} />
                                コース別学習
                            </h3>
                            <p>
                                当アカデミィでは学年や目的に応じてコースを複数用意しております。入塾の際に塾長が面談を行い、お一人おひとりに合わせて最短距離で目標達成できるカリキュラムをご案内いたします。
                            </p>
                            <div className={css_index.box}>
                                <h4 className={css_index.blue_slash}>
                                    新中学1年生コース一覧
                                </h4>
                                <ul>
                                    <li>
                                        ベーシックコース
                                        <p>
                                            学校の英語成績向上を主目的としたコース
                                            <br />
                                            英語初心者の新中学1年生には、発音とそのルール、ノートの取り方など、英語学習の基礎から指導します。
                                        </p>
                                    </li>
                                    <li>
                                        アドバンスコース
                                        <p>
                                            学校成績向上から難関校受験・留学まで対応する英語スペシャリスト育成コース。
                                        </p>
                                    </li>
                                    <li>
                                        キャリアコース
                                        <p>
                                            幼少期からの英語学習経験者や、帰国子女を対象に、一人一人の英語歴や、習熟度にぷじたカリキュラムで、そのアドバンテージを最大限に引き出し、英語を最強の得意科目にするコースです。
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className={css_index.box}>
                                <h4 className={css_index.blue_slash}>
                                    その他 学習コース一覧
                                </h4>
                                <ul>
                                    <li>高校生コース</li>
                                    <li>大学受験コース</li>
                                    <li>英検合格コース</li>
                                    <li>TEAPコース</li>
                                    <li>GTECコース</li>
                                    <li>TOEICコース</li>
                                    <li>TOEIC Brigdeコース</li>
                                    <li>IELTSコース</li>
                                    <li>TOEFL iBT TOEFL ITPコース</li>
                                    <li>帰国子女コース</li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className={`${css_index.point_row} ${css_index.point_row_02}`}
                        >
                            <h3>学習目的に合わせて徹底指導</h3>
                            <p>
                                学習目的やご要望を伺い、「グループ指導」「1対1個別指導（オンライン可）」「個別グループ指導」の中から、最も効率良くマスターできるカリキュラムと学習法をご提案いたします。
                            </p>
                            <div className={css_index.flex}>
                                {accordionData03.map((item, index) => (
                                    <div className={css_index.box} key={index}>
                                        <h4 className={css_index.blue_slash}>
                                            {item.title}
                                        </h4>
                                        <div
                                            key={index}
                                            className={`${css_index.box__inner} ${css_index.ac_wrap}`}
                                        >
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: parser.translateHTMLString(
                                                        item.image,
                                                    ),
                                                }}
                                            />

                                            <div
                                                className={`${
                                                    css_index.ac_cont
                                                } ${
                                                    activeIndex03 === index
                                                        ? css_index.open
                                                        : ""
                                                }`}
                                            >
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: parser.translateHTMLString(
                                                            item.content,
                                                        ),
                                                    }}
                                                />
                                            </div>

                                            <div
                                                onClick={() =>
                                                    toggleAccordion03(index)
                                                }
                                                className={`${
                                                    css_index.ac_btn
                                                } ${
                                                    activeIndex03 === index
                                                        ? css_index.active
                                                        : ""
                                                }`}
                                            >
                                                <button>
                                                    {activeIndex03 === index
                                                        ? "閉じる"
                                                        : "詳しく見る"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className={`${css_index.point_row} ${css_index.point_row_03}`}
                        >
                            <h3>
                                一人ひとりにあった
                                <br className={css_index.sp} />
                                学習プランを提供する
                            </h3>
                            <p>
                                当アカデミィは
                                <b>どんな学習目的にも柔軟に対応できる学習塾</b>
                                です。
                                <br className={css_index.sp} />
                                英検1級に合格したプロ英語講師40余名が、それぞれの得意分野を天職として指導するプロ英語教育集団です。
                                <br className={css_index.sp} />
                                現在の英語力を緻密にレベル設定し、これまでの英語歴や学習環境に至るまでをも考慮して、着実にマスターできるカリキュラムを作成します。グループ指導を受講する場合、受講するコースと生徒さんの英語力にギャップがある際はギャップを埋める指導もいたします。
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${css_index.additionally} ${css_index.additionally_01}`}
                    >
                        <div className={`${css_index.float_text}`}></div>
                        <div className={css_index.section__inner}>
                            <h3>
                                <span className={css_index.red}>
                                    中学1年生の学習で、
                                    <br />
                                    未来の英語力は決まります。
                                </span>
                            </h3>
                            <p>
                                中学1年生の英語は、入門編ではありません。中学英語は日常会話にでてくる基礎文法や語彙の8割強をカバーしています。難関大学入試で問われる高度な読解力の土台は、この中学英語の上に成り立っています。スタートの時点で感覚ではなく論理的に英語を理解しておくことが、将来の難関高校・大学合格への最短ルートとなります。
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className={`${css_index.section} ${css_index.section_09}`}
                >
                    {/* <h2 className={css_index.title_blue}>
                        <span>
                            大学受験英語の
                            <br className={css_index.sp} />
                            カリキュラムについて
                        </span>
                    </h2> */}
                    <div
                        className={`${css_index.section__inner} ${css_index.section_09__inner}  ${css_index.section_09__inner_01}`}
                    >
                        <div className={css_index.table}>
                            <h3 className={css_index.left}>
                                <span>充実したカリキュラム</span>
                            </h3>

                            <p>
                                当アカデミィでは大学受験の英語教育に特化したオーダーメイドカリキュラムをオーダーメイドで提供しております。受験英語からアカデミック英語まで幅広く対応しており、最新の受験トレンドに基づいたカリキュラムの更新も随時行っております。
                            </p>
                        </div>

                        <div className={css_index.table}>
                            <h3 className={css_index.right}>
                                <span>実績のある指導法</span>
                            </h3>

                            <p>
                                合格実績豊富な、経験に基づいた指導法で目標達成に導きます。
                                <br />
                                また、独自の学習メソッドで英語力の飛躍的向上をサポートし、クリティカルシンキングやプレゼンテーションスキルなど、アカデミックスキルの習得を重点的に行います。
                            </p>
                        </div>
                    </div>

                    <div className={`${css_index.box}`}>
                        <div
                            className={`${css_index.section__inner} ${css_index.section_09__inner}  ${css_index.section_09__inner_02}`}
                        >
                            <h3>
                                <span>カリキュラム一覧</span>
                            </h3>

                            {accordionData01.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${css_index.box__item} ${css_index.ac_wrap}`}
                                >
                                    <h4
                                        onClick={() => toggleAccordion01(index)}
                                        className={`${css_index.ac_btn} ${
                                            activeIndex01 === index
                                                ? css_index.active
                                                : ""
                                        }`}
                                    >
                                        {item.title}
                                    </h4>

                                    <div
                                        className={`${css_index.content} ${
                                            css_index.ac_cont
                                        } ${
                                            activeIndex01 === index
                                                ? css_index.open
                                                : ""
                                        }`}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: parser.translateHTMLString(
                                                    item.content,
                                                ),
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="nav_05"
                    className={`${css_index.section} ${css_index.section_10}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>
                            中学英語に強い
                            <br className={css_index.sp} />
                            秋谷光子アカデミィ入塾までの流れ
                        </span>
                    </h2>
                    <div className={`${css_index.step}`}>
                        <div
                            className={`${css_index.section__inner} ${css_index.section_10__inner}`}
                        >
                            <div
                                className={`${css_index.row_box} ${css_index.row_box_01}`}
                            >
                                <h3>お問い合わせ・資料請求</h3>

                                <picture>
                                    <source
                                        srcSet="/img/top/sp/section11_item01.png"
                                        media="(max-width: 600px)"
                                    />
                                    <img src="/img/top/pc/section11_item01.png" />
                                </picture>

                                <p>
                                    まずは
                                    <Link href="/contact">
                                        <span>お問い合わせフォーム</span>
                                    </Link>
                                    から面談カウンセリングの予約や当アカデミィへのご質問、資料請求などお問い合わせください。無料体験レッスンも受付中ですので希望される方は是非ご相談ください。
                                </p>
                            </div>
                            <div
                                className={`${css_index.row_box} ${css_index.row_box_02}`}
                            >
                                <h3>塾長による面談カウンセリング</h3>

                                <picture>
                                    <source
                                        srcSet="/img/top/sp/section11_item02.png"
                                        media="(max-width: 600px)"
                                    />
                                    <img src="/img/top/pc/section11_item02.png" />
                                </picture>

                                <p>
                                    入塾前に塾長が面談カウンセリングを行い、ご要望を細かくお伺いしたうえで生徒さんの英語力を正確に把握し、学習法などをできる限りアドバイスさせていただきます。英語をさらに得意科目にして、最短距離で目標達成できるカリキュラムをご案内いたします。
                                </p>
                            </div>
                            <div
                                className={`${css_index.row_box} ${css_index.row_box_03}`}
                            >
                                <h3>無料体験レッスン申し込み</h3>

                                <picture>
                                    <source
                                        srcSet="/img/top/sp/section11_item03.png"
                                        media="(max-width: 600px)"
                                    />
                                    <img src="/img/top/pc/section11_item03.png" />
                                </picture>

                                <p>
                                    秋谷光子アカデミィでは無料体験レッスンを受けることができます。入塾前にレッスンの雰囲気や指導方法を体験できますのでご希望の方はご相談ください。
                                </p>
                            </div>
                            <div
                                className={`${css_index.row_box} ${css_index.row_box_04}`}
                            >
                                <h3>入塾</h3>

                                <picture>
                                    <source
                                        srcSet="/img/top/sp/section11_item04.png"
                                        media="(max-width: 600px)"
                                    />
                                    <img src="/img/top/pc/section11_item04.png" />
                                </picture>

                                <p>
                                    初回レッスンまでに入塾申込書と入学金などの諸経費をお支払いいただき、引き換えに、授業で使用するテキストやプリント類をお渡しいたします。目標達成に向けてカリキュラムをご案内し、本格的にレッスンを開始いたします。
                                </p>
                            </div>
                        </div>
                        <p
                            className={`${css_index.red} ${css_index.center} ${css_index.bold}`}
                        >
                            生徒と真剣に向き合い
                            <br className={css_index.sp} />
                            合格へと導きます
                        </p>
                    </div>
                </section>

                <section
                    className={`${css_index.section} ${css_index.section_11}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>秋谷光子アカデミィのアクセス情報</span>
                    </h2>
                    <div className={css_index.box}>
                        <div className={css_index.section__inner}>
                            <div className={css_index.box__item}>
                                <h3>横浜・綱島本部校</h3>
                                <picture>
                                    <source
                                        srcSet="/img/top/sp/section12_item01.png"
                                        media="(max-width: 600px)"
                                    />
                                    <img src="/img/top/pc/section12_item01.png" />
                                </picture>
                                <div className={css_index.text}>
                                    <ul>
                                        <li>
                                            <Link href="tel:045-544-6756">
                                                TEL：
                                                <br className={css_index.pc} />
                                                045-544-6756
                                            </Link>
                                        </li>
                                        <li>
                                            住所：
                                            <br className={css_index.pc} />
                                            〒223-0053 横浜市港北区
                                            <br />
                                            綱島西2-1-7 マック綱島コート2Ｆ
                                        </li>
                                        <li>
                                            アクセス：
                                            <br />
                                            東急東横線 綱島駅より徒歩2分
                                            <br />
                                            東急新横浜線 新綱島駅より徒歩5分
                                        </li>
                                    </ul>
                                    <Link
                                        href="https://maps.app.goo.gl/KuYMWDhQv9mjAf2v8"
                                        className={css_index.map}
                                        target="_blank"
                                    >
                                        Google Mapで見る
                                    </Link>
                                    <Link
                                        href="/access/tsunashima"
                                        className={css_index.detail}
                                    >
                                        詳細をみる
                                    </Link>
                                </div>
                            </div>
                            <div className={css_index.box__item}>
                                <h3>自由が丘・田園調布校</h3>
                                <picture>
                                    <source
                                        srcSet="/img/top/sp/section12_item02.png"
                                        media="(max-width: 600px)"
                                    />
                                    <img src="/img/top/pc/section12_item02.png" />
                                </picture>
                                <div className={css_index.text}>
                                    <ul>
                                        <li>
                                            <Link href="tel:03-5483-5025">
                                                TEL：
                                                <br className={css_index.pc} />
                                                03-5483-5025
                                            </Link>
                                        </li>
                                        <li>
                                            住所：
                                            <br className={css_index.pc} />
                                            〒145-0071
                                            <br className={css_index.sp} />
                                            東京都大田区田園調布3-24-2
                                        </li>
                                        <li>
                                            アクセス：
                                            <br />
                                            東急東横線・目黒線
                                            田園調布駅より徒歩1分
                                        </li>
                                    </ul>
                                    <Link
                                        href="https://maps.app.goo.gl/HgcNRZGu6G2BPAwt5"
                                        className={css_index.map}
                                        target="_blank"
                                    >
                                        Google Mapで見る
                                    </Link>
                                    <Link
                                        href="/access/denenchofu"
                                        className={css_index.detail}
                                    >
                                        詳細をみる
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="nav_06"
                    className={`${css_index.section} ${css_index.section_12}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>塾長からのメッセージ</span>
                    </h2>

                    <div className={css_index.message}>
                        <div className={css_index.section__inner}>
                            <p>
                                試験に合格し
                                <br />
                                世界で使える
                                <br className={css_index.sp} />
                                英語力を。
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${css_index.section__inner} ${css_index.section_12__inner}`}
                    >
                        <h3>
                            1987年4月の開塾以来、
                            <br />
                            学校英語と実用英語の融合を
                            <br />
                            教育理念として指導してまいりました。
                        </h3>

                        <p>
                            試験に受かる学校英語と社会で使える実用英語を目指し、全ての英語資格試験で圧倒的な実績をあげてまいりました。基礎レベルだった方々が英検準１級に多数合格したり、圧倒的英語力を武器に今年も東大等の国公立や私大医学部、早慶、上智大学等の第一志望校に多数合格者が出ております。
                            <br />
                            講師は英検1級・TOEIC950以上の合格実績豊富なベテラン講師で学生講師は在職しておりません。
                            <br />
                            これまで培った英語塾としての実績とノウハウを総動員し、合格から逆算したカリキュラムで万全の対策指導をいたしますので、是非お問い合わせお待ちしております。
                        </p>

                        <p>
                            <strong>
                                <span>塾長</span>秋谷 光子
                            </strong>
                        </p>
                    </div>
                </section>

                <section
                    id="nav_07"
                    className={`${css_index.section} ${css_index.section_13}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>新中学1年生コースでよくある質問</span>
                    </h2>

                    <div
                        className={`${css_index.section__inner} ${css_index.section_13__inner}`}
                    >
                        {[...accordionData02, ...accordionData04].map(
                            (item, index) => (
                                <div
                                    key={index}
                                    className={`${css_index.row_box} ${css_index.ac_wrap}`}
                                >
                                    <dl>
                                        <dt
                                            onClick={() =>
                                                toggleAccordion02(index)
                                            }
                                            className={`${css_index.ac_btn} ${
                                                activeIndex02 === index
                                                    ? css_index.active
                                                    : ""
                                            }`}
                                        >
                                            <span className={css_index.tag}>
                                                <img src="/img/top/text_q.png" />
                                            </span>
                                            <span>{item.title}</span>
                                        </dt>
                                        <dd
                                            className={`${css_index.content} ${
                                                css_index.ac_cont
                                            } ${
                                                activeIndex02 === index
                                                    ? css_index.open
                                                    : ""
                                            }`}
                                        >
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: parser.translateHTMLString(
                                                        item.content,
                                                    ),
                                                }}
                                            />
                                        </dd>
                                    </dl>
                                </div>
                            ),
                        )}
                    </div>
                </section>

                <section
                    className={`${css_index.section} ${css_index.section_14}`}
                >
                    <h2 className={css_index.title_blue}>
                        <span>各校の問い合わせ先</span>
                    </h2>

                    <div
                        className={`${css_index.section__inner} ${css_index.section_14__inner}`}
                    >
                        <div className={css_index.row_box}>
                            <h3>横浜・綱島本部校</h3>
                            <div className={css_index.map}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.7447074111483!2d139.63106607640356!3d35.53530597263475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f16c0014351%3A0xde8eb46e6d163758!2z6Iux6Kqe5aG-IOeni-iwt-WFieWtkOOCouOCq-ODh-ODn-OCoyDmqKrmtZzjg7vntrHls7bmnKzpg6jmoKE!5e0!3m2!1sja!2sjp!4v1722923650295!5m2!1sja!2sjp"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <div className={css_index.box}>
                                <ul>
                                    <li>
                                        <Link href="tel:045-544-6756">
                                            TEL：
                                            <br className={css_index.pc} />
                                            045-544-6756
                                        </Link>
                                    </li>
                                    <li>
                                        住所：
                                        <br className={css_index.pc} />
                                        〒223-0053 横浜市港北区
                                        <br />
                                        綱島西2-1-7 マック綱島コート2Ｆ
                                    </li>
                                    <li>
                                        アクセス：
                                        <br />
                                        東急東横線 綱島駅より徒歩2分
                                        <br />
                                        東急新横浜線 新綱島駅より徒歩5分
                                    </li>
                                </ul>

                                <Link
                                    href="https://maps.app.goo.gl/U5xW9LwdH1pRPF7j9"
                                    target="_blank"
                                >
                                    Google Mapで見る
                                </Link>
                            </div>
                        </div>
                        <div className={css_index.row_box}>
                            <h3>自由が丘・田園調布校</h3>
                            <div className={css_index.map}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.254540026972!2d139.6638798764057!3d35.59678727261457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f516c42ab6df%3A0xfc211c6ee5dd3fb7!2z6Iux6Kqe5aG-IOeni-iwt-WFieWtkOOCouOCq-ODh-ODn-OCoyDoh6rnlLHjgYzkuJjjg7vnlLDlnJLoqr_luIPmoKE!5e0!3m2!1sja!2sjp!4v1722925335679!5m2!1sja!2sjp"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <div className={css_index.box}>
                                <ul>
                                    <li>
                                        <Link href="tel:03-5483-5025">
                                            TEL：
                                            <br className={css_index.pc} />
                                            03-5483-5025
                                        </Link>
                                    </li>
                                    <li>
                                        住所：
                                        <br className={css_index.pc} />
                                        〒145-0071
                                        <br />
                                        東京都大田区田園調布3-24-2
                                    </li>
                                    <li>
                                        アクセス：
                                        <br />
                                        東急東横線・目黒線 田園調布駅より徒歩1分
                                    </li>
                                </ul>

                                <Link
                                    href="https://maps.app.goo.gl/HgcNRZGu6G2BPAwt5"
                                    target="_blank"
                                >
                                    Google Mapで見る
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Nav />

                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    item={selectedItem}
                />
            </main>
        </>
    );
}

Page.getLayout = function getLayout(children) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export async function getStaticProps() {
    let experiencesData = await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories",
    ).then((res) => res.json());

    let page_ids = "&include[]=7882";
    page_ids += "&include[]=3080";
    page_ids += "&include[]=628";
    page_ids += "&include[]=7334";
    page_ids += "&include[]=6184";

    let experiencesPostData = await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/results?categories=26" +
            page_ids,
    ).then((res) => res.json());

    let teacherList = await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/teacher?per_page=100",
    ).then((res) => res.json());
    teacherList = teacherList
        .sort((a, b) => {
            // ID順に並べ替え
            if (a.infoCount !== b.infoCount) return a.infoCount - b.infoCount;

            // 画像URLがあるデータを優先
            if (a.img && !b.img) return -1;
            if (!a.img && b.img) return 1;
            return 0;
        })
        .reverse();

    teacherList = teacherList.sort((a, b) => {
        // 優先表示
        if (a.infoCount === 11111) return -1;
        if (b.infoCount === 11111) return 1;
        return 0;
    });

    return {
        props: {
            teacherList,
            experiencesData,
            experiencesPostData,
        },
    };
}
