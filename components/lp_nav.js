const _V = require("./_V.js");
import UseSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "components/Button/Button";

import css from "styles/lp_nav.module.scss";

function navSate() {
  const { data, mutate } = UseSWR("state", () => window.count);
  return {
    data: data || false,
    mutate: (count) => {
      window.count = count;
      mutate();
    },
  };
}

function Page() {
  const router = useRouter();
  let url = router.pathname.split("/");

  const { data, mutate } = navSate();
  const handleInc = () => mutate(!data);

  const menu = [
    {
      class: "nav_page",
      content: [
        ["大学受験・英検合格者の声", "/#nav_01"],
        ["英検や大学試験に強い理由", "/#nav_02"],
        ["志望校へ導く徹底した試験対策", "/#nav_03"],
        ["秋谷光子アカデミィの学習ポイント", "/#nav_04"],
        ["大学受験英語のカリキュラムについて", "/#nav_05"],
        ["秋谷光子アカデミィ入塾までの流れ", "/#nav_06"],
        ["秋谷光子アカデミィについて", "/#nav_07"],
        ["塾長からのメッセージ", "/#nav_08"],
      ],
    },
  ];

  return (
    <>
      <div className="overlay" onClick={handleInc}></div>
      <nav className={css.nav + " nav_" + url[1] + " nav_" + String(data)}>
        <section className={css.lp_inner}>
          <div className="hamburger" onClick={handleInc}>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <section className={css.main}>
            {/* <ul className={css.addr}>
              {_V.access.map((e, i) => (
                <li key={i}>
                  <a href={"tel:" + e.tel}>
                    {e.name}
                    <br />
                    <span className={css.tel}>{e.tel}</span>
                  </a>
                </li>
              ))}
            </ul> */}
            {/* <Button href={`/experiences`} fill="true">
              <span>実績と体験記</span>
              <br />
              英検や大学受験など
              <br />
              合格とスコアUPの声
            </Button> */}
            {menu.map((e1, i1) => (
              <>
                {(() => {
                  if (e1.title) {
                    return <div className={e1.class}>{e1.title}</div>;
                  }
                })()}
                <ul key={i1} className={e1.class}>
                  {e1.content.map((e2, i2) => (
                    <li key={i2}>
                      <Link legacyBehavior href={`${e2[1]}`}>
                        <a
                          dangerouslySetInnerHTML={{ __html: e2[0] }}
                          onClick={handleInc}
                        ></a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ))}

            <div className={css.cta}>
              <Link href={`/contact`}>
                お問い合わせ・<span>無料体験レッスンを申し込む</span>
              </Link>
              <Link href={`/contact`}>資料を請求する</Link>
            </div>
          </section>
        </section>
      </nav>
    </>
  );
}

export default Page;
