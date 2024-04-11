import React from 'react';
import Card from './Card';
import ActionCard from './ActionCard';
import GithubIcon from './github.svg';

function Projects(){
    return (
        <section id="Projects">
            <h2 class="grid place-items-center text-xl font-bold">Showcase</h2>
            
        <div class="grid grid-row-1 gap-4 sm:grid-cols-2 md:max-w-2xl 
        md:mx-auto lg:max-w-4xl m-5">
            <Card title='barefetch' description='barefetch delivers essential
            system info with minimal clutter, perfect for GNU/Linux users
            seeking streamlined performance.'/>

            <Card title='DuneHostnames' description='Inspired by the iconic 
            book series Dune, authored by Frank Herbert, DuneHostnames offers a
            comprehensive array of naming schemes for network infrastructure,
            workstations, servers, and other devices.'/>

            <Card title='Void-config' description='A script for automatically
            setting up a Void Linux desktop environment'/>

            <ActionCard img={GithubIcon} img_description='github icon' 
            title='Explore More'/>
        </div>

        <div class="p-10"></div>
        </section>
    );
}
export default Projects;
