import React from 'react';
import Miguel from "../images/thisisme.png"
import { Fade,Slide } from "react-awesome-reveal";

export const LandingPage = () => {
  return (
    <section className='py-20 lg:flex md:flex items-center px-10 lg:px-20 '>
        <div className='justify-between flex-grow p-4'>
          <Slide>
            <h1 className='text-6xl my-10 font-semibold'>Hi,
                <i class="fa-regular fa-hand fa-xl"></i>
            </h1>
            <p className='text-5xl font-semibold'>My name is <br/> Miguel G,<br/> I love building web applications</p>
            </Slide>
        </div>
        <div className='mx-auto flex justify-center'>
          <Slide triggerOnce direction='right'>
            <img className='object-cover' src={Miguel} alt="" />
            </Slide>
        </div>
    </section>
  );
}
