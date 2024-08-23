const _V = require("./_V_lp.js");
import { useRouter } from "next/router";
import Link from "next/link";
import UseSWR from "swr";

import css from "styles/lp_header.module.scss";
import classNames from "classnames";

const siteTitle = function (url) {
  if (url[1] == "") {
    return (
      <h1 className={css.title}>
        <Link legacyBehavior href={"/"}>
          <a>
            <small>英語専門塾</small>
            秋谷光子アカデミィ
          </a>
        </Link>
      </h1>
    );
  } else {
    return (
      <div className={css.title}>
        <Link legacyBehavior href={"/"}>
          <a>
            <small>英語専門塾</small>
            秋谷光子アカデミィ
          </a>
        </Link>
      </div>
    );
  }
};

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

  // const pageBack = () => {
  //   const currentPath = router.pathname;
  //   if (!document.referrer) {
  //     router.push("/");
  //   } else {
  //     router.back();
  //   }
  // };

  const { data, mutate } = navSate();
  const handleInc = () => mutate(!data);

  return (
    <>
      <header className={css.header + " header_" + url[1]}>
        <div className={css.inner}>
          {siteTitle(url)}
          <div className={css.menu}>
            {/* <Link legacyBehavior href={"/access"}>
              <a>
                <ul className={css.addr}>
                  {_V.access.map((e, i) => (
                    <li key={i}>
                      <span className={css.name}>{e.name}</span>
                      <span className={css.tel}>{e.tel}</span>
                    </li>
                  ))}
                </ul>
              </a>
            </Link> */}
            <div className={css.links}>
              <Link href="/contact">
                お問い合わせ
                <br />
                無料体験レッスン
              </Link>
              <Link href="/contact">資料を請求</Link>
            </div>
            <div className={css.meta}>
              <div
                className={classNames(css.spMENU, { [css.close]: data })}
                onClick={handleInc}
              >
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                {/* 
                <div>
                  {!data ? (
                    <>MENU</>
                  ) : (
                    <>CLOSE</>
                  )}
                </div> */}
              </div>
            </div>
          </div>
          {/* {url[1] == "method" && url[2] && (
            <Link legacyBehavior href={"/course_and_classtype"}>
              <a className={css.backButton}>コース説明にもどる</a>
            </Link>
          )} */}
        </div>
      </header>
    </>
  );
}

export default Page;
