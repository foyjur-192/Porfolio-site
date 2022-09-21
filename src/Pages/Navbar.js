import React from 'react';
import image from '../Pages/image/logo.png'
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
    return (
        <div>
            <div class="navbar menu-background fixed ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-Cyan-500   lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu text-white menu-compact dropdown-content mt-3 p-2 shadow bg-background rounded-box w-52">
                            <li><Link to='#about'>About</Link></li>
                            <li><Link to='#skills'>Skills</Link></li>
                            <li><Link to='#projects'>Projects</Link></li>
                            <li><Link to='#contacts' >Contact</Link></li>
                          
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl"><img className='h-10'  src={image} alt="" /></a>
                </div>
                <div class="navbar-center hidden lg:flex lg:hidden">
                    <ul class="menu text-white menu-horizontal p-0">
                        <li><a>About</a></li>
                        <li>
                            <a>
                                Skills
                            </a>
                        </li>
                        <li><a>Projects</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    
                    <button class="ease-in-out  duration-300 inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-400 rounded text-lg"> <a  href='https://drive.google.com/file/d/1G0lo-FTRRfZl1xeWD1jJw7F9EBbxNvBf/view?usp=sharing' target="_blank" rel='noopener noreferrer'>Download Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;