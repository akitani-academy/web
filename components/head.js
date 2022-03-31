import Head from "next/head";
const _V = require("./_V.js");

function Page({ title, description, ogp, url }) {
  if (title) {
    var title = title + "｜" + _V.meta.siteTitle;
  } else {
    var title = _V.meta.siteTitle;
  }
  return (
    <Head>
      <meta property="og:type" content="blog" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      {_V.meta.siteTitle && (
        <>
          <meta property="og:site_name" content={_V.meta.siteTitle} />
        </>
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
      {url && (
        <>
          <meta property="og:url" content={url} />
          <link rel="canonical" href={url} />
        </>
      )}
      {description && (
        <>
          <meta property="og:description" content={description} />
        </>
      )}
    </Head>
  );
}

export default Page;
