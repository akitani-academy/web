import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Page({ faq }) {
  return (
    <>
      <h1>講師紹介</h1>
      <ul>
        {faq.map((e, i) => (
          <li key={i}>
            <h2>{e.name}</h2>
            {e.license}
            <h3>講師のメッセージ</h3>
            <p>{e.message}</p>
            <h3>当塾での指導実績・得意分野</h3>
            {e.career}
            {e.other && (
              <>
                <h3>その他</h3>
                {e.other}
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
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/teacher"
  ).then((res) => res.json());

  return {
    props: {
      faq,
    },
  };
}
