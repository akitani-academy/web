import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import Image from "next/image";

import Layout from "components/layout";
import Head from "components/head";
import Contact from "components/widget/Contact";
import ContactButton from "components/ContactButton/ContactButton";
import ExperiencesListBox from "components/Experiences/ExperiencesListBox";

import css_global from "styles/global.module.scss";
import css_contact from "styles/contact.module.scss";
import css_news from "styles/news1.module.scss";
export default function Page({ wpDATA, experiencesData }) {
  return (
    <>
      <Head
        url={"/news1"}
        title={wpDATA.title + "｜NEWS"}
        description={wpDATA.summary.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")}
        breadcrumb={[
          ["トップページ", ""],
          [wpDATA.subTitle, "/news1"],
        ]}
      />
      <article className={css_news.card}>
        {/* <div className="thumbnail">
          <Image
            alt={"秋谷光子アカデミィの生徒のの写真"}
            src={wpDATA.thumbnail}
            // width={"400"}
            // height={"300"}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div> */}
        <h1
          // data-subtitle={wpDATA.subTitle}
          dangerouslySetInnerHTML={{
            __html: parser.translateHTMLString(wpDATA.title),
          }}
        />
        <div
          className={css_news.news}
          dangerouslySetInnerHTML={{
            __html: parser.translateHTMLString(wpDATA.content),
          }}
        />

        <div className={css_news.content}>
          <h2>お申し込みまでの流れ</h2>

          <ul className={css_news.flow}>
            <li className={css_news.flow__item}>①当塾までお問い合わせ</li>
            <li className={css_news.flow__item}>②面談の実施</li>
            <li className={css_news.flow__item}>③お申し込み</li>
          </ul>

          <div className={css_news.circle}>
            <p>
              振替受講：夏期特別講習の受講できない分の単元は、下記①②③のいずれかで振替受講できます。
              <br />
              ①補講日（7月21日・28日・8月4日・18日・25日）に受講
              <br />
              ②他のレベルの合流通常授業の講座を振替受講
              <br />
              ③個別指導クラスを受講（月曜日17:00～19:00と19:00～21:00、火曜日17:00～19:00と19:00～21:00）
              <br />
            </p>
            <p>
              （注）①②③のいずれも、2～3日前までに事務室に事前予約をして受講してください
            </p>
          </div>

          <section className={`${css_news.section} ${css_news.section_01}`}>
            <h2>英語総合・受験英語</h2>

            <p>
              文法と読む・書く・聞く・話すをバランスよくマスターして学校の成績を上げ、正確な多読速読力を育て、共通テストや大学受験で、合格できる力をつけていきます。
            </p>

            <div className={css_news.section_01__inner}>
              <h3>中学1年生</h3>

              <p>
                中1の文法が今後の英語力の基礎となります。
                <br />
                現在形・過去形に加えて、中1後半から進行形や未来形の学習も始まります。
                中1文法の最大のテーマである時間関連語を正確にマスターして、仮に、3級合格の基礎固めをいたします。
              </p>

              <h3>中学2年生</h3>

              <p>
                動詞の活用、受動態等、中学英語の重要な文法項目をこの時期にマスターしているかどうかが、今後の英語力を左右します。これまでの復習と中３分野の先取り予習をして文法を確実にし、さらに精読・多読を組み合わせて、３級・準２級合格につなげていきます。
              </p>

              <h3>中3〜高校基礎</h3>

              <p>
                2級・準1級合格の基礎となる仮定法や分詞構文等、高校文法の中でも難解だが重要な文法単元を、多読と精読で集中強調します。
                <br />
                大量の演習問題を解くことで、語いを増強し、速読・リスニング力も強化していきます。
              </p>

              <h3>共通テスト対策　高2・高3生</h3>

              <p>
                過去問や実践形式の模試を数多く解くことによって、共通テストに必須の重要事項をマスターし、対策精度をあげていきます。共通テストは英文量が多いので、精読・多読・速読を鍛えて早く正確に読解できるようにし、リスニングは一回読みの出題にも正確に解答できるようトレーニングしていきます。
              </p>

              <h3>GTEC・TEAP　TOEFL・IELTS TOEIC Bridge</h3>

              <p>
                準2級・2級レベルの力が無理なく高得点が取れるよう、高校英語でマスターすべき項目を確認しながら、比較的トライしやすい問題から導入し、スコアアップにつなげます。
                <br />
                ※個別対応致します。詳しくは事務室までお問い合わせください。
              </p>
            </div>
          </section>

          <section className={`${css_news.section} ${css_news.section_02}`}>
            <h2>英語総合・受験英語</h2>

            <p>
              ・過去問と予想問題を中心に、「読む」「書く」「聞く」「話す」の4技能をバランス良く身につけ、英語でのコミュニケーション能力を高めていきます。自分一人では学習が難しいリスニングも含めて指導します。
            </p>

            <p>
              ・新形式の英作文問題の対策指導をいたします。ライティングは指導効果がとても高いので、満点を目指し、希望の級に合格しましょう。
            </p>

            <div className={css_news.section_01__inner}>
              <h3>英検3級</h3>

              <p>
                一次試験はリーディングとリスニングと、Eメール問題や、自分の意見を50~60語程度で書くライティングを含みます。二次試験ではお店を事にについて話すスピーキングが問われます。英語での発信力が評価されますので、英語で書いて、話す力を強化して、合格につなげます。
                <br />
                ・仮定法
                <br />
                ・不定詞
                <br />
                ・動名詞
                <br />
                ・分詞
                <br />
                ・関係代名詞
                <br />
                ・関係副詞
                <br />
                ・複合関係詞
                <br /> （高1文法範囲）
                <br />
              </p>

              <h3>英検2級</h3>

              <p>
                “GMARCH”レベルの大学受験で、合格点が取れる域ですが、受験勉強が本格的に忙しくなる前の取得を目指しましょう。2級に合格すると、基礎的な事項は確実にマスターしていると評価できるので、TOEFL・TOEICの問題も、より対応しやすくなります。（高2以上の文法範囲）
              </p>

              <h3>英検準1級</h3>

              <p>
                準1級合格は、東大や慶應医学部などの難関大学受験問題でも合格点が取れる域で、大学推薦入試にも大きなアドバンテージとなります。
                <br />
                実作文ライティングは添作成のオリジナル問題も使って高前指導し、多くの方が満点を獲得しています。
              </p>
            </div>
          </section>

          <section className={`${css_news.section} ${css_news.section_03}`}>
            <h2>夏季特別講習受講料（税込）</h2>

            <div className={css_news.section_01__inner}>
              <div className={css_news.table}>
                <table>
                  <thead>
                    <tr>
                      <th>
                        受講
                        <br />
                        クラス
                      </th>
                      <th>
                        中1総合
                        <br />①
                      </th>
                      <th>
                        中2総合
                        <br />②
                      </th>
                      <th>
                        中3総合
                        <br />③
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        受講料
                        <br />
                        （税込）
                      </td>
                      <td>¥19,800</td>
                      <td>¥19,800</td>
                      <td>¥24,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={css_news.table}>
                <table>
                  <thead>
                    <tr>
                      <th>
                        受講
                        <br />
                        クラス
                      </th>
                      <th>
                        英検3級
                        <br />③
                      </th>
                      <th>
                        英検準2級
                        <br />⑤
                      </th>
                      <th>
                        英検2級⑦
                        <br />
                        英検準1級⑧
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        受講料
                        <br />
                        （税込）
                      </td>
                      <td>¥19,800</td>
                      <td>¥24,200</td>
                      <td>¥24,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                ◆Text手配の準備上、受講申込書に記入・押印の上、受講料を添えてできるだけ早く、7月13日（土）までにご提出下さい。
              </p>

              <div className={css_news.link}>
                <a href="/wp-content/uploads/2024/06/%E8%A9%B3%E7%B4%B0%E3%83%BB%E5%8F%97%E8%AC%9B%E6%96%99%E3%83%BB%E7%94%B3%E8%BE%BC%E6%9B%B8.pdf">
                  申込書ダウンロード
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* <ExperiencesListBox
          data={experiencesData}
          button={{
            text: "すべての「 実績と体験記 」をみる",
            link: "/experiences",
          }}
        /> */}
      </article>
      <aside className={css_contact.contact}>
        <Contact short="true" />
      </aside>
      <ContactButton />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  let wpDATA = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?slug=news"
  ).then((res) => res.json());
  wpDATA = wpDATA[0];

  let experiencesData = await fetch(
    "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/categories"
  ).then((res) => res.json());

  return {
    props: {
      wpDATA,
      experiencesData,
    },
  };
}
