import Head from "next/head";
import { useRouter } from "next/router";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  title: string;
  description: string;
  keywords: string;
  children: any;
};

export default function Layout({
  title,
  description,
  keywords,
  children,
}: Props) {
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

      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Dj Event | Find Dj Near by You",
  description: "Dj Event App for Dj and Live Events",
  keywords: "Dj, Music, EDM, Events",
};
