import styles from '@/styles/post.module.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { useState } from 'react';
import Link from 'next/link'


export default function Post() {

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Welcome to My Blog!</h1>
        <p>This is just a nice page for me to post my hobbies and thoughts on different topics. From school to sports to photography, everything I enjoy will be here!</p>
      </div>
      <div className={styles.postsContainer}>

      </div>
    </div>
  )
}