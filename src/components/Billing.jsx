import React from 'react'
import {spotify, bill} from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='billing' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[80%] h-[100%] relative z-[5] transition-transform duration-500 hover:rotate-12 hover:scale-105"
      />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Quantum Currents Podcast</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our exculsive learning podcast that discusses the latest updates/research papers in the field of Quantum Computing and Quantum Physics.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-6 mt-6'>
        <a href='https://open.spotify.com/show/0fJn7V3SD5djL5JpozrpGo?si=342d637d59ce4ac3' target='_blank' rel='noopener noreferrer'>
          <img
            src={spotify}
            alt='app-store'
            className='w-[140px] h-[60px] object-contain mr-5 cursor-pointer'
          />
        </a>   
        </div>
      </div>  
    </section>
  )
}

export default Billing
