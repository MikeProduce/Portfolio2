import React from 'react';

export const NavBar = () => {
  return (
    <nav className='flex justify-between'>
        <ul className='flex p-4 items-center'>
            <li>Miguel</li>
            <li><i class="fa-sharp fa-solid fa-code"></i></li>
        </ul>
        <ul className='lg:flex md:flex p-4 items-center'>
            <li className='mx-2 block'>About</li>
            <li className='mx-2 block'>Contact</li>
            <li className='mx-2 block'>Projects</li>
            <li className='mx-2 block'>Tech stack</li>
            {/* <li><i className='fa-brands fa-linkedin fa-xl mx-2 block '></i></li>
            <li><i class="fa-brands fa-github fa-xl mx-2 block "></i></li>
            <li><i class="fa-brands fa-instagram fa-xl mx-2 block "></i></li> */}
        </ul>
    </nav>
  );
}
