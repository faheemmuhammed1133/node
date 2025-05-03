import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import NewsSlider from './NewsSlider'

function Home() {
  return (
    <div>
      {/* Header  */}
      <section  className={styles.hContainer}>
         <Link to="/" className={styles.logo}>ITM</Link>
         <Link to="/" >News</Link>
         <Link to="/" >behn </Link>
         <Link to="/" >Clubs</Link>
         <Link to="/" >laudi</Link>

      </section>

      {/* News Carrousal */}
      <section className={styles.news}>
        <NewsSlider/>
      </section>
      {/* Events Carrousal */}
      <section className={styles.events}>
        <NewsSlider/>
   
      </section>
      
    </div>
  )
}

export default Home
