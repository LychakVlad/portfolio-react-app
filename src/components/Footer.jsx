import React from 'react';
import IconsSection from './IconsSection';

const Footer = () => {
  return (
    <div className=" section h-full container xl  mx-auto  text-indigo-900 text-2xl font-poppins flex flex-col justify-center items-center pb-8">
      <span class="h-px my-8 bg-indigo-900 w-full dark:bg-gray-700 opacity-20"></span>
      <IconsSection />
    </div>
  );
};

export default Footer;
