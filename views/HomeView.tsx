
import React from 'react';
import { ArrowRight, Zap, Users, ShieldCheck, BarChart3, Clock, MapPin, Play, Mail, Layout } from 'lucide-react';
import { translations } from '../translations';
import { Language } from '../types';

interface HomeViewProps {
  lang: Language;
}

export const HomeView: React.FC<HomeViewProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="bg-black">
      {/* High-Impact Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10"></div>
        
        <div className="relative z-20 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-white/20 text-blue-400 text-xs font-black tracking-[0.2em] mb-10 animate-fade-in-up uppercase">
            <MapPin size={14} className="animate-pulse" /> {t.hero.tag}
          </div>
          
          <h1 
            className="text-6xl md:text-[10rem] font-black leading-none mb-10 animate-fade-in-up delay-100 tracking-tighter"
            dangerouslySetInnerHTML={{ __html: t.hero.title }}
          />
          
          <p className="text-zinc-300 text-xl md:text-3xl mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light italic">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up delay-300">
            <button className="group px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(37,99,235,0.3)] text-lg">
              {t.hero.ctaPrimary} <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group px-12 py-6 glass hover:bg-white/10 text-white font-black uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-4 text-lg border-white/30">
              <Play size={20} fill="white" className="group-hover:scale-110 transition-transform" /> {t.hero.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50 animate-fade-in-up delay-300">
          <div className="w-[1px] h-20 rounded-full bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent"></div>
        </div>
      </section>

      {/* Modern Client Bar */}
      <section className="py-24 bg-zinc-950 border-y border-white/5 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-zinc-500 text-[10px] font-black tracking-[0.5em] mb-16 uppercase opacity-50">Empowering local legends since day one</p>
          <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-3xl font-black italic tracking-tighter hover:opacity-100 cursor-default">SURFERS PARADISE</div>
            <div className="text-3xl font-black italic tracking-tighter hover:opacity-100 cursor-default">BRISBANE HUB</div>
            <div className="text-3xl font-black italic tracking-tighter hover:opacity-100 cursor-default">QLD E-COM</div>
            <div className="text-3xl font-black italic tracking-tighter hover:opacity-100 cursor-default">SUNSHINE TECH</div>
          </div>
        </div>
      </section>

      {/* Visual Solutions Section */}
      <section id="services" className="py-40 px-6 bg-black relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative group perspective-1000">
              <div className="absolute -inset-10 bg-blue-600/10 rounded-[3rem] blur-3xl group-hover:bg-blue-600/20 transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Strategy Australia" 
                className="relative rounded-[2.5rem] border border-white/10 shadow-2xl object-cover h-[650px] w-full group-hover:rotate-1 transition-transform duration-700"
              />
              <div className="absolute -bottom-10 -right-10 glass p-10 rounded-3xl border-white/20 animate-fade-in-up backdrop-blur-2xl shadow-2xl">
                <div className="text-5xl font-black text-blue-500 mb-2 tracking-tighter">+240%</div>
                <div className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Growth Metrics</div>
              </div>
            </div>
            
            <div className="space-y-12">
              <h2 
                className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
                dangerouslySetInnerHTML={{ __html: t.services.title }}
              />
              <p className="text-zinc-400 text-2xl leading-relaxed font-light">
                {t.services.subtitle}
              </p>
              
              <div className="grid gap-10">
                <div className="flex gap-8 items-start p-8 rounded-3xl hover:bg-zinc-900/50 transition-all border border-transparent hover:border-white/10 group">
                  <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-500/5">
                    <Zap size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-widest mb-3">{t.services.service1}</h3>
                    <p className="text-zinc-500 text-lg leading-relaxed">{t.services.service1Desc}</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start p-8 rounded-3xl hover:bg-zinc-900/50 transition-all border border-transparent hover:border-white/10 group">
                  <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-500/5">
                    <Layout size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-widest mb-3">{t.services.service3}</h3>
                    <p className="text-zinc-500 text-lg leading-relaxed">{t.services.service3Desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stunning Service Cards */}
      <section className="py-40 px-6 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <h2 
              className="text-5xl md:text-8xl font-black max-w-3xl tracking-tighter leading-none"
              dangerouslySetInnerHTML={{ __html: t.services.subtitle.split('.')[0] + '.' }}
            />
            <button className="px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] rounded-full hover:bg-blue-600 hover:text-white transition-all flex items-center gap-4 shadow-2xl text-xs">
              View All Plans <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: t.services.card1Title, desc: t.services.card1Desc, img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
              { title: t.services.card2Title, desc: t.services.card2Desc, img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
              { title: t.services.card3Title, desc: t.services.card3Desc, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" }
            ].map((card, idx) => (
              <div key={idx} className="group relative rounded-[3rem] overflow-hidden border border-white/5 aspect-[4/5] shadow-2xl">
                <img src={card.img} className="absolute inset-0 object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 opacity-30" alt={card.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-12 flex flex-col justify-end">
                  <h3 className="text-3xl font-black mb-4 italic uppercase tracking-tighter">{card.title}</h3>
                  <p className="text-zinc-400 text-lg mb-10 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{card.desc}</p>
                  <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all group-hover:rotate-12 duration-500 shadow-xl">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-60 px-6 relative overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/10 blur-[180px] rounded-full animate-pulse"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 
            className="text-6xl md:text-[9rem] font-black mb-16 tracking-tighter leading-none"
            dangerouslySetInnerHTML={{ __html: t.footer.cta }}
          />
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="px-16 py-8 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-full transition-all text-2xl shadow-[0_30px_60px_rgba(37,99,235,0.4)] uppercase tracking-widest border border-blue-500/50">
              {t.footer.ctaBtn}
            </button>
            <a href="mailto:elevate.storesau@gmail.com" className="flex items-center gap-4 text-zinc-500 hover:text-white transition-all font-black uppercase tracking-[0.3em] group">
              <Mail className="group-hover:rotate-12 transition-transform" /> elevate.storesau@gmail.com
            </a>
          </div>
          <p className="mt-16 text-zinc-700 font-black uppercase tracking-[0.5em] text-[10px]">No commitment required • 15 Minute Growth Audit</p>
        </div>
      </section>
    </div>
  );
};
export default HomeView;
