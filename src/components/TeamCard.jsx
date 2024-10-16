import React from 'react';

const TeamCard = ({ name, role, img, socialMedia, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-primary backdrop-blur-lg shadow-lg rounded-lg w-[500px] mx-4 my-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      {/* Team Member Image */}
      <img
        src={img}
        alt={name}
        className="w-[140px] h-[140px] rounded-full object-cover mb-4 border-2 border-white"
      />
      
      {/* Team Member Name */}
      <h3 className="font-semibold text-xl text-white">{name}</h3>
      
      {/* Team Member Role */}
      <p className="text-gray-300 font-semibold mb-2">{role}</p>

      {/* Description under the title */}
      {description && (
        <p className="text-gray-400 text-center px-2 mb-4">
          {description}
        </p>
      )}

      {/* Social Media Icons */}
      <div className="flex mt-3">
        {socialMedia.map((social, index) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`mr-3 ${index === socialMedia.length - 1 ? 'mr-0' : ''}`}
          >
            <img
              src={social.icon}
              alt={social.id}
              className="w-[24px] h-[24px] object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;

