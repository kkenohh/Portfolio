import styles from '@/styles/aboutMe.module.css'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';


export function Home() {

  const typing = useRef(null);

  useEffect(() => {
    const words = new Typed(typing.current, {
      "strings": ["", "Student", "Learner", "Programmer", "Creator", "Designer", "Artist"],
      "typeSpeed": 100,
      "backSpeed": 40,
      "loop": true
    });

    return () => {
      words.destroy();
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={`${styles.section} ${styles.one}`}>
        <div className={styles.name} data-text='Ken Oh'>Ken Oh</div>
      </div>
      <div className={`${styles.section} ${styles.two} ${styles.typingSection}`}>
        <div>
          <span className={styles.text}>I'm a </span>
          <span className={`${styles.text} ${styles.typing} typing-cursor`} ref={typing}></span>
        </div>
      </div>
      <div className={`${styles.section} ${styles.one}`}>
        <div className={styles.name} data-text='Ken Oh'>Ken Oh</div>
      </div>
    </div>
  );
};

export default Home;