import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section id='cta' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <div className={styles.heading2}>
        <h2 className=' typing-effect text-2xl sm:text-3xl md:text-5xl '>Be a part of our Community!</h2>
        </div>
        <p className={`${styles.paragraph} max-w-full sm:max-w-[470px] mt-5 text-base sm:text-lg md:text-xl`}>
          We welcome everyone, Quantum Researchers, industry experts, students, and Quantum enthusiasts. Join us now and make your first step into the quantum world.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
