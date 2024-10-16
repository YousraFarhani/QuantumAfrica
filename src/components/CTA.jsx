import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section id='cta' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <div className={styles.heading2}>
        <h2 className=' typing-effect '>Be a part of our Community!</h2>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We welcome everyone, Quantum Reasechers, industry experts, students, and Quantum enthusiasts, Join us now and make your first step into the quantum world.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
