import { useState, useEffect, useRef } from "react";

/**
 * Hook para detectar qué sección está actualmente visible en el viewport
 * Usa IntersectionObserver para mejor rendimiento y compatibilidad
 * @param {Array<string>} sections - Array de IDs de las secciones a monitorear
 * @param {number} offset - Offset desde el top (no usado, mantenido por compatibilidad)
 * @returns {Object} { activeSection, setActiveSection } - Sección activa y función para cambiarla manualmente
 */
export const useActiveSection = (sections = [], offset = 100) => {
  const [activeSection, setActiveSection] = useState("");
  const isClickingRef = useRef(false);
  const observerRef = useRef(null);

  const handleSetActiveSection = (section) => {
    isClickingRef.current = true;
    setActiveSection(section);
    
    // Reactivar detección automática después del scroll
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    // Configurar IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: `-${offset}px 0px -50% 0px`,
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
    };

    const observerCallback = (entries) => {
      if (isClickingRef.current) return;

      // Encontrar la sección con mayor visibilidad
      let mostVisibleSection = null;
      let maxRatio = 0;

      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      } else if (!entries.some(e => e.isIntersecting)) {
        setActiveSection("");
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todas las secciones
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections, offset]);

  return { activeSection, setActiveSection: handleSetActiveSection };
};
