import styles from '@/styles/navbar.module.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { useState } from 'react';
import Link from 'next/link'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <div className={styles.bars + ' ' + clsx({
          [styles.darker]: menuOpen === true,
          [styles.normal]: menuOpen === false})} onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} size='2x' className={styles.icon} />
        </div>
        <div>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/ken-oh-64bb66239/" className={styles.link} target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2x' className={styles.icon} /></a>
            <a href="https://github.com/kkenohh" className={styles.link} target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' className={styles.icon} /></a>
          </div>
        </div>
      </div>
      <div 
        className={clsx({
          [styles.navLinks]: menuOpen === true,
          [styles.menuHidden]: menuOpen === false
        })}
      >
        <Link className={`${styles.singleLink} ${styles.menuItem}`} href='/'>Home</Link>
        <Link className={`${styles.singleLink} ${styles.menuItem}`} href='/aboutMe'>About Me</Link>
        <Link className={`${styles.singleLink} ${styles.menuItem}`} href='/projects'>Projects</Link>
        <Link className={`${styles.singleLink} ${styles.menuItem}`} href='/other'>Other</Link>
      </div>
    </nav>
  )
}