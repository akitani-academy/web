import Slideshow from "components/widget/Slideshow"

import css from "./style.module.scss";

export default function Button() {
    return (
      <section className={css.top}>
        <section className={css.topImg}>
          <div className={css.bg}>
            <Slideshow
              images={[
                {
                  alt: "グループ指導による中高学生の英語受験勉強",
                  src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2023/04/IMG_9211.jpg",
                  width: 2449,
                  height: 682.5,
                },
                {
                  alt: "グループ指導による大学生のTOEIC対策",
                  src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2023/04/IMG_9072-e1682091851624.jpg",
                  width: 2449,
                  height: 682.5,
                },
                {
                  alt: "個人指導による中学生の高校受験対策",
                  src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2022/02/292A1785.jpg",
                  width: 2048,
                  height: 1365,
                },
                {
                  alt: "バイリンガル講師によるグループ指導",
                  src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2023/04/DSC01509-e1682091316377.jpg",
                  width: 2449,
                  height: 682.5,
                },
                {
                  alt: "個人指導による大学生のTOEFL対策",
                  src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2022/02/292A1398.jpg",
                  width: 2048,
                  height: 1365,
                },
                {
                  alt: "グループ指導による中高学生の学校定期テスト対策",
                  src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2023/04/DSC01268のコピー-e1682092128290.jpg",
                  width: 2048,
                  height: 1365,
                },
                {
                  alt: "完全個人指導による高校生の大学受験対策",
                  src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2023/04/DSC00898.jpg",
                  width: 2449,
                  height: 682.5,
                },
                {
                  alt: "オンライン学習による高校生の英検1級対策",
                  src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2023/04/DSC01070-e1682091283865.jpg",
                  width: 2449,
                  height: 682.5,
                },
                {
                  alt: "完全個人指導による中学生の定期テスト対策",
                  src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2022/02/292A1695-e1682140353629.jpg",
                  width: 2449,
                  height: 682.5,
                },
                {
                  alt: "グループ指導による中学生の高校受験対策",
                  src: "https://yoshikitam.wpx.jp/akitani/wp-content/uploads/2023/04/DSC00808.jpg",
                  width: 2449,
                  height: 682.5,
                },
              ]}
              seconds={4}
            />
          </div>
          <div>
            <h2 className={css.messageH2}>
              英検１級 講師
              <wbr />
              42名による
              <wbr />
              圧倒的な
              <wbr />
              英検合格実績
              <br />
              英検１級 合格累計180人
            </h2>
            <h3>
              小学校で3級、
              <wbr />
              中学校で2級、
              <wbr />
              高校で準1級に多数合格。
              <wbr />
              社会人も在籍。
            </h3>
          </div>
        </section>
      </section>
    );
}