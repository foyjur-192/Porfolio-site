import React from 'react';
import furniture from '../Pages/image/furniture1.png'
import manufacturer from '../Pages/image/manufacturer1.png'
import gym from '../Pages/image/Gym1.png'
import { useNavigate } from 'react-router-dom';
const Projects = () => {
  const navigate = useNavigate();
    return (
        <div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 lg:mx-80">
    <div className='mb-28'>  <h1 class="sm:w-2/5 lg:w-full text-white font-medium title-font text-4xl text-center mb-2 sm:mb-0"> Featured Projects</h1></div>
      
  
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={furniture}/>
        </div>
        <h2 class="text-xl  font-medium title-font text-white mb-5 mt-5">Furniture Inventory Management Website</h2>
        <button class="inline-flex text-white bg-css border-0 py-2 px-6 focus:outline-none hover:bg-cyan-400 rounded text-lg" onClick={() => navigate('/furniture')}>Details </button>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={manufacturer}/>
        </div>
        <h2 class="text-xl  font-medium title-font text-white mb-5 mt-5">Car Parts Manufacturer Company Website</h2>
        <button class="inline-flex text-white bg-css border-0 py-2 px-6 focus:outline-none hover:bg-cyan-400 rounded text-lg" onClick={() => navigate('/car')}> Details </button>
       
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={gym}/>
        </div>
        <h2 class="text-xl  font-medium title-font text-white mb-5 mt-5">Gym Trainer Website</h2>
        <button class="inline-flex text-white bg-css border-0 py-2 px-6 focus:outline-none hover:bg-cyan-400 rounded text-lg" onClick={() => navigate('/gym')}> Details </button>
      </div>
    </div>
  </div>
</section>





            {/* <section class="text-gray-600 body-font " id='projects'>
  <div class="container px-8 py-24 mx-auto lg:w-2/3">
      <h1 className='mb-16 text-center text-white  text-5xl'>Feature Projects</h1>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-background bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-left relative">
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">WireHouse Management Website</h1>
          <p class="leading-relaxed mb-3 text-white">Featured: Product Add and remove, Total Product Management, Display available Products, Email, and social media login system</p>
          <p class="leading-relaxed mb-5 text-white">Technology: React, Bootstrap,Node js,heroku, Express, MongoDB ,firebase,JWT</p>

        <div className='flex justify-between mt-5'>
        <button class="btn bg-cyan-400  mr-1">Live Site</button>
        <button class="btn bg-cyan-400  mr-1">Client Site</button>
        <button class="btn bg-cyan-400 ">Server Site</button>
        </div>
        </div>


      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-background bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-left relative">
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Product Manufacturer Company Website </h1>
          <p class="leading-relaxed mb-3 text-white">Features: Product order, Admin Dashboard, JWT implementation, Reviews, User removal, admin, Email and social media log in.</p>
          <p class="leading-relaxed mb-5 text-white">Technology: React, Bootstrap,Node js,heroku, Express, MongoDB ,firebase,JWT</p>

        <div className='flex justify-between mt-5'>
        <button class="btn bg-cyan-400  mr-1">Live Site</button>
        <button class="btn bg-cyan-400  mr-1">Client Site</button>
        <button class="btn bg-cyan-400 ">Server Site</button>
        </div>
        </div>
      </div>



      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-background bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-left relative">
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">The gym Trainer website</h1>
          <p class="leading-relaxed mb-3 text-white">Features:  Services Packages, Email, and Social media Login and sign up</p>
          <p class="leading-relaxed mb-5 text-white">Technology: HTML, CSS, React js, Firebase</p>

        <div className='flex justify-between mt-5'>
        <button class="btn bg-cyan-400  mr-1">Live Site</button>
        <button class="btn bg-cyan-400  mr-1">Client Site</button>
        <button class="btn bg-cyan-400 ">Server Site</button>
        </div>
        </div>
      </div>
     
     
    </div>
  </div>
</section> */}
        </div>
    );
};

export default Projects;