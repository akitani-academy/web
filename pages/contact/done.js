import Layout from "components/layout";
import Head from "components/head";
import List from "components/widget/LinkList";

export default function Page() {
  return (
    <>
      <Head
        title="資料請求/お問い合わせ - 完了"
        breadcrumb={[
          ["お問合せ", "/contact"],
          ["完了", "/contact/done"],
        ]}
      />
      <h1>資料請求/お問合せありがとうございます。</h1>
      <p>後日、当アカデミーからご連絡させていただきます。</p>
      <List data={[["トップページに戻る", "/"]]} />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

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
