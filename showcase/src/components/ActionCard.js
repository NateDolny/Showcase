import React from 'react';

function ActionCard(props){
    return (
<div class="max-w-md p-8 shadow-sm bg-yellow-300 rounded-xl">
    <a href="https://github.com/NateDolny">    
    <div class="grid place-items-center">
    <img src={props.img} alt={props.img_description} class="w-12 h-12" />
    </div>
    <h3 class="p-2 text-center text-lg font-bold">{props.title}</h3>
    <p class="p-2">{props.description}</p>
    </a>
</div>
    );
}

export default ActionCard;
