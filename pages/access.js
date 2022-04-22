import Head from "components/head";
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
      <Head title="アクセス" breadcrumb={[["アクセス", "/access"]]} />
      <h1>アクセス</h1>
      <List data={_V.access.map((e, i) => [e.name, "#" + e.id])} />
      {_V.access.map((e, i) => (
        <>
          <h2 id={e.id} key={i}>
            {e.name}
          </h2>
          {e.address}
          <br />
          <a href={"tel:" + e.tel} className="tel">
            {e.tel}
          </a>
          <p>{e.description}</p>
          <iframe
            className="Gmap"
            src={e.Gmap}
            width="600"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </>
      ))}
    </>
  );
}

import Layout from "/components/layout";
Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
