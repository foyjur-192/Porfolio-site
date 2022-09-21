import React from 'react';
import furniture from '../Pages/image/manufacturer1.png'
import furniture2 from '../Pages/image/Manufactur2.png'
import furniture3 from '../Pages/image/manufacturr-3.png'
import { useNavigate } from 'react-router-dom';


const Car = () => {
    const navigate = useNavigate();
    return (
        <div className='background'>
                 <div className=' fixed '>
                <div className='menu-background invisible lg:visible  text-white absolute top-96 left-0' >
                    <ul className=' text-left '>
                        <li className='mb-7 hover:bg-cyan-500 py-3 pr-16 pl-8 'onClick={() => navigate('/home')} >Home</li>
                    </ul>
                </div>
            </div>
        <section class="text-gray-600 body-font overflow-hidden">
<div class="container px-5 py-24 mx-auto">
<div class="lg:w-4/5 mx-auto flex flex-wrap">
<div class="carousel w-full">
<div id="slide1" class="carousel-item relative w-full">
<img src={furniture} class="w-full" />
<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
 <a href="#slide4" class="btn btn-circle">❮</a> 
 <a href="#slide2" class="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide2" class="carousel-item relative w-full">
<img src={furniture2} class="w-full" />
<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
 <a href="#slide1" class="btn btn-circle">❮</a> 
 <a href="#slide3" class="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide3" class="carousel-item relative w-full">
<img src={furniture3} class="w-full" />
<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
 <a href="#slide2" class="btn btn-circle">❮</a> 
 <a href="#slide4" class="btn btn-circle">❯</a>
</div>
</div> 

</div>
 <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex ml-80  ">
     <div>
     <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Product Manufacturer Company Website </h1>
          <p class="leading-relaxed mb-3 text-white">Features: Product order, Admin Dashboard, JWT implementation, Reviews, User removal, admin, Email and social media log in.</p>
          <p class="leading-relaxed mb-5 text-white">Technology: React, Bootstrap,Node js,heroku, Express, MongoDB ,firebase,JWT</p>

        <div className='flex justify-between mt-5'>
        <button class="inline-flex text-white bg-css border-0 py-2 px-6 focus:outline-none hover:bg-cyan-400 rounded text-lg">  <a  href='https://parts-car-9d05a.web.app/' target="_blank" rel='noopener noreferrer'>Live</a> </button>
        <button class="inline-flex text-white bg-css border-0 py-2 px-6 focus:outline-none hover:bg-cyan-400 rounded text-lg">  <a  href='https://github.com/foyjur-192/car-parts-Manufacturer' target="_blank" rel='noopener noreferrer'>Client Site</a> </button>
        <button class="inline-flex text-white bg-css border-0 py-2 px-6 focus:outline-none hover:bg-cyan-400 rounded text-lg">  <a  href='https://github.com/foyjur-192/manufacturing-server' target="_blank" rel='noopener noreferrer'>Server Site</a> </button>
        </div>
     </div>


  
 </div>
</div>
</div>
</section>
   </div>
    );
};

export default Car;