import React from 'react'

const ProjectCard = ({ title, description, img }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] my-5 mx-4 project-card border border-[#14E1E7] transition-transform duration-500 hover:scale-105 hover:rotate-3 hover:shadow-[0_15px_30px_rgba(20,225,231,1)] hover:shadow-blue-500'>
      {/* Optional image at the top */}
      {/* You can add the img component here if you want to display the image */}
      
      {/* Project Title */}
      <h4 className='font-poppins font-semibold text-[28px] leading-[32px] text-[#14E1E7] mb-4'>
        {title}
      </h4>
      
      {/* Project Description */}
      <p className='font-poppins font-normal text-[16px] leading-[28px] text-white'>
        {description}
      </p>
    </div>
  )
}

export default ProjectCard



