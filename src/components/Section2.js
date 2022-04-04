import React from 'react'
import styles from "./Section2.module.css"

const Section2 = () => {
  return (
    <section>
      <div className={styles.s_two}>
        <div className={styles.column_1}>
          <h1>Our Story</h1>
          <br />
          <hr />
          <br />
          <br />
          <br />
          <p className={styles.one}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
            expedita maiores sed deleniti quas debitis, repudiandae, aut ipsum
            dolorum nisi quaerat veniam!
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            blanditiis minima repudiandae voluptate, facere id eveniet obcaecati
            quo itaque qui!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, eos
            numquam, aliquam aperiam vitae expedita omnis provident aspernatur
            ab excepturi tempore commodi perspiciatis unde consequatur odit.
          </p>
        </div>
        <div className={styles.column_2}></div>
      </div>
    </section>
  )
}

export default Section2
