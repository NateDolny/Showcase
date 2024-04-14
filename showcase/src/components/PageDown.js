import React, { useEffect } from 'react';

function PagingDown() {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'j') {
        const scrollAmount = window.innerHeight * 0.25;

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

export default PagingDown;

