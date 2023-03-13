import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import {getAllArticles} from '../lib/articles';

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Example for Cache clearing in Fastly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to Next.js Example for Cache clearing in Fastly
        </h1>

        <p className={styles.description}>
          MAIN branch
        </p>

        <p className={styles.description}>
          Read <Link href="/about">About Us!</Link>
        </p>

        <h2>Articles</h2>

        <ul>
          {articles && articles.map((article) => (
            <li key={article.id}>
              <Link href={`/article/${article.id}`}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>

      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const articles = getAllArticles();
  return {
    props: {
      articles,
    },
  };
}
