import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>about Next1</h1>
        <div>Sample application of Next.js</div>
      </main>
      <Footer />
    </div>
  );
}
