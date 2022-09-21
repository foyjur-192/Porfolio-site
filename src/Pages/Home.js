import React from 'react';
import './Home.css';
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { HashLink as Link } from 'react-router-hash-link';





const Home = () => {

    return (

        <div className='background'>
            <div className=' fixed '>
                <div className='menu-background invisible lg:visible  text-white absolute top-96 left-0' >
                    <ul className=' text-left '>
                        <li className='mb-7 hover:bg-cyan-500 py-3 pr-16 pl-8 ' ><Link to='#about'>About</Link></li>
                        <li className='mb-7 hover:bg-cyan-500 py-3 pr-16 pl-8'><Link to='#skills'>Skills</Link></li>
                        <li className='mb-7 hover:bg-cyan-500 py-3 pr-16 pl-8'><Link to='#projects'>Projects</Link></li>
                        <li className='py-3 hover:bg-cyan-500 pr-16 pl-8' ><Link to='#contacts'>Contact</Link></li>

                    </ul>
                </div>

            </div>

            <HeroSection></HeroSection>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>

    );
};

export default Home;