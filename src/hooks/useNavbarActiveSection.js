import { useState, useEffect, useRef } from "react";

const useNavbarActiveSection = (sections) => {
  const [activeSection, setActiveSection] = useState("");
  const isClickingRef = useRef(false);
  const clickedSectionRef = useRef("");

  useEffect(() => {
    const handleScroll = () => {
      // Si se hizo clic, no actualizar el activeSection hasta llegar a destino
      if (isClickingRef.current) {
        const element = document.getElementById(clickedSectionRef.current);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const scrollPosition = window.scrollY + window.innerHeight / 3;
          const sectionCenter = offsetTop + offsetHeight / 2;

          // Cuando llegamos al centro de la sección clickeada, desactivar el modo click
          if (Math.abs(scrollPosition - sectionCenter) < 100) {
            isClickingRef.current = false;
            clickedSectionRef.current = "";
          }
        }
        return;
      }

      // Comportamiento normal de scroll
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    isClickingRef.current = true;
    clickedSectionRef.current = section;
  };

  return { activeSection, handleLinkClick };
};

export default useNavbarActiveSection;
