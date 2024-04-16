import React from 'react';

function Footer(){
 return (
    <section id="Footer" class="overflow-x-hidden">
   
    <div class="p-50"></div>

    <div class="grid grid-rows-1 gap-4 md:grid-cols-4 lg:grid-cols-4
     bg-stone-200 min-w-full">
        <div class="grid m-5 mb-2 md:justify-self-center lg:justify-self-center">
            <p class="font-bold">Nate Dolny</p>
            <p>Saskatoon,SK</p>
            <br/>
            <p>Copyright &#169; 2025</p>
            <p>All Rights Reserved</p>
        </div>

        <div class="grid m-5 mb-2 md:justify-self-center lg:justify-self-center">
            <p class="font-bold">Sections</p>
            <p class="m-2 ml-0">About</p>
            <p class="m-2 ml-0">Showcase</p>
            <p class="m-2 ml-0">Contact</p>
        </div>

        <div class="grid m-5 mb-2 md:justify-self-center lg:justify-self-center">
            <p class="font-bold">Contact</p>
            <p class="m-2 ml-0"><a href="https://github.com/NateDolny">
            Github</a></p>
            <p class="m-2 ml-0"><a href="https://ca.linkedin.com/in/nate-dolny"
            >Linkedin</a></p>
            <p class="m-2 ml-0"><a href="mailto:aht648@usask.ca">Email</a></p>
        </div>

        <div class="grid m-5 mb-2 md:justify-self-center lg:justify-self-center">
            <p class="font-bold">Support Me</p>
            <p class="m-2 ml-0">Buy me a coffee</p>
        </div>
    </div>
    </section>
    );
}
export default Footer;
