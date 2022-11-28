import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Title of the page: {slug}</h1>
          <hr />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus possimus labore distinctio maxime ratione vero
            molestias recusandae illum dolorum, laborum perspiciatis fugiat.
          </div>
        </main>
      </div>
    </>
  );
};

export default Slug;
