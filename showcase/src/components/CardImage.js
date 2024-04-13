import React from 'react';

function ActionSocialCard(props){
    return (
    
<div class="max-w-md  rounded-xl">
    <div class="grid place-items-center">
    <img src={props.img} alt={props.img_description} class="rounded-xl" />
    </div>
</div>
    );
}

export default ActionSocialCard;
