import { useEffect, useRef, useState } from 'react';

/**
 * Hook personalizado para animar cards con efectos secuenciales
 * @param {number} count - Número de cards a animar
 * @param {number} staggerDelay - Delay en ms entre cada card (por defecto 400ms)
 * @returns {Array} Array de refs para cada card
 */
const useCardReveal = (count, staggerDelay = 400) => {
  const cardsRef = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Inicializar el array de refs
  cardsRef.current = Array(count)
    .fill(null)
    .map((_, i) => cardsRef.current[i] || { current: null });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Animar las cards de forma secuencial
          cardsRef.current.forEach((ref, index) => {
            if (ref.current) {
              setTimeout(() => {
                ref.current.classList.add('active');
              }, index * staggerDelay);
            }
          });
          setHasAnimated(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observar la primera card como trigger
    if (cardsRef.current[0]?.current) {
      observer.observe(cardsRef.current[0].current);
    }

    return () => {
      if (cardsRef.current[0]?.current) {
        observer.unobserve(cardsRef.current[0].current);
      }
    };
  }, [hasAnimated, staggerDelay]);

  return cardsRef.current;
};

export default useCardReveal;
