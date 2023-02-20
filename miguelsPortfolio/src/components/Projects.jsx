import projectData from '../JSON/data.json';
import React, { useState } from 'react';

export const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const projectsArr = projects.projects;
  console.log(projectsArr.map((item) => console.log(...item.techStack)));

  return (
    <section className='mt-20'>
      <h1 className='text-center'>Projects</h1>
      <p className='text-center mb-4'>Things I've Built</p>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
        {projectsArr.map((project, index) => (
          <div key={index} className="p-2 flex justify-center">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <img src={project.image} alt="" />
            <p>{...project.techStack}</p>
            <div>
              <button><a href={project.github}>GitHub Repo</a></button>
              <button><a href={project.liveSite}>Live Site</a></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
