import { useEffect, useRef, useState } from 'react';

/**
 * Hook para animar una sola card cuando entra en viewport
 * @returns {Object} ref para la card
 */
const useSingleCardReveal = () => {
  const cardRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          entry.target.classList.add('active');
          setHasAnimated(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated]);

  return cardRef;
};

export default useSingleCardReveal;
