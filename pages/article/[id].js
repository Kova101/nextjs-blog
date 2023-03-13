import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { getAllArticleIds, getArticleData } from '../../lib/articles';

export default function Article({ articleData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{articleData.title}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <h1 className={styles.title}>
          {articleData.title}
        </h1>

        <p className={styles.description}>
          {articleData.desc}
        </p>

        <p className={styles.description}>
          Back to <Link href="/">Home!</Link>
        </p>
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

export async function getStaticPaths() {
  const paths = getAllArticleIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articleData = getArticleData(params.id);
  return {
    props: {
      articleData,
    },
  };
}
