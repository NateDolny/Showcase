import React from 'react';

function About(){
    return (
        <section id="about">
            <div class="grid place-items-center m-10">
                <h2 class="text-center text-3xl font-bold">Hi I am Nate</h2>
            </div>
        

            <div class="grid m-5">
                <p class="justify-self-center md:max-w-2xl md:mx-auto 
                lg:max-w-4xl">As a third-year computer science student 
                at the
                University of Saskatchewan, my passion for technology has been 
                the driving force behind my creative endeavors. Inspired by the 
                immersive worlds of science fiction, particularly classics like 
                Dune, I have embarked on numerous projects fuled by imagination 
                and a thirst for learning.</p>
            </div>

            <div class="grid m-5">
                <p class="justify-self-center md:max-w-2xl md:mx-auto 
                lg:max-w-4xl">I am also deeply immersed in the 
                GNU / Linux 
                ecosystem, finding joy in its versatility and open-source 
                ethos. Recently, I have found myself drawn to the intricate 
                realm of DevOps. Exploring this field has aligned perfectly 
                with my profound interest in automation, while sparking a keen 
                curiosity about deploying infastructure. I am eager to apply 
                my education, personal experiences, and love for GNU / Linux 
                to excel in this dynamic field.</p>
            </div>

            <div class="grid grid-rows-1 grid-flow-col gap-2 md:max-w-2xl 
            md:mx-auto lg:max-w-4xl m-5">
            <button class="p-3 bg-yellow-300 rounded-lg md:max-w-2xl 
            md:max-auto lg:max-w-md">Explore Projects</button>
            </div>

        </section>

    );
}

export default About;
