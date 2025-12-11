import { useState, useEffect, useRef } from "react";

/**
 * Hook para detectar qué sección está actualmente visible en el viewport
 * @param {Array<string>} sections - Array de IDs de las secciones a monitorear
 * @param {number} offset - Offset desde el top para determinar la sección activa (default: 100)
 * @returns {Object} { activeSection, setActiveSection } - Sección activa y función para cambiarla manualmente
 */
export const useActiveSection = (sections = [], offset = 100) => {
  const [activeSection, setActiveSection] = useState("");
  const scrollTimeoutRef = useRef(null);
  const isClickingRef = useRef(false);

  const handleSetActiveSection = (section) => {
    isClickingRef.current = true;
    setActiveSection(section);
    
    // Reactivar detección por scroll después de que termine el scroll suave
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickingRef.current) return; // Ignorar scroll durante navegación por click
      
      const scrollPosition = window.scrollY + offset;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [sections, offset]);

  return { activeSection, setActiveSection: handleSetActiveSection };
};
