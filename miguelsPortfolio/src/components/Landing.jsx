import React from 'react';
import Miguel from "../images/thisisme.png"

export const LandingPage = () => {
  return (
    <section className='mt-20 lg:flex md:flex items-center'>
        <div className='mx-auto'>
            <h1 className='text-4xl'>Hi,
                <i class="fa-regular fa-hand fa-xl"></i>
            </h1>
            <p className='text-2xl'>My name is Miguel G,<br/> I love building web applications</p>
        </div>
        <div className='mx-auto flex justify-center'>
            <img className='mx-auto' src={Miguel} alt="" />
        </div>
    </section>
  );
}