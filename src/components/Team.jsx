import React from 'react';
import TeamCard from './TeamCard';
import { teamData } from '../constants'; // Importing the team data

const OurTeam = () => {
  return (
    <section id='our-team' className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-10 text-center">Our Team</h1>
      
      {/* Adjust layout for responsive design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
        {teamData.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            role={member.role}
            img={member.img}
            description={member.description}  /* Ensure the description prop is passed */
            socialMedia={member.socialMedia}
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;



