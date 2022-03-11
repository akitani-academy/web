import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import css from "styles/faq.module.scss";

export default function Page({ faq }) {
  return (
    <>
      <h1>よくある質問</h1>
      <ol className={css.ol}>
        {faq.map((e, i) => (
          <li key={i}>
            <details>
              <summary>{e.question}</summary>
              <div
                className={css.body}
                dangerouslySetInnerHTML={{ __html: e.answer }}
              />
            </details>
          </li>
        ))}
      </ol>
    </>
  );
}
export async function getStaticProps() {
  let faq = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/faq?per_page=100&"
  ).then((res) => res.json());
  faq = faq.reverse();

  return {
    props: {
      faq,
    },
  };
}
