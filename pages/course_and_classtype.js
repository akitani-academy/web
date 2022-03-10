import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import View from "components/widget/View";
import Select from "components/widget/Select";

import css from "styles/course_and_classtype.module.scss";

export default function Page({ courseData, classtypeData }) {
  return (
    <>
      <h1>コース と 授業形態</h1>
      <p>
        　万人に当てはまるカリキュラムはありません。秋谷アカデミィでは入塾の際、塾長が面談を行い、お一人お一人に合った最適な授業をコーディネート致します。
      </p>
      <section className={css.slect}>
        <Select data={courseData} name={"course"} />
        <img src="x.svg" width={"26px"} height={"26px"} />
        <Select data={classtypeData} name={"classtype"} />
      </section>
      <View data={courseData} name={"course"} />
      <View data={classtypeData} name={"classtype"} />
    </>
  );
}
export async function getStaticProps() {
  const courseData = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/course?per_page=100&"
  ).then((res) => res.json());
  const classtypeData = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/class_type?per_page=100&"
  ).then((res) => res.json());

  return {
    props: {
      courseData,
      classtypeData,
    },
  };
}
