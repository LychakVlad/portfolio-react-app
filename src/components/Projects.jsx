import React from 'react';
import LargeTitle from './LargeTitle';
import LargeSubTitle from './LargeSubTitle';
import ProjectItem from './ProjectItem';
import Allegria from '../assets/allegria.png';
import ToDo from '../assets/ToDo.png';

const Projects = () => {
  const firstProject = {
    title: 'E-commerce-website',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techs: ['Pug', 'Js', 'Scss', 'Gulp'],
  };

  const secondProject = {
    title: 'TO-DO app',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techs: ['HTML', 'React', 'Tailwind'],
  };

  return (
    <div className="section container xl  mx-auto min-h-screen text-indigo-950 flex items-center font-poppins flex-col">
      <div className="text-center my-20">
        <LargeTitle title="Projects" />
        <LargeSubTitle title="Things i have built so far" />
      </div>
      <div>
        <ProjectItem
          link={Allegria}
          title={firstProject.title}
          description={firstProject.description}
          techs={firstProject.techs}
        />
        <ProjectItem
          link={ToDo}
          title={secondProject.title}
          description={secondProject.description}
          techs={secondProject.techs}
        />
      </div>
    </div>
  );
};

export default Projects;
