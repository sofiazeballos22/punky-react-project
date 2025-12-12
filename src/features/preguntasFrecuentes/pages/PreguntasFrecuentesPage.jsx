import { openWhatsApp } from "@/utils/whatsapp";
import { useState } from "react";

const PreguntasFrecuentesPage = () => {
  const faqs = [
    {
      question: "¿Punky es un banco o una financiera?",
      answer:
        "No. Punky es un asistente independiente que usa información pública oficial y herramientas propias para orientarte. En algunos casos puede ayudarte a acceder a créditos con aliados, pero siempre explicando condiciones y sin prometer resultados imposibles.",
      defaultOpen: false,
    },
    {
      question: "¿La información que comparto queda protegida?",
      answer:
        "Punky sólo te pedirá los datos necesarios para ayudarte (por ejemplo, fotos de recibos o DNI). El equipo trata esa información con estricta confidencialidad y no se comparte con organismos estatales ni terceros sin tu consentimiento.",
      defaultOpen: false,
    },
    {
      question: "¿Puedo escribir aunque no sea de una fuerza ni jubilado?",
      answer:
        "Sí. Punky también atiende a empleados públicos y privados, monotributistas, pymes y personas que sólo necesitan entender un recibo, un crédito, una compra online o un trámite puntual.",
      defaultOpen: false,
    },
    {
      question: "¿Cuánto tarda en responder?",
      answer:
        "El asistente está disponible 24/7. Los tiempos pueden variar, pero suele responder en pocos minutos. Si hay mucha demanda, igual siempre vas a poder dejar tu consulta y seguirla más tarde.",
      defaultOpen: false,
    },
  ];

  const [openStates, setOpenStates] = useState(
    faqs.map((faq) => faq.defaultOpen)
  );

  const handleToggle = (index) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 reveal active">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-punkyDark">
            Preguntas frecuentes
          </h2>
          <p className="text-slate-600">
            Algunas respuestas rápidas antes de que le escribas a Punky.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="reveal bg-slate-50 rounded-2xl border border-slate-100 px-5 py-4 active"
              open={openStates[index]}
              onClick={(e) => {
                e.preventDefault();
                handleToggle(index);
              }}
            >
              <summary className="cursor-pointer font-medium text-punkyDark text-sm md:text-base">
                {faq.question}
              </summary>
              {openStates[index] && (
                <div className="faq-content-animate">
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </details>
          ))}
        </div>

        <div className="mt-10 text-center reveal active">
          <button
            onClick={() =>
              openWhatsApp(
                "Hola Punky, ya leí la info y quiero hacer mi consulta."
              )
            }
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-punkyAccentStart to-punkyAccentEnd text-white text-sm font-semibold hover:shadow-glow hover:scale-105 transition"
          >
            Ir al chat de WhatsApp con Punky
            <span>💬</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreguntasFrecuentesPage;
