import React from 'react';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="h-[90px] flex justify-between container xl  mx-auto items-center  text-indigo-950 text-2xl">
      <div>
        <ul className="flex">
          <li className="px-4">Home</li>
          <li className="px-4">Skills</li>
          <li className="px-4">Projects</li>
          <li className="px-4">About</li>
          <li className="px-4">Contact</li>
        </ul>
      </div>
      <div className="flex">
        <a
          href="https://github.com/LychakVlad"
          target="_blank"
          className="px-2"
        >
          <img src={Github} alt="github link" style={{ width: '50px' }} />
        </a>
        <a
          href="https://www.linkedin.com/in/vladislav-lychak/"
          target="_blank"
          className="px-2"
        >
          <img src={Linkedin} alt="linkedin link" style={{ width: '50px' }} />
        </a>
      </div>

      <div className="hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Navbar;
