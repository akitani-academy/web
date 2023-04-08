const _V = require("./_V.js");
import UseSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

import css from "styles/nav.module.scss";

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

  return (
    <>
      <nav className={css.nav + " nav_" + url[1] + " nav_" + String(data)}>
        <section className={css.inner}>
          <div className="navClose" onClick={handleInc}></div>
          <section className={css.main}>
            <ul className={css.addr}>
              {_V.access.map((e, i) => (
                <li key={i}>
                  <a href={"tel:" + e.tel}>
                    {e.name}
                    <br />
                    <span className={css.tel}>{e.tel}</span>
                  </a>
                </li>
              ))}
            </ul>
            {_V.menu.map((e1, i1) => (
              <>
                {(() => {
                  if (e1.title) {
                    return <div className={e1.class}>{e1.title}</div>;
                  }
                })()}
                <ul key={i1} className={e1.class}>
                  {e1.content.map((e2, i2) => (
                    <li key={i2}>
                      <Link legacyBehavior href={e2[1]}>
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
          </section>
        </section>
      </nav>
    </>
  );
}

export default Page;
