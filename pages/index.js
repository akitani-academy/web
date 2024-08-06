/* eslint-disable react/no-unknown-property */
// const _V = require("components/_V");

import Image from "next/image";
import Link from "next/link";

import classNames from "classnames";
import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Head from "components/head";
import Header from "components/header";
import Footer from "components/footer";
import Nav from "components/nav";
import LinkList from "components/widget/LinkList";
// import TopSlideshow from "components/TopSlideshow/TopSlideshow";
import TopSwiperSlide from "components/TopSwiperSlide/TopSwiperSlide";
import LoopCarousel from "components/widget/LoopCarousel";
import Button from "components/Button/Button";
import ExperiencesListBox from "components/Experiences/ExperiencesListBox";
import ContactButton from "components/ContactButton/ContactButton";

import css_index from "styles/index.module.scss";

import Logo from "/public/curriculum.svg";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// カルーセルにする画像のソースをリストにします
const images = ["/dummy/1.jpg", "/dummy/2.jpg", "/dummy/3.jpg"];

export default function Page({
  top,
  courseData,
  classtypeData,
  teacherList,
  experiencesData,
}) {
  // TASK: 先生のカードリストのオートスクロールを実装予定
  // let teacherListOdd = teacherList.filter(num => Number(num) % 2 !== 0);
  // let teacherListEven = teacherList.filter(num => Number(num) % 2 === 0);

  return (
    <>
      <Head
        title="英語専門塾 秋谷光子アカデミィ - 英検1級176人合格の圧倒的な実績｜横浜,綱島,自由が丘,田園調布"
        url=""
        description={top.cfs.description}
        breadcrumb={[["トップページ", ""]]}
      />

      {/* <TopSlideshow /> */}

      <main className={css_index.main}>
        <div className={css_index.fv}>
          <div className={css_index.fv__inner}>
            <ul>
              <li>英検上位級</li>
              <li>難関大学合格</li>
            </ul>
            <h2>
              志望校合格<span className={css_index.small}>に</span>導く
              <span className={css_index.block}>大学受験英語塾</span>
            </h2>
            <p>
              <span>難関大学合格、内部進学、留学、</span>
              <span>全ての進路を可能にする英語力を育てます。</span>
            </p>
            <div className={css_index.success}>
              <img
                src="./img/top/success_01.png"
                alt="英検1級合格 累計 178名"
              />
              <img
                src="./img/top/success_02.png"
                alt="英検1級合格 合計 42名 在籍"
              />
            </div>
            <div className={css_index.cta}>
              <p>
                <span className={css_index.red_balloon}>
                  最短で目標達成できるカリキュラムをご案内
                </span>
              </p>
              <a href={`/contact`}>
                お問い合わせ・<span>無料体験レッスンを申し込む</span>
              </a>
              <a href={`/contact`}>資料を請求する</a>
            </div>
          </div>
        </div>

        <section className={`${css_index.section} ${css_index.section_01}`}>
          <div
            className={`${css_index.section__inner} ${css_index.section_01__inner}`}
          >
            <h2>
              東大・早慶・上智大など<span>第一志望校に9割以上合格</span>
            </h2>

            <h3>
              <span>2023年合格大学</span>
            </h3>

            <div className={css_index.box}>
              <h4>国立大学</h4>
              <div
                className={`${css_index.box__item} ${css_index.box__item_01}`}
              >
                <ul>
                  <li>
                    <img src="./img/top/medal.png" />
                    <span>
                      <span className={css_index.block}>東京大学</span>
                      <span className={css_index.red}>1</span>名
                    </span>
                  </li>
                  <li>
                    <img src="./img/top/medal.png" />
                    <span>
                      <span className={css_index.block}>一橋大学</span>
                      <span className={css_index.red}>1</span>名
                    </span>
                  </li>
                  <li>・東京工業大学（1名）</li>
                  <li>・横浜国立大学（1名）</li>
                </ul>
              </div>
              <div
                className={`${css_index.box__item} ${css_index.box__item_02}`}
              >
                <ul>
                  <li>
                    <img src="./img/top/medal.png" />
                    <span>
                      <span className={css_index.block}>早稲田大学</span>
                      <span className={css_index.red}>4</span>名
                    </span>
                  </li>
                  <li>
                    <img src="./img/top/medal.png" />
                    <span>
                      <span className={css_index.block}>慶応大学</span>
                      <span className={css_index.red}>12</span>名
                    </span>
                  </li>
                  <li>
                    <img src="./img/top/medal.png" />
                    <span>
                      <span className={css_index.block}>上智大学</span>
                      <span className={css_index.red}>1</span>名
                    </span>
                  </li>
                  <li>・青山学院大学（2名）</li>
                  <li>・明治大学（1名）</li>
                </ul>
              </div>
            </div>

            <p>
              <span className={css_index.block}>その他多数の方が</span>
              <span className={css_index.block}>
                第一志望校に合格しております。
              </span>
            </p>
          </div>
        </section>
        <section
          id="nav_01"
          className={`${css_index.section} ${css_index.section_02}`}
        >
          <h2 className={css_index.title_blue}>
            <span>大学受験・英検合格者の声</span>
          </h2>
          <div
            className={`${css_index.section__inner} ${css_index.section_02__inner}`}
          >
            <h3>
              <span className={css_index.block}>基礎レベルから4技能と</span>
              <span className={css_index.block}>受験英語をマスターして</span>
              <span className={css_index.block}>
                英検上位級・難関大学合格へ
              </span>
            </h3>

            {/* <TopSwiperSlide /> */}
            {/* 
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1} //一度に表示するスライドの数
              pagination={{
                clickable: true,
              }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
              navigation //スライドを前後させるためのボタン、スライドの左右にある
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {experiencesData[1].child_list[0].post.map(
                (src: string, index: number) => {
                  return (
                    <SwiperSlide key={`${index}`}>
                      <Image
                        src={src}
                        layout="responsive"
                        width={640}
                        height={400}
                        alt="test_image"
                      />
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper> */}

            <div className={css_index.box}>
              <div
                className={`${css_index.box__item} ${css_index.box__item_01}`}
              >
                <h4>
                  英検合格実績<span>過去1年間（2022年第3回〜2023年第2回）</span>
                </h4>

                <div
                  className={`${css_index.box__item__content} ${css_index.box__item_01__content}`}
                >
                  <h5>1級（8名）</h5>
                  <ul>
                    <li>横浜市立日吉台西中学校 1年</li>
                    <li>フェリス女学院高校 1年</li>
                    <li>桜蔭学園高校 1年</li>
                    <li>慶応義塾高校 3年</li>
                  </ul>
                  <h5>準1級（15名）</h5>
                  <ul>
                    <li>雙葉学園小学校 6年</li>
                    <li>田園調布雙葉中学校 3年</li>
                  </ul>

                  <a href={`/course/eikenn-pass`}>さらに見る</a>
                </div>
              </div>
            </div>
            <div className={css_index.box}>
              <div
                className={`${css_index.box__item} ${css_index.box__item_01}`}
              >
                <h4>2023年大学合格実績</h4>

                <div
                  className={`${css_index.box__item__content} ${css_index.box__item_01__content}`}
                >
                  <h5>2023年大学合格実績</h5>
                  <ul>
                    <li>東京大学 理科Ⅱ類 合格（開成高校）</li>
                    <li>東京工業大学 生命理工学院 合格（麻布高校）</li>
                    <li>一橋大学 法学部 合格（豊島岡女子高校）</li>
                    <li>横浜国立大学 理工学部 合格（桐光学園高校）</li>
                  </ul>
                  <h5>内進を含む主な合格大学</h5>
                  <ul>
                    <li>慶応大学 合格（10名）</li>
                    <li>早稲田大学 合格（2名）</li>
                  </ul>

                  <a href={`/course/college`}>さらに見る</a>
                </div>
              </div>
            </div>
            <div className={css_index.box}>
              <div
                className={`${css_index.box__item} ${css_index.box__item_01}`}
              >
                <h4>
                  TOEFL実績<span>過去2年間</span>
                </h4>

                <div
                  className={`${css_index.box__item__content} ${css_index.box__item_01__content}`}
                >
                  <h5>IBT （120点満点）</h5>
                  <ul>
                    <li>105 慶応大学2年</li>
                    <li>102 医師</li>
                    <li>90 国家公務員</li>
                    <li>90 慶應義塾高校3年</li>
                  </ul>
                  <h5>ITP （677点満点）</h5>
                  <ul>
                    <li>610 慶應大学3年</li>
                    <li>601 横浜国立大学3年</li>
                  </ul>

                  <a href={`/course/toefl`}>さらに見る</a>
                </div>
              </div>
            </div>
            <div className={css_index.box}>
              <div
                className={`${css_index.box__item} ${css_index.box__item_01}`}
              >
                <h4>
                  TOEIC実績<span>過去2年間</span>
                </h4>

                <div
                  className={`${css_index.box__item__content} ${css_index.box__item_01__content}`}
                >
                  <h5>TOEIC （990点満点）</h5>
                  <ul>
                    <li>985 メーカー勤務</li>
                    <li>975 IT企業勤務</li>
                    <li>960 外資系企業勤務</li>
                    <li>935 慶応大学3年</li>
                    <li>905 早稲田大学4年</li>
                    <li>900 塾講師</li>
                  </ul>

                  <a href={`/course/toeic`}>さらに見る</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${css_index.section} ${css_index.section_03}`}>
          <h2 className={css_index.title_blue}>
            <span>
              <span className={css_index.block}>難関大学合格を確実にする</span>
              <span className={css_index.block}>秋谷アカデミィで</span>
              <span className={css_index.block}>後悔しない塾選びを</span>
            </span>
          </h2>

          <div
            className={`${css_index.section__inner} ${css_index.section_03__inner}`}
          >
            <h3>
              <span className={css_index.block}>
                当アカデミィにご相談いただく
              </span>
              <span className={css_index.block}>
                生徒の課題・お悩みをご紹介
              </span>
            </h3>

            <ul>
              <li>
                <span className={css_index.block}>正しい受験英語の</span>
                <span className={css_index.block}>学習方法がわからない</span>
              </li>
              <li>
                <span className={css_index.block}>英語が最も苦手で</span>
                <span className={css_index.block}>受験の足を引っ張ると</span>
                <span className={css_index.block}>焦っている</span>
              </li>
              <li>
                <span className={css_index.block}>具体的な自分の弱点が</span>
                <span className={css_index.block}>分析できていない</span>
              </li>
              <li>部活との両立が難しい</li>
              <li>
                <span className={css_index.block}>帰国子女なのに</span>
                <span className={css_index.block}>英語力が日に日に</span>
                <span className={css_index.block}>落ちていく</span>
              </li>
              <li>
                <span className={css_index.block}>英語をマスターして</span>
                <span className={css_index.block}>将来英語を使って</span>
                <span className={css_index.block}>活躍したい</span>
              </li>
            </ul>

            <div className={css_index.box}>
              <h4>
                <span>他にもこんな相談を受けております</span>
              </h4>

              <div className={css_index.box__item}>
                <img src="./img/top/section03_item01.png" />
                <p>
                  <span>
                    <span className={css_index.block}>受験失敗を通して、</span>
                    <span className={css_index.block}>
                      圧倒的英語力の乏しさを痛感…
                    </span>
                    <span className={css_index.block}>
                      自宅浪人では限界を感じている
                    </span>
                  </span>
                </p>
              </div>
              <div className={css_index.box__item}>
                <img src="./img/top/section03_item02.png" />
                <p>
                  <span>
                    <span className={css_index.block}>
                      文法・リーディングは
                    </span>
                    <span className={css_index.block}>
                      自信あるけど、リスニングと
                    </span>
                    <span className={css_index.block}>
                      英会話のスピーキングが苦手…
                    </span>
                  </span>
                </p>
              </div>
              <div className={css_index.box__item}>
                <img src="./img/top/section03_item03.png" />
                <p>
                  <span>
                    <span className={css_index.block}>
                      英検2級まではもっているけど
                    </span>
                    <span className={css_index.block}>
                      準１級の壁を超えられない…
                    </span>
                  </span>
                </p>
              </div>
              <div className={css_index.box__item}>
                <img src="./img/top/section03_item04.png" />
                <p>
                  <span>
                    <span className={css_index.block}>
                      第一志望に必ず受かりたいため
                    </span>
                    <span className={css_index.block}>
                      実績と実力のある講師に
                    </span>
                    <span className={css_index.block}>本気で教えて欲しい</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${css_index.section} ${css_index.section_04}`}>
          <h2>
            <span>
              <span className={css_index.block}>秋谷光子アカデミィでは</span>
              <span className={css_index.block}>
                上記のような課題を解決するため
              </span>
              <span className={css_index.block}>
                <span className={css_index.text_red}>一人ひとり塾長面談</span>
                を行った上で、
              </span>
              <span className={css_index.block}>
                <span className={css_index.text_red}>
                  最適なカリキュラムと学習法
                </span>
                を
              </span>
              <span className={css_index.block}>ご案内します。</span>
            </span>
          </h2>
          <div
            className={`${css_index.section__inner} ${css_index.section_04__inner}`}
          >
            <h3>
              <span>英語塾選びでよくある落とし穴</span>
            </h3>

            <h4>
              <span className={css_index.block}>
                当アカデミィにご相談いただく
              </span>
              <span className={css_index.block}>
                生徒の課題・お悩みをご紹介
              </span>
            </h4>

            <div className={`${css_index.box} ${css_index.box_01}`}>
              <div
                className={`${css_index.box__item} ${css_index.box_01__item}`}
              >
                <h5>
                  学力・レベルを<span>無視したクラス編成</span>
                </h5>
                <p>参加したクラスと自分のレベルに差がある</p>
              </div>
              <div
                className={`${css_index.box__item} ${css_index.box_01__item}`}
              >
                <h5>
                  大学生のアルバイトが<span>講師として教えている</span>
                </h5>
                <p>指導経験不足により適切でわかりやすい指導をしてくれない</p>
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
              <span className={css_index.block}>秋谷光子アカデミィなら</span>
              <span className={css_index.block}>
                上記のような心配はいりません。
              </span>
              <span className={css_index.block}>
                <span className={css_index.text_red}>最高の学習環境</span>と
                <span className={css_index.text_red}>実績ある講師陣</span>が
              </span>
              <span className={css_index.block}>目標達成へ導きます。</span>
            </h2>

            <div className={`${css_index.box} ${css_index.box_01}`}>
              <div
                className={`${css_index.box__item} ${css_index.box_01__item}`}
              >
                <h3>当アカデミィの学習環境ご案内</h3>
                <div>
                  <ul>
                    <li>レベル別コース・カリキュラムをご用意</li>
                    <li>英検1級 講師42名、学生講師はいません</li>
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

          <div className={css_index.cta_box}>
            <h2>
              <span className={css_index.balloon}>
                最短距離で目標達成できる
              </span>
              <span className={css_index.block}>カリキュラムをご案内</span>
            </h2>

            <div className={css_index.cta}>
              <p>
                まずは
                <span className={css_index.red_box}>無料体験レッスン</span>
                <span className={css_index.red_box}>資料請求</span>
                から
              </p>
              <a href={`/contact`}>
                お問い合わせ・<span>無料体験レッスンを申し込む</span>
              </a>
              <a href={`/contact`}>資料を請求する</a>
            </div>
          </div>
        </section>

        <section
          id="/nav_02"
          className={`${css_index.section} ${css_index.section_05}`}
        >
          <h2 className={css_index.title_blue}>
            <span>
              <span className={css_index.block}>秋谷光子アカデミィが</span>
              <span className={css_index.block}>英検や大学受験に強い理由</span>
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
                        <span className={css_index.block}>
                          個別マンツーマンの
                        </span>
                        <span className={css_index.block}>
                          オリジナルカリキュラム
                        </span>
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
                          <small>※グループ指導と同料金</small>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>

                <div className={css_index.center}>
                  <a href="#">コース一覧はこちら</a>
                </div>
              </div>

              <div
                className={`${css_index.course__item} ${css_index.course__item_02}`}
              >
                <h3 className={css_index.right}>
                  <span className={css_index.block}>
                    レベル別カリキュラムで
                  </span>
                  <span className={css_index.block}>試験合格だけでなく、</span>
                  <span className={css_index.block}>
                    社会で使える実用英語へ
                  </span>
                </h3>

                <p>
                  ①基礎力をつけたい小学生～学校英語成績を上げたい中学・高校生、②医学部受験や最難関大学を始めとする大学や大学院受験、③英検、④TOEFL・IELTS等の留学対策、⑤TOEIC・TOEIC
                  Bridge・TEAP・GTEC等、すべての英語指導で実績を出しています。
                </p>

                <div className={css_index.circle}>
                  <div className={css_index.circle__item}>
                    <dl>
                      <dt>1対1個人指導</dt>
                      <dd>
                        <span className={css_index.block}>
                          個別マンツーマンの
                        </span>
                        <span className={css_index.block}>
                          オリジナルカリキュラム
                        </span>
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
                          <small>※グループ指導と同料金</small>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>

                <div className={css_index.center}>
                  <a href="#">
                    レベル別カリキュラムを
                    <br />
                    詳しく見る
                  </a>
                </div>
              </div>

              <div
                className={`${css_index.course__item} ${css_index.course__item_03}`}
              >
                <h3 className={css_index.right}>
                  <span className={css_index.block}>英検1級講師42名の</span>
                  <span className={css_index.block}>直接指導による</span>
                  <span className={css_index.block}>圧倒的な英検合格実績</span>
                </h3>

                <p>
                  塾長をはじめとした合格実績豊富な英検1級ベテラン講師陣42名に加え、TOEICフルスコアで海外有名大学卒業など、指導実績豊富なバイリンガル講師が担任制で指導します。
                  <br />
                  大学生のアルバイト講師は在籍しておらず、1対1個別指導も英検1級講師が担任として指導いたします。
                </p>

                <div className={css_index.circle}>
                  <div className={css_index.circle__item}>
                    <dl>
                      <dt>1対1個人指導</dt>
                      <dd>
                        <span className={css_index.block}>
                          個別マンツーマンの
                        </span>
                        <span className={css_index.block}>
                          オリジナルカリキュラム
                        </span>
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
                          <small>※グループ指導と同料金</small>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>

                <div className={`${css_index.center} ${css_index.flex}`}>
                  <img
                    src="./img/top/success_01.png"
                    alt="英検1級合格 累計 178名"
                  />
                  <img
                    src="./img/top/success_02.png"
                    alt="英検1級合格 合計 42名 在籍"
                  />
                </div>
              </div>

              <div
                className={`${css_index.course__item} ${css_index.course__item_04}`}
              >
                <h3 className={css_index.right}>
                  <span className={css_index.block}>
                    最上級の学習環境で指導
                  </span>
                  <span className={css_index.block}>自習室も完備</span>
                </h3>

                <p>
                  学習効果を上げるには快適な学習環境が不可欠です。床暖房完備でこだわり抜いた素材の校舎や緑豊かな観葉植物など、最上級の学習空間で学習ができます。
                  <br />
                  リスニング・スピーキングはヤマハの防音設備で他の生徒を気にすることなくレッスンできます。自習室は業務時間内はいつでも利用可。1対1個別指導も1つの教室を専用利用して完全な個室でご指導いたします。
                </p>

                <div className={`${css_index.center} ${css_index.flex}`}>
                  <img
                    src="./img/top/success_01.png"
                    alt="英検1級合格 累計 178名"
                  />
                  <img
                    src="./img/top/success_02.png"
                    alt="英検1級合格 合計 42名 在籍"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${css_index.section} ${css_index.section_06}`}>
          <h2 className={css_index.title_blue}>
            <span>
              大学受験英語も
              <br />
              合格実績豊富な講師陣
            </span>
          </h2>
          <div
            className={`${css_index.section__inner} ${css_index.section_06__inner}  ${css_index.section_06__inner__01}`}
          >
            <h3>
              英検１級 講師40余名による
              <br />
              圧倒的な英検合格実績
            </h3>
            <p>
              秋谷光子アカデミィは英語専門塾として開塾37年、英検1級合格累計178人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。
              <br />
              講師はグループ指導・個別指導ともに、
              <b>英検1級・TOEIC950以上の合格実績豊富なベテラン講師が指導</b>
              いたします。東大卒や東京外語大卒等の各々得意な指導分野と指導実績豊富なバイリンガル講師に、Native講師が英会話・speaking・英文添削・英文監修を担当して合格に導きます。
              <b>大学生のアルバイト講師はおりません。</b>
            </p>
          </div>

          <div
            className={`${css_index.section__inner} ${css_index.section_06__inner}  ${css_index.section_06__inner__02}`}
          >
            <h3>講師紹介</h3>

            <div className={css_index.teacher}>
              <div className={css_index.teacher__item}>
                <h4>Christopher Minton</h4>
                <div className={css_index.box}>
                  <img src="/img/top/section06_item01.png" />
                  <dl>
                    <dt>● 経歴</dt>
                    <dd>University of YORK卒。</dd>
                  </dl>
                  <dl>
                    <dt>● 指導実績</dt>
                    <dd>
                      母国英国の高校で5年間英語：国語を指導後、日本で20年以上、一橋大学やテンプル大学でAcademic
                      Englishを指導しています。Akitani
                      Academyでは多くの生徒のspeaking・writing力を論理的・合理的に強化して下さっている頼もしいNative先生です。英検とIELTSの試験Examinerも勤めています。
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${css_index.section} ${css_index.section_07}`}>
          <h2 className={css_index.title_blue}>
            <span>
              大学受験英語で抱える
              <br />
              さまざまな悩みを解決
            </span>
          </h2>

          <div
            className={`${css_index.section__inner} ${css_index.section_07__inner}`}
          >
            <div className={`${css_index.row} ${css_index.row_01}`}>
              <h3>
                <span>
                  <img src="/img/top/text_01.png" />
                </span>
                基礎知識の不足
              </h3>
              <p>
                文法や語彙の基礎力が不十分で、正しい英文を理解・構築するのが難しい。
              </p>
            </div>

            <div className={`${css_index.row} ${css_index.row_02}`}>
              <h3>
                <span>
                  <img src="/img/top/text_02.png" />
                </span>
                リスニングスキルの欠如
              </h3>
              <p>
                速いスピーキング速度についていけず、日常会話や様々な英文の内容を把握できない。
              </p>
            </div>

            <div className={`${css_index.row} ${css_index.row_03}`}>
              <h3>
                <span>
                  <img src="/img/top/text_03.png" />
                </span>
                スピーキングの機会不足
              </h3>
              <p>
                一方的な講義形式で、実際に英語を話す機会が少ないため、会話能力が向上しない。
              </p>
            </div>

            <div className={`${css_index.row} ${css_index.row_04}`}>
              <h3>
                <span>
                  <img src="/img/top/text_04.png" />
                </span>
                読解力の問題
              </h3>
              <p>
                長文読解が苦手で読み慣れていない為、主旨をつかむのが難しい、または読むスピードが遅い。
              </p>
            </div>

            <div className={`${css_index.row} ${css_index.row_05}`}>
              <h3>
                <span>
                  <img src="/img/top/text_05.png" />
                </span>
                ライティングの難しさ
              </h3>
              <p>
                自分の考えを英語で正確に表現するのが難しく、文法ミスや不自然な表現が多くなる。
              </p>
            </div>

            <div className={`${css_index.row} ${css_index.row_06}`}>
              <h3>
                <span>
                  <img src="/img/top/text_06.png" />
                </span>
                モチベーションの維持
              </h3>
              <p>
                適切な指導者にめぐり会えない為、モチベーションが維持できず、途中で挫折してしまう。
              </p>
            </div>

            <div className={`${css_index.row} ${css_index.row_07}`}>
              <h3>
                <span>
                  <img src="/img/top/text_07.png" />
                </span>
                適切な教材や指導の不足
              </h3>
              <p>
                自分のレベルやニーズに合った教材を見つけることが難しい、または効果的な指導を受けられない。
              </p>
            </div>

            <div className={`${css_index.row} ${css_index.row_08}`}>
              <h3>
                <span>
                  <img src="/img/top/text_08.png" />
                </span>
                発音の問題
              </h3>
              <p>
                母国語の影響で英語の発音が難しく、聞き取りやすい発音を習得するのが困難。
              </p>
            </div>
          </div>

          <div className={css_index.stone_bg}>
            <p>
              これらの問題は、
              <span className={css_index.red}>生徒の学習経験</span>や、
              問題の程度を考慮した
              <br />
              <span className={css_index.red}>効果的な学習方法</span>
              （適切な指導と 定期的な実践・フィードバック）を
              <br />
              通じて<span className={css_index.red}>克服可能</span>です。
            </p>
          </div>
        </section>

        <section
          id="nav_03"
          className={`${css_index.section} ${css_index.section_08}`}
        >
          <h2 className={css_index.title_blue}>
            <span>志望校へ導く徹底した試験対策</span>
          </h2>
          <div
            className={`${css_index.section__inner} ${css_index.section_08__inner} ${css_index.section_08__inner_01}`}
          >
            <div className={`${css_index.box}`}>
              <h3>英語専門塾として開塾36年 あらゆる英語資格試験で圧倒的実績</h3>
              <img
                src="/img/top/section08_item01.png"
                alt="英検1級合格 累計178名 東大・早慶・上智大など第一志望校に9割以上合格"
              />
            </div>
          </div>
          <div
            className={`${css_index.section__inner} ${css_index.section_08__inner} ${css_index.section_08__inner_02}`}
          >
            <div className={`${css_index.box}`}>
              <h3>
                レベル別・目的別に最適で
                <br />
                特化型のカリキュラムを
                <br />
                提供しているため
                <br />
                <span className={css_index.red}>
                  より効率的な学習を進められます
                </span>
              </h3>

              <div className={css_index.card_box}>
                <h4 className={css_index.blue_slash}>医学部受験対策</h4>
                <div className={css_index.card_box__inner}>
                  <img src="/img/top/section08_2_item01.png" />
                  <p>
                    <b>医学部合格の決め手は、英語力</b>
                    であると言われています。しかし医学部受験でも、受験対策は他学部を受験する場合とあまり大きく変わりません。本質的な英語力が求められいているだけです。本校では求められる本質的な英語力を効率良く高めるために、
                    <b>基本的かつ合理的な対策を徹底</b>
                    して、スコアアップをはかります。過去問題の中でも比較的平易な問題から導入し、徐々にレベルを上げ、志望医学部以上の難度の問題でも得点できるようにして合格につなげます。
                  </p>

                  <dl>
                    <dt>主な学習内容</dt>
                    <dd>英文和訳 / 要約 / 自由英作文</dd>
                  </dl>

                  <div className={css_index.center}>
                    <a href="">詳細をみる</a>
                  </div>
                </div>
              </div>
              <div className={css_index.card_box}>
                <h4 className={css_index.blue_slash}>国公立大学受験対策</h4>
                <div className={css_index.card_box__inner}>
                  <img src="/img/top/section08_2_item02.png" />
                  <p>
                    国公立個別試験は、大学入学共通テストのマーク式問題とは異なり、「
                    <b>記述力</b>
                    」が問われます。1000語を超える英文を読んで100語前後にまとめる要旨要約問題、長文読解問題に組み込まれた英文和訳問題、自由英作文など、どれも
                    <b>本質的な英語力を問う難しい問題</b>ばかりです。
                  </p>

                  <dl>
                    <dt>主な学習内容</dt>
                    <dd>長文読解 / ライティング / リスニング</dd>
                  </dl>

                  <div className={css_index.center}>
                    <a href="">詳細をみる</a>
                  </div>
                </div>
              </div>
              <div className={css_index.card_box}>
                <h4 className={css_index.blue_slash}>難関私立大学受験対策</h4>
                <div className={css_index.card_box__inner}>
                  <img src="/img/top/section08_2_item03.png" />
                  <p>
                    私立大学の対策指導では、各大学の個別入試（一般入試）に加え、学校推薦型選抜や総合型選抜（旧AO入試）等の推薦入試対策もいたします。現在では入学者の50%以上が一般入試ではなく推薦入試で入学しています。推薦型が主流になりつつあるので、
                    <b>
                      推薦入試で高く評価される英検・TOEIC等のスコアアップも万全の対策指導
                    </b>
                    をいたします。出願条件以上のスコアアップを果たして加点も受け、合格を確実にいたします。
                  </p>

                  <dl>
                    <dt>主な学習内容</dt>
                    <dd>文法・語彙 / 長文読解 / ライティング / リスニング</dd>
                  </dl>

                  <div className={css_index.center}>
                    <a href="">詳細をみる</a>
                  </div>
                </div>
              </div>
              <div className={css_index.card_box}>
                <h4 className={css_index.blue_slash}>GMARCH受験対策</h4>
                <div className={css_index.card_box__inner}>
                  <img src="/img/top/section08_2_item04.png" />
                  <p>
                    GMARCH対策では自分の弱点がどこかをしっかりと見極め、
                    <b>基礎力の徹底</b>
                    から始めます。その上で数多くの演習問題を使って、
                    <b>正しい知識と解き方を定着</b>
                    させます。英語力は［文法→構文→長文読解→速読→リスニング→英作文」のプロセスで伸びていきます。段階を追って無理なく、論理的に理解・記憶させ、
                    <b>
                      習熟度に応じたカリキュラムで不得意単元の克服と、新単元マスターを徹底
                    </b>
                    していきます。
                  </p>

                  <dl>
                    <dt>主な学習内容</dt>
                    <dd>文法・語彙 / 長文読解 / ライティング / リスニング</dd>
                  </dl>

                  <div className={css_index.center}>
                    <a href="">詳細をみる</a>
                  </div>
                </div>
              </div>
              <div className={css_index.card_box}>
                <h4 className={css_index.blue_slash}>大学入学共通テスト対策</h4>
                <div className={css_index.card_box__inner}>
                  <img src="/img/top/section08_2_item05.png" />
                  <p>
                    実施された過去問や数多くの予想問題・模擬テストの中から、レベルを上げながらできるだけ多くの問題を解いていきます。多くの英文にあたることによって設問ごとに必要な情報選別力をつけ、
                    <b>
                      短い制限時間内でも正確に解答できる時間配分の仕方などを体得
                    </b>
                    していきます。
                  </p>

                  <dl>
                    <dt>主な学習内容</dt>
                    <dd>長文化(5,500語)の読解・筆記対策 / リスニング</dd>
                  </dl>

                  <div className={css_index.center}>
                    <a href="">詳細をみる</a>
                  </div>
                </div>
              </div>
              <div className={css_index.card_box}>
                <h4 className={css_index.blue_slash}>高校生コース</h4>
                <div className={css_index.card_box__inner}>
                  <img src="/img/top/section08_2_item06.png" />
                  <p>
                    高校生コースでは<b>文法と4技能をバランス良く</b>
                    育て、多読→速読→精読で読解力をさらに強化して、難関大学合格、内部進学、留学など
                    <b>全ての進路を可能にする英語力</b>
                    を育てています。高校1年時から学校の英語を着実にマスターして英語基礎学力を育て、高い学校成績を確実にいたします。それと連動して、英検もより上位級の1級・準1級合格につながるようご指導して実績を出しています。
                  </p>

                  <dl>
                    <dt>主な学習内容</dt>
                    <dd>長文化(5,500語)の読解・筆記対策 / リスニング</dd>
                  </dl>

                  <div className={css_index.center}>
                    <a href="">詳細をみる</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={css_index.stone_bg}>
            <p>
              志望校の求める条件に応じて、
              <br />
              <span className={css_index.red}>
                求められる以上のスコアを獲得できる
              </span>
              <br />
              ご指導をいたします。
            </p>
          </div>
        </section>

        <section
          id="nav_04"
          className={`${css_index.section} ${css_index.section_09}`}
        >
          <h2 className={css_index.title_blue}>
            <span>秋谷光子アカデミィの学習ポイント</span>
          </h2>

          <div
            className={`${css_index.section__inner} ${css_index.section_09__inner}`}
          >
            <div className={`${css_index.point_row} ${css_index.point_row_01}`}>
              <h3>
                大学受験専門に特化した
                <br />
                コース別学習
              </h3>
              <p>
                当アカデミィでは学年や目的に応じてコースを複数用意しております。入塾の際に塾長が面談を行い、お一人お一人に合わせて最短距離で目標達成できるカリキュラムをご案内いたします。
              </p>
              <div className={css_index.box}>
                <h4 className={css_index.blue_slash}>学習コース一覧</h4>
                <ul>
                  <li>高校生コース</li>
                  <li>大学受験コース</li>
                  <li>英検合格コース</li>
                  <li>IELTSコース</li>
                  <li>GTECコース</li>
                  <li>TOEICコース</li>
                  <li>TOEFLコース</li>
                  <li>帰国子女コース</li>
                </ul>
              </div>
            </div>
            <div className={`${css_index.point_row} ${css_index.point_row_02}`}>
              <h3>学習目的に合わせて徹底指導</h3>
              <p>
                学習目的やご要望を伺い、「グループ指導」「1対1個別指導（オンライン可）」「個別グループ指導」の中から、最も効率良くマスターできるカリキュラムと学習法をご提案いたします。
              </p>
              <div className={css_index.box}>
                <h4 className={css_index.blue_slash}>グループ指導</h4>

                <div className={css_index.box__inner}>
                  <img src="/img/top/section09_item01.png" />

                  <div className={css_index.ac_cont}>
                    <dl>
                      <dt>指導内容</dt>
                      <dd>
                        学年と習熟度別に6人までの少人数グループに細かくクラス分けをして、英検1級の担任講師が確実にマスターさせていきます。英語の勉強の仕方から、内申点の向上、受験、英検、留学など、学習目的と習熟度に応じてご指導いたします。ネイティブ講師によるフリートークの受講と英作文の添削は無料で受講可能です。
                      </dd>
                    </dl>

                    <dl>
                      <dt>指導時間</dt>
                      <dd>
                        <dl>
                          <dt>週1回／月4回</dt>
                          <dd>
                            小学生や基礎レベル：70分～
                            <br />
                            高校生や英検2級レベル以上：120分
                            <br />
                            ※受講クラスは学年とレベルに応じて変わりますのでご相談ください。
                          </dd>
                        </dl>
                      </dd>
                    </dl>

                    <dl>
                      <dt>振替制度</dt>
                      <dd>
                        グループ指導を欠席した場合、振替制度を利用して欠席した授業内容をマスターできます。欠席した単元は、個別に指導する振替時間枠（3～4人対1人で英検1級講師がご指導）を設けておりますのでご相談ください。
                      </dd>
                    </dl>
                  </div>

                  <div className={css_index.ac_btn}>
                    <button>閉じる</button>
                  </div>
                </div>
              </div>
              <div className={css_index.box}>
                <h4 className={css_index.blue_slash}>1対1個人指導</h4>

                <div className={css_index.box__inner}>
                  <img src="/img/top/section09_item02.png" />

                  <div className={css_index.ac_cont}>
                    <dl>
                      <dt>指導内容</dt>
                      <dd>
                        学年と習熟度別に6人までの少人数グループに細かくクラス分けをして、英検1級の担任講師が確実にマスターさせていきます。英語の勉強の仕方から、内申点の向上、受験、英検、留学など、学習目的と習熟度に応じてご指導いたします。ネイティブ講師によるフリートークの受講と英作文の添削は無料で受講可能です。
                      </dd>
                    </dl>

                    <dl>
                      <dt>指導時間</dt>
                      <dd>
                        <dl>
                          <dt>週1回／月4回</dt>
                          <dd>
                            小学生や基礎レベル：70分～
                            <br />
                            高校生や英検2級レベル以上：120分
                            <br />
                            ※受講クラスは学年とレベルに応じて変わりますのでご相談ください。
                          </dd>
                        </dl>
                      </dd>
                    </dl>

                    <dl>
                      <dt>振替制度</dt>
                      <dd>
                        グループ指導を欠席した場合、振替制度を利用して欠席した授業内容をマスターできます。欠席した単元は、個別に指導する振替時間枠（3～4人対1人で英検1級講師がご指導）を設けておりますのでご相談ください。
                      </dd>
                    </dl>
                  </div>

                  <div className={css_index.ac_btn}>
                    <button>閉じる</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${css_index.point_row} ${css_index.point_row_03}`}>
              <h3>
                一人ひとりにあった
                <br />
                学習プランを提供する
              </h3>
              <p>
                当アカデミィは<b>最も柔軟に対応できる学習塾</b>です。
                <br />
                英検1級に合格したプロ英語講師40余名が、それぞれの得意分野を天職として指導するプロ英語教育集団です。
                現在の英語力を緻密にレベル設定し、これまでの英語歴や学習環境に至るまでをも考慮して、着実にマスターできるカリキュラムを作成します。グループ指導を受講する場合、受講するコースと生徒さんの英語力にギャップがある際はギャップを埋める指導もいたします。
              </p>
            </div>
          </div>
          <div
            className={`${css_index.additionally} ${css_index.additionally_01}`}
          >
            <div className={`${css_index.float_text}`}>さらに</div>
            <div className={css_index.section__inner}>
              <h3>
                <span className={css_index.red}>英検1級・TOEIC満点レベル</span>
                の<br />
                ベテラン講師が直接指導
              </h3>
              <p>
                グループ指導から1対1個人指導に至るまで、
                <b>英検1級・TOEIC満点レベル以上のベテラン講師</b>
                が担任として指導。20年以上在職して実績を重ねているベテラン講師（元帰国子女の講師を含む）が多数指導中です。
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
                毎年10名前後の
                <br />
                英検1級合格者を輩出
              </h3>
              <p>
                秋谷アカデミィは地元密着型の一私塾ですが、
                <br />
                小学生～社会人まで英検1級に
                <br />
                毎回多数の生徒さんが合格されています。
                <br />
                卒業生の方からは
                <b>秋谷光子アカデミィを選んで良かった</b>といった嬉しいお声も
                <br />
                たくさんいただいております。
              </p>
            </div>
          </div>

          <div className={css_index.cta_box}>
            <h2>
              <span className={css_index.balloon}>
                最短距離で目標達成できる
              </span>
              <span className={css_index.block}>カリキュラムをご案内</span>
            </h2>

            <div className={css_index.cta}>
              <p>
                まずは
                <span className={css_index.red_box}>無料体験レッスン</span>
                <span className={css_index.red_box}>資料請求</span>
                から
              </p>
              <a href={`/contact`}>
                お問い合わせ・<span>無料体験レッスンを申し込む</span>
              </a>
              <a href={`/contact`}>資料を請求する</a>
            </div>
          </div>
        </section>

        <section className={`${css_index.section} ${css_index.section_10}`}>
          <h2 className={css_index.title_blue}>
            <span>
              <span className={css_index.block}>秋谷光子アカデミィが</span>
              <span className={css_index.block}>英検や大学受験に強い理由</span>
            </span>
          </h2>
          <div
            className={`${css_index.section__inner} ${css_index.section_10__inner}  ${css_index.section_10__inner_01}`}
          >
            <h3 className={css_index.left}>
              <span>充実したカリキュラム</span>
            </h3>

            <p>
              当アカデミィでは大学受験の英語教育に特化したオーダーメイドカリキュラムをオーダーメイドで提供しております。受験英語からアカデミック英語まで幅広く対応しており、最新の受験トレンドに基づいたカリキュラムの更新も随時行っております。
            </p>

            <h3 className={css_index.right}>
              <span>実績のある指導法</span>
            </h3>

            <p>
              合格実績豊富な、経験に基づいた指導法で目標達成に導きます。
              <br />
              また、独自の学習メソッドで英語力の飛躍的向上をサポートし、クリティカルシンキングやプレゼンテーションスキルなど、アカデミックスキルの習得を重点的に行います。
            </p>
          </div>

          <div id="nav_05" className={`${css_index.box}`}>
            <div
              className={`${css_index.section__inner} ${css_index.section_10__inner}  ${css_index.section_10__inner_02}`}
            >
              <h3>
                <span>カリキュラム一覧</span>
              </h3>

              <div className={css_index.box__item}>
                <h4>小学生</h4>

                <div className={css_index.content}>
                  <dl>
                    <dt>小4・5・6生</dt>
                    <dd>
                      <dl>
                        <dt>導入〜準2級</dt>
                        <dd>
                          小学校でも、英語の授業時間が増えるにつれ、より高度な英語力が求められるようになっています。ネイティブ講師とバイリンガル講師の指導で、読む・書く・聞く・話す力を総合的につけ、英検の合格級も上げて対策指導いたします。帰国枠受験にも対応。
                        </dd>
                      </dl>
                    </dd>
                  </dl>
                  <dl>
                    <dt>小1・2・3生Kids英会話</dt>
                    <dd>
                      <dl>
                        <dt>導入〜3級</dt>
                        <dd>
                          ABCの初歩から、スペリングと音との関係をフォニックスでマスターし、初めて見たスペルも発音でき、初めて聞いた発音もスペルアウトできるようにしていきます。ネイティブ講師と日本人バイリンガル講師の指導で、英検1級につながる基礎力を視野に、英語で考えて話す英語脳を楽しく育てます。
                        </dd>
                      </dl>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className={css_index.box__item}>
                <h4>中学生</h4>

                <div className={css_index.content}>
                  <dl>
                    <dt>高校受験生 中3生</dt>
                    <dd>3級〜2級/GTEC/TOEIC Bridge/TOEFL</dd>
                  </dl>
                  <div className={css_index.flex}>
                    <dl>
                      <dt>中2生</dt>
                      <dd>4級〜準2級/GTEC</dd>
                    </dl>
                    <dl>
                      <dt>中1生</dt>
                      <dd>導入〜準2級/GTEC</dd>
                    </dl>
                  </div>

                  <div className={css_index.course}>
                    <dl>
                      <dt>アドバンスコース</dt>
                      <dd>
                        中3末までに英検2級以上・中堅大学合格以上のレベルまでマスターし、難関校合格や留学にも対応する、英語スペシャリスト養成コース。
                      </dd>
                    </dl>
                    <dl>
                      <dt>ベイシックコース</dt>
                      <dd>
                        学校の英語成績アップを主な目的に、トレジャー・プログレス等の教科書を完璧にマスターし、中3末までの英検2級合格を目指します。
                      </dd>
                    </dl>
                    <dl>
                      <dt>リーディング</dt>
                      <dd>
                        高校基礎文法までを完璧にマスターし、多読と精読両面で読解力の基礎を築きます。
                      </dd>
                    </dl>
                    <dl>
                      <dt>ライティング</dt>
                      <dd>
                        マスターした文法と構文を使って、より自然な英作文ができるよう添削指導します。
                      </dd>
                    </dl>
                    <dl>
                      <dt>リスニング</dt>
                      <dd>
                        音と読解力の両面を発音練習と速読で鍛え、「耳に入る順」に聞き取り、理解できるようにします。
                      </dd>
                    </dl>
                    <dl>
                      <dt>スピーキング</dt>
                      <dd>
                        簡単な単語や単文から話し始めて、状況に応じて言い替えて話せるようにトレーニングしていきます。
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className={css_index.box__item}>
                <h4>高校生・大学受験</h4>

                <div className={css_index.content}>
                  <dl>
                    <dt>大学受験生/高3生</dt>
                    <dd>
                      <dl>
                        <dt>
                          2級〜準1級/IELTS GTEC TEAP/TOEIC/TOEIC Bridge/TOEFL
                        </dt>
                        <dd>
                          大学入学共通テストや各大学の個別試験等、変化し続ける受験英語に完璧な対策指導を致します。共通テストはリーディングの総語数が更に増加して長文化し、リスニングは1回読みで解答が求められます。根幹になる正確な速読力をつけて、長文読解、リスニング特訓、英作文や小論文の添削を重ねて合格を確実に致します。学校推薦や総合型選抜対策も万全で、今年も第一志望校に85％以上が合格。
                        </dd>
                      </dl>
                    </dd>
                  </dl>
                  <dl>
                    <dt>高2生</dt>
                    <dd>
                      <dl>
                        <dt>
                          2級〜準1級/IELTS GTEC TEAP/TOEIC/TOEIC Bridge/TOEFL
                        </dt>
                        <dd>
                          単語・熟語・文法の力をつけながら、多読と精読両面からアプローチして正確に早く読解できるようにします。英語力の土台となる長文読解力をつけてリスニング力も伸ばし、英作文は添削指導を重ねて英検と新入試での大学受験合格力をつけていきます。
                        </dd>
                      </dl>
                    </dd>
                  </dl>
                  <dl>
                    <dt>高1生</dt>
                    <dd>
                      <dl>
                        <dt>準2級〜準1級/GTEC TEAP/TOEIC Bridge/TOEFL</dt>
                        <dd>
                          高校生の英語は文法→構文→長文読解→多読・速読→リスニング→英作文→英会話のプロセスで力がつきます。学習目的と習熟度に応じたカリキュラムで、不得意単元の克服と新単元マスターを徹底し、新形式の大学入試に対応した力をつけていきます。
                        </dd>
                      </dl>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className={css_index.box__item}>
                <h4>高校生以上</h4>

                <div className={css_index.content}>
                  <dl>
                    <dt>英検</dt>
                    <dd>
                      <dl>
                        <dt>準2級〜1級</dt>
                        <dd>
                          秋谷アカデミィでは、求められるスキルを各級毎に細分化してマスターし、英検1級も毎年10名以上の方が合格しています。スピーキングとライティングはシミュレーションと添削を重ねることで、多くの方が満点を獲得しています。
                        </dd>
                      </dl>
                    </dd>
                  </dl>
                  <dl>
                    <dt>TOEIC</dt>
                    <dd>
                      <dl>
                        <dt>TOIEC500〜990</dt>
                        <dd>
                          目標スコアに応じて900・800・730・650点と細かくクラス分けし、初級者むけの基礎文法から、上級者のスコアアップに必要な受験スキル・解法テクニックまで指導いたします。リスニング・リーディングそれぞれの出題傾向を、パートごとに対策指導し、スコアアップにつなげます。
                        </dd>
                      </dl>
                    </dd>
                  </dl>
                  <dl>
                    <dt>TOEFL IELTS</dt>
                    <dd>
                      <dl>
                        <dt>TOEFL40〜120/IELTS4〜9</dt>
                        <dd>
                          初めて受験する方から、さらにスコアアップを目指す方まで、レベルに応じて４技能を網羅した対策指導をいたします。特に苦手な方が多いスピーキングとライティングは、多くの問題をこなすことで実践力をつけ、ネイティブ講師が設問に応じた答え方を特訓して、目標以上のスコアを獲得しています。
                        </dd>
                      </dl>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className={css_index.cta_box}>
            <h2>
              <span className={css_index.balloon}>
                最短距離で目標達成できる
              </span>
              <span className={css_index.block}>カリキュラムをご案内</span>
            </h2>

            <div className={css_index.cta}>
              <p>
                まずは
                <span className={css_index.red_box}>無料体験レッスン</span>
                <span className={css_index.red_box}>資料請求</span>
                から
              </p>
              <a href={`/contact`}>
                お問い合わせ・<span>無料体験レッスンを申し込む</span>
              </a>
              <a href={`/contact`}>資料を請求する</a>
            </div>
          </div>
        </section>

        <section
          id="nav_06"
          className={`${css_index.section} ${css_index.section_11}`}
        >
          <h2 className={css_index.title_blue}>
            <span>
              大学受験に強い
              <br />
              秋谷光子アカデミィ入塾までの流れ
            </span>
          </h2>
          <div className={`${css_index.step}`}>
            <div
              className={`${css_index.section__inner} ${css_index.section_11__inner}`}
            >
              <div className={`${css_index.row_box} ${css_index.row_box_01}`}>
                <h3>お問い合わせ・資料請求</h3>

                <img src="./img/top/section11_item01.png" alt="" />

                <p>
                  まずは<span>お問い合わせフォーム</span>
                  から面談カウンセリングの予約や当アカデミィへのご質問、資料請求などお問い合わせください。無料体験レッスンも受付中ですので希望される方は是非ご相談ください。
                </p>
              </div>
              <div className={`${css_index.row_box} ${css_index.row_box_02}`}>
                <h3>塾長による面談カウンセリング</h3>

                <img src="./img/top/section11_item02.png" alt="" />

                <p>
                  入塾前に塾長が面談カウンセリングを行い、ご要望を細かくお伺いしたうえで生徒さんの英語力を正確に把握し、学習法などをできる限りアドバイスさせていただきます。英語をさらに得意科目にして、最短距離で目標達成できるカリキュラムをご案内いたします。
                </p>
              </div>
              <div className={`${css_index.row_box} ${css_index.row_box_03}`}>
                <h3>無料体験レッスン申し込み</h3>

                <img src="./img/top/section11_item03.png" alt="" />

                <p>
                  秋谷光子アカデミィでは無料体験レッスンを受けることができます。入塾前にレッスンの雰囲気や指導方法を体験できますのでご希望の方はご相談ください。
                </p>
              </div>
              <div className={`${css_index.row_box} ${css_index.row_box_04}`}>
                <h3>入塾</h3>

                <img src="./img/top/section11_item04.png" alt="" />

                <p>
                  秋谷光子アカデミィへようこそ。目標達成に向けてカリキュラムをご案内し、本格的にレッスンを開始いたします。初回レッスンまでに入学金など諸経費についてお支払いいただきます。
                </p>
              </div>
            </div>
          </div>

          <div className={css_index.merit}>
            <div
              className={`${css_index.section__inner} ${css_index.section_11__inner}`}
            >
              <h3>
                秋谷光子アカデミィ
                <br />
                無料体験レッスンを実施中
              </h3>

              <div className={css_index.box}>
                <h4>無料体験レッスンのメリット</h4>

                <ul>
                  <li>実際の授業が経験できる</li>
                  <li>学習相談ができる、合格までの計画が立てられる</li>
                  <li>秋谷光子アカデミィの雰囲気がわかる</li>
                  <li>料金プランがわかる</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={css_index.bottom}>
            <div className={css_index.section__inner}>
              <h3 className={css_index.red}>
                生徒と真剣に向き合い
                <br />
                合格へと導く英語塾
              </h3>

              <p>
                当アカデミィでは、<b>熱意を持った生徒</b>
                を歓迎しております。講師も有り余る程の熱意と指導スキルを持って指導いたします。
                <br />
                当アカデミィの、<b>こだわりの指導体制</b>
                を上手にご利用なさって、合格を勝ち取って下さい。
              </p>
            </div>
          </div>

          <div className={css_index.cta_box}>
            <h2>
              <span className={css_index.balloon}>
                最短距離で目標達成できる
              </span>
              <span className={css_index.block}>カリキュラムをご案内</span>
            </h2>

            <div className={css_index.cta}>
              <p>
                まずは
                <span className={css_index.red_box}>無料体験レッスン</span>
                <span className={css_index.red_box}>資料請求</span>
                から
              </p>
              <a href={`/contact`}>
                お問い合わせ・<span>無料体験レッスンを申し込む</span>
              </a>
              <a href={`/contact`}>資料を請求する</a>
            </div>
          </div>
        </section>

        <section
          id="nav_07"
          className={`${css_index.section} ${css_index.section_12}`}
        >
          <h2 className={css_index.title_blue}>
            <span>秋谷光子アカデミィについて</span>
          </h2>
          <div
            className={`${css_index.section__inner} ${css_index.section_12__inner}`}
          >
            <h3>
              横浜綱島に開塾37年
              <br />
              最上級の学習環境を提供
            </h3>

            <p>
              秋谷アカデミィは、英語専門塾として横浜綱島に開校して以来、37年以上の長きにわたり、
              <b>
                基礎レベルの小・中学生から東京大学などの最難関大学、英検1級合格者を多数輩出
              </b>
              してきました。
              <b>英検1級・TOEIC950点以上の合格実績豊富な講師陣</b>
              が、<b>6人までのグループ指導と1対1の個別指導</b>をいたします。
            </p>

            <h3>
              試験に合格し
              <br />
              世界で使える英語力を
            </h3>

            <p>
              秋谷アカデミィの指導理念は、
              <b>
                学校で習う英語を完璧にマスターし、それを国際社会で通用する実用英語にまで高めること
              </b>
              にあります。文法の正確さに加え、リスニング・スピーキングなどの音声面も重視しており、生徒一人ひとりが英語の4技能をバランスよく伸ばし、
              <b>実践的な英語力を身につける</b>ことができます。
            </p>

            <h3>
              アクセスが良く
              <br />
              学習に専念できる教室
            </h3>

            <p>
              教室は、アクセスが便利な
              <b>横浜・綱島本部校と自由が丘・田園調布校</b>
              の2校舎があり、英検や大学受験など、さまざまな目標に対応した英語教育を提供しています。豊富な合格実績と確かな指導力で、多くの生徒が自分の夢や目標に向かって大きな一歩を踏み出しています。
            </p>
          </div>

          <div className={css_index.box}>
            <div className={css_index.section__inner}>
              <div className={css_index.box__item}>
                <h3>横浜・綱島本部校</h3>
                <img src="/img/top/section12_item01.png" />
                <div className={css_index.text}>
                  <ul>
                    <li>TEL：045-544-6756</li>
                    <li>
                      住所：〒223-0053 横浜市港北区
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
                  <a href="#">Google Mapで見る</a>
                  <a href="#" className={css_index.detail}>
                    詳細をみる
                  </a>
                </div>
              </div>
              <div className={css_index.box__item}>
                <h3>自由が丘・田園調布校</h3>
                <img src="/img/top/section12_item02.png" />
                <div className={css_index.text}>
                  <ul>
                    <li>TEL：03-5483-5025</li>
                    <li>
                      住所：〒145-0071
                      <br />
                      東京都大田区田園調布3-24-2
                    </li>
                    <li>
                      アクセス：
                      <br />
                      東急東横線・目黒線 田園調布駅より徒歩1分
                    </li>
                  </ul>
                  <a href="#">Google Mapで見る</a>
                  <a href="#" className={css_index.detail}>
                    詳細をみる
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${css_index.section} ${css_index.section_13}`}>
          <h2 className={css_index.title_blue}>
            <span>
              難関大学に多数合格者を輩出する
              <br />
              秋谷光子アカデミィの特徴
            </span>
          </h2>
          <div
            className={`${css_index.section__inner} ${css_index.section_13__inner}`}
          >
            <div className={css_index.box}>
              <h3>英検1級ベテラン講師40余名が直接指導</h3>
              <p>
                塾長を始め、当アカデミィの講師はグループ指導・個別指導ともに、
                <b>英検1級・TOEIC950以上の合格実績豊富なベテラン講師</b>
                が指導いたします。東大卒や東京外語大卒等の各々得意な指導分野と指導実績豊富なバイリンガル講師に、ネイティブ講師が英会話・スピーキング・英文添削・英文監修を担当して合格に導きます。
                <b>大学生のアルバイト講師はおりません</b>。
              </p>
            </div>
            <div className={css_index.box}>
              <h3>開講37年、圧倒的な英検合格実績</h3>
              <p>
                英検1級に毎年10名前後の合格者。秋谷アカデミィは地元密着型の一私塾ですが、
                <b>小学生～社会人まで英検1級に毎回多数の生徒さんが合格</b>
                されています。1級合格を目指しながら、準1級～5級も多くの合格者が出ています。
              </p>
            </div>
            <div className={css_index.box}>
              <h3>大学受験生向けの万全の対策指導</h3>
              <p>
                当アカデミィでは大学受験での第一志望校合格を目標に
                <b>大学受験合格対策カリキュラム</b>
                をご用意しております。英語基礎学力をできるだけ短時間のうちに完成させ、多様な大学の入試過去問題を、長文読解を中心に幅広く解いてレベルを上げていきます。最難関大学入試から、英検等を活用した推薦入試、大学入学共通テストに至るまで、これまで培った英語塾としての実績とノウハウを総動員し、
                <b>合格から逆算したカリキュラムで万全の対策指導</b>
                をいたします。「医学部受験対策」「国公立大学受験対策」「大学入学共通テスト対策」など目標に合わせてご案内いたします。
              </p>
            </div>
            <div className={css_index.box}>
              <h3>塾長による面談カウンセリング</h3>
              <p>
                入塾をご検討の際に<b>塾長がカウンセリングを行い</b>
                、現在の英語力を正確に把握し、学習法などアドバイスいたします。ご要望を伺い、最も効率良くマスターできるカリキュラムを、グループ指導・1対1個人指導・個別グループ指導の中からご提案いたします。現在抱えている不安点やご自身のキャリアプランなども是非ご相談ください。
              </p>
            </div>
            <div className={css_index.box}>
              <h3>手厚いサポートと柔軟な対応</h3>
              <p>
                当アカデミィは最も柔軟に対応できる学習塾です。現在の英語力を緻密にレベル設定し、これまでの英語歴や学習環境に至るまでを考慮して、
                <b>着実にマスターできるカリキュラムを作成</b>
                します。グループ指導を受講する場合、受講するコースと生徒さんの英語力にギャップがある際はギャップを埋める指導もいたします。
                授業の様子を見たい方は、是非無料体験レッスンをお申し込みください。
              </p>
            </div>
          </div>

          <div className={css_index.cta_box}>
            <h2>
              <span className={css_index.balloon}>
                最短距離で目標達成できる
              </span>
              <span className={css_index.block}>カリキュラムをご案内</span>
            </h2>

            <div className={css_index.cta}>
              <p>
                まずは
                <span className={css_index.red_box}>無料体験レッスン</span>
                <span className={css_index.red_box}>資料請求</span>
                から
              </p>
              <a href={`/contact`}>
                お問い合わせ・<span>無料体験レッスンを申し込む</span>
              </a>
              <a href={`/contact`}>資料を請求する</a>
            </div>
          </div>
        </section>

        <section
          id="nav_08"
          className={`${css_index.section} ${css_index.section_14}`}
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
                <br />
                英語力を。
              </p>
            </div>
          </div>
          <div
            className={`${css_index.section__inner} ${css_index.section_14__inner}`}
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
              講師は英検1級・TOEIC950以上の合格実績豊富なベテラン講師で学生講師は在籍しておりません。
              <br />
              これまで培った英語塾としての実績とノウハウを総動員し、合格から逆算したカリキュラムで万全の対策指導をいたしますので、是非お問い合わせお待ちしております。
            </p>

            <p>
              <strong>
                <span>塾長</span>秋谷 光子
              </strong>
            </p>
          </div>

          <div className={css_index.cta_box}>
            <h2>
              <span className={css_index.balloon}>
                最短距離で目標達成できる
              </span>
              <span className={css_index.block}>カリキュラムをご案内</span>
            </h2>

            <div className={css_index.cta}>
              <p>
                まずは
                <span className={css_index.red_box}>無料体験レッスン</span>
                <span className={css_index.red_box}>資料請求</span>
                から
              </p>
              <a href={`/contact`}>
                お問い合わせ・<span>無料体験レッスンを申し込む</span>
              </a>
              <a href={`/contact`}>資料を請求する</a>
            </div>
          </div>
        </section>

        <section className={`${css_index.section} ${css_index.section_15}`}>
          <h2 className={css_index.title_blue}>
            <span>学習空間のこだわり</span>
          </h2>

          <div className={`${css_index.box} ${css_index.box_01}`}>
            <div
              className={`${css_index.box__inner} ${css_index.box_01__inner}`}
            >
              <h3>
                最上級の学習環境で指導
                <br />
                自習室も完備
              </h3>
              <p>
                学習効果を上げるには快適な学習環境が不可欠です。床暖房完備でこだわり抜いた素材の校舎や緑豊かな観葉植物など、最上級の学習空間で学習ができます。
                リスニング・スピーキングはヤマハの防音設備で他の生徒を気にすることなくレッスンできます。自習室は業務時間内はいつでも利用可。1対1個別指導も1つの教室を専用利用して完全な個室でご指導いたします。
              </p>

              <div className={css_index.swiper_wrapper}>
                <div className={css_index.swiper_slide}>
                  <img src="/img/top/section15_item01.png" />
                </div>
                <div className={css_index.swiper_slide}>
                  <img src="/img/top/section15_item02.png" />
                </div>
                <div className={css_index.swiper_slide}>
                  <img src="/img/top/section15_item03.png" />
                </div>
                <div className={css_index.swiper_slide}>
                  <img src="/img/top/section15_item04.png" />
                </div>
                <div className={css_index.swiper_slide}>
                  <img src="/img/top/section15_item05.png" />
                </div>
                <div className={css_index.swiper_slide}>
                  <img src="/img/top/section15_item06.png" />
                </div>
              </div>
            </div>
          </div>

          <div className={`${css_index.box} ${css_index.box_02}`}>
            <div
              className={`${css_index.box__inner} ${css_index.box_02__inner} ${css_index.section__inner}`}
            >
              <div className={`${css_index.front}`}>
                <h3>その効果は？</h3>
                <ul>
                  <li>快適な環境だと集中力が増して学習が捗る</li>
                  <li>完全個室もあるので他の生徒に気を遣わない</li>
                  <li>
                    周りの生徒も温度感が高いため、
                    <br />
                    自ら学習しようと思える
                  </li>
                </ul>
              </div>

              <div className={`${css_index.bottom}`}>
                <p>
                  <span className={css_index.red}>唯一無二の学習空間</span>で
                  <br />
                  <span className={css_index.red}>圧倒的な英語力</span>
                  を身につけよう！
                </p>
              </div>
            </div>
          </div>

          <div className={css_index.cta_box}>
            <h2>
              <span>問い合わせ・資料請求</span>
            </h2>

            <h3>
              秋谷光子アカデミィで
              <br />
              確かな英語力を身につけて
              <br />
              難関を突破しませんか？
            </h3>

            <p>
              大学受験生は、英語基礎学力をできるだけ短時間のうちに完成させ、多様な大学の入試過去問題を、長文読解を中心に幅広く解いてレベルを上げていきます。これまで培った
              <b>英語塾としての実績とノウハウを総動員</b>
              し、最難関大学入試から、英検等を活用した推薦入試、大学入学共通テストに至るまで、
              <b>合格から逆算したカリキュラムで万全の対策指導をいたします</b>。
            </p>

            <div className={css_index.cta}>
              <p>学習方法含めてアドバイスをもらう</p>
              <a href={`/contact`}>
                お問い合わせ・<span>無料体験レッスンを申し込む</span>
              </a>
              <p>塾の概要や料金を知りたい</p>
              <a href={`/contact`}>資料を請求する</a>
            </div>
          </div>
        </section>

        <section className={`${css_index.section} ${css_index.section_16}`}>
          <h2 className={css_index.title_blue}>
            <span>よくある質問</span>
          </h2>

          <div
            className={`${css_index.section__inner} ${css_index.section_16__inner}`}
          >
            <div className={css_index.row_box}>
              <dl>
                <dt>
                  <span className={css_index.tag}>
                    <img src="/img/top/text_q.png" />
                  </span>
                  <span>講師の資格と経験は？</span>
                </dt>
                <dd>
                  当アカデミィの講師はグループ指導・個別指導ともに、英検1級・TOEIC950以上の合格実績豊富なベテラン講師が指導いたします。東大卒や東京外語大卒等の各々得意な指導分野と指導実績豊富なバイリンガル講師に、Native講師が英会話・speaking・英文添削・英文監修を担当して合格に導きます。大学生などの学生講師はおりません。
                </dd>
              </dl>
            </div>
          </div>
        </section>

        <section className={`${css_index.section} ${css_index.section_17}`}>
          <h2 className={css_index.title_blue}>
            <span>各校の問い合わせ先</span>
          </h2>

          <div
            className={`${css_index.section__inner} ${css_index.section_17__inner}`}
          >
            <div className={css_index.row_box}>
              <h3>横浜・綱島本部校</h3>
              <div className={css_index.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.7447074111483!2d139.63106607640356!3d35.53530597263475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f16c0014351%3A0xde8eb46e6d163758!2z6Iux6Kqe5aG-IOeni-iwt-WFieWtkOOCouOCq-ODh-ODn-OCoyDmqKrmtZzjg7vntrHls7bmnKzpg6jmoKE!5e0!3m2!1sja!2sjp!4v1722923650295!5m2!1sja!2sjp"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className={css_index.box}>
                <ul>
                  <li>TEL：045-544-6756</li>
                  <li>
                    住所：〒223-0053 横浜市港北区
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

                <a
                  href="https://maps.app.goo.gl/U5xW9LwdH1pRPF7j9"
                  target="_blank"
                >
                  Google Mapで見る
                </a>
              </div>
            </div>
            <div className={css_index.row_box}>
              <h3>自由が丘・田園調布校</h3>
              <div className={css_index.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.254540026972!2d139.6638798764057!3d35.59678727261457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f516c42ab6df%3A0xfc211c6ee5dd3fb7!2z6Iux6Kqe5aG-IOeni-iwt-WFieWtkOOCouOCq-ODh-ODn-OCoyDoh6rnlLHjgYzkuJjjg7vnlLDlnJLoqr_luIPmoKE!5e0!3m2!1sja!2sjp!4v1722925335679!5m2!1sja!2sjp"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className={css_index.box}>
                <ul>
                  <li>TEL：03-5483-5025</li>
                  <li>
                    住所：〒145-0071
                    <br />
                    　　　東京都大田区田園調布3-24-2
                  </li>
                  <li>
                    アクセス：
                    <br />
                    東急東横線・目黒線 田園調布駅より徒歩1分
                  </li>
                </ul>

                <a
                  href="https://maps.app.goo.gl/HgcNRZGu6G2BPAwt5"
                  target="_blank"
                >
                  Google Mapで見る
                </a>
              </div>
            </div>
          </div>
        </section>
        <Nav />
      </main>

      {/* <ContactButton /> */}

      <style jsx>{`
        h2 {
          font-size: 1.875rem;
        }
        h2 span {
          display: inline-block;
        }
        @media (max-width: 600px) {
          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
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
  const courseData = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/course?per_page=100"
  ).then((res) => res.json());

  // const classtypeData = await fetch(
  // 	"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/class_type?per_page=100&"
  // ).then((res) => res.json());

  let top = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages/7284"
  ).then((res) => res.json());
  top.feature = Object.values(top.feature);

  let experiencesData = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
  ).then((res) => res.json());

  // console.log(experiencesData)

  // let teacherList = await fetch(
  // 	"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/teacher?per_page=100"
  // ).then((res) => res.json());
  // teacherList = teacherList.sort((a, b) => a.infoCount - b.infoCount).reverse();

  return {
    props: {
      top,
      // experiences: await fetch(
      // 	"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
      // ).then((res) => res.json()),
      courseData: courseData.reverse(),
      // classtypeData: classtypeData.reverse(),
      experiencesData,
      // teacherList
    },
  };
}
