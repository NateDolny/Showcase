import React, { useEffect } from 'react';

function PagingUp() {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'k') {

        const scrollAmount = window.innerHeight * -0.25; 

        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return null; 
}

export default PagingUp;

