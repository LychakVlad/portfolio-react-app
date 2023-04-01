import React from 'react';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import Google from '../assets/google.svg';

const IconsSection = () => {
  return (
    <div className="flex">
      <a
        href="mailto: lycakvladislav@gmail.com"
        className="px-2 hover:opacity-80  transition-opacity duration-300"
      >
        <img src={Google} alt="gmail link" style={{ width: '50px' }} />
      </a>
      <a
        href="https://github.com/LychakVlad"
        target="_blank"
        rel="noreferrer"
        className="px-2 hover:opacity-80  transition-opacity duration-300"
      >
        <img src={Github} alt="github link" style={{ width: '50px' }} />
      </a>
      <a
        href="https://www.linkedin.com/in/vladislav-lychak/"
        target="_blank"
        rel="noreferrer"
        className="px-2 hover:opacity-80  transition-opacity duration-300"
      >
        <img src={Linkedin} alt="linkedin link" style={{ width: '50px' }} />
      </a>
    </div>
  );
};

export default IconsSection;
