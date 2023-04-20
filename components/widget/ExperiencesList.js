import Link from "next/link";

import classNames from "classnames";

import css_ExperiencesList from "styles/ExperiencesList.module.scss";
import css_View from "styles/View.module.scss";
import css_experiences from "styles/experiences.module.scss";

export default function Page({ data, responsive = true }) {
  let option = {
    date: true,
  };
  return (
    <>
      <section id={data.slug}>
        <div className={classNames(
          css_ExperiencesList.experiences,
          css_experiences.list,
          { [css_ExperiencesList.responsive]: responsive }
        )}>
          <div className={css_ExperiencesList.shortTitle}>
            {data.img ? (
              <div className={css_View.titleImg}>
                <img src={data.img} alt="" />
                {data.description && (
                  <>
                    <small>{data.description}</small>
                  </>
                )}
              </div>
            ) : (
              <div className={css_View.experiencesTitle}>
                <img src="/aa.svg" alt="" className={css_ExperiencesList.laureltree_left} />
                <h3>
                  {data.name}
                  {data.description && (
                    <>
                      <br />
                      <small>{data.description}</small>
                    </>
                  )}
                </h3>
                <img src="/aa.svg" alt="" className={css_ExperiencesList.laureltree_right} />
              </div>
            )}
            {0 < data.countView && (
              <>
                <div className={css_ExperiencesList.data}>
                  過去1年：{data.yearCount}名<br />
                  累計：{data.count}名
                </div>
              </>
            )}
          </div>
          <div className={css_ExperiencesList.ExperiencesList}>
            <ul>
              {data.post.map((e, i) => (
                <li key={i}>
                  <time>{e.date}</time>
                  <div className={css_ExperiencesList.meta}>
                    <span>{e.student}</span>
                    {e.title && (
                      <span>
                        <Link legacyBehavior href={"/experiences/" + e.id}>
                          <a>体験記：{e.title}</a>
                        </Link>
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
