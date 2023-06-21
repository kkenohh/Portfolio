import styles from '@/styles/navbar.module.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="">
        <FontAwesomeIcon icon={faBars} size='2x' className={styles.icon}/>
      </a>
      <div>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/ken-oh-64bb66239/" className={styles.link} target="_blank"><FontAwesomeIcon icon={faLinkedin} size='2x' className={styles.icon} /></a>
          <a href="https://www.linkedin.com/in/ken-oh-64bb66239/" className={styles.link} target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' className={styles.icon} /></a>
        </div>
      </div>
    </nav>
  )
}