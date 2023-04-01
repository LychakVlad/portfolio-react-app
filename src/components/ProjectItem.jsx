import React from 'react';
import MediumTitle from './MediumTitle';
import GitHub from '../assets/github.svg';
import Search from '../assets/search.svg';

const ProjectItem = ({ link, title, description, techs }) => {
  console.log(techs);
  return (
    <div className="flex rounded-3xl overflow-hidden bg-white p-16 items-center mb-14">
      <div className=" max-w-sm mr-8">
        <MediumTitle title={title} />
        <p>{description}</p>
        <div className="mt-5">
          {techs.map((item) => (
            <span className=" p-1 px-5 bg-slate-300 rounded-md  mr-5">
              {item}
            </span>
          ))}
        </div>
        <div className="flex mt-8">
          <a
            href="https://github.com/LychakVlad/e-commerce-clothing-shop"
            className="flex items-center mr-6 hover:opacity-80 transition-opacity duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={GitHub}
              alt="github"
              style={{ width: '36px' }}
              className="mr-2"
            />
            <p className="relative group">
              <span className="relative">View Code </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px]  bg-indigo-950 transition-width duration-300 group-hover:w-full"></span>
            </p>
          </a>
          <a
            href="https://lychakvlad.github.io/e-commerce-clothing-shop/"
            className="flex items-center mr-6 hover:opacity-80 transition-opacity duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Search}
              alt="search"
              style={{ width: '30px' }}
              className="mr-2"
            />
            <p className="relative group">
              <span className="relative">Live Preview </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px]  bg-indigo-950 transition-width duration-300 group-hover:w-full"></span>
            </p>
          </a>
        </div>
      </div>
      <div className="" style={{ width: '600px' }}>
        <img src={link} alt={title} />
      </div>
    </div>
  );
};

export default ProjectItem;
