const _V = require("components/_V.js");
import Head from "next/head";

function Page({
  children = null,
  robots = "index, follow",
  title,
  description,
  ogp = "",
  url = undefined,
  breadcrumb,
}) {
  // console.log(children)

  if (title) {
    if (!title.includes("アカデミィ")) {
      title = title + "｜" + _V.meta.siteTitle;
    }
  } else {
    title = _V.meta.siteTitle;
  }

  if (breadcrumb) {
    breadcrumb = breadcrumb.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: e[0],
      item: _V.meta.baseURL + e[1],
    }));
    breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb,
    };
  }

  return (
    <Head>
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#be2522" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Zen+Old+Mincho&display=swap"
        rel="stylesheet"
      />
      {/* <meta name="twitter:site" content="@tcr_jp" /> */}
      {robots && <meta name="robots" content={robots} />}
      {_V.meta.siteTitle && (
        <meta property="og:site_name" content={_V.meta.siteTitle} />
      )}
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
        </>
      )}
      {ogp && (
        <>
          <meta property="og:image" content={ogp} />
        </>
      )}
      {url !== undefined && (
        <>
          <meta property="og:url" href={_V.meta.baseURL + url} />
          <link rel="canonical" href={_V.meta.baseURL + url} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
        </>
      )}
      {breadcrumb && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
          />
        </>
      )}
      {children}
    </Head>
  );
}

export default Page;
