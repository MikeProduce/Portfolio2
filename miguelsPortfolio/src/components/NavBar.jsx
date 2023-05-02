import React from 'react';

export const NavBar = () => {
  return (
    <nav className='flex justify-between bg-Very-Light-Gray px-10 lg:px-20 py-2 drop-shadow-xl'>
      <ul className='flex p-4 items-center'>
        <li>Miguel</li>
        <li><i class="fa-sharp fa-solid fa-code"></i></li>
      </ul>
      <ul className='lg:flex md:flex p-4 items-center'>
        <li className='mx-2 block transition hover:scale-110 cursor-pointer'>About</li>
        <li className='mx-2 block transition hover:scale-110 cursor-pointer'>Contact</li>
        <li className='mx-2 block transition hover:scale-110 cursor-pointer'>Projects</li>
        <li className='mx-2 block transition hover:scale-110 cursor-pointer'>Tech stack</li>
        {/* <li><i className='fa-brands fa-linkedin fa-xl mx-2 block '></i></li>
            <li><i class="fa-brands fa-github fa-xl mx-2 block "></i></li>
            <li><i class="fa-brands fa-instagram fa-xl mx-2 block "></i></li> */}
      </ul>
    </nav>
  );
}
