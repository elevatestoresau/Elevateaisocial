
import React from 'react';
import { Download, Sparkles, Clock, Layout } from 'lucide-react';

export const LandingView: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">RECURSO GRATUITO</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ahorra 15h a la semana con nuestro <span className="text-blue-500">Content System IA</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-8">
              Descarga la checklist y plantilla exacta que usamos para planificar 30 días de contenido en solo 2 horas.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 text-blue-500"><Layout size={20} /></div>
                <div>
                  <h3 className="font-bold">Plantilla de Notion Lista para Usar</h3>
                  <p className="text-sm text-zinc-500 text-balance">Organiza tus ideas, ganchos y CTA en un solo lugar centralizado.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-blue-500"><Sparkles size={20} /></div>
                <div>
                  <h3 className="font-bold">+50 Prompts de IA para Contenido</h3>
                  <p className="text-sm text-zinc-500 text-balance">No vuelvas a mirar una pantalla en blanco. Ganchos que detienen el scroll.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-blue-500"><Clock size={20} /></div>
                <div>
                  <h3 className="font-bold">Guía de Automatización Básica</h3>
                  <p className="text-sm text-zinc-500 text-balance">Cómo conectar tu calendario con ChatGPT en 5 minutos.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/10 p-8 rounded-3xl shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm rotate-3 shadow-lg">
              VALOR: $47 AUD (HOY GRATIS)
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center">Accede ahora</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-zinc-500 mb-1">Nombre</label>
                <input type="text" placeholder="Tu nombre" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm text-zinc-500 mb-1">Email</label>
                <input type="email" placeholder="hola@tunegocio.com.au" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm text-zinc-500 mb-1">Tipo de Negocio</label>
                <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 outline-none transition-all appearance-none">
                  <option>E-commerce</option>
                  <option>Servicios Locales (QLD)</option>
                  <option>Creador de Contenido</option>
                  <option>Otro</option>
                </select>
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 mt-4 shadow-xl shadow-blue-500/20">
                Descargar ahora <Download size={20} />
              </button>
              <p className="text-[10px] text-zinc-600 text-center mt-4">
                Al descargar este recurso te unes a nuestra newsletter de IA & Marketing para negocios en Australia. Cero spam, solo valor.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingView;
