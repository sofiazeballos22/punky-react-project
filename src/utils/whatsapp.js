/**
 * Abre WhatsApp con un mensaje predefinido
 * @param {string} message - Mensaje inicial para enviar
 */
export const openWhatsApp = (message) => {
  const phone = '5491133916574'; // número de Punky
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
