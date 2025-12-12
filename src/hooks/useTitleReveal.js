import { useEffect, useRef, useState } from 'react';

/**
 * Hook personalizado para animar títulos y subtítulos al entrar en viewport
 * Aplica efecto de "levantamiento" desde el centro con opacidad gradual
 */
const useTitleReveal = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Se activa cuando el 20% del elemento es visible
      rootMargin: '0px 0px -50px 0px' // Un pequeño margen inferior
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Añadir clase 'active' al título
          if (titleRef.current) {
            titleRef.current.classList.add('active');
          }
          // Añadir clase 'active' al subtítulo
          if (subtitleRef.current) {
            subtitleRef.current.classList.add('active');
          }
          // Marcar como animado para que solo se ejecute una vez
          setHasAnimated(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observar el título principal
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Cleanup
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, [hasAnimated]);

  return { titleRef, subtitleRef };
};

export default useTitleReveal;
