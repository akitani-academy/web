// import Layout from "components/layout";
import Header from "components/header";
import Footer from "components/footer";
import Nav from "components/nav";
import Head from "components/head";
import LinkList from "components/widget/LinkList";
import ContactButton from "components/ContactButton/ContactButton";
// import RecruitSlideshow from "components/RecruitSlideshow/RecruitSlideshow";
import RecruitSlideshow from "components/RecruitSlideshow/RecruitSlideshow";
import RecruitSwiper from "components/RecruitSwiper/RecruitSwiper";
import RecruitClassRoom from "components/RecruitClassRoom/RecruitClassRoom";
import RecruitTabs from "components/RecruitTabs/RecruitTabs";
import Link from "next/link";
const _V = require("components/_V.js");

import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

import css from "styles/recruit.module.scss";

export default function Page({ wpDATA, faq }) {
    return (
        <>
            <Head
                url={"/recruit"}
                title={wpDATA.subTitle}
                breadcrumb={[
                    ["トップページ", ""],
                    [wpDATA.subTitle, "/recruit"],
                ]}
            />

            <RecruitSlideshow />

            <main className={css.main}>
                <div className={css.main__inner}>
                    <div className={`${css.box} ${css.recruit}`}>
                        <h2 className={css.h2}>
                            <div className={css.subTitle}>RECRUIT</div>
                            <div className={css.title}>
                                英語専門塾 秋谷光子アカデミィ
                                <span>採用情報</span>
                            </div>
                        </h2>
                        <article
                            className={css.lead_text}
                            dangerouslySetInnerHTML={{
                                __html: parser.translateHTMLString(
                                    "<p>" + wpDATA.cfs.donyu + "</p>"
                                ),
                            }}
                        />
                        <div className={css.link_list}>
                            <LinkList
                                data={[
                                    ["英語講師", "#0"],
                                    ["事務運営スタッフ", "#1"],
                                ]}
                            />
                        </div>
                    </div>
                    <div className={`${css.box} ${css.overview}`}>
                        <h2 className={css.h2_2}>
                            <div className={css.subTitle}>OVERVIEW</div>
                            <div className={css.title}>
                                <span className={css.title__inner}>
                                    秋谷光子アカデミィの特徴・勤務環境
                                </span>
                            </div>
                        </h2>
                        <div className={css.box__text}>
                            <p>
                                秋谷光子アカデミィは、学校で習う英語を完璧にマスターして、国際社会で通用する正統な実用英語にまで高めること、
                                学校英語と実用英語の融合を教育理念としています。
                            </p>
                            <p>
                                小・中・高校生の英語指導はもとより、大学生や社会人への指導も行い、
                                受験英語・英検・TOEIC・TOEFL・IELTS・SLEP
                                等各英語資格試験の実績も伸ばし続けています。
                            </p>
                            <p>
                                文法・構文・読解・速読・Listening・Speaking・英会話の英語教育に、情熱を持って真剣に取り組んでくださる講師を募集しています。
                            </p>
                        </div>
                        <div className={css.box__text}>
                            <h3>
                                あなたのライフスタイルに合わせて
                                <br className={css.tab} />
                                勤務できます
                            </h3>
                            <p>
                                英語教育に情熱を持つ講師を募集しております。
                                <br />
                                勤務時間はあなたのライフスタイルに合わせてご相談させていただきますので、
                                短い勤務時間から、徐々に広げて行くことも可能です。
                                <br />
                                ・得意な英語力を生かして自己実現したい方
                                <br />
                                ・英語力に自信は有るが教えた経験が無い方
                                <br />
                                ・元英語教師の方
                                <br />
                                ・海外生活が長く、さらに英語力を磨きたい方
                                <br />
                                など、幅広く募集しています。
                                <br />
                                当アカデミィで英語指導の研修を受け、
                                指導しながら英検1級・TOEIC930以上を取得なさった講師の方も多数いらっしゃいます。
                                <br />
                                あなたの英語力UPにもお役に立ちたいと思っております。
                            </p>
                            <p>
                                また、30代以上の講師・事務運営スタッフが多く活躍し、未経験の方でも無理なく、
                                教材製作などからお教えします。除々に慣れていって下さい。
                                長期勤務できる方を優遇します。
                            </p>
                        </div>
                    </div>
                    <div className={`${css.box} ${css.box_2}`}>
                        <h2 className={css.h2_2}>
                            <div className={css.subTitle}>
                                <span className={css.eng}>TEACHER</span>
                                <span>研修制度あり</span>
                                <span>1講座OK</span>
                                <span>個別指導または少人数指導</span>
                            </div>
                            <div className={css.title}>
                                <span className={css.title__inner}>
                                    英語講師
                                </span>
                            </div>
                        </h2>
                        <img src="/img/recruit/teacher.png" />
                        <div className={css.box__text}>
                            <p>
                                基礎英語から難関大学受験英語、英語資格まで、
                                <br className={css.pc} />
                                文法・構文・読解を重視した英語指導の講師業務と、
                                <br className={css.pc} />
                                学習プランの立案や講師のマネジメントなど、室長候補としての業務です。
                                <br />
                                ※土・夜間に勤務できる方は、特に優遇いたします。
                            </p>
                        </div>
                        <div className={css.box__text}>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_01.png" />
                                    業務内容
                                </h3>
                                <p>
                                    小学生～社会人を対象とする、文法・構文・読解を重視した英語指導。
                                    オンラインでの指導もあります。
                                    <br />
                                    ・個別指導（1対1）
                                    <br />
                                    ・少人数グループ指導（6名未満）
                                    <br />
                                    ・小学生向児童英語から、難関大学受験英語など学校英語の指導。
                                    <br />
                                    ・英検5級～英検1級合格までの指導（2級合格以上の生徒の割合が多い）
                                    <br />
                                    ・TOEICスコア別対策指導（800点以上のスコアを持つ生徒も多数通塾中）
                                    <br />
                                    ・TOEFLiBT・PBT・ITPのスコア別対策指導
                                    <br />
                                    二校舎ともに、塾長や室長・事務スタッフが常駐しているので、授業以外の業務に忙殺されることなく、生徒に直接教えること（＝授業）に専念できる環境です。
                                    <br />
                                    英会話指導できる方優遇あり。
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_02.png" />
                                    勤務地
                                </h3>
                                <p>
                                    英語専門塾 秋谷光子アカデミィ
                                    <br />
                                    <br className={css.tab} />
                                    神奈川 ／ 綱島本部校（東急東横線
                                    綱島駅から徒歩1～2分）
                                    <br />
                                    <br className={css.tab} />
                                    東京都 ／ 田園調布校（東急東横線
                                    田園調布駅から徒歩1～2分）
                                    <br />
                                    上記の内、ご希望を考慮し、面談の上決定します。
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_03.png" />
                                    応募資格
                                </h3>
                                <p>
                                    4年制大学卒業以上
                                    <br />
                                    英検準1級・TOEIC850・TOEFL iBT80以上
                                    <br />
                                    またはそれと同等以上の資格をお持ちの方
                                    <br />
                                    ※30代・40代の方が多く活躍しています
                                    <br />
                                    ※勤務開始日は応相談
                                    <br />
                                    ※長期働ける方、土曜・日曜働ける方歓迎
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_04.png" />
                                    勤務日・時間
                                </h3>
                                <p>曜日・時間はご相談ください。</p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_05.png" />
                                    交通費
                                </h3>
                                <p>全額支給</p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_06.png" />
                                    給与
                                </h3>
                                <h4>常勤英語講師 正社員</h4>
                                <p>能力、経験を考慮の上決定します。</p>
                                <h4>非常勤英語講師 アルバイト</h4>
                                <p>要相談</p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_07.png" />
                                    福利厚生・休暇・その他
                                </h3>
                                <p>
                                    昇給・賞与あり、社会保険あり。
                                    <br />
                                    夏季・冬季・GoldenWeek休暇　各1週間
                                    <br />
                                    場合により期間が異なりますが、通常3ヶ月程度の研修期間がございます。
                                    <br />
                                    研修期間中の給与は変わりません。
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_08.png" />
                                    応募方法
                                </h3>
                                <p>
                                    045-544-6756（採用係）まで、お気軽にお電話ください。
                                </p>
                            </div>
                        </div>
                        <div className={css.link}>
                            <Link href={"tel:045-544-6756"}>
                                <div className={css.button}>
                                    <div className={css.icon}>
                                        <img src="/img/recruit/tel.svg" />
                                    </div>
                                    <div className={css.text}>
                                        <strong>講師応募・お問い合わせ</strong>
                                        <small>TEL : 045-544-6756</small>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={`${css.box} ${css.box_2}`}>
                        <h2 className={css.h2_2}>
                            <div className={css.subTitle}>
                                <span className={css.eng}>STAFF</span>
                                <span>研修制度あり</span>
                                <span>シフト制</span>
                                <span>正社員登用あり</span>
                                <span>事務職</span>
                            </div>
                            <div className={css.title}>
                                <span className={css.title__inner}>
                                    運営・事務スタッフ（正社員・パート）
                                </span>
                            </div>
                        </h2>
                        <img src="/img/recruit/staff.png" />
                        <div className={css.box__text}>
                            <p>
                                教材の手配や生徒・保護者対応、スケジュール管理など、
                                <br />
                                教室の管理・運営事務の仕事をしていただきます。
                                <br />
                                業務上英語力が必要になりますので、英検2級以上の方を求めます。
                                <br />
                                ※土・夜間に勤務できる方は、特に優遇いたします。
                            </p>
                        </div>
                        <div className={css.box__text}>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_01.png" />
                                    業務内容
                                </h3>
                                <p>
                                    教室の管理・運営事務全般を担う仕事です。
                                    <br />
                                    生徒一人一人の英語力を基に組み立てられた教育プログラムに合わせて、教材を手配・準備し、
                                    講師と生徒の間に入って調整する仕事です。
                                    <br />
                                    様々なイベントの企画・運営、来校者・保護者への対応、講師のスケジュール調整・管理もしていただきます。
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_02.png" />
                                    勤務地
                                </h3>
                                <p>
                                    英語専門塾 秋谷光子アカデミィ
                                    <br />
                                    <br className={css.tab} />
                                    神奈川 ／ 綱島本部校（東急東横線
                                    綱島駅から徒歩1～2分）
                                    <br />
                                    <br className={css.tab} />
                                    東京都 ／ 田園調布校（東急東横線
                                    田園調布駅から徒歩1～2分）
                                    <br />
                                    上記の内、ご希望を考慮し、面談の上決定します。
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_03.png" />
                                    応募資格
                                </h3>
                                <p>
                                    4年制大学卒業以上
                                    <br />
                                    英検2級以上
                                    <br />
                                    パソコンができる方
                                    <br />
                                    ※30代・40代の方が多く活躍しています
                                    <br />
                                    ※勤務開始日は応相談
                                    <br />
                                    ※長期働ける方歓迎
                                    <br />
                                    ※学生不可（大学卒業後、再入学の方は可）
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_06.png" />
                                    給与
                                </h3>
                                <h4>正社員</h4>
                                <p>
                                    月給
                                    24万円以上（研修期間は21万円以上、週5日勤務想定）
                                    <br />
                                    昇給あり、賞与年2回
                                </p>
                                <h4>パート</h4>
                                <p>
                                    時給 1,700円以上（研修期間は1,500円以上）
                                    <br />
                                    昇給あり
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_04.png" />
                                    勤務日・時間
                                </h3>
                                <h4>正社員</h4>
                                <p>
                                    平日　15：00～21：30　完全終業
                                    <br />
                                    土　　10：00～21：30の内7時間（3シフト制）
                                    <br />
                                    土曜日を含む週5日
                                </p>
                                <h4>パート</h4>
                                <p>
                                    平日　15：00～21：15　完全終業
                                    <br />
                                    土　　15：00～21：15　完全終業
                                    <br />
                                    土曜日を含む週4日ほど働ける方
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_05.png" />
                                    交通費
                                </h3>
                                <p>全額支給</p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_07.png" />
                                    福利厚生・休暇・その他
                                </h3>
                                <p>
                                    正社員は社会保険あり、夏季・冬季・GoldenWeek休暇　各1週間
                                    <br />
                                    正社員登用制度あり
                                    <br />
                                    場合により期間が異なりますが、通常3ヶ月程度の研修期間がございます。
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <img src="/img/recruit/detail_icon_08.png" />
                                    応募方法
                                </h3>
                                <p>
                                    045-544-6756（採用係）まで、お気軽にお電話ください。
                                </p>
                            </div>
                        </div>
                        <div className={css.link}>
                            <Link href={"tel:045-544-6756"}>
                                <div className={css.button}>
                                    <div className={css.icon}>
                                        <img src="/img/recruit/tel.svg" />
                                    </div>
                                    <div className={css.text}>
                                        <strong>事務応募・お問い合わせ</strong>
                                        <small>TEL : 045-544-6756</small>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={`${css.box} ${css.message}`}>
                        <h2 className={css.h2_2}>
                            <div className={css.subTitle}>MASSAGE</div>
                            <div className={css.title}>
                                <span className={css.title__inner}>
                                    塾長メッセージ
                                </span>
                            </div>
                        </h2>
                        <div className={css.row}>
                            <figure>
                                <picture>
                                    <source
                                        srcSet="/img/recruit/principal-sp.png"
                                        media="(max-width:960px)"
                                    />
                                    <img
                                        src="/img/recruit/principal.png"
                                        alt=""
                                    />
                                </picture>
                            </figure>
                            <div className={css.row__item}>
                                <div className={css.box__text}>
                                    <h3>
                                        <div className={css.subTitle}>塾長</div>
                                        <div className={css.title}>
                                            <span className={css.title__inner}>
                                                秋谷 光子
                                            </span>
                                        </div>
                                    </h3>
                                </div>
                                <div className={css.box__text}>
                                    <p>
                                        秋谷アカデミィは1987年4月の開塾以来、学校で学ぶ英語を確かな土台として、国際社会で通用する正当な実用英語へと高めることを使命としてまいりました。
                                        <br />
                                        学校英語と実用英語の融合を軸に、文法的正確さと豊かな運用力を両立させ、読む・書く・聞く・話す四技能を偏りなく伸ばす指導を行っています。
                                        <br />
                                        この教育理念に共感し、生徒一人ひとりと誠実に向き合い、その成長と成果に責任を持って伴走してくださる先生を、心よりお迎えしたいと考えております。社会で自立して生きるための「使える英語」を共に育てていただければ幸いです。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${css.box} ${css.staff}`}>
                        <h2 className={css.h2_2}>
                            <div className={css.subTitle}>VOICES</div>
                            <div className={css.title}>
                                <span className={css.title__inner}>
                                    スタッフの声
                                </span>
                            </div>
                        </h2>
                        <RecruitSwiper />
                    </div>
                    <div className={`${css.box} ${css.flow}`}>
                        <h2 className={css.h2_2}>
                            <div className={css.subTitle}>FLOW</div>
                            <div className={css.title}>
                                <span className={css.title__inner}>
                                    選考フロー
                                </span>
                            </div>
                        </h2>
                        <div className={`${css.box__text} ${css.read}`}>
                            <p>
                                秋谷光子アカデミィの採用は、書類選考と面接を中心としたシンプルなフローです。英語力やご経験だけでなく、「生徒と誠実に向き合えるか」「一緒に教室づくりができるか」という姿勢を大切にしています。
                                <br />
                                面接では、これまでの学び方や指導へのお考えをじっくり伺い、お互いにミスマッチがないかを確認していきます。
                                <br />
                                ご不明点があれば、どのステップでも遠慮なくお問い合わせください。
                            </p>
                        </div>
                        <div className={css.box__text}>
                            <div className={css.row}>
                                <h3>
                                    <div className={css.subTitle}>STEP 1</div>
                                    <div className={css.title}>
                                        <span className={css.title__inner}>
                                            エントリー
                                        </span>
                                    </div>
                                </h3>
                                <div className={css.img}>
                                    <img src="/img/recruit/step_icon_01.png" />
                                </div>
                                <p>
                                    面接をご希望の方は、採用担当までお気軽にお電話ください。
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <div className={css.subTitle}>STEP 2</div>
                                    <div className={css.title}>
                                        <span className={css.title__inner}>
                                            書類送付
                                        </span>
                                    </div>
                                </h3>
                                <div className={css.img}>
                                    <img src="/img/recruit/step_icon_02.png" />
                                </div>
                                <p>
                                    履歴書・英語資格の 証明書コピーを
                                    ご送付ください。
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <div className={css.subTitle}>STEP 3</div>
                                    <div className={css.title}>
                                        <span className={css.title__inner}>
                                            面接
                                        </span>
                                    </div>
                                </h3>
                                <div className={css.img}>
                                    <img src="/img/recruit/step_icon_03.png" />
                                </div>
                                <p>
                                    教室にお越しいただき、
                                    <br className={css.sp} />
                                    これまでのご経験や
                                    <br className={css.sp} />
                                    ご希望の働き方をお伺いします。
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <div className={css.subTitle}>STEP 4</div>
                                    <div className={css.title}>
                                        <span className={css.title__inner}>
                                            初回研修
                                        </span>
                                    </div>
                                </h3>
                                <div className={css.img}>
                                    <img src="/img/recruit/step_icon_04.png" />
                                </div>
                                <p>
                                    教材の指導法の確認、
                                    <br className={css.sp} />
                                    他講師の授業見学などを実施します。
                                </p>
                            </div>
                            <div className={css.row}>
                                <h3>
                                    <div className={css.subTitle}>STEP 5</div>
                                    <div className={css.title}>
                                        <span className={css.title__inner}>
                                            勤務開始
                                        </span>
                                    </div>
                                </h3>
                                <div className={css.img}>
                                    <img src="/img/recruit/step_icon_05.png" />
                                </div>
                                <p>
                                    勤務地、日程の調整をして、
                                    <br className={css.sp} />
                                    勤務スタートとなります。
                                </p>
                            </div>
                        </div>
                        <div className={css.link}>
                            <Link href={"tel:045-544-6756"}>
                                <div className={css.button}>
                                    <div className={css.icon}>
                                        <img src="/img/recruit/tel.svg" />
                                    </div>
                                    <div className={css.text}>
                                        <strong>講師応募・お問い合わせ</strong>
                                        <small>TEL : 045-544-6756</small>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={`${css.box} ${css.curriculum}`}>
                        <h2 className={css.h2_2}>
                            <div className={css.subTitle}>curriculum</div>
                            <div className={css.title}>
                                <span className={css.title__inner}>
                                    カリキュラム紹介
                                </span>
                            </div>
                        </h2>
                        <div className={css.box}>
                            <div className={css.box__text}>
                                <p>
                                    秋谷光子アカデミィでは、年齢・レベル・目標に合わせた様々な学習カリキュラムをご用意しており、小学生から社会人まで、真剣に英語を学習したい人がご自身にあった内容を選択できる環境づくりに注力しています。
                                </p>
                                <p>
                                    下記以外にも、帰国子女指導やビジネス英語指導、各種資格対策等、多岐にわたり英語指導のエキスパート塾として、生徒や保護者から高い支持を得ています。
                                </p>
                            </div>
                            <div className={css.box__text}>
                                <RecruitTabs />
                            </div>
                        </div>
                    </div>
                    <div className={`${css.box} ${css.faq}`}>
                        <h2 className={css.h2_2}>
                            <div className={css.subTitle}>faq</div>
                            <div className={css.title}>
                                <span className={css.title__inner}>
                                    よくある質問
                                </span>
                            </div>
                        </h2>
                        <ol className={css.ol}>
                            {faq.map((e, i) => (
                                <li key={e.id}>
                                    <details>
                                        <summary>
                                            {e.question}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14.172"
                                                height="7.778"
                                                viewBox="0 0 14.172 7.778"
                                            >
                                                <g
                                                    id="グループ_106"
                                                    data-name="グループ 106"
                                                    transform="translate(0.015 7.086) rotate(-45)"
                                                >
                                                    <line
                                                        id="線_1"
                                                        data-name="線 1"
                                                        className={css.cls_1}
                                                        y1="10"
                                                        transform="translate(9.521 0)"
                                                    />
                                                    <line
                                                        id="線_2"
                                                        data-name="線 2"
                                                        className={css.cls_1}
                                                        x2="10"
                                                        transform="translate(0 0.479)"
                                                    />
                                                </g>
                                            </svg>
                                        </summary>
                                        <div
                                            className={css.body}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    "<h3>Answer</h3>" +
                                                    e.answer,
                                            }}
                                        />
                                    </details>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className={`${css.box} ${css.classroom}`}>
                        <h2 className={css.h2_2}>
                            <div className={css.subTitle}>
                                classroom & lessons
                            </div>
                            <div className={css.title}>
                                <span className={css.title__inner}>
                                    教室外観・授業風景
                                </span>
                            </div>
                        </h2>
                        <RecruitClassRoom />
                    </div>
                    <div className={`${css.box} ${css.location}`}>
                        <h2 className={css.h2_2}>
                            <div className={css.subTitle}>
                                LOCATION & ACCESS
                            </div>
                            <div className={css.title}>
                                <span className={css.title__inner}>
                                    勤務地・教室情報
                                </span>
                            </div>
                        </h2>
                        <div className={css.box__text}>
                            <p>
                                秋谷光子アカデミィは現在、横浜・綱島本部校と自由が丘・田園調布校の
                                2拠点で講師・スタッフを募集しています。
                            </p>
                        </div>
                        {_V.access.map((e, i) => (
                            <>
                                <div className={css.box__text} key={e.id ?? i}>
                                    <div className={css.row}>
                                        <h3 id={e.id} key={i}>
                                            {e.name}
                                        </h3>
                                        <div className={css.map}>
                                            <img
                                                className={css.img}
                                                src={e.location}
                                            />
                                            <iframe
                                                className="Gmap"
                                                src={e.Gmap}
                                                width="600"
                                                allowFullScreen
                                                loading="lazy"
                                            ></iframe>
                                        </div>
                                        <h4>
                                            <img src="/img/recruit/detail_icon_08.png" />
                                            住所・電話番号
                                        </h4>
                                        <p className={css.tel}>
                                            {e.address}
                                            <span>
                                                <a href={"tel:" + e.tel}>
                                                    {e.tel}
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                    <div className={css.row}>
                                        <h4>
                                            <img src="/img/recruit/detail_icon_02.png" />
                                            アクセス
                                        </h4>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: e.description,
                                            }}
                                        />
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className={`${css.box} ${css.company}`}>
                        <h2 className={css.h2_2}>
                            <div className={css.subTitle}>COMPANY PROFILE</div>
                            <div className={css.title}>
                                <span className={css.title__inner}>
                                    会社概要
                                </span>
                            </div>
                        </h2>
                        <div className={css.table}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>社名</th>
                                        <td>株式会社 秋谷アカデミィ</td>
                                    </tr>
                                    <tr>
                                        <th>公式URL</th>
                                        <td>
                                            <Link href={"/"}>
                                                https://www.akitani-academy.jp/
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>本社・本部所在地</th>
                                        <td>
                                            神奈川県横浜市港北区綱島西2-1-7
                                            マック綱島コート2F
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>代表者</th>
                                        <td>代表取締役 秋谷光子</td>
                                    </tr>
                                    <tr>
                                        <th>設立</th>
                                        <td>1987年4月</td>
                                    </tr>
                                    <tr>
                                        <th>事業内容</th>
                                        <td>英語専門塾（小1～成人対象）</td>
                                    </tr>
                                    <tr>
                                        <th>事業所</th>
                                        <td>
                                            綱島本部校（東急東横線
                                            綱島駅から徒歩1～2分）
                                            <br />
                                            田園調布校（東急東横線
                                            田園調布駅から徒歩1～2分）
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>企業理念</th>
                                        <td>
                                            英語教育を通して、社会で活躍できる人材を育てる
                                            <br />
                                            一隅の光であり続けること
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* {wpDATA.cfs.recruit.map((e, i) => (
                        <>
                            <div className={css.main_content}>
                                <h2
                                    dangerouslySetInnerHTML={{
                                        __html: parser.translateHTMLString(
                                            e.title
                                        ),
                                    }}
                                    id={i}
                                    className={css.h2}
                                    key={i}
                                ></h2>
                                <article
                                    className={css.treatment}
                                    dangerouslySetInnerHTML={{
                                        __html: parser.translateHTMLString(
                                            e.body
                                        ),
                                    }}
                                ></article>
                                {e.loop.map((e2, i2) => (
                                    <>
                                        <div className={css.result_row}>
                                            <h2
                                                className={css.h3}
                                                dangerouslySetInnerHTML={{
                                                    __html: parser.translateHTMLString(
                                                        e2.title
                                                    ),
                                                }}
                                                key={i2}
                                            ></h2>
                                            <article
                                                dangerouslySetInnerHTML={{
                                                    __html: parser.translateHTMLString(
                                                        e2.body
                                                    ),
                                                }}
                                            ></article>

                                            {e2.loop2?.map((e3, i3) => (
                                                <>
                                                    <div
                                                        className={
                                                            css.row_content
                                                        }
                                                    >
                                                        <h4
                                                            className={css.h4}
                                                            dangerouslySetInnerHTML={{
                                                                __html: parser.translateHTMLString(
                                                                    e3.title
                                                                ),
                                                            }}
                                                            key={i3}
                                                        ></h4>
                                                        <article
                                                            dangerouslySetInnerHTML={{
                                                                __html: parser.translateHTMLString(
                                                                    e3.body
                                                                ),
                                                            }}
                                                        ></article>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </>
                                ))}
                            </div>
                            <ContactButton />
                        </>
                    ))} */}
                    <ContactButton />
                </div>
                <Nav />
            </main>
        </>
    );
}

Page.getLayout = function getLayout(page) {
    return (
        <>
            <Header />
            {page}
            <Footer />
        </>
    );
};

export async function getStaticProps() {
    let wpDATA = await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?slug=recruit"
    ).then((res) => res.json());
    wpDATA = wpDATA[0];

    let faq = await fetch(
        "https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/faq?per_page=100&"
    ).then((res) => res.json());
    faq = faq.reverse();

    return {
        props: {
            wpDATA,
            faq,
        },
    };
}
