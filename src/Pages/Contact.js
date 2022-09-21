import React from 'react';

const Contact = () => {
    return (
        <div>
            <section class="text-gray-600 body-font relative" id='contacts'>
           
                <div class="container px-5 py-24 mx-auto ">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Say Hello??</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-white">Always, I’m open for any project and opportunity.Moreover,<br />
                            if do you want to discuss your upcoming project or any <br />
                            idea you can contact me.</p>
                    </div>
                    <div className='flex justify-center  mt-5 '>
                        <button class="btn bg-cyan-400 mr-2">Call me</button>
                        <div> 
                           <h4>Send a Mail: foyjurrahman191@gmail.com</h4> 
                            <button class="btn bg-cyan-400 mr-2"><a  href='mailto:foyjurrahman191@gmail.com' target="_blank" rel='noopener noreferrer'>Send Email</a></button></div>
                       
                        <div> 
                           <h4>Phone:+8801743331595</h4> 
                            <button class="btn bg-cyan-400"><a  href='https://api.whatsapp.com/send?phone+8801743331595' target="_blank" rel='noopener noreferrer'>Send a Message in Whatapp</a></button></div>
                       
                      
                    </div>
                    <p className='mt-5 text-white'>Design & Developed by Foyjur Rahman</p>
                </div>
            </section>
        </div>
    );
};

export default Contact;