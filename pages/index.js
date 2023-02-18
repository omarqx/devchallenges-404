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
        <div>
          <Image
            src={scarecrow}
            alt="Scarecrow image"
            width={100}
            height={24}
            priority
          />
        </div>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
