import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import List from "components/widget/LinkList";

let _V = require("components/_V.js");

export default function Page({ faq }) {
  if (process.browser) {
    // import "https://yubinbango.github.io/yubinbango/yubinbango.js";
  }
  return (
    <>
      <h1>アクセス</h1>
      <List data={_V.access.map((e, i) => [e.name, "#" + e.id])} />
      {_V.access.map((e, i) => (
        <>
          <h2 id={e.id} key={i}>
            {e.name}
          </h2>
          {e.address}
          <a href={"tel:" + e.tel} className="tel">
            {e.tel}
          </a>
          <p>{e.description}</p>
          <iframe
            className="Gmap"
            src={e.Gmap}
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </>
      ))}
    </>
  );
}
export async function getStaticProps() {
  const faq = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/faq"
  ).then((res) => res.json());

  return {
    props: {
      faq,
    },
  };
}
