import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Page({ faq }) {
  return (
    <>
      <h1>よくある質問</h1>
      <ol>
        {faq.map((e, i) => (
          <li key={i}>
            <details>
              <summary>{e.question}</summary>
              <div dangerouslySetInnerHTML={{ __html: e.answer }} />
            </details>
          </li>
        ))}
      </ol>
    </>
  );
}
export async function getStaticProps() {
  const faq = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/faq?per_page=100&"
  ).then((res) => res.json());

  return {
    props: {
      faq,
    },
  };
}
