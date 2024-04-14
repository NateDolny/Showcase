import React, { useState, useEffect } from 'react';
import xmark from './xmark-solid.svg';
import bars from './bars-solid.svg';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = ''; 
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section>
        <div class={`fixed inset-0 bg-yellow-300 z-50 transition-opacity 
        duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'} 
        pointer-events-auto`}>
                
        <div class="grid place-items-center py-24 md:py-32 lg:py-32">
            <h2 class="py-10 text-3xl md:text-5xl lg:text-5xl lg:py-16 
            font-bold">About</h2>
                    
            <h2 class="py-10 text-3xl md:text-5xl lg:text-5xl lg:py-16 
            font-bold">Showcase</h2>
                    
            <h2 class="py-10 text-3xl md:text-5xl lg:text-5xl lg:py-16 
            font-bold">Contact</h2>

            <h2 class="py-10 text-3xl md:text-5xl lg:text-5xl lg:py-16 
            font-bold">Help</h2>
        </div>

        </div>
            
        <div class={`fixed inset-x-0 top-0 bg-stone-100 h-12 p-2 z-40 
        transition-opacity duration-300 ease-in-out 
        ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
        </div>
            
        <button class="fixed top-0.5 right-0.5 text-white py-2 px-4 
        rounded-full z-50" onClick={toggleMenu}>
                
        {isOpen ? <img src={xmark} alt="Close Menu" class="w-8 h-8" /> : 
        <img src={bars} alt="Open Menu" class="w-8 h-8" />}
        </button>

        </section>
    );
}

export default Menu;

