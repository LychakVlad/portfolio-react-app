import React from 'react';
import Photo from '../assets/photo.jpg';

const Home = () => {
  return (
    <div
      id="home"
      className="section container xl m-auto min-h-screen text-indigo-950 flex items-center justify-around font-poppins"
    >
      <div>
        <h1 className="font-bold  text-7xl   mx-4  leading-tight">
          Hi <span className="inline-block animate-waving-hand">👋 </span>
          <br /> My name is{' '}
          <p className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
            Vladislav Lychak
          </p>
        </h1>
        <h2 className="font-medium text-3xl   m-4  leading-tight text-indigo-900 max-w-md">
          Front end developer with passion for problem solving and creating new
          things
        </h2>
      </div>
      <div>
        <div
          className="shape overflow-hidden shadow-2xl"
          style={{ width: '400px' }}
        >
          <img src={Photo} alt="My photo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
