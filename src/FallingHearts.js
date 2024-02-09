import React, { useEffect, useRef } from 'react';
import './FallingHearts.css';

const FallingHearts = () => {
  const containerRef = useRef(null);
  const heartsPerSecond = 10; // Adjust the number of hearts falling per second

  useEffect(() => {
    const container = containerRef.current;
    const createHeart = () => {
      const heart = new Image();
      const isPinkHeart = Math.random() < 0.5;

      heart.src = isPinkHeart ? 'heart_pink.png' : 'heart_red.png'; // Replace with the correct paths
      heart.classList.add('heart');
      container.appendChild(heart);

      const startX = Math.random() * window.innerWidth;
      const endX = Math.random() * window.innerWidth;

      heart.style.left = `${startX}px`;

      setTimeout(() => {
        heart.style.transform = `translate(${endX - startX}px, ${window.innerHeight}px)`;
      }, 0);

      heart.addEventListener('animationiteration', () => {
        heart.remove();
      });
    };

    const intervalId = setInterval(createHeart, 1000 / heartsPerSecond);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return <div ref={containerRef} className="falling-hearts" />;
};

export default FallingHearts;
