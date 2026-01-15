import Slideshow from "components/widget/RecruitSlideshow"

import css from "./style.module.scss";

export default function RecruitSlideshow() {
    return (
      <section className={css.recruit}>
        <div className={css.recruitImg}>
          <div className={css.bg}>
            <Slideshow
              images={[
                {
                  pc: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide01-e1768460327567.jpg", width: 2449, height: 683, alt: "" },
                  sp: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide01-sp.jpg", width: 750, height: 1000, alt: "" },
                },
                {
                  pc: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide02.jpg", width: 2449, height: 683, alt: "" },
                  sp: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide02-sp.jpg", width: 750, height: 1000, alt: "" },
                },
                {
                  pc: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide03.jpg", width: 2449, height: 683, alt: "" },
                  sp: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide03-sp.jpg", width: 750, height: 1000, alt: "" },
                },
                {
                  pc: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide04.jpg", width: 2449, height: 683, alt: "" },
                  sp: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide04-sp.jpg", width: 750, height: 1000, alt: "" },
                },
                {
                  pc: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide05.jpg", width: 2449, height: 683, alt: "" },
                  sp: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide05-sp.jpg", width: 750, height: 1000, alt: "" },
                },
                {
                  pc: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide06.jpg", width: 2449, height: 683, alt: "" },
                  sp: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide06-sp.jpg", width: 750, height: 1000, alt: "" },
                },
                {
                  pc: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide07.jpg", width: 2449, height: 683, alt: "" },
                  sp: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide07-sp.jpg", width: 750, height: 1000, alt: "" },
                },
                {
                  pc: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide08.jpg", width: 2449, height: 683, alt: "" },
                  sp: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide08-sp.jpg", width: 750, height: 1000, alt: "" },
                },
                {
                  pc: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide09.jpg", width: 2449, height: 683, alt: "" },
                  sp: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide09-sp.jpg", width: 750, height: 1000, alt: "" },
                },
                {
                  pc: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide10.jpg", width: 2449, height: 683, alt: "" },
                  sp: { src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2026/01/RecruitSlide10-sp.jpg", width: 750, height: 1000, alt: "" },
                },
              ]}
              seconds={4}
            />
          </div>
          <div>
            <h2 className={css.messageH2}>
              英検1級
              <wbr />
              累計<span className={css.people}>187</span>名合格
              <br />
              開塾<span>36</span>年
            </h2>
            <h3>確かな成果が生まれる環境で、あなたの指導力を発揮しませんか。</h3>
          </div>
        </div>
      </section>
    );
}