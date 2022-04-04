import React from 'react'
import styles from "./Section3.module.css"

const Section3 = () => {
  return (
    <section className={styles.s_three}>
     <div className={styles.text_sect}>
        <h1>Restaurant Menu</h1>
        <hr/>
     </div>
     <div className={styles.image_sect}>
        <div className={styles.imj_1}></div>
        <div className={styles.imj_2}></div>
        <div className={styles.imj_3}></div>
     </div> 
     
    </section>
  )
}

export default Section3