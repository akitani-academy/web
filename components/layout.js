import Head from "./head";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <>
      <Head
        title={"タイトル"}
        description={"ディスクリプション"}
        image={"https://t-cr.jp/img.jpg"}
        url={"https://t-cr.jp"}
      />
      <Header />
      <main>
        <article>{children}</article>
        <Nav />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
