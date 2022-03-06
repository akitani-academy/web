import Link from "next/link";

let _V = require("./_V.js");

import css from "styles/nav.module.scss";

function Page() {
  return (
    <>
      <nav className={css.nav}>
        <section className={css.inner}>
          <ul className="spOnly">
            {_V.access.map((e, i) => (
              <li key={i}>
                <span>{e.name}</span>
                <br />
                <a href={"tel:" + e.tel} className="tel">
                  {e.tel}
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
