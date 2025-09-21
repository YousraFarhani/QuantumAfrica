import React from 'react';
import styles from '../style';

const Chapters = () => {
  return (
    <section id='chapters' className="flex flex-col justify-center items-center min-h-screen bg-primary py-16">
      <h1 className="text-6xl font-bold text-white mb-12">
        <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Quantum Africa Chapters
        </span>
      </h1>
      
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl text-dimWhite mb-8">
          Coming Soon...
        </p>
        <p className="text-lg text-dimWhite">
          We're working on establishing Quantum Africa Chapters across the continent.
          Stay tuned for more information!
        </p>
      </div>
    </section>
  );
};

export default Chapters;