import Head from 'next/head'
import styles from "../../styles/layout.module.css";
import Footer from "./footer";

function LayoutProvider ({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pritish Vaidya's Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This is the portfolio website of Pritish Vaidya" />
        <link rel="canonical" href="https://pritishvaidya.dev/" />
      </Head>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>

  )
}

export default LayoutProvider