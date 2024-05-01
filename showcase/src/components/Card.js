import React, { useState } from 'react';

function Card(props) {

  return (
    <div className="max-w-md p-8 shadow-sm bg-stone-200 rounded-xl 
      hover:shadow-2xl transition duration-500 ease-in-out">
      <a href={props.link}>
        <h3 className="p-2 text-center text-lg font-bold
        lg:text-xl">{props.title}</h3>
        <p className="p-2 leading-relaxed">{props.description}</p>
      </a>
    </div>
  );
}

export default Card;

