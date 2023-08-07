import styles from '@/styles/home.module.css'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';


export function Home() {

  const typing = useRef(null);

  useEffect(() => {
    const words = new Typed(typing.current, {
      "strings": ["", "Student", "Learner", "Programmer", "Creator", "Hardworker"],
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
        <div className={`${styles.welcome} ${styles.oneText}`} data-text='WELCOME'>WELCOME</div>
        <div className={`${styles.welcome} ${styles.oneText} ${styles.name}`} data-text='MY NAME IS KEN'>MY NAME IS KEN</div>
      </div>
      <div className={`${styles.section} ${styles.two} ${styles.typingSection}`}>
        <div>
          <span className={styles.text}>I am a </span>
          <span className={`${styles.text} ${styles.typing} typing-cursor`} ref={typing}></span>
        </div>
      </div>
    </div>
  );
};

export default Home;