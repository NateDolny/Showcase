import React from 'react';

function Card(props){
    return (
    
<div class="max-w-md p-8 shadow-sm bg-stone-200 rounded-xl">
    <h3 class="p-2 text-center text-lg font-bold">{props.title}</h3>
    <p class="p-2">{props.description}</p>
</div>
    );
}

export default Card;
