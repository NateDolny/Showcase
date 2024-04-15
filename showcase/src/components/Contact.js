import React from 'react';
import ActionSocialCard from './ActionSocialCard';
import Github from './github.svg';
import Linkedin from './linkedin-in.svg';
import Envelope from './envelope-solid.svg';

function Contact(){
    return (
        <section id="Contact" class="overflow-x-hidden">
        
        <div class="py-10 md:py-10 lg:py-20"></div>

        <h2 class="grid place-items-center text-xl font-bold">Lets Connect</h2>

        <div class="grid m-5">
        <p class="justify-self-center md:max-w-2xl md:mx-auto lg:max-w-4xl">
        I'm always eager to embrace new learning opportunities and collaborate 
        on exciting projects. Lets connect and build something awesome together
        !</p>
        </div>

        <div class="p-4 md:p-10 lg:p-10"></div>

        <div class="grid grid-row-1 gap-4 sm:grid-cols-3 md:max-w-2xl
        md:mx-auto lg:max-w-4xl m-5">
       
        <ActionSocialCard img={Github} img_description='Github logo'/>

        <ActionSocialCard img={Linkedin} img_description='Linkedin logo'/>
        
        <ActionSocialCard img={Envelope} img_description='Envelope logo'/>
        </div>


        <div class="p-16 md:p-48 lg:p-48"></div>

        </section>
    );
}
export default Contact;
