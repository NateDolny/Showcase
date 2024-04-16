import React from 'react';
import Card from './Card';
import ActionCard from './ActionCard';
import CardImage from './CardImage';
import TechBrands from './tech.png';
import GithubIcon from './github.svg';

function Projects(){
    return (
        <section id="Projects" class="z-40 overflow-x-hidden">
        <div class="py-10 md:py-10 lg:py-20"></div>

        <h2 class="grid place-items-center text-xl font-bold">Showcase</h2>
        
        <div class="grid m-5">
        <p class="justify-self-center md:max-w-2xl md:mx-auto lg:max-w-4xl">
        Here's a glimpse of a few projects I've developed as part of my journey 
        in learning DevOps practices. These projects serve as tangible evidence 
        of my commitment to mastering this field. I invite you to checkout my 
        GitHub account, where you'll find a rich array of examples awaiting 
        your discovery.</p>
        </div>

        <div class="p-2"></div>

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

        <div class="p-8"></div>

        <div class="grid grid-row-1 gap-4 sm:grid-cols-2 md:max-w-2xl 
        md:mx-auto lg:max-w-4xl m-5">

        <div class="p-4"> 
            <h3 class="text-xl font-bold">Trusted Technologies</h3>
            <p>All projects were developed utilizing one or more of the
            industry's leading technologies.</p>
        </div>
        <CardImage img={TechBrands} />
        </div> 
        
        <div class="py-5 md:py-5 lg:py-8"></div>
        </section>
    );
}
export default Projects;
