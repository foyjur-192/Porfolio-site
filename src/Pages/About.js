import React from 'react';
import img from '../Pages/image/img.png'


const About = () => {
    return (
        <div>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex justify-center px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow text-white lg:ml-56  md:w-1/2 lg:pr-5 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 class="text-4xl font-bold title-font text-white tracking-widest bg:css mb-5">About</h1>
                            <p className='mb-5 text-lg'>In Beginning, I started my career as a UI/UX designer, After that, I worked last two years in different freelance marketplaces as a UI/UX designer.</p>
                            <p className='mb-5 text-lg'> I learned HTML and CSS in 2019, But I didn't learn them professionally. Besides. I decided to complete my mission as a full stack web developer .</p>
                            <p className='text-lg mb-5'> I started in 2019 then I enroll in Programming Hero to complete a web development course in 2021 ..</p>
                            <p className='text-lg'>Actually, I really love problem solving,I really enjoy the painful process but end smile is full of satisfactory</p>
      
     
 
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:mr-16 ">
      <img class="object-cover object-center rounded" alt="hero" src={img}/>
    </div>
  </div>
</section>









            {/* <section class="text-white body-font overflow-hidden" id='about'>
                <div class="container lg:w-2/3 px-12 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 text-left">
                            <h1 class="text-4xl font-bold title-font text-white tracking-widest bg:css mb-5">About</h1>
                            <p className='mb-5'>In Beginning, I started my career as a UI/UX designer, After that, I worked last two years in different freelance marketplaces as a UI/UX designer.</p>
                            <p className='mb-5'> I learned HTML and CSS in 2019, But I didn't learn them professionally. Besides. I decided to complete my mission as a full stack web developer .</p>
                            <p> I started in 2019 then I enroll in Programming Hero to complete a web development course in 2021 ..</p>
                        </div>

                        <img alt="ecommerce" class="lg:w-80 w-full lg:h-auto h-40 object-cover object-center rounded" src={img} />
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default About;