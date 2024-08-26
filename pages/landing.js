// import { useState } from "react";
// import { GraphQLClient, gql } from "graphql-request";
// import {
//   accordionData01,
//   accordionData02,
//   accordionData03,
// } from "../components/Accordion/Accordion";

// import Link from "next/link";

// import { loadDefaultJapaneseParser } from "budoux";
// const parser = loadDefaultJapaneseParser();

// import Head from "components/head";
// import Header from "components/lp_header";
// import Footer from "components/lp_footer";
// import Nav from "components/lp_nav";
// import Cta from "components/Cta/Cta";
// import Modal from "components/Modal/Modal";

// import css_index from "styles/lp.module.scss";

// // swiper
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

export default function Page(
  {
    // teacherList,
    // experiencesData,
    // experiencesPostData,
    // resultsPostData,
  }
) {
  // const ResultsValues = [];

  // Object.entries(resultsPostData.results).forEach((e1, i1) => {
  //   e1[1].forEach((e2, i2) => {
  //     Object.entries(e2).forEach((e3, i3) => {
  //       ResultsValues.push(e3[1]);
  //     });
  //   });
  // });

  // const ResultsCustomValues = [];

  // ResultsValues.map((e, i) => (
  //   <>
  //     {
  //       (ResultsCustomValues[i] = {
  //         student: experiencesPostData[i].student,
  //       })
  //     }
  //   </>
  // ));

  // const [activeIndex01, setactiveIndex01] = useState(null);

  // const toggleAccordion01 = (index) => {
  //   setactiveIndex01(activeIndex01 === index ? null : index);
  // };

  // const [activeIndex02, setactiveIndex02] = useState(null);

  // const toggleAccordion02 = (index) => {
  //   setactiveIndex02(activeIndex02 === index ? null : index);
  // };

  // const [activeIndex03, setactiveIndex03] = useState(null);

  // const toggleAccordion03 = (index) => {
  //   setactiveIndex03(activeIndex03 === index ? null : index);
  // };

  // const [selectedItem, setSelectedItem] = useState(null);
  // const [isModalOpen, setModalOpen] = useState(false);

  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  //   setModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };

  // //2023年度大学合格実績
  // const actuals_college = [];
  // experiencesData
  //   .filter((item) => item.id === 29)
  //   .map((e, i) => {
  //     e.child_list.map((e1, i1) => {
  //       e1.post
  //         .filter((data) => {
  //           const match = data.date.match(/\d{4}/);
  //           return match && parseInt(match[0], 10) === 2023;
  //         })
  //         .map((e2, i2) => {
  //           actuals_college.push(
  //             <li key={i2}>
  //               {e2.student}
  //               {e2.title && <span>（{e2.title}）</span>}
  //             </li>
  //           );
  //         });
  //     });
  //   });

  // const actuals = [
  //   {
  //     id: 1,
  //     title: "英検合格実績",
  //     subtitle: "過去1年間（2022年第3回〜2023年第2回）",
  //     content: [
  //       <div className={css_index.row_box}>
  //         <h5>1級（8名）</h5>
  //         <ul>
  //           <li>横浜市立日吉台西中学校 1年</li>
  //           <li>フェリス女学院高校 1年</li>
  //           <li>桜蔭学園高校 1年</li>
  //           <li>慶応義塾高校 3年</li>
  //         </ul>
  //       </div>,
  //       <div className={css_index.row_box}>
  //         <h5>準1級（15名）</h5>
  //         <ul>
  //           <li>雙葉学園小学校 6年</li>
  //           <li>田園調布雙葉中学校 3年</li>
  //         </ul>
  //       </div>,
  //     ],
  //     modalContent: [
  //       <div className={css_index.row_box}>
  //         <h5>1級（8名）</h5>
  //         <ul>
  //           <li>横浜市立日吉台西中学校 1年</li>
  //           <li>フェリス女学院高校 1年</li>
  //           <li>桜蔭学園高校 1年</li>
  //           <li>慶応義塾高校 3年</li>
  //           <li>慶應大学 3年</li>
  //           <li>システムエンジニア</li>
  //           <li>外資系法人勤務</li>
  //           <li>英語講師</li>
  //         </ul>
  //       </div>,
  //       <div className={css_index.row_box}>
  //         <h5>準1級（15名）</h5>
  //         <ul>
  //           <li>雙葉学園小学校 6年</li>
  //           <li>田園調布雙葉中学校 3年</li>
  //           <li>慶応湘南藤沢高等部 1年</li>
  //           <li>神奈川県立神奈川総合高校 2年</li>
  //           <li>カリタス女子高校 2年</li>
  //           <li>横浜雙葉高校 2年</li>
  //           <li>武相高校 2年</li>
  //           <li>東洋英和女学院高等部 2年</li>
  //           <li>実践女子学園高校 2年</li>
  //           <li>東京都立国際高校 2年</li>
  //           <li>法政大学第二高校 2年</li>
  //           <li>青陵高校 3年</li>
  //           <li>山手学院高校 3年</li>
  //           <li>東京女学館高校 3年</li>
  //           <li>桐蔭学園高校 卒</li>
  //         </ul>
  //       </div>,
  //       <div className={css_index.row_box}>
  //         <h5>2級（36名）</h5>
  //         <ul>
  //           <li>サレジアン国際学園世田谷中学校 2年</li>
  //           <li>慶応普通部 3年</li>
  //           <li>学習院中等科 3年</li>
  //           <li>清泉女学院中学校 3年</li>
  //           <li>白百合学園中学校 3年</li>
  //           <li>神奈川県立希望ヶ丘高校 1年</li>
  //           <li>田園調布学園高等部 1年</li>
  //           <li>足洗学園高校 1年</li>
  //           <li>横浜共立学園高校 1年</li>
  //           <li>東京都立小山台高校 1年</li>
  //           <li>サレジオ学院高校 2年</li>
  //           <li>慶応湘南藤沢高等部 3年</li>
  //           <li>サレジアン国際学園世田谷高校 2年</li>
  //           <li>神奈川学園高校 3年</li>
  //           <li>立教女学院高校 3年</li>
  //           <li>白鸚女子高校 3年</li>
  //           <li>文教大学附属高校 3年</li>
  //           <li>清泉女学院高校</li>
  //           <li>捜真女学校高等部 3年</li>
  //           <li>青陵高校 卒</li>
  //           <li>青山学院 1年 他</li>
  //         </ul>
  //       </div>,
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "2023年大学合格実績",
  //     subtitle: "",
  //     content: [
  //       <div className={css_index.row_box}>
  //         <h5>2023年大学合格実績</h5>
  //         <ul>
  //           <li>東京大学 理科Ⅱ類 合格（開成高校）</li>
  //           <li>東京工業大学 生命理工学院 合格（麻布高校）</li>
  //           <li>一橋大学 法学部 合格（豊島岡女子高校）</li>
  //           <li>横浜国立大学 理工学部 合格（桐光学園高校）</li>
  //         </ul>
  //       </div>,
  //       <div className={css_index.row_box}>
  //         <h5>内進を含む主な合格大学</h5>
  //         <ul>
  //           <li>慶応大学 合格（10名）</li>
  //           <li>早稲田大学 合格（2名）</li>
  //         </ul>
  //       </div>,
  //     ],
  //     modalContent: [
  //       <div className={css_index.row_box}>
  //         <h5>2023年大学合格実績</h5>
  //         <ul>{actuals_college}</ul>
  //       </div>,
  //       <div className={css_index.row_box}>
  //         <h5>内進を含む主な合格大学</h5>
  //         <ul>
  //           <li>慶応大学 合格（10名）</li>
  //           <li>早稲田大学 合格（2名）</li>
  //           <li>青山学院大学 合格（2名）</li>
  //           <li>立命館アジア太平洋大学 合格（2名）</li>
  //           <li>関西外国語大学 合格（2名）</li>
  //           <li>津田塾大学 合格（2名）</li>
  //           <li>東京大学 合格（1名）</li>
  //           <li>明治大学 合格（1名）</li>
  //           <li>日本大学 合格（1名）</li>
  //           <li>東京工業大学 合格（1名）</li>
  //           <li>一橋大学 合格（1名）</li>
  //           <li>横浜国立大学 合格（1名）</li>
  //           <li>上智大学 合格（1名）</li>
  //           <li>東京理科大学 合格（1名）</li>
  //           <li>北里大学 合格（1名）</li>
  //           <li>日本獣医生命科学大学 合格（1名）</li>
  //           <li>神田外語大学 合格（1名）</li>
  //           <li>東京女子大学 合格（1名）</li>
  //         </ul>
  //       </div>,
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "TOEFL実績",
  //     subtitle: "過去2年間",
  //     content: [
  //       <div className={css_index.row_box}>
  //         <h5>IBT （120点満点）</h5>
  //         <ul>
  //           <li>105 慶応大学2年</li>
  //           <li>102 医師</li>
  //           <li>90 国家公務員</li>
  //           <li>90 慶應義塾高校3年</li>
  //         </ul>
  //       </div>,
  //       <div className={css_index.row_box}>
  //         <h5>ITP （677点満点）</h5>
  //         <ul>
  //           <li>610 慶應大学3年</li>
  //           <li>601 横浜国立大学3年</li>
  //         </ul>
  //       </div>,
  //     ],
  //     modalContent: [
  //       <div className={css_index.row_box}>
  //         <h5>IBT （120点満点）</h5>
  //         <ul>
  //           <li>105 慶応大学2年</li>
  //           <li>102 医師</li>
  //           <li>90 国家公務員</li>
  //           <li>90 慶應義塾高校3年</li>
  //         </ul>
  //       </div>,
  //       <div className={css_index.row_box}>
  //         <h5>ITP （677点満点）</h5>
  //         <ul>
  //           <li>610 慶應大学3年</li>
  //           <li>601 横浜国立大学3年</li>
  //         </ul>
  //       </div>,
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "TOEIC実績",
  //     subtitle: "過去2年間",
  //     content: [
  //       <div className={css_index.row_box}>
  //         <h5>TOEIC （990点満点）</h5>
  //         <ul>
  //           <li>985 メーカー勤務</li>
  //           <li>975 IT企業勤務</li>
  //           <li>960 外資系企業勤務</li>
  //           <li>935 慶応大学3年</li>
  //           <li>905 早稲田大学4年</li>
  //           <li>900 塾講師</li>
  //         </ul>
  //       </div>,
  //     ],
  //     modalContent: [
  //       <div className={css_index.row_box}>
  //         <h5>TOEIC （990点満点）</h5>
  //         <ul>
  //           <li>985 メーカー勤務</li>
  //           <li>975 IT企業勤務</li>
  //           <li>960 外資系企業勤務</li>
  //           <li>935 慶応大学3年</li>
  //           <li>905 早稲田大学4年</li>
  //           <li>900 塾講師</li>
  //         </ul>
  //       </div>,
  //     ],
  //   },
  // ];

  return (
    <>
      {/* <Head
        title="英語専門塾 秋谷光子アカデミィ - 英検1級176人合格の圧倒的な実績｜横浜,綱島,自由が丘,田園調布"
        url={`/landing`}
        description="難関大学合格、内部進学、留学、全ての進路を可能にする英語力を育てます。"
        breadcrumb={[["LP", "/landing"]]}
      /> */}
    </>
  );
}

// Page.getLayout = function getLayout(children) {
//   return (
//     <>
//       {/* <Header /> */}
//       {children}
//       {/* <Footer /> */}
//     </>
//   );
// };

// export async function getStaticProps() {
// let experiencesData = await fetch(
//   "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
// ).then((res) => res.json());

// let experiencesPostData = await fetch(
//   "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/results?categories=29"
// ).then((res) => res.json());

// let teacherList = await fetch(
//   "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/teacher?per_page=100"
// ).then((res) => res.json());
// teacherList = teacherList.sort((a, b) => a.infoCount - b.infoCount).reverse();

// const endpoint = "https://yoshikitam.wpx.jp/akitani/graphql";
// const graphQLClient = new GraphQLClient(endpoint);

// const query = gql`
//   {
//     results(
//       where: {
//         categoryId: 29
//         status: PUBLISH
//         orderby: { field: DATE, order: DESC }
//       }
//       first: 10
//     ) {
//       edges {
//         node {
//           excerpt
//           id
//           title
//         }
//       }
//     }
//   }
// `;

// const resultsPostData = await graphQLClient.request(query);

// return {
// props: {
// experiencesData,
// experiencesPostData,
// teacherList,
// resultsPostData: resultsPostData,
// },
// };
// }
