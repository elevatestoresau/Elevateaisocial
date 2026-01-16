import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { Language } from '../types';

interface AIChatbotProps {
  lang: Language;
}

export const AIChatbot: React.FC<AIChatbotProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {
      role: 'bot', 
      text: lang === 'en' 
        ? "G'day! I'm your Elevate AI assistant. How can I help your business grow in Australia or Spain today?" 
        : "¡Hola! Soy tu asistente de Elevate AI. ¿Cómo puedo ayudar a tu negocio a crecer en Australia o España hoy?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) throw new Error("API Key missing");

      const genAI = new GoogleGenerativeAI(apiKey);
      
      // FORZAMOS v1beta explícitamente en el segundo parámetro
      const model = genAI.getGenerativeModel(
        { model: "gemini-1.5-flash" },
        { apiVersion: 'v1beta' }
      );

      // Pasamos las instrucciones aquí para asegurar compatibilidad
      const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: userMsg }] }],
        systemInstruction: {
          parts: [{ text: `You are the official assistant of Elevate AI Social. Reply in ${lang === 'en' ? 'English' : 'Spanish'}.` }]
        }
      });

      const response = await result.response;
      setMessages(prev => [...prev, { role: 'bot', text: response.text() }]);
      
    } catch (error: any) {
      console.error("Error detallado:", error);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: lang === 'en' ? "Dodgy connection, mate. Try again!" : "Error de conexión, intenta de nuevo." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-[400px] h-[600px] glass rounded-[2rem] flex flex-col shadow-2xl overflow-hidden animate-fade-in-up border-white/20">
          <div className="p-6 bg-blue-600 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Bot size={24} /></div>
              <div className="flex flex-col">
                <span className="font-black text-sm uppercase tracking-widest text-white">Elevate AI</span>
                <span className="text-[10px] text-white/70">Global Support</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform"><X size={20} /></button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-zinc-900/80 backdrop-blur-xl">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none shadow-xl' : 'bg-zinc-800 text-zinc-200 rounded-tl-none border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none border border-white/5">
                  <Loader2 size={16} className="animate-spin text-blue-500" />
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-zinc-950/50 border-t border-white/10 flex gap-4">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={lang === 'en' ? "Ask anything..." : "Escribe algo..."}
              className="flex-grow bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 hover:rotate-12 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-[0_20px_40px_rgba(37,99,235,0.4)] hover:scale-110 hover:-rotate-6 transition-all group border border-blue-400/30"
        >
          <MessageSquare size={30} className="group-hover:scale-110 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full animate-pulse"></div>
        </button>
      )}
    </div>
  );
};
