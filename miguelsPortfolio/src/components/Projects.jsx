import projectData from '../JSON/data.json';
import React, { useState } from 'react';

export const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const projectsArr = projects.projects;

  return (
    <section className='py-20 md:px-20  px-5 lg:px-20 bg-white lg:px-20'>
      <h1 className='text-5xl text-center font-semibold'>Projects</h1>
      <p className='text-center mb-4'>Things I've Built</p>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 flex justify-center'>
        {projectsArr.map((project, index) => (
            <div className='m-5 bg-Very-Light-Gray mt-10 rounded-xl transition hover:scale-110 cursor-pointer hover:drop-shadow-xl' key={index}>
              <img className='rounded-t-xl w-full object-cover' src={project.image} alt={project.image} />
              <h1 className='text-xl text-center p-4'>{project.title}</h1>
              <h1 className='text-md px-6 p-4'>{project.description}</h1>
              <p className='p-4'>Tech Stack: {project.techStack}</p>
              <a href={project.github} className='p-4 text-sm text-Grayish-Blue'>GitHub Repo</a>
              <a href={project.liveSite} className='p-4  text-sm text-Grayish-Blue'>LiveSite</a>
            </div>))}
      </div>
    </section>
  );
}

