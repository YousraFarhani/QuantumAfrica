import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section
      id='cta'
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      {/* Text and Heading */}
      <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white typing-effect">
          Be a part of our Community!
        </h2>
        <p className={`text-sm sm:text-base md:text-lg lg:text-xl  text-white leading-relaxed mt-5 max-w-xs sm:max-w-md`}>
          We welcome everyone, Quantum Researchers, industry experts, students, and Quantum enthusiasts. Join us now and make your first step into the quantum world.
        </p>
      </div>

      {/* Button */}
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 mt-6 sm:mt-0`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;

