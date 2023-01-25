import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>hi, i'm suzin. i'm frontend Enginer</p>
        <p>
          if you wanna know about me, click on <a href="https://github.com/suzz-in">my github</a>.
        </p>
      </section>
    </Layout>
  );
}
