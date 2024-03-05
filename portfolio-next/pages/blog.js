// Try to make it with multiple pages. So a set number of posts on one page, and then u have to click the arrow to go to the next. Also, sort the posts by tag or date (ascending or descending)
import styles from '@/styles/post.module.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { useState } from 'react';
import Link from 'next/link'


export default function Blog() {
  const [currPage, setCurrPage] = useState(0);
  const [currPosts, setCurrPosts] = useState([]);

  function updatePage() {
    setCurrPage(currPage+10);
  }

  function updatePosts() {
    setCurrPosts([]);
  }

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

// date property should be Date object, however that works