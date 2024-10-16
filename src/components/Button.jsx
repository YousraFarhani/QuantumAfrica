import React from 'react';

const Button = ({ styles }) => {
  return (
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPNR7sb2xvXSgTnujM-yXiXPZ9AuyLDYAYQfpmoTbKGzAikg/viewform" target="_blank" rel="noopener noreferrer">
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
        Join Our Community
      </button>
    </a>
  );
}

export default Button;
