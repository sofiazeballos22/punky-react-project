import { useState, useEffect } from 'react';

/**
 * Hook para crear efecto de máquina de escribir letra por letra con cursor
 * @param {string} text - Texto completo a mostrar
 * @param {number} speed - Velocidad en ms entre cada letra
 * @param {number} delay - Delay inicial antes de comenzar
 */
export const useTypingEffect = (text, speed = 50, delay = 0) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;

    // Reset
    setDisplayedText('');
    setIsTyping(false);
    setIsComplete(false);

    // Delay inicial
    const initialTimeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          setIsComplete(true);
          clearInterval(typingInterval);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(initialTimeout);
  }, [text, speed, delay]);

  return { displayedText, isTyping, isComplete };
};
