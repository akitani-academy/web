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
                  pc: { src: "/img/recruit/RecruitSlide01.jpg", width: 2449, height: 683, alt: "pc1" },
                  sp: { src: "/img/recruit/RecruitSlide01-sp.jpg", width: 750, height: 1000, alt: "sp1" },
                },
                {
                  pc: { src: "/img/recruit/RecruitSlide02.jpg", width: 2449, height: 683, alt: "pc1" },
                  sp: { src: "/img/recruit/RecruitSlide02-sp.jpg", width: 750, height: 1000, alt: "sp1" },
                },
                {
                  pc: { src: "/img/recruit/RecruitSlide03.jpg", width: 2449, height: 683, alt: "pc1" },
                  sp: { src: "/img/recruit/RecruitSlide03-sp.jpg", width: 750, height: 1000, alt: "sp1" },
                },
                {
                  pc: { src: "/img/recruit/RecruitSlide04.jpg", width: 2449, height: 683, alt: "pc1" },
                  sp: { src: "/img/recruit/RecruitSlide04-sp.jpg", width: 750, height: 1000, alt: "sp1" },
                },
                {
                  pc: { src: "/img/recruit/RecruitSlide05.jpg", width: 2449, height: 683, alt: "pc1" },
                  sp: { src: "/img/recruit/RecruitSlide05-sp.jpg", width: 750, height: 1000, alt: "sp1" },
                },
                {
                  pc: { src: "/img/recruit/RecruitSlide06.jpg", width: 2449, height: 683, alt: "pc1" },
                  sp: { src: "/img/recruit/RecruitSlide06-sp.jpg", width: 750, height: 1000, alt: "sp1" },
                },
                {
                  pc: { src: "/img/recruit/RecruitSlide07.jpg", width: 2449, height: 683, alt: "pc1" },
                  sp: { src: "/img/recruit/RecruitSlide07-sp.jpg", width: 750, height: 1000, alt: "sp1" },
                },
                {
                  pc: { src: "/img/recruit/RecruitSlide08.jpg", width: 2449, height: 683, alt: "pc1" },
                  sp: { src: "/img/recruit/RecruitSlide08-sp.jpg", width: 750, height: 1000, alt: "sp1" },
                },
                {
                  pc: { src: "/img/recruit/RecruitSlide09.jpg", width: 2449, height: 683, alt: "pc1" },
                  sp: { src: "/img/recruit/RecruitSlide09-sp.jpg", width: 750, height: 1000, alt: "sp1" },
                },
                {
                  pc: { src: "/img/recruit/RecruitSlide10.jpg", width: 2449, height: 683, alt: "pc1" },
                  sp: { src: "/img/recruit/RecruitSlide10-sp.jpg", width: 750, height: 1000, alt: "sp1" },
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