import React, {Link} from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className={styles.logo}>my rice</div>
        <ul className={styles.contact}>
          <li className={styles.about}>
            <a href="">About</a>
            <span>What we offer</span>
          </li>
          <li className={styles.menu}>
            <a href="">Menu</a>
            <span>Restaurant</span>
          </li>
          <li id="lineup">
            <a href="">Lineup</a>
            <span>Our Bread</span>
          </li>
          <li id="">
            <a href="">Contact</a>
            <span>Get in Touch</span>
          </li>
          <li id="contact">
            <a href="">+8101237070</a>
            <span>jane@bakery.com</span>
          </li>
        </ul>
      </nav>
      <div className={styles.header_image}></div>
    </header>
  )
}

export default Navbar