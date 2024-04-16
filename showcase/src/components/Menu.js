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


    useEffect(() => {
    const handleKeyPress = (event) => {
        if (event.key === 'm') {
          setIsOpen(!isOpen);
        }
    };
    document.addEventListener('keydown', handleKeyPress);
    return ()=>{
        document.removeEventListener('keydown', handleKeyPress);
    };
    }, [isOpen]);


    useEffect(() => {
    const handleKeyPress = (event) => {
        if (event.key === 'Escape'){
            setIsOpen(false);
        }
    };
    document.addEventListener('keydown', handleKeyPress);
    
    return ()=>{
        document.removeEventListener('keydown', handleKeyPress);
    };
    }, [isOpen]);

    
    return (
        <section>
        <div class={`fixed inset-0 bg-yellow-300
        ${isOpen ? 'z-50 opacity-100' : '-z-50 opacity-0'} 
        pointer-events-auto`}>
                
        <div class="grid place-items-center py-10 md:py-32 lg:py-32">
            <h2 class="py-6 text-3xl md:text-5xl lg:text-5xl lg:py-16 
            font-bold"><a href="#About" onClick={toggleMenu}>About</a></h2>
                    
            <h2 class="py-6 text-3xl md:text-5xl lg:text-5xl lg:py-16 
            font-bold"><a href="#Projects" onClick={toggleMenu}>Showcase
            </a></h2>
                    
            <h2 class="py-6 text-3xl md:text-5xl lg:text-5xl lg:py-16 
            font-bold"><a href="#Contact" onClick={toggleMenu}>Contact</a></h2>

            <h2 class="py-6 text-3xl md:text-5xl lg:text-5xl lg:py-16 
            underline font-bold">HotKeys</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                <div class="px-4 place-items-center">
                <p class="py-2 font-medium text-lg lg:text-xl">esc -- close</p>
                </div>
                <div class="px-4 place-items-center">
                <p class="py-2 font-medium text-lg lg:text-xl">m -- toggle menu</p>
                <p class="py-2 font-medium text-lg lg:text-xl">j -- scroll down</p>
                <p class="py-2 font-medium text-lg lg:text-xl">k -- scroll up</p>
                </div>
                <div class="px-4 sm:place-items-center">
                <p class="py-2 font-medium text-lg lg:text-xl">s -- searchbar</p>
                <p class="py-2 font-medium text-lg lg:text-xl">d -- toggle darkmode</p> 
                </div>
            </div>
        </div>

        </div>
            
        <div class={`fixed inset-x-0 top-0 bg-stone-100 h-12 p-2 z-40 
        ${isOpen ? 'opacity-0' : ' opacity-100'}`}>
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
