import { useRouter } from "next/router";
import Link from "next/link";

let _V = require("./_V.js");
import css from "styles/nav.module.scss";

function close() {
  alert("ete");
}

function Page() {
  const router = useRouter();
  let url = router.pathname.split("/");

  return (
    <>
      <nav className={css.nav + " nav_" + url[1]}>
        <section className={css.inner}>
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
                  return <h6 className={e1.class}>{e1.title}</h6>;
                }
              })()}
              <ul key={i1} className={e1.class}>
                {e1.content.map((e2, i2) => (
                  <li key={i2}>
                    <Link href={e2[1]}>
                      <a dangerouslySetInnerHTML={{ __html: e2[0] }}></a>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </section>
      </nav>
    </>
  );
}

export default Page;
