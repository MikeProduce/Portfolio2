import React from 'react';
import Miguel from "../images/thisisme.png"

export const LandingPage = () => {
  return (
    <section className='mt-20 lg:flex md:flex items-center'>
        <div className='justify-between flex-grow p-4'>
            <h1 className='text-6xl my-10'>Hi,
                <i class="fa-regular fa-hand fa-xl"></i>
            </h1>
            <p className='text-5xl'>My name is <br/> Miguel G,<br/> I love building web applications</p>
        </div>
        <div className='mx-auto flex justify-center'>
            <img className='h-50' src={Miguel} alt="" />
        </div>
    </section>
  );
}
