import React from 'react';
import  Javascript from "../images/icons/Javascript.svg";
import  Css from "../images/icons/css-icon.svg";
import  Express from "../images/icons/express-js-icon.svg";
import  git from "../images/icons/git-icon.svg";
import  gitHub from "../images/icons/github-icon.svg";
import  Html from "../images/icons/html-icon.svg";
import  MySQL from "../images/icons/mysql-icon.svg";
import  ReactIcon from "../images/icons/react-js-icon.svg";
import  Redux from "../images/icons/redux-icon.svg";
import  Tailwind from "../images/icons/tailwind-css-icon.svg";
import  VsCode from "../images/icons/visual-studio-code-icon.svg"
import  Boostrap from "../images/icons/bootstrap-5-logo-icon.svg"



export const TechStack = () => {

    const logos = [Html,Css,Javascript,ReactIcon,Redux,Express,git,gitHub,MySQL,VsCode,Boostrap,Tailwind]
    return (
        <section className='py-20 bg-Very-Light-Gray  px-10 lg:px-20 '>
            <h1 className='text-center text-5xl font-semibold'>Tech Stack</h1>
            <p className='text-center mb-4'>Technologies I've worked with</p>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 mx-auto" >
              {logos.map((logo, index) => (
                <div key={index} className=" p-2 flex justify-center mt-10">
                  <img src={logo} alt="logo" className="h-20" />
                </div>
              ))}
            </div>
        </section>
      );
}