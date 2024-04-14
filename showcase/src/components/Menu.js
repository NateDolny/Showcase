import React from 'react';
import xmark from './xmark-solid.svg';
import CardImage from './CardImage';

function Menu(){
    return (
    <section>
    <div class="bg-yellow-300 min-h-screen">

    <div class="p-5 w-full"> 
    <div class="w-12 h-12">
    <CardImage img={xmark}/>
    </div>
    </div>
    
    <div class="grid place-items-center py-24 md:py-32 lg:py-32">
    <h2 class="py-10 text-3xl md:text-5xl 
        lg:text-5xl lg:py-16 font-bold">About</h2>

    <h2 class="py-10 text-3xl md:text-5xl
        lg:text-5xl lg:py-16 font-bold">Showcase</h2>

    <h2 class="py-10 text-3xl md:text-5xl
        lg:text-5xl lg:py-16 font-bold">Contact</h2>

    <h2 class="py-10 text-3xl md:text-5xl 
        lg:text-5xl lg:py-16 font-bold">Help</h2>
    </div>
    
    </div>
    </section>
    );
}
export default Menu;
