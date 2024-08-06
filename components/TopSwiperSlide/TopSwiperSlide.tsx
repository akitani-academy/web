import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import css_index from "styles/index.module.scss";

// カルーセルにする画像のソースをリストにします
const images = ["/dummy/1.jpg", "/dummy/2.jpg", "/dummy/3.jpg"];

export default function SwiperSlider({
  top,
  courseData,
  classtypeData,
  teacherList,
  experiencesData,
}) {
  // TASK: 先生のカードリストのオートスクロールを実装予定
  // let teacherListOdd = teacherList.filter(num => Number(num) % 2 !== 0);
  // let teacherListEven = teacherList.filter(num => Number(num) % 2 === 0);
  console.log(experiencesData);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1} //一度に表示するスライドの数
      pagination={{
        clickable: true,
      }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
      navigation //スライドを前後させるためのボタン、スライドの左右にある
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image
              src={src}
              layout="responsive"
              width={640}
              height={400}
              alt="test_image"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

// export default function SwiperSlider({ data, experiencesData, description }) {
//   console.log(experiencesData);

//   //   let postData = experiencesData[1].child_list[0].post;
//   //   postData.length > 0 && (
//   //     <section className={classNames(css_index.taikenki)}>
//   //       <div className={css_index.inner}>
//   //         <h5>体験記</h5>
//   //         <div className={css_index.scroll}>
//   //           <div className={css_index.space} />
//   //           <ul>
//   //             {postData.map((e, i) => (
//   //               <li key={i}>
//   //                 <Link legacyBehavior href={"/experiences/" + e.id}>
//   //                   <a>
//   //                     <span className={css_index.taikenki_title}>{e.title}</span>
//   //                     <br />
//   //                     <span>{e.student}</span>
//   //                   </a>
//   //                 </Link>
//   //               </li>
//   //             ))}
//   //           </ul>
//   //         </div>
//   //       </div>
//   //       <Link legacyBehavior href={"/experiences"}>
//   //         <a className={css_index.more}>
//   //           <span>もっと見る</span>
//   //         </a>
//   //       </Link>
//   //     </section>
//   //   );

//   //   data.post.length > 0 && (
//   //     <section className={classNames(css_view.taikenki)}>
//   //       <div className={css_view.inner}>
//   //         <h5>体験記</h5>
//   //         <div className={css_view.scroll}>
//   //           <div className={css_view.space} />
//   //           <ul>
//   //             {data.post.map((e, i) => (
//   //               <li key={i}>
//   //                 <Link legacyBehavior href={"/experiences/" + e.id}>
//   //                   <a>
//   //                     <span className={css_view.taikenki_title}>{e.title}</span>
//   //                     <br />
//   //                     <span>{e.student}</span>
//   //                   </a>
//   //                 </Link>
//   //               </li>
//   //             ))}
//   //           </ul>
//   //         </div>
//   //       </div>
//   //       {/* <Link legacyBehavior href={"/experiences"}>
//   //           <a className={css_view.more}>
//   //             <span>もっと見る</span>
//   //           </a>
//   //         </Link> */}
//   //     </section>
//   //   );

//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       slidesPerView={1} //一度に表示するスライドの数
//       pagination={{
//         clickable: true,
//       }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
//       navigation //スライドを前後させるためのボタン、スライドの左右にある
//       loop={true}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//     >
//       {images.map((src: string, index: number) => {
//         return (
//           <SwiperSlide key={`${index}`}>
//             <Image
//               src={src}
//               layout="responsive"
//               width={640}
//               height={400}
//               alt="test_image"
//             />
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// }

export async function getStaticProps() {
  const courseData = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/course?per_page=100"
  ).then((res) => res.json());

  // const classtypeData = await fetch(
  // 	"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/class_type?per_page=100&"
  // ).then((res) => res.json());

  let top = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages/7284"
  ).then((res) => res.json());
  top.feature = Object.values(top.feature);

  let experiencesData = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
  ).then((res) => res.json());

  // console.log(experiencesData)

  // let teacherList = await fetch(
  // 	"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/teacher?per_page=100"
  // ).then((res) => res.json());
  // teacherList = teacherList.sort((a, b) => a.infoCount - b.infoCount).reverse();

  return {
    props: {
      top,
      // experiences: await fetch(
      // 	"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
      // ).then((res) => res.json()),
      courseData: courseData.reverse(),
      // classtypeData: classtypeData.reverse(),
      experiencesData,
      // teacherList
    },
  };
}
