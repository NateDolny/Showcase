import React from 'react';

function ActionSocialCard(props){
    return (
    
<div class="max-w-md p-8 shadow-sm bg-yellow-300 rounded-xl">
    <div class="grid place-items-center p-4">
    <img src={props.img} alt={props.img_description} class="w-12 h-12" />
    </div>
</div>
    );
}

export default ActionSocialCard;
