import Head from "next/head";
import { useRouter } from "next/router";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ title, description, keywords, children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {router.pathname === "/" && <Banner />}

      <div className="2xl:container min-h-screen">{children}</div>

      <Footer id="footer" />
    </>
  );
}

Layout.defaultProps = {
  title: "Dj Event | Find Dj Near by You",
  description: "Dj Event App for Dj and Live Events",
  keywords: "Dj, Music, EDM, Events",
};
