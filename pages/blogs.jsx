import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';
import Head from 'next/head';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          {blogs.map((e, i) => {
            return (
              <Link key={i} href={`/blogpost/${e.slug}`} className={styles.blogItem}>
                <div>
                  <h2>{e.title}</h2>
                  <p>{e.content.slice(0, 90)} ...</p>
                </div>
              </Link>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default Blogs;
