import Image from "next/image";

const _V = require("components/_V.js");
import Head from "components/head";
import List from "components/widget/LinkList";
import LoopCarousel from 'components/widget/LoopCarousel';
import ContactButton from "components/ContactButton/ContactButton"

import css from "styles/index.module.scss";

export default function Page() {
  // TASK: 住所自動入力
  // if (process.browser) {
  //   import "https://yubinbango.github.io/yubinbango/yubinbango.js";
  // }
  return (
    <>
      <Head
        url={"/access"}
        title="駅から徒歩1分のアクセス"
        breadcrumb={[
          ["トップページ", ""],
          ["アクセス", "/access"]
        ]}
      />

      <h1>アクセス</h1>
      <List data={_V.access.map((e, i) => [e.name, "/access/" + e.id])} vertical={true} />
      {/* {_V.access.map((e, i) => (
        <>
          <h2 id={e.id} key={i}>
            {e.name}
          </h2>
          {e.address}
          <br />
          <a href={"tel:" + e.tel} className="tel">
            {e.tel}
          </a>
          <p dangerouslySetInnerHTML={{
            __html: e.description
          }} />
          <iframe
            className="Gmap"
            src={e.Gmap}
            width="600"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <ContactButton />
        </>
      ))} */}
    </>
  );
}

import Layout from "/components/layout";
Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
