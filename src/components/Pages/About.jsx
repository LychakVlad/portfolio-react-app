import React from 'react';
import LargeSubTitle from '../Titles/LargeSubTitle';
import LargeTitle from '../Titles/LargeTitle';
import MediumTitle from '../Titles/MediumTitle';
import HikingPhoto from '../../assets/hiking.JPG';

const About = () => {
  return (
    <div className="section container xl  mx-auto min-h-screen text-indigo-950 flex items-center font-poppins flex-col">
      <div className="text-center my-20">
        <LargeTitle title="About me" />
      </div>
      <div className="grid  grid-cols-3">
        <div className=" bg-white p-12  rounded-3xl  mr-12 hover:scale-105 transition-transform duration-300 cursor-default relative group">
          <MediumTitle title="Experience" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            adipisci quis repudiandae placeat libero sed, alias ullam veniam
            velit, cupiditate eius. Fuga voluptatum repudiandae quod nostrum
            fugiat asperiores, reprehenderit quidem autem sit necessitatibus
            corporis officia reiciendis beatae.
          </p>
        </div>
        <div className=" bg-white p-12  rounded-3xl mr-12 hover:scale-105 transition-transform duration-300 cursor-default relative group">
          <MediumTitle title="Personal" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            adipisci quis repudiandae placeat libero sed, alias ullam veniam
            velit, cupiditate eius. Fuga voluptatum repudiandae quod nostrum
            fugiat asperiores, reprehenderit quidem autem sit necessitatibus
            corporis officia reiciendis.
          </p>
        </div>
        <div className=" bg-white  rounded-3xl  overflow-hidden relative">
          <img
            src={HikingPhoto}
            alt="photo"
            className=" object-contain object-center absolute bottom-0 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
