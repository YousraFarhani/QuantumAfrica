import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section id='card-deal' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Join the Quantum Revolution</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Be our partner, and help building a quantum ecosystem in Africa.
        </p>
        
        {/* Wrap the button with an <a> tag */}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd5AzXOJMDwnLs6OoDW6jesHfKyyHqx4X6wvbCZIwEDkiCZ0w/viewform" target="_blank" rel="noopener noreferrer">
          <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] mt-10 text-primary outline-none ${styles} rounded-[10px]`}>
            Be Our Partner
          </button>
        </a>
      </div>

      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%] transition-transform duration-500 hover:rotate-12 hover:scale-105'
        />
      </div>
    </section>
  )
}

export default CardDeal

