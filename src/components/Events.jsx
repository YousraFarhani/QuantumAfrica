import React from 'react';

const Events = () => {
  return (
    <section id='event' className="flex flex-col justify-center items-center min-h-screen bg-primary">
      <h1 className="text-6xl font-bold text-white mb-6">
        <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Our Events
        </span>
      </h1>
      <p className="text-4xl text-white font-semibold animate-bounce">
        Coming Soon...
      </p>
    </section>
  );
};

export default Events;
