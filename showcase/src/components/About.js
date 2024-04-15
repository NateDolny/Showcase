import React from 'react';

function About(){
    return (
        <section id="About" class="overflow-x-hidden">
            <div class="grid place-items-center pb-2 pt-24">
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

            <div class="p-1"></div>

            <div class="grid grid-cols-1 gap-16 justify-self-start 
            md:justify-self-center md:max-w-2xl md:mx-auto lg:grid-cols-2 
            lg:max-w-4xl m-5">
            
            <div>
            <h3 class="grid place-items-center text-lg font-bold">Download cv</h3>

            <p class="p-4 grid place-items-center">Select your preferred format
            both come packaged in a sleek tape archive for easy 
            downloading.</p>
        
            <div class="grid grid-cols-2 gap-4">
                <button class="p-3 bg-yellow-300 rounded-lg">cv.pdf</button>
                <button class="p-3 bg-yellow-300 rounded-lg">cv.tex</button>
            </div>

            </div>
            </div>
            
            <div class="p-2"></div>
        </section>

    );
}

export default About;
