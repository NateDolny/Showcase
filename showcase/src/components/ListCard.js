import React from 'react';

function ListCard(props){
    return (
    
<div class="max-w-md p-8 shadow-sm bg-stone-200 rounded-xl">
    <h3 class="p-2 text-center text-lg font-bold">{props.title}</h3>
    <h4 class="text-center text-lg mb-4">{props.subtitle}</h4>
    <ul>
        <li class="p-2">{props.item1}</li>
        <li class="p-2">{props.item2}</li>
        <li class="p-2">{props.item3}</li>
        <li class="p-2">{props.item4}</li>
    </ul>
</div>
    );
}

export default ListCard;
