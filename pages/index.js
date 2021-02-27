import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { fetchAPI } from "../lib/api";
import Link from "next/link"

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the blog</h1>
      <div className={styles.list}>
        {posts.map((post, i) => {
          return (
            <h1 key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </h1>
          );
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [posts] = await Promise.all([
    fetchAPI("/posts")
  ]);

  return {
    props: { posts },
    revalidate: 1,
  };
}