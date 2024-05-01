import React from 'react';
import ActionCard from './ActionCard';
import ListCard from './ListCard';

function Certifications(){
    return (
        <section id="Certifications" class="overflow-x-hidden">
        <div class="grid place-items-center m-20 lg:mt-36">
            <h2 class="font-bold text-xl lg:text-3xl">Certifications</h2>
        </div>
        <div class="grid grid-cols-1 gap-16 justify-self-start
            md:grid-cols-2 md:max-w-2xl md:mx-auto lg:grid-cols-2
            lg:max-w-4xl m-5">

            <div class="max-w-md p-8 shadow-sm bg-stone-200 rounded-xl">
            <h3 class="text-center text-lg font-bold">Coming Soon!</h3>
            <div class="p-40"></div>
            </div>

            <a href="#Projects"><div class="max-w-md p-8 shadow-sm 
            bg-yellow-300 rounded-xl hover:shadow-2xl transition duration-500 
            ease-in-out">
            <div class="p-20"></div>
            <h3 class="text-center text-lg font-bold">
            Explore Projects</h3>
            <div class="p-20"></div>
            </div></a>
            </div>

        <div class="p-10 md:p-10 lg:p-20"></div>
        </section>
    );
}
export default Certifications;
