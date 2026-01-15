
import React, { useState, useEffect } from 'react';
import { PageView, Language } from '../types';
import { Menu, X, Globe } from 'lucide-react';
import { translations } from '../translations';

interface NavbarProps {
  currentView: PageView;
  setView: (view: PageView) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'proposal', label: t.nav.proposal },
    { id: 'landing', label: t.nav.landing },
    { id: 'strategy', label: t.nav.strategy },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl shadow-blue-500/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('home')}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold italic group-hover:rotate-6 transition-transform shadow-lg shadow-blue-500/20">E</div>
          <span className="text-2xl font-black tracking-tighter uppercase">Elevate AI <span className="text-blue-500 italic">Social</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`text-sm font-bold uppercase tracking-widest transition-all hover:tracking-[0.2em] ${currentView === item.id ? 'text-blue-500' : 'text-zinc-400 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="flex items-center gap-3 px-4 py-1.5 glass rounded-full border-white/5">
            <Globe size={16} className="text-blue-500" />
            <button 
              onClick={() => setLang('en')} 
              className={`text-xs font-bold ${lang === 'en' ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
            >EN</button>
            <span className="text-zinc-700">|</span>
            <button 
              onClick={() => setLang('es')} 
              className={`text-xs font-bold ${lang === 'es' ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
            >ES</button>
          </div>

          <button className="px-8 py-3 bg-white text-black text-xs font-black uppercase rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5 border border-white/10">
            {t.nav.book}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-8 flex flex-col gap-8 items-center animate-in slide-in-from-top duration-500">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setView(item.id);
                setIsOpen(false);
              }}
              className={`text-xl font-bold uppercase tracking-widest ${currentView === item.id ? 'text-blue-500' : 'text-zinc-400'}`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="flex gap-6">
            <button onClick={() => setLang('en')} className={`font-black ${lang === 'en' ? 'text-blue-500' : 'text-zinc-500'}`}>ENGLISH</button>
            <button onClick={() => setLang('es')} className={`font-black ${lang === 'es' ? 'text-blue-500' : 'text-zinc-500'}`}>ESPAÑOL</button>
          </div>

          <button className="w-full py-5 bg-blue-600 text-white font-black uppercase rounded-2xl shadow-2xl shadow-blue-600/20">
            {t.nav.book}
          </button>
        </div>
      )}
    </nav>
  );
};
