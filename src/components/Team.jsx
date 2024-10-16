import React from 'react';
import TeamCard from './TeamCard';
import { teamData } from '../constants'; // Importing the team data

const OurTeam = () => {
  return (
    <section id='our-team' className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-10 text-center">Our Team</h1>
      
      {/* Grid Layout for Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-10 w-full">
        {teamData.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            role={member.role}
            img={member.img}
            description={member.description}
            socialMedia={member.socialMedia}
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;




