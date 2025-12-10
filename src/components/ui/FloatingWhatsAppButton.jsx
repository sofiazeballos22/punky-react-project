import { openWhatsApp } from '@/utils/whatsapp';

const FloatingWhatsAppButton = () => {
  return (
    <button 
      onClick={() => openWhatsApp('Hola Punky, vengo desde la web y quiero hacer una consulta.')}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center rounded-full shadow-xl shadow-emerald-500/40 bg-emerald-500 text-white w-14 h-14 hover:scale-110 transition"
      aria-label="Abrir chat de WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-7 h-7" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12.04 2C6.57 2 2.23 6.17 2.23 11.29c0 2.57 1.05 4.89 2.77 6.6L4 22l4.25-1.37a10.2 10.2 0 0 0 3.79.73c5.47 0 9.81-4.17 9.81-9.29C21.86 6.17 17.51 2 12.04 2Zm5.65 12.71c-.24.68-1.19 1.25-1.64 1.33-.42.08-.96.11-1.55-.1-.36-.12-.82-.26-1.42-.51-2.5-1.09-4.12-3.64-4.24-3.81-.12-.17-1.02-1.35-1.02-2.57 0-1.22.64-1.81.87-2.05.23-.24.51-.3.68-.3h.49c.16 0 .37-.06.58.44.22.53.75 1.84.82 1.97.06.13.1.28.02.45-.08.17-.12.28-.24.43-.12.14-.26.32-.37.43-.12.12-.24.25-.1.49.14.24.6.99 1.29 1.6.89.79 1.64 1.04 1.89 1.15.24.1.39.08.53-.05.14-.13.61-.71.77-.95.16-.24.33-.2.55-.12.23.08 1.43.68 1.67.8.24.12.4.18.46.28.06.1.06.59-.18 1.27Z" />
      </svg>
    </button>
  );
};

export default FloatingWhatsAppButton;
