import React from 'react';

const EventCard = ({ title, description, date, location, image, registrationLink, abstractLink }) => {
  return (
    <div className='flex flex-col px-8 py-10 rounded-[20px] max-w-[800px] my-5 mx-auto project-card border border-[#14E1E7] transition-transform duration-300 hover:scale-105 hover:shadow-[0_15px_30px_rgba(20,225,231,0.7)]'>
      {/* Event Title */}
      <h2 className='font-poppins font-semibold text-[32px] leading-[40px] text-[#14E1E7] mb-4'>
        {title}
      </h2>
      
      {/* Event Image */}
      {image && (
        <div className="w-full flex justify-center mb-6">
          <img 
            src={image} 
            alt={title} 
            className="max-w-full h-auto rounded-lg border-2 border-[#14E1E7] shadow-lg"
          />
        </div>
      )}
      
      {/* Event Details */}
      <div className="mb-4">
        {date && (
          <p className='font-poppins font-medium text-[18px] leading-[28px] text-white mb-2'>
            <span className="text-[#14E1E7]">📅 Date:</span> {date}
          </p>
        )}
        {location && (
          <p className='font-poppins font-medium text-[18px] leading-[28px] text-white mb-2'>
            <span className="text-[#14E1E7]">📍 Location:</span> {location}
          </p>
        )}
      </div>
      
      {/* Event Description */}
      <div className='font-poppins font-normal text-[16px] leading-[28px] text-white mb-6'>
        {description.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-3">{paragraph}</p>
        ))}
      </div>
      
      {/* Call to Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-auto">
        {registrationLink && (
          <a href={registrationLink} target="_blank" rel="noopener noreferrer" className="py-3 px-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none rounded-[10px] transition-all hover:scale-105">
            Register Now
          </a>
        )}
        {abstractLink && (
          <a href={abstractLink} target="_blank" rel="noopener noreferrer" className="py-3 px-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none rounded-[10px] transition-all hover:scale-105">
            Submit Abstract
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;