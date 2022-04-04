import React from 'react'
import styles from "./Section1.module.css"

const Section1 = () => {
  return (
    <section className={styles.s_one}>
      <h1>What we offer</h1>
      <hr />
      <div className={styles.menu_image}>
        <div className={styles.menu_card}>
          <div className={styles.img_1}><h3>Homemade Bread</h3></div>
        </div>
        <div className={styles.menu_card}>
          <div className={styles.img_2}><h3>Delicious Meals</h3></div>
        </div>
        <div className={styles.menu_card}>
          <div className={styles.img_3}><h3>Original Drinks</h3></div>
        </div>
      </div>
    </section>
  )
}

export default Section1