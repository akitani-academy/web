const _V = require("components/_V");

import Image from "next/image";

import Layout from "components/layout";
import Head from "components/head";
import ContactButton from "components/ContactButton/ContactButton"

import css from "styles/teacher.module.scss";

export default function Page({ faq }) {
  return (
    <>
      <Head
        url={`/teacher`}
        title="42名の英検1級・TOEIC950以上の講師紹介"
        breadcrumb={[
          ["トップページ", ""],
          ["講師紹介", "/teacher"]
        ]}
      />
      <h1>講師紹介</h1>
      <p>
        秋谷光子アカデミィは英語専門塾として開塾36年、英検1級合格累計176人、東大を始め早慶・上智大など第一志望校に9割以上合格しました。
      </p>
      <p>
        講師はグループ指導・個別指導ともに、英検1級・TOEIC950以上の合格実績豊富なベテラン講師が指導いたします。東大卒や東京外語大卒等の各々得意な指導分野と指導実績豊富なバイリンガル講師に、Native講師が英会話・speaking・英文添削・英文監修を担当して合格に導きます。大学生のアルバイト講師はおりません。
      </p>
      <ul className={css.teacherList}>
        {faq.map((e, i) => (
          <li key={i}>
            <h2>{e.name}</h2>
            {e.img && (
              <div className={css.img}>
                <Image
                  src={e.img}
                  alt={e.name + "先生の写真"}
                  layout="responsive"
                  width={6240}
                  height={4160}
                  sizes="272px"
                ></Image>
              </div>
            )}
            {e.license}
            {e.message && (<>
              <h3>講師のメッセージ</h3>
              <p>{e.message}</p>
            </>)}
            {e.career && (<>
              <h3>指導実績・得意分野</h3>
              <p>{e.career}</p>
            </>)}
            {e.other && (<>
              <h3>その他</h3>
              <p>{e.other}</p>
            </>)}
          </li>
        ))}
      </ul>
      <ContactButton />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  let faq = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/teacher?per_page=100"
  ).then((res) => res.json());

  faq = faq.sort((a, b) => a.infoCount - b.infoCount).reverse();

  return {
    props: {
      faq,
    },
  };
}
