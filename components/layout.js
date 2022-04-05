import Head from "./head";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
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
