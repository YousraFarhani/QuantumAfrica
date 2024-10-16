import React from 'react';
import TeamCard from './TeamCard';
import { teamData } from '../constants'; // Importing the team data

const OurTeam = () => {
  return (
    <section id='our-team' className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-5xl font-bold mt-2 mb-10">Our Team</h1>
      <div className="flex flex-wrap justify-center">
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


