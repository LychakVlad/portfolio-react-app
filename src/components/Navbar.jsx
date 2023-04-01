import React from 'react';
import { FaBars } from 'react-icons/fa';
import IconsSection from './IconsSection';

const Navbar = () => {
  return (
    <div className=" section h-[90px] flex justify-evenly container xl  mx-auto items-center  text-indigo-950 text-2xl font-poppins">
      <div>
        <ul className="flex">
          <li className="px-4">Home</li>
          <li className="px-4">Skills</li>
          <li className="px-4">Projects</li>
          <li className="px-4">About</li>
          <li className="px-4">Contact</li>
        </ul>
      </div>
      <IconsSection />

      <div className="hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Navbar;
