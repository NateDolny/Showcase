import React from 'react';
import ActionCard from './ActionCard';
import Github from './github.svg';
import Linkedin from './linkedin-in.svg';
import Envelope from './envelope-solid.svg';

function Contact(){
    return (
        <section id="Contact">
        <h2 class="text-xl font-bold">Lets Connect</h2>
       
        <ActionCard img={Github} img_description='Github logo'/>

        <ActionCard img={Linkedin} img_description='linkedin logo'/>
        
        <ActionCard img={Envelope} img_description='Envelope logo'/>
        </section>
    );
}
export default Contact;
