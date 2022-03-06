import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import List from "components/widget/LinkList";
import ExperiencesList from "components/widget/ExperiencesList";

export default function Page({ data }) {
  return (
    <>
      <h1>合格実績 と 体験記</h1>
      <List data={data.map((e, i) => [e.name, "#" + e.slug])} />
      {data.map((e, i) => (
        <>
          <h2 id={e.slug} key={i}>
            {e.name}
            {e.description && <small>{e.description}</small>}
          </h2>
          {1 < e.child_list.length && (
            <List data={e.child_list.map((e, i) => [e.name, "#" + e.slug])} />
          )}
          {e.child_list.map((e, i) => (
            <>
              <div>
                <h3 id={e.slug} key={i}>
                  {e.name}
                  {e.description && <small>{e.description}</small>}
                </h3>
                過去1年：{e.yearCount}名<br />
                累計：{e.count}名
              </div>
              <ExperiencesList data={e} />
            </>
          ))}
        </>
      ))}
    </>
  );
}

export async function getStaticProps() {
  let data = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
  ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}
