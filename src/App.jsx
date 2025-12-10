import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsAppButton from './components/ui/FloatingWhatsAppButton';
import { HeroPage } from './features/hero';
import { ComoFuncionaPage } from './features/comoFunciona';
import { SolucionesPage } from './features/soluciones';
import { FuerzasPage } from './features/fuerzas';
import { AbuelosPage } from './features/abuelos';
import { ComprasPage } from './features/compras';
import { PreguntasFrecuentesPage } from './features/preguntasFrecuentes';

function App() {
  // Activar el efecto reveal en scroll
  useScrollReveal();

  return (
    <div className="bg-white text-slate-900 font-sans antialiased overflow-x-hidden bg-blobs">
      <Navbar />
      
      <main>
        <HeroPage />
        <ComoFuncionaPage />
        <SolucionesPage />
        <FuerzasPage />
        <AbuelosPage />
        <ComprasPage />
        <PreguntasFrecuentesPage />
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
