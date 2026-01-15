
import React, { useState } from 'react';
import { HomeView } from './views/HomeView';
import { ProposalView } from './views/ProposalView';
import { LandingView } from './views/LandingView';
import { StrategyView } from './views/StrategyView';
import { Navbar } from './components/Navbar';
import { AIChatbot } from './components/AIChatbot';
import { PageView, Language } from './types';
import { translations } from './translations';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView lang={lang} />;
      case 'proposal': return <ProposalView />;
      case 'landing': return <LandingView />;
      case 'strategy': return <StrategyView />;
      default: return <HomeView lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Navbar currentView={currentView} setView={setCurrentView} lang={lang} setLang={setLang} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <AIChatbot lang={lang} />
      <footer className="bg-zinc-950 border-t border-white/10 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black mb-6 tracking-tighter">ELEVATE AI SOCIAL</h2>
            <p className="text-zinc-500 max-w-sm text-lg leading-relaxed mb-8">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">IG</a>
              <a href="https://linkedin.com" target="_blank" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">LI</a>
              <a href="mailto:elevate.storesau@gmail.com" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">EM</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-white uppercase tracking-widest text-sm">{t.footer.company}</h3>
            <ul className="space-y-4 text-zinc-500 font-medium">
              <li><button onClick={() => setCurrentView('home')} className="hover:text-blue-500 transition-colors">{t.nav.home}</button></li>
              <li><button onClick={() => setCurrentView('proposal')} className="hover:text-blue-500 transition-colors">{t.nav.proposal}</button></li>
              <li><button onClick={() => setCurrentView('landing')} className="hover:text-blue-500 transition-colors">{t.nav.landing}</button></li>
              <li><button onClick={() => setCurrentView('strategy')} className="hover:text-blue-500 transition-colors">{t.nav.strategy}</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-white uppercase tracking-widest text-sm">{t.footer.contact}</h3>
            <ul className="space-y-4 text-zinc-500 font-medium">
              <li>Brisbane & Gold Coast, QLD</li>
              <li className="text-white">elevate.storesau@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm font-medium">
          <p>© {new Date().getFullYear()} Elevate AI Social. Built for Gold Coast Growth.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
