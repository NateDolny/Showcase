import React from 'react';
import ActionCard from './ActionCard';
import Github from './github.svg';
import Linkedin from './linkedin-in.svg';
import Envelope from './envelope-solid.svg';

function Contact(){
    return (
        <section id="Contact">
 <h2 class="grid place-items-center text-xl font-bold">Lets Connect</h2>

  <div class="grid grid-row-1 gap-4 sm:grid-cols-3 md:max-w-2xl
        md:mx-auto lg:max-w-4xl m-5">
       
        <ActionCard img={Github} img_description='Github logo'/>

        <ActionCard img={Linkedin} img_description='linkedin logo'/>
        
        <ActionCard img={Envelope} img_description='Envelope logo'/>
        </div>

        </section>
    );
}
export default Contact;
