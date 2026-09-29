import React from 'react';
import { PageType, ProjectItem } from '../types';
import { IMAGES, SERVICES_DATA, PROJECTS_DATA, STATS_DATA } from '../data/content';
import { ArrowRight, Hammer, Paintbrush, Compass, FileText, ChevronRight, Quote } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const serviceIcons = [Hammer, Paintbrush, Compass, FileText];
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="bg-[#0D0D0D] text-[#EDEDED]">
      
      {/* 1. Full-Screen Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Scrim Overlay */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="TEXNOMAX Lüks Memarlıq və Tikinti"
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[subtle-zoom_20s_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/65 to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#C9A24B]">
              Lüks Tikinti və Müəllif Memarlığı · Bakı
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#EDEDED] font-bold tracking-tight uppercase leading-none mb-6">
            Keyfiyyətli Tikinti, <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Zərif Dizayn</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#EDEDED]/80 font-normal leading-relaxed mb-10">
            Fərdi iqamətgahlar, lüks rezidensiyalar və nüfuzlu kommersiya məkanları üçün qüsursuz mühəndislik dəqiqliyi və zamansız estetika.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-black bg-[#C9A24B] hover:bg-[#DFC06E] transition-all duration-200 cursor-pointer shadow-lg shadow-black/50"
            >
              Pulsuz Məsləhət Al
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium text-[#EDEDED] border border-[#C9A24B]/40 hover:border-[#C9A24B] hover:text-[#C9A24B] bg-black/40 backdrop-blur-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Layihələri Kəşf Et</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#EDEDED]/40">
          <span className="text-[10px]">Aşağı Sürüşdürün</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#C9A24B] to-transparent animate-pulse" />
        </div>
      </section>

      {/* 2. Haqqımızda Teaser Section */}
      <section className="py-24 sm:py-32 bg-[#141414] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-black border border-[#C9A24B]/30">
                <img
                  src={IMAGES.construction}
                  alt="TEXNOMAX Mühəndislik və Tikinti Nəzarəti"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#EDEDED]/80">
                  <span className="text-[#C9A24B] font-semibold">TEXNOMAX İnşaat İntizamı</span> · Bakı, 2026
                </div>
              </div>
              {/* Subtle gold accent frame behind */}
              <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full border border-[#C9A24B]/30 -z-10 pointer-events-none" />
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C9A24B]">
                Şirkətimiz Haqqında
              </span>

              <h2 className="text-2xl sm:text-4xl font-serif text-[#EDEDED] uppercase leading-tight">
                Müasir Memarlığın və Monolit Keyfiyyətin Zirvəsi
              </h2>

              <p className="text-sm sm:text-base text-[#EDEDED]/80 leading-relaxed">
                TEXNOMAX — Bakıda və Abşeron yarımadasında lüks seqmentdə fərdi villaların inşası, premium mənzillərin təmiri və müəllif dizaynı üzrə ixtisaslaşmış elit inşaat şirkətidir.
              </p>

              <p className="text-sm sm:text-base text-[#EDEDED]/70 leading-relaxed">
                Biz sadəcə binalar tikmirik; hər bir müştərimiz üçün zamana meydan oxuyan, erqonomik, təhlükəsiz və incə zövqlə düşünülmüş həyat məkanları yaradırıq. Layihənin ilk eskizindən son mebel detalına qədər bütün məsuliyyət bizim peşəkar komandamızdadır.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#C9A24B] hover:text-[#DFC06E] transition-colors font-semibold cursor-pointer group"
                >
                  <span>Şirkət Tarixi və Dəyərlərimizlə Tanış Olun</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Preview: 4 Cards with Icons */}
      <section className="py-24 sm:py-32 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C9A24B] block mb-2">
                Ekspertiza Sahələrimiz
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#EDEDED] uppercase">
                Əsas Xidmətlərimiz
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs uppercase tracking-[0.15em] text-[#C9A24B] hover:text-[#DFC06E] transition-colors flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
            >
              <span>Bütün Xidmətlər</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <div
                  key={service.id}
                  onClick={() => onNavigate('services')}
                  className="group bg-[#141414] border border-white/10 hover:border-[#C9A24B]/60 p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#0D0D0D] border border-[#C9A24B]/30 text-[#C9A24B] group-hover:bg-[#C9A24B] group-hover:text-black transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-serif text-[#EDEDED]/40 tabular-nums">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif text-[#EDEDED] uppercase group-hover:text-[#C9A24B] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#EDEDED]/70 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-8 flex items-center justify-between text-xs text-[#C9A24B] border-t border-white/5 mt-6">
                    <span className="uppercase tracking-wider">Ətraflı</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Featured Projects Grid */}
      <section className="py-24 sm:py-32 bg-[#141414] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C9A24B] block mb-2">
                Portfoliomuz
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#EDEDED] uppercase">
                Seçilmiş Layihələr
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs uppercase tracking-[0.15em] text-[#C9A24B] hover:text-[#DFC06E] transition-colors flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
            >
              <span>Bütün Layihələrə Bax</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-[#0D0D0D] border border-white/10 hover:border-[#C9A24B]/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 text-[11px] uppercase tracking-wider text-[#C9A24B] bg-black/70 px-2 py-1 border border-[#C9A24B]/30">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#EDEDED]/50">
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{project.area}</span>
                  </div>
                  <h3 className="text-lg font-serif text-[#EDEDED] group-hover:text-[#C9A24B] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Stats Section on Cream Background (#F5F1EA) */}
      <section className="py-20 sm:py-24 bg-[#F5F1EA] text-[#1A1A1A] border-y border-[#C9A24B]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
            {STATS_DATA.map((stat, idx) => (
              <div key={idx} className={`pt-6 sm:pt-0 ${idx !== 0 ? 'sm:pl-8 lg:pl-10' : ''}`}>
                <div className="text-4xl sm:text-5xl font-serif font-bold text-[#C9A24B] tabular-nums mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#1A1A1A]/70">
                  {stat.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Short Testimonial / Quote Block */}
      <section className="py-24 sm:py-28 bg-[#0D0D0D] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="w-12 h-12 mx-auto flex items-center justify-center border border-[#C9A24B]/30 text-[#C9A24B]">
            <Quote className="w-6 h-6" />
          </div>

          <blockquote className="text-lg sm:text-2xl font-serif text-[#EDEDED] leading-relaxed italic">
            &ldquo;TEXNOMAX ilə Bilgəhdəki villamızın tikintisi zamanı hər bir mühəndislik mərhələsi qrafikə uyğun, yüksək intizam və şəffaflıqla icra edildi. İnşaatda bu dərəcədə zəriflik və peşəkarlıq Bakıda nadir tapılan dəyərdir.&rdquo;
          </blockquote>

          <div className="space-y-1">
            <div className="text-sm font-semibold uppercase tracking-wider text-[#C9A24B]">
              Fərid Kərimov
            </div>
            <div className="text-xs text-[#EDEDED]/50">
              Bilgəh Dəniz İqamətgahının Sahibi · Sahibkar
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Banner inviting visitors to Contact page */}
      <section className="py-24 sm:py-28 bg-gradient-to-b from-[#141414] to-[#0D0D0D] text-center border-t border-[#C9A24B]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C9A24B]">
            Gələcək Layihənizi Başladın
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#EDEDED] uppercase">
            Xəyallarınızdakı Məkanı Birlikdə İnşa Edək
          </h2>

          <p className="text-sm sm:text-base text-[#EDEDED]/70 max-w-xl mx-auto leading-relaxed">
            Bizimlə əlaqə saxlayın, layihəniz üçün ilkin texniki baxış, peşəkar məsləhət və detallı smeta planı təqdim edək.
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-9 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-black bg-[#C9A24B] hover:bg-[#DFC06E] transition-all duration-200 cursor-pointer shadow-lg shadow-black/60 inline-flex items-center gap-2"
            >
              <span>Bizimlə Əlaqə Saxlayın</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
