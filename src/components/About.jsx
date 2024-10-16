import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const About = () => {
  return (
    <section id='about' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> About Us </h2>
        <h2 className='text-gradient ss:text-[50px] text-[52px]'> Our Mission</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We aim to empower African researchers, students, and industries by fostering education, collaboration, and innovation in quantum technologies. A key focus is on promoting quantum learning and facilitating access to educational materials and opportunities for African students and professionals, ensuring they can participate in and contribute to the global quantum field.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default About
