import Link from "next/link";

import classNames from "classnames";

import css_ExperiencesList from "styles/ExperiencesList.module.scss";

export default function Page({ title, data, responsive = true }) {
  let option = {
    date: true,
  };
  // console.log(data)
  return (
    <>
      <section id={data.slug}>
        <div className={classNames(
          css_ExperiencesList.ExperiencesListArea,
          { [css_ExperiencesList.responsive]: responsive }
        )}>
          <div className={css_ExperiencesList.titleArea}>
            <h3>
              {title && (
                <div className={css_ExperiencesList.titleCategory}
                  dangerouslySetInnerHTML={{
                    __html: title.replace(/ /g, "<br/>"),
                  }} />
              )}
              {data.img ? (
                <div className={css_ExperiencesList.titleImg}>
                  <img src={data.img} alt="" />
                  {data.description && (
                    <>
                      <small>{data.description}</small>
                    </>
                  )}
                </div>
              ) : (
                <div className={css_ExperiencesList.title}>
                  <img src="/aa.svg" alt="" className={css_ExperiencesList.laureltree_left} />
                  <div className={css_ExperiencesList.h3}>
                    {data.name}
                    {data.description && (
                      <>
                        <br />
                        <small>{data.description}</small>
                      </>
                    )}
                  </div>
                  <img src="/aa.svg" alt="" className={css_ExperiencesList.laureltree_right} />
                </div>
              )}
            </h3>
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
