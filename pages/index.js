import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import scarecrow from '../images/Scarecrow.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 Not Found</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,
  maximum-scale=5"
        />
        <link rel="icon" href="devchallenges.png" />

        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://devchallenges.io/"
        />
      </Head>
      <header>404 NOT FOUND</header>

      <main className={styles.main}>
        <Image
          src={scarecrow}
          alt="Scarecrow image"
          width={540}
          height={448}
          priority
        />
        <article>
          <h1>I have bad news for you</h1>
          <p className={styles.description}>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button>BACK TO HOMEPAGE</button>
        </article>
      </main>

      <footer className={styles.footer}>
        created by username - devChallenges.io
      </footer>
    </div>
  );
}
