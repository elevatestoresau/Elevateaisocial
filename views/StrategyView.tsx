
import React from 'react';
import { Instagram, Send, MessageSquare, PhoneCall } from 'lucide-react';

export const StrategyView: React.FC = () => {
  return (
    <div className="bg-zinc-900 min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Link in Bio Section */}
        <div className="bg-black border border-white/10 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-pink-500/20 text-pink-500 rounded-xl"><Instagram /></div>
            <h2 className="text-2xl font-bold">Estructura "Link in Bio"</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="p-4 bg-zinc-900 rounded-lg border border-blue-500/30 font-bold text-center">🎁 GRATIS: Content System IA (30 días)</div>
              <div className="p-4 bg-zinc-900 rounded-lg border border-white/5 font-bold text-center">⚡️ Auditoría IA 15 min (Free Call)</div>
              <div className="p-4 bg-zinc-900 rounded-lg border border-white/5 font-bold text-center">🚀 Ver Casos de Éxito</div>
              <div className="p-4 bg-zinc-900 rounded-lg border border-white/5 font-bold text-center">📧 Newsletter "Elevate AI Weekly"</div>
            </div>
            <div className="text-zinc-400 text-sm space-y-4">
              <p><strong>Bio Tips:</strong></p>
              <ul className="list-disc list-inside">
                <li>Nombre: Elevate AI | Marketing Australia 🇦🇺</li>
                <li>Frase 1: Escala tu marca con IA estratégica.</li>
                <li>Frase 2: De caos manual a sistemas automáticos.</li>
                <li>CTA: 👇 Empieza aquí</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DM Flows Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Flow 1: Interesado */}
          <div className="bg-black border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 text-blue-500 rounded-xl"><MessageSquare /></div>
              <h3 className="text-xl font-bold">Flujo: "Lead Caliente"</h3>
            </div>
            <div className="space-y-4 text-sm text-zinc-400">
              <div className="p-3 bg-zinc-900 rounded-lg">
                <span className="text-zinc-500 block mb-1">Usuario comenta "IA" en un Reel</span>
                <strong>Bot:</strong> "¡Hola! Hecho 🚀 Te envié el link de la guía por DM."
              </div>
              <div className="p-3 bg-zinc-900 rounded-lg">
                <span className="text-zinc-500 block mb-1">DM automático (ManyChat)</span>
                <strong>Nosotros:</strong> "¡Hola! Aquí tienes el sistema de 30 días. Por cierto, ¿qué tipo de negocio tienes en AU? Me encantaría darte un tip extra personalizado."
              </div>
              <div className="p-3 bg-zinc-900 rounded-lg border-l-2 border-blue-500">
                <span className="text-zinc-500 block mb-1">Si responde</span>
                <strong>Nosotros:</strong> "Genial. Justo trabajamos con [Su nicho]. Si quieres ver cómo aplicarlo a tu caso, podemos hacer una auditoría de 15 min esta semana."
              </div>
            </div>
          </div>

          {/* Flow 2: Cold Outreach */}
          <div className="bg-black border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-zinc-500/20 text-zinc-500 rounded-xl"><Send /></div>
              <h3 className="text-xl font-bold">Flujo: "Contacto Directo"</h3>
            </div>
            <div className="space-y-4 text-sm text-zinc-400">
              <div className="p-3 bg-zinc-900 rounded-lg">
                <strong>Nosotros:</strong> "Hola [Nombre]! Me encanta el estilo de tu negocio en Gold Coast. He visto que vuestro contenido es genial, pero quizás os vendría bien automatizar la captación."
              </div>
              <div className="p-3 bg-zinc-900 rounded-lg">
                <strong>Nosotros:</strong> "He preparado un video de 2 min viendo vuestro perfil y cómo podríais ahorrar tiempo con IA. ¿Te lo envío sin compromiso?"
              </div>
              <div className="p-3 bg-zinc-900 rounded-lg border-l-2 border-green-500">
                <span className="text-zinc-500 block mb-1">Si dice sí</span>
                <strong>Nosotros:</strong> Envío de Loom personalizado + Link para llamada de 15 min.
              </div>
            </div>
          </div>
        </div>

        {/* Lead Magnets Recommendation */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Sparkles /> Propuesta de Lead Magnets
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white/10 rounded-xl border border-white/20">
              <h4 className="font-bold mb-2">1. Checklist 30 días</h4>
              <p className="text-xs opacity-80">El más viral. Rápido de consumir y alto valor percibido.</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl border border-white/20">
              <h4 className="font-bold mb-2">2. El "Vault" de Prompts</h4>
              <p className="text-xs opacity-80">Biblioteca de prompts específicos para el mercado australiano.</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl border border-white/20">
              <h4 className="font-bold mb-2">3. Masterclass: IA Local</h4>
              <p className="text-xs opacity-80">Video de 15 min sobre cómo automatizar una tienda física/local.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sparkles: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);
export default StrategyView;
