
import React from 'react';

export const ProposalView: React.FC = () => {
  return (
    <div className="bg-zinc-900 min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto bg-black border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
        <header className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl font-bold mb-4">Propuesta Estratégica: Elevate AI Social</h1>
          <p className="text-zinc-400">Diseño y Conversión para el Mercado de Australia y España</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">1. Arquitectura del Sitio (Sitemap)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4">Página</th>
                  <th className="py-3 px-4">Objetivo Principal</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium text-white underline">Home</td>
                  <td className="py-3 px-4">Conversión directa y posicionamiento de autoridad internacional.</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium text-white underline">Servicios</td>
                  <td className="py-3 px-4">Explicar el "cómo" y el "para quién" en ambos mercados.</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium text-white underline">Resultados</td>
                  <td className="py-3 px-4">Prueba social (Casos de estudio en AU y España).</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium text-white underline">Recursos (Lead Magnet)</td>
                  <td className="py-3 px-4">Captación de leads cualificados (Multidioma).</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium text-white underline">Contacto / Booking</td>
                  <td className="py-3 px-4">Cierre de venta (Calendly con zona horaria automática).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">2. Copy Variantes A/B (Hero)</h2>
          <div className="grid gap-6">
            <div className="p-4 bg-zinc-900 rounded-lg border border-white/5">
              <span className="text-xs font-bold text-blue-500 uppercase">Opción A (Enfoque Beneficio)</span>
              <p className="mt-2 text-white font-semibold">"Escala tu negocio en Australia y España con IA estratégica."</p>
              <p className="text-sm text-zinc-500 italic">"Scale your business in AU & ES with strategic AI."</p>
            </div>
            <div className="p-4 bg-zinc-900 rounded-lg border border-white/5">
              <span className="text-xs font-bold text-blue-500 uppercase">Opción B (Enfoque Problema)</span>
              <p className="mt-2 text-white font-semibold">"Deja de perder tiempo en procesos manuales. Automatiza tu éxito."</p>
              <p className="text-sm text-zinc-500 italic">"Stop wasting time on manual processes. Automate your success."</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">3. SEO Base (Keywords AU & ES)</h2>
          <div className="flex flex-wrap gap-2">
            {["AI Marketing Australia", "Marketing IA España", "Diseño Web IA", "Automatización Make España", "Digital Marketing Gold Coast", "Consultoría IA Madrid", "E-commerce growth Spain", "Social media automation Australia"].map(k => (
              <span key={k} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400">{k}</span>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
            <p className="text-sm"><strong>Meta Title:</strong> Elevate AI Social | IA + Marketing Digital (Australia & España)</p>
            <p className="text-sm text-zinc-400 mt-2"><strong>Meta Description:</strong> Elevamos tu negocio con estrategias de IA y desarrollo web en España y Australia. Automatización, contenido y resultados reales. Reserva tu auditoría.</p>
          </div>
        </section>
      </div>
    </div>
  );
};
