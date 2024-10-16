import React from 'react'
import {projectData} from '../constants'
import styles from '../style'
import ProjectCard from './ProjectCard'

const Testimonials = () => {
  return (
    <section id='research-initiatives' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>Our Research & Initiatives</h2>
        <div className='w-full md:mt-0 mt-6'>
           
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center w-full gap-6'>
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          
        />
      ))}
    </div>    
    </section>
  )
}

export default Testimonials
