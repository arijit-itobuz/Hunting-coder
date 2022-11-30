import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!router.isReady) {
          return;
        }
        const response = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [router.isReady]);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>{blog && blog.title}</h1>
          <div>{blog && blog.content}</div>
        </main>
      </div>
    </>
  );
};

export default Slug;
