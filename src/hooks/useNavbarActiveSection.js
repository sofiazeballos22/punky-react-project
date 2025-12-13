import { useState, useEffect, useRef } from "react";

const useNavbarActiveSection = (sections) => {
  const [activeSection, setActiveSection] = useState("");
  const isClickingRef = useRef(false);
  const observerRef = useRef(null);

  useEffect(() => {
    // Configurar IntersectionObserver para mejor compatibilidad
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Detecta cuando la sección está en el tercio superior
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
    };

    const observerCallback = (entries) => {
      // Si el usuario hizo clic en un enlace, ignorar temporalmente las actualizaciones
      if (isClickingRef.current) {
        return;
      }

      // Encontrar la sección más visible
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
  }, [sections]);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    isClickingRef.current = true;
    
    // Reactivar la detección automática después de que termine la animación de scroll
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
  };

  return { activeSection, handleLinkClick };
};

export default useNavbarActiveSection;
