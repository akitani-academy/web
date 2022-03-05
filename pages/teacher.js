import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import css from "styles/teacher.module.scss";

export default function Page({ faq }) {
  return (
    <>
      <h1>講師紹介</h1>
      <ul className={css.teacherList}>
        {faq.map((e, i) => (
          <li key={i}>
            <h2>{e.name}</h2>
            {e.license}
            {e.message && (
              <>
                <h3>講師のメッセージ</h3>
                <p>{e.message}</p>
              </>
            )}
            {e.career && (
              <>
                <h3>当塾での指導実績・得意分野</h3>
                <p>{e.career}</p>
              </>
            )}
            {e.other && (
              <>
                <h3>その他</h3>
                <p>{e.other}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps() {
  const faq = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/teacher?per_page=100"
  ).then((res) => res.json());

  return {
    props: {
      faq,
    },
  };
}
