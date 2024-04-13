import React from 'react';
import ListCard from './ListCard';

function Volunteering(){
    return (
        <section id="Volunteering">
        <div class="grid place-items-center m-20">
            <h2 class="font-bold text-xl">Volunteering</h2>
        </div>
        
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <ListCard title='Computer Science Student Society'
        subtitle='Office Manager'
        item1='&#x2022; Responsible for supply of new and old inventory'
        item2='&#x2022; Responsible for setting markup prices for new inventory'
        item3='&#x2022; Responsible for managing office hours of operation'
        item4='&#x2022; Ensured stock inventory and executive tabs kept accurate'/>

        <ListCard title='Access and Equality Services' 
        subtitle='Notetaker'
        item1='&#x2022; Created structured notes based on lecture materials'
        item2='&#x2022; Uploaded notes for students registered with Access and Equality
        Services'/>
        </div>
        </section>
    );
}
export default Volunteering;
