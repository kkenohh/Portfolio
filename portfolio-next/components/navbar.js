import styles from '@/styles/navbar.module.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { useState } from 'react';
import Link from 'next/link'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function updateMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.header}>
          <div className={styles.hamburger + ' ' + clsx({
            [styles.darker]: menuOpen === true,
            [styles.normal]: menuOpen === false})} onClick={() => updateMenu()}>
            <span className={styles.bars + ' ' + clsx({
            [styles.transform]: menuOpen === true,
            [styles.bars]: menuOpen === false})}></span>
            <span className={styles.bars + ' ' + clsx({
            [styles.transform]: menuOpen === true,
            [styles.bars]: menuOpen === false})}></span>
            <span className={styles.bars + ' ' + clsx({
            [styles.transform]: menuOpen === true,
            [styles.bars]: menuOpen === false})}></span>
          </div>
          <div className={clsx({
            [styles.navLinks]: menuOpen === true,
            [styles.menuHidden]: menuOpen === false})}>
            <Link className={`${styles.singleLink} ${styles.menuItem}`} onClick={updateMenu} href='/'>Home</Link>
            <Link className={`${styles.singleLink} ${styles.menuItem}`} onClick={updateMenu} href='/aboutMe'>About</Link>
            <Link className={`${styles.singleLink} ${styles.menuItem}`} onClick={updateMenu} href='/projects'>Projects</Link>
            <Link className={`${styles.singleLink} ${styles.menuItem}`} onClick={updateMenu} href='/other'>Other</Link>
          </div>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/ken-oh-64bb66239/" className={styles.link} target="_blank" aria-label='LinkedIn Link'><FontAwesomeIcon icon={faLinkedin} size='2x' className={styles.icon} /></a>
            <a href="https://github.com/kkenohh" className={styles.link} target="_blank" aria-label='GitHub Link'><FontAwesomeIcon icon={faGithub} size='2x' className={styles.icon} /></a>
          </div>
        </div>
      </nav>
    </div>
  )
}

// styles.bars + ' ' + 

// PROBLEM: LINES 35 and 36. When menuOpen is false, menuHidden is active, hiding the menu. I only want the menu to be hidden in the case of the hamburger icon being visible and closed. If the hamburger icon is not displayed, the menu should be visible at all times.
// ^^ RESOLVED. There is redundancy in the navLinks and menuHidden classes of navbar.module.css, but should be fine.