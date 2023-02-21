import projectData from '../JSON/data.json';
import React, { useState } from 'react';

export const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const projectsArr = projects.projects;

  return (
    <section className='mt-20 my-20'>
      <h1 className='text-5xl text-center font-semibold'>Projects</h1>
      <p className='text-center mb-4'>Things I've Built</p>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 flex justify-center'>
        {projectsArr.map((project, index) => (
          <div key={index} className=" mx-4 justify-center shadow-2xl rounded-2xl mx-auto mb-10">
            <img src={project.image} alt="web" />
            <h1 className='text-2xl p-2'>{project.title}</h1>
            <p className='p-2'>{project.description}</p>
            <p className='p-2'>Tech Stack: {...project.techStack}</p>
            <div className='py-2'>
              <a className='mx-2' href={project.github}>GitHub Repo</a>
              <a className='mx-2' href={project.liveSite}>Live Site</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

