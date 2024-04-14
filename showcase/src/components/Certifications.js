import React from 'react';
import ActionCard from './ActionCard';
import ListCard from './ListCard';

function Certifications(){
    return (
        <section id="Certifications">
        <div class="grid place-items-center m-20">
            <h2 class="font-bold text-xl">Certifications</h2>
        </div>
        <div class="grid grid-cols-1 gap-16 justify-self-start
            md:grid-cols-2 md:max-w-2xl md:mx-auto lg:grid-cols-2
            lg:max-w-4xl m-5">

            <div class="max-w-md p-8 shadow-sm bg-stone-200 rounded-xl">
            <h3 class="text-center text-lg font-bold">Coming Soon!</h3>
            <div class="p-40"></div>
            </div>

            <div class="max-w-md p-8 shadow-sm bg-yellow-300 rounded-xl">
            <div class="p-20"></div>
            <h3 class="text-center text-lg font-bold">Explore Projects</h3>
            <div class="p-20"></div>
            </div>
            </div>

        <div class="p-20 md:p-32 lg:p-32"></div>
        </section>
    );
}
export default Certifications;
