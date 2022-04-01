import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import css from "styles/index.module.scss";

export default function Page({ top, news, experiences }) {
  return (
    <>
      {top.feature.map((e, i) => (
        <>
          <h2 dangerouslySetInnerHTML={{ __html: e.title }} key={i}></h2>
          <article dangerouslySetInnerHTML={{ __html: e.body }}></article>
        </>
      ))}
      {/* {experiences.map((e, i) => (
        <>
          <h2 id={e.slug} key={i} className={css.h2}>
            {e.name}
            {e.description && <small>{e.description}</small>}
          </h2>
          {e.child_list.map((e1, i) => (
            <>
              <section id={e1.slug}>
                <div className={css.experiences}>
                  <div className={css.shortTitle}>
                    <div className={css.experiencesTitle}>
                      <img src="/aa.svg" alt="" className={css.aa} />
                      <h3 key={i}>
                        {e1.name}
                        {e1.description && (
                          <>
                            <br />
                            <small>{e1.description}</small>
                          </>
                        )}
                      </h3>
                      <img src="/aa.svg" alt="" className={css.aa2} />
                    </div>
                    <div className={css.data}>
                      過去1年：{e1.yearCount}名<br />
                      累計：{e1.count}名
                    </div>
                  </div>
                  <ExperiencesList data={e1} />
                </div>
              </section>
            </>
          ))}
        </>
      ))} */}
      {/* <h2 data-subtitle={news.subTitle} className={css.h2_red}>
        {news.title}
      </h2>
      <div>{news.summary}</div>
      <Link href={"/news"}>
        <a>詳しくはこちら</a>
      </Link> */}
      {/* <h2>
        30年間の英語専門塾で、
        <br />
        あらゆる分野で圧倒的な実績。
      </h2>
      <p>
        英検1級に毎年10人前後が合格しているほか、小学生から中学・高校生、帰国枠受験、高校受験、医学部等の難関大学を始めとする大学や大学院受験、TOEIC、TOEIC
        Bridge、TOEFL、IELTS、TEAP、GTECなどで実績を出しています。
      </p>
      <h2 className={css.h2_blue} data-subtitle="秋谷光子アカデミィの特徴">
        コース/授業形態を組み合わせた
        <br />
        あなたに最適な授業コーディネート。
      </h2>
      <p>
        万人に当てはまるカリキュラムはありません。秋谷アカデミィでは入塾の際、塾長が面談を行い、お一人お一人に合った最適な授業をコーディネート致します。コース説明に加え、細かい英検1級対策についても詳細に書かれてます。
      </p>
      <h2 className={css.h2_blue}>
        試験に受かる学校英語と
        <br />
        社会で使える実用英語ともにマスターできます。
      </h2>
      <p>
        ①
        楽しく基礎力を付けたい小学生の英語、②学校の成績を上げたい中学・高校生の基礎英語、③帰国枠中学受験、④高校受験、⑤医学部等の最難関大学を始めとする大学受験や大学院受験、⑥英検、⑦TOEIC、⑧TOEIC
        Bridge、⑨TOEFL、⑩IELTS、⑪ELTiS等の留学対策、⑫TEAP、⑬GTEC、⑭英会話、⑮Business英語等、①～⑮まですべての英語指導で実績を出しています。そして、それを可能にする優秀な講師が揃っています。激変する大学入試制度に対応して、大学入学共通テストから、学校推せん型入試・総合型（AO）入試にも万全の対策指導をいたします。
      </p>
      <h2 className={css.h2_blue}>6人までのグループ指導</h2>
      <p>
        学習目的と習熟度に応じてクラスを細かく分け、6人までの少人数クラスで指導。講師と生徒が双方向でインプット（文法や読解、リスニング）と、アウトプット（スピーキング、ライティング）をして、レベル別の少人数でマスターします。
      </p>
      <h2 className={css.h2_blue}>英検1級講師の個人指導</h2>
      <p>
        学習目標にあわせた個別のカリキュラムで英検1級講師が指導。文法理解を確実にして英語でスピークアウトしながら、読む・書く・聞く・話す4技能をバランス良くつけ、倍速でレベルUPが可能です。
      </p>
      <h2 className={css.h2_blue}>最上級の学習空間</h2>
      <p>
        全教室に換気用の窓があり3人机に1人が着席。全室床暖房とヤマハの防音設備を備え、素材と質感にこだわった室内と建具、緑豊かな観葉植物等、最高の環境で受講できます。1対1個別指導は個室で行い、オンライン受講も可能。自習室完備。
      </p> */}
      <style jsx>{`
        h2 {
          font-size: 1.875rem;
        }
      `}</style>
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      top: await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages/7284"
      ).then((res) => res.json()),
      news: await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages/6797"
      ).then((res) => res.json()),
      experiences: await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
      ).then((res) => res.json()),
    },
  };
}
