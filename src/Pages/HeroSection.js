import React from 'react';
import './HeroSection.css'
const HeroSection = () => {
    return (
        <div className='pt-48'>
         
            <section class="text-gray-600 body-font   ">
         
                <div class="container  mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div class="text-left lg:w-2/3 w-full">
                        <h5 class="  text-white text-lg">Hello,</h5>
                        <p class="leading-relaxed text-white body font-light text-5xl ">This is</p>
                        <h1 className='font-bold mb-6 text-white title-font text-6xl'>Foyjur Rahman,</h1>
                        <h2 className='text-color font-bold body text-5xl mb-5'>I Design & Develop Websites</h2>
                        <p className='text-white'>Maninly, I’m a Junior Full stact Web developer and UI/UX Designer, I have been working as a UI/UX design since 2020.
                            I have designed so Many websites and mobile app.I worked from sketch to wireframe and final Hi-end Mock up.
                            Currently, I focus on developing Website and web app.</p>
                        <div class="flex justify-left mt-5">
                            <button class="inline-flex text-white bg-css border-0 py-2 px-6 focus:outline-none hover:bg-cyan-400 rounded text-lg">  <a  href='https://drive.google.com/file/d/1G0lo-FTRRfZl1xeWD1jJw7F9EBbxNvBf/view?usp=sharing' target="_blank" rel='noopener noreferrer'>Download Resume</a> </button>
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;