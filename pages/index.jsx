import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styles2 from '../styles/demo.module.css';
import Script from 'next/script';
import Link from 'next/link';

export default function Home() {
  // console.log(styles);
  return (
    <div className={styles.container}>
      <style jsx>
        {`
          h2 {
            font-size: 38px;
          }
          h3 {
            font-size: 24px;
          }
        `}
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='keywords' content='nextjs, hunting-coder, blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Script src='/sc.js' strategy='lazyOnload'></Script> */}

      <main className={styles.main}>
        <Image className={styles.myImg} src={'/home_img.jpeg'} alt='home_img' width='500' height='300' />
        <h1 className={styles.title}>
          <span className='mySpan'>Welcome to Hunting Coder</span>
        </h1>
        <p className={styles.description}>A blog for the coders by a coder !</p>
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
