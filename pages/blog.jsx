import React from 'react';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <Link href={'/blogpost/learn-javascript'} className={styles.blogItem}>
            <div>
              <h3>How to learn JS in 2022 ?</h3>
              <p>JavaScript is the language to write logic to web applications.</p>
            </div>
          </Link>
          <Link href={'/blogpost/learn-javascript'} className={styles.blogItem}>
            <div>
              <h3>How to learn JS in 2022 ?</h3>
              <p>JavaScript is the language to write logic to web applications.</p>
            </div>
          </Link>
          <Link href={'/blogpost/learn-javascript'} className={styles.blogItem}>
            <div>
              <h3>How to learn JS in 2022 ?</h3>
              <p>JavaScript is the language to write logic to web applications.</p>
            </div>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Blog;
