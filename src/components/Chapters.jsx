import React from 'react';
import styles from '../style';
import { chaptersData } from '../constants';

const ChapterCard = ({ chapter }) => (
  <div 
    className="flex flex-col justify-end p-6 rounded-xl overflow-hidden h-64 w-full md:w-80 m-4 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${chapter.flagUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <h3 className="text-2xl font-bold text-white mb-2">{chapter.name}</h3>
    <p className="text-gray-200 mb-4">{chapter.description}</p>
    <div 
      className="bg-blue-gradient text-primary text-sm py-1 px-4 rounded-full w-fit font-medium"
    >
      Active
    </div>
  </div>
);

const Chapters = () => {
  return (
    <section id='chapters' className="flex flex-col justify-center items-center min-h-screen bg-primary py-16">
      <h1 className="text-6xl font-bold text-white mb-12">
        <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Quantum Africa Chapters
        </span>
      </h1>
      
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-xl text-dimWhite">
          Quantum Africa Chapters are local hubs led by passionate leaders across the continent, dedicated to advancing quantum education, research, and collaboration. Each chapter works to ensure that no African country is left behind in the global quantum revolution by building communities, hosting events, and creating opportunities for students, researchers, and innovators.
        </p>
      </div>

      <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        {chaptersData.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </section>
  );
};

export default Chapters;