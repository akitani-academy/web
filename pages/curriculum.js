import Layout from "components/layout";
import Head from "components/head";

// 既存のスタイルが書かれたSCSSを読み込む（ファイル名は環境に合わせてください）
import css from "styles/curriculum.module.scss";

export default function Page() {
    return (
        <>
            <Head
                url={"/curriculum"}
                title={"レベル別カリキュラム紹介"}
                breadcrumb={[
                    ["トップページ", "/"],
                    ["レベル別カリキュラム紹介", "/curriculum"],
                ]}
            />

            <main className={css.main}>
                <div className={css.main__inner}>
                    {/* ==========================================
                        1. 導入セクション（既存の .box と .lead_text を活用）
                    ========================================== */}
                    <div className={css.box}>
                        <h2 className={css.h2}>
                            <div className={css.title}>
                                レベル別カリキュラム紹介
                            </div>
                        </h2>
                        <article className={css.lead_text}>
                            {/* 既存SCSSの .lead_text > span > p に適合させます */}
                            <span>
                                <p>
                                    ①基礎力をつけたい小学生～学校の成績を上げたい中学・高校生
                                </p>
                                <p>
                                    ②医学部受験や最難関大学を始めとする大学や大学院受験
                                </p>
                                <p>③英検</p>
                                <p>④TOEFL・IELTS等の留学対策</p>
                                <p>⑤TOEIC・TOEIC Bridge・TEAP・GTEC等</p>
                                <p>
                                    秋谷光子アカデミィでは、すべての英語指導で実績を残しています。
                                </p>
                            </span>
                        </article>
                    </div>

                    {/* ==========================================
                        2. 社会人 セクション
                    ========================================== */}
                    <div className={css.box}>
                        <h2 className={css.h2_2}>
                            <div className={css.title}>社会人</div>
                        </h2>
                        <div className={css.card_list}>
                            <div className={css.card}>
                                <div className={css.card__left}>
                                    <h3 className={css.card__name}>英検</h3>
                                    <span className={css.card__badge}>
                                        各級1〜3名
                                    </span>
                                </div>
                                <div className={css.card__right}>
                                    <p>
                                        秋谷アカデミィでは、求められるスキルを各級毎に細分化してマスターし、英検1級も毎年10名以上の方が合格しています。スピーキングとライティングにシミュレーションと添削を重ねることで、多くの方が適格な指導を得ています。
                                    </p>
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.card__left}>
                                    <h3 className={css.card__name}>TOEIC</h3>
                                    <span className={css.card__badge}>
                                        TOEIC 500〜990
                                    </span>
                                </div>
                                <div className={css.card__right}>
                                    <p>
                                        目標スコアに応じて(500・600・730・850以上)細かくクラス分けし、各教室の出題傾向から、スコアアップに必要な受験スキル・解答テクニックまで指導いたします。リスニング・リーディングそれぞれの出題傾向を、パートごとに対策指導し、スコアアップにつなげます。
                                    </p>
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.card__left}>
                                    <h3 className={css.card__name}>
                                        TOEFL
                                        <br />
                                        IELTS
                                    </h3>
                                    <span className={css.card__badge}>
                                        TOEFL 40〜120
                                        <br />
                                        IELTS 4〜8.5
                                    </span>
                                </div>
                                <div className={css.card__right}>
                                    <p>
                                        初めて受験する方から、さらにスコアアップを目指す方まで、レベルに応じて4技能を網羅した対策指導をいたします。特に苦手な方が多いスピーキングとライティングは、多くの課題をこなすことで実践力をつけ、ネイティブ講師が質問に応じた答え方を指導して、目標以上のスコアを取得しています。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==========================================
                        3. 大学受験・高校生 セクション
                    ========================================== */}
                    <div className={css.box}>
                        <h2 className={css.h2_2}>
                            <div className={css.title}>大学受験・高校生</div>
                        </h2>
                        <div className={css.card_list}>
                            <div className={css.card}>
                                <div className={css.card__left}>
                                    <h3 className={css.card__name}>
                                        大学受験生
                                        <br />
                                        高3生
                                    </h3>
                                    <span className={css.card__badge}>
                                        2名〜1名
                                        <br />
                                        IELTS GTEC TEAP
                                        <br />
                                        TOEIC・TOEIC Bridge
                                        <br />
                                        TOEFL
                                    </span>
                                </div>
                                <div className={css.card__right}>
                                    <p>
                                        大学入学共通テストや各大学の個別試験等、独自と頂ける受験形態に完璧な対策指導を致します。共通テストはリーディングの単語数が更に増加して長文化し、リスニングは1回読みで解答が求められます。読解に必ず必要な構成力をつけて、長文読解、リスニング特訓、英作文や小論文の指導を重ねて自信を確実な力にして、学校推薦や総合型選抜対策も万全で、今年も第一志望校に85％以上が合格。
                                    </p>
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.card__left}>
                                    <h3 className={css.card__name}>高2生</h3>
                                    <span className={css.card__badge}>
                                        2名〜1名
                                        <br />
                                        IELTS GTEC TEAP
                                        <br />
                                        TOEIC・TOEIC Bridge
                                        <br />
                                        TOEFL
                                    </span>
                                </div>
                                <div className={css.card__right}>
                                    <p>
                                        単語・熟語・文法の力をつけながら、多読と精読両面からアプローチして正確に早く読解できるようにします。英語の土台となる長文読解力をつけてリスニング力も伸ばし、英作文は添削指導を重ねて実践し絶大訳で大学受験の土台を作っていきます。
                                    </p>
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.card__left}>
                                    <h3 className={css.card__name}>高1生</h3>
                                    <span className={css.card__badge}>
                                        2名〜1名
                                        <br />
                                        IELTS GTEC TEAP
                                        <br />
                                        TOEIC・TOEIC Bridge
                                        <br />
                                        TOEFL
                                    </span>
                                </div>
                                <div className={css.card__right}>
                                    <p>
                                        高校生の英語は文章一文一文が長く複雑・多量・スピーキング・英作文・英会話のアプローチに分かれます。学習目的と習熟度に合わせたカリキュラムで、手厚くきめ細かくサポートを徹底し、新形式の大学入試に対応した力をつけていきます。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==========================================
                        4. 中学生 セクション
                    ========================================== */}
                    <div className={css.box}>
                        <h2 className={css.h2_2}>
                            <div className={css.title}>中学生</div>
                        </h2>

                        <div className={css.grade_boxes}>
                            <div className={css.grade_box}>
                                <h4 className={css.grade_box__title}>中1生</h4>
                                <p className={css.grade_box__desc}>
                                    導入〜準2級
                                    <br />
                                    GTEC
                                </p>
                            </div>
                            <div className={css.grade_box}>
                                <h4 className={css.grade_box__title}>中2生</h4>
                                <p className={css.grade_box__desc}>
                                    3級〜準1級
                                    <br />
                                    GTEC
                                </p>
                            </div>
                            <div className={css.grade_box}>
                                <h4 className={css.grade_box__title}>
                                    高校受験生
                                    <br />
                                    中3生
                                </h4>
                                <p className={css.grade_box__desc}>
                                    2級〜1級
                                    <br />
                                    GTEC
                                    <br />
                                    TOEIC Bridge
                                    <br />
                                    TOEFL
                                </p>
                            </div>
                        </div>

                        <p className={css.section__desc}>
                            中学生向けのカリキュラムでは、学習を一人一人の目標・学力状況に合わせて、様々なコースをご用意しています。
                        </p>

                        <div className={css.course_list}>
                            <div className={css.course_item}>
                                <div className={css.course_item__name}>
                                    アドバンス
                                    <br className={css.pc} />
                                    コース
                                </div>
                                <div className={css.course_item__text}>
                                    中3生までに英検2級以上・難関大学合格以上のレベルまでをマスターし、確固たる基礎学力の定着を目指す、英語スーパーエリート養成コース。
                                </div>
                            </div>
                            <div className={css.course_item}>
                                <div className={css.course_item__name}>
                                    ベーシック
                                    <br className={css.pc} />
                                    コース
                                </div>
                                <div className={css.course_item__text}>
                                    学校の定期テストアップを中心目的で、トレジャー・プログレス等の教科書を完璧にマスターし、中3までの高校受験合格を決定します。
                                </div>
                            </div>
                            <div className={css.course_item}>
                                <div className={css.course_item__name}>
                                    リーディング
                                </div>
                                <div className={css.course_item__text}>
                                    高校基礎文法までを完璧にマスターし、多読と精読両面で読解力の基礎を築きます。
                                </div>
                            </div>
                            <div className={css.course_item}>
                                <div className={css.course_item__name}>
                                    ライティング
                                </div>
                                <div className={css.course_item__text}>
                                    マスターした文法と構文を使って、より自然な英作文ができるよう徹底指導します。
                                </div>
                            </div>
                            <div className={css.course_item}>
                                <div className={css.course_item__name}>
                                    リスニング
                                </div>
                                <div className={css.course_item__text}>
                                    音と意味の理解をネイティブの発音と速度で鍛え、「正しい発音」に聞き取り、理解できるようにします。
                                </div>
                            </div>
                            <div className={css.course_item}>
                                <div className={css.course_item__name}>
                                    スピーキング
                                </div>
                                <div className={css.course_item__text}>
                                    簡単な単語や単文から話し始めて、状況に応じて言い換えて話せるようにトレーニングしていきます。
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==========================================
                        5. 小学生 セクション
                    ========================================== */}
                    <div className={css.box}>
                        <h2 className={css.h2_2}>
                            <div className={css.title}>小学生</div>
                        </h2>
                        <div className={css.card_list}>
                            <div className={css.card}>
                                <div className={css.card__left}>
                                    <h3 className={css.card__name}>
                                        小4・5・6生
                                    </h3>
                                    <span className={css.card__badge}>
                                        導入〜準2級
                                    </span>
                                </div>
                                <div className={css.card__right}>
                                    <p>
                                        小学生でも、英語の授業時間が増えるにつれ、より高度な英語力が求められるようになっています。ネイティブ講師とバイリンガル講師の連携で、読む・書く・聞く・話す力を総合的につけ、英検の合格級も上げて中学英語に備えます。帰国枠受験にも対応。
                                    </p>
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.card__left}>
                                    <h3 className={css.card__name}>
                                        小1・2・3生
                                        <br />
                                        Kids 英会話
                                    </h3>
                                    <span className={css.card__badge}>
                                        導入〜3級
                                    </span>
                                </div>
                                <div className={css.card__right}>
                                    <p>
                                        ABCの習得から、スペリングと音との関係をフォニックスでマスターし、初めて見るスペルも発音でき、初めて聞いた発音もスペルアウトできるようにしていきます。ネイティブ講師と日本人バイリンガル講師の連携で、英検5級につながる基礎力を視野に、英語で考えて話す英語脳を楽しく育てます。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==========================================
                        6. 各英語試験スコア対比表
                    ========================================== */}
                    <div className={css.box}>
                        <h2 className={css.h2_2}>
                            <div className={css.title}>
                                各英語試験スコア対比表
                            </div>
                        </h2>

                        <div className={css.table_wrapper}>
                            <table className={css.score_table}>
                                {/* ▼ 追加：列の幅を厳密に固定するためのグループ */}
                                <colgroup>
                                    <col className={css.col_base} />{" "}
                                    {/* 1. CEFR */}
                                    <col className={css.col_eiken} />{" "}
                                    {/* 2. 英検 左半分(132px) */}
                                    <col className={css.col_eiken} />{" "}
                                    {/* 3. 英検 右半分(132px) */}
                                    <col className={css.col_base} />{" "}
                                    {/* 4. TOEIC L&R */}
                                    <col className={css.col_base} />{" "}
                                    {/* 5. TOEIC Bridge */}
                                    <col className={css.col_base} />{" "}
                                    {/* 6. TOEFL iBT */}
                                    <col className={css.col_base} />{" "}
                                    {/* 7. TOEFL ITP */}
                                    <col className={css.col_base} />{" "}
                                    {/* 8. TOEFL Junior */}
                                    <col className={css.col_base} />{" "}
                                    {/* 9. IELTS */}
                                    <col className={css.col_base} />{" "}
                                    {/* 10. TEAP */}
                                    <col className={css.col_base} />{" "}
                                    {/* 11. GTEC */}
                                </colgroup>

                                <thead>
                                    <tr>
                                        <th rowSpan="2">
                                            CEFR
                                            <br />
                                            <span>セファール</span>
                                        </th>
                                        <th rowSpan="2" colSpan="2">
                                            英検
                                        </th>
                                        <th
                                            colSpan="2"
                                            className={css.border_dashed_bottom}
                                        >
                                            TOEIC
                                        </th>
                                        <th
                                            colSpan="3"
                                            className={css.border_dashed_bottom}
                                        >
                                            TOEFL
                                        </th>
                                        <th rowSpan="2">
                                            IELTS
                                            <br />
                                            <span>満点9.0</span>
                                        </th>
                                        <th rowSpan="2">
                                            TEAP
                                            <br />
                                            <span>満点400</span>
                                        </th>
                                        <th rowSpan="2">GTEC</th>
                                    </tr>
                                    <tr>
                                        <th
                                            className={`${css.border_dashed_right} ${css.border_none_top}`}
                                        >
                                            L&R
                                            <br />
                                            <span>満点990</span>
                                        </th>
                                        <th className={css.border_none_top}>
                                            Bridge
                                            <br />
                                            <span>満点100</span>
                                        </th>
                                        <th
                                            className={`${css.border_dashed_right} ${css.border_none_top}`}
                                        >
                                            iBT
                                            <br />
                                            <span>満点6.0</span>
                                            <span>(旧スコア満点120)</span>
                                        </th>
                                        <th
                                            className={`${css.border_dashed_right} ${css.border_none_top}`}
                                        >
                                            ITP
                                            <br />
                                            (レベル1)
                                            <br />
                                            <span>満点677</span>
                                        </th>
                                        <th className={css.border_none_top}>
                                            Junior
                                            <br />
                                            <span>満点900</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* C2 */}
                                    <tr>
                                        <td>C2</td>
                                        <td colSpan="2"></td>
                                        <td
                                            className={css.border_dashed_right}
                                        ></td>
                                        <td></td>
                                        <td className={css.border_dashed_right}>
                                            6.0
                                            <br />
                                            <span>(旧114～120)</span>
                                        </td>
                                        <td
                                            className={css.border_dashed_right}
                                        ></td>
                                        <td></td>
                                        <td>8.5〜9.0</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    {/* C1 */}
                                    <tr className={css.bg_gray_row}>
                                        <td>C1</td>
                                        <td colSpan="2">
                                            <span className={css.grade}>
                                                1級
                                            </span>
                                            <br />
                                            <span>2630点以上/3400点満点</span>
                                        </td>
                                        <td className={css.border_dashed_right}>
                                            945〜990
                                        </td>
                                        <td></td>
                                        <td className={css.border_dashed_right}>
                                            5.0〜5.5
                                            <br />
                                            <span>(旧95〜113)</span>
                                        </td>
                                        <td className={css.border_dashed_right}>
                                            620〜677
                                        </td>
                                        <td></td>
                                        <td>7.0〜8.0</td>
                                        <td>375〜400</td>
                                        <td></td>
                                    </tr>
                                    {/* B2 */}
                                    <tr>
                                        <td>B2</td>
                                        <td colSpan="2">
                                            <span className={css.grade}>
                                                準1級
                                            </span>
                                            <br />
                                            <span>2304点以上/3000点満点</span>
                                        </td>
                                        <td className={css.border_dashed_right}>
                                            785〜940
                                        </td>
                                        <td></td>
                                        <td className={css.border_dashed_right}>
                                            4.0～4.5
                                            <br />
                                            <span>(旧72〜94)</span>
                                        </td>
                                        <td className={css.border_dashed_right}>
                                            543〜619
                                        </td>
                                        <td>860〜900</td>
                                        <td>5.5〜6.5</td>
                                        <td>309〜374</td>
                                        <td>
                                            1190〜1280
                                            <br />
                                            <span>Advanced満点1280</span>
                                        </td>
                                    </tr>
                                    {/* B1 */}
                                    <tr className={css.bg_gray_row}>
                                        <td>B1</td>
                                        <td colSpan="2">
                                            <span className={css.grade}>
                                                2級
                                            </span>
                                            <br />
                                            <span>1980点以上/2600点満点</span>
                                        </td>
                                        <td className={css.border_dashed_right}>
                                            550〜780
                                        </td>
                                        <td>84〜100</td>
                                        <td className={css.border_dashed_right}>
                                            3.0～3.5
                                            <br />
                                            <span>(旧44〜71)</span>
                                        </td>
                                        <td className={css.border_dashed_right}>
                                            433〜542
                                        </td>
                                        <td>740〜855</td>
                                        <td>4.0〜5.0</td>
                                        <td>225〜308</td>
                                        <td>
                                            960〜1189
                                            <br />
                                            <span>Basic満点1080</span>
                                        </td>
                                    </tr>
                                    {/* ▼ 追加：A2の行に専用クラスを付与 */}
                                    <tr className={css.row_a2}>
                                        <td>A2</td>
                                        <td className={css.split_inner}>
                                            <span className={css.grade}>
                                                準2級
                                            </span>
                                            <br />
                                            <span>1728点以上/2400点満点</span>
                                        </td>
                                        <td>
                                            <span className={css.grade}>
                                                準2プラス
                                            </span>
                                            <br />
                                            <span>1829点以上/2500点満点</span>
                                        </td>
                                        <td className={css.border_dashed_right}>
                                            225〜545
                                        </td>
                                        <td>60〜83</td>
                                        <td
                                            className={css.border_dashed_right}
                                        ></td>
                                        <td className={css.border_dashed_right}>
                                            343〜432
                                        </td>
                                        <td>630〜735</td>
                                        <td></td>
                                        <td>135〜224</td>
                                        <td>
                                            690〜959
                                            <br />
                                            <span>Core満点840</span>
                                        </td>
                                    </tr>
                                    {/* A1 */}
                                    <tr className={css.bg_gray_row}>
                                        <td>A1</td>
                                        <td colSpan="2">
                                            <span className={css.grade}>
                                                3級
                                            </span>
                                            <br />
                                            <span>1456点以上/2200点満点</span>
                                        </td>
                                        <td className={css.border_dashed_right}>
                                            120〜220
                                        </td>
                                        <td>35〜59</td>
                                        <td
                                            className={css.border_dashed_right}
                                        ></td>
                                        <td
                                            className={css.border_dashed_right}
                                        ></td>
                                        <td>600〜625</td>
                                        <td></td>
                                        <td></td>
                                        <td>270〜689</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={css.table_notes}>
                            <p>
                                文部科学省が発表した情報をもとに秋谷アカデミィが作成。スコアは目安となります。
                            </p>
                            <p>
                                4技能試験（リーディング・リスニング・ライティング・スピーキング）：
                                <br />
                                英検、TOEFL iBT、IELTS、TEAP、GTEC
                            </p>
                            <p>
                                2技能試験（リスニングとリーディングのみ）：
                                <br />
                                TOEIC L&R、TOEIC Bridge
                            </p>
                            <p>
                                3セクション試験（リスニングと文法・語彙とリーディング）：
                                <br />
                                TOEFL ITP、TOEFL Junior
                                <br />
                                (※TOEFL
                                iBTは2026年1月21日より新形式に変更されました。1.0～6.0の0.5刻みのバンドスコアで評価されます。)
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

Page.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
