import React from 'react';
import { PageType } from '../types';
import { SERVICES_DATA, WORK_PROCESS_STEPS } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0D0D0D] text-[#EDEDED] pt-20">
      
      {/* 1. Page Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#141414] border-b border-[#C9A24B]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#C9A24B] block mb-3">
            Hərtərəfli Mühəndislik və Memarlıq
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#EDEDED] uppercase">
            Xidmətlərimiz
          </h1>
          <p className="max-w-xl mx-auto mt-4 text-sm sm:text-base text-[#EDEDED]/70">
            Təməl qazıntısından son dekorativ toxunuşadək tam açar təhvili lüks xidmət spektri.
          </p>
        </div>
      </section>

      {/* 2. Four Service Blocks in Alternating Image/Text Layout */}
      <section className="py-24 sm:py-32 bg-[#0D0D0D] space-y-28 sm:space-y-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36">
          {SERVICES_DATA.map((service, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image Col */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? '' : 'lg:col-start-7'
                  } relative group`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-black border border-[#C9A24B]/30 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-[#EDEDED]/80">
                      <span>TEXNOMAX · {service.title} Xidməti</span>
                      <span className="text-[#C9A24B] font-mono tabular-nums">{service.number}</span>
                    </div>
                  </div>
                  {/* Outer subtle frame */}
                  <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full border border-[#C9A24B]/20 -z-10" />
                </div>

                {/* Text Col */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? '' : 'lg:col-start-1'
                  } space-y-6`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#C9A24B] tracking-widest tabular-nums">
                      {service.number}
                    </span>
                    <span className="text-white/20">/</span>
                    <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#C9A24B]">
                      TEXNOMAX Ekspertizası
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-serif text-[#EDEDED] uppercase">
                    {service.title}
                  </h2>

                  <p className="text-base text-[#EDEDED]/90 font-medium leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <p className="text-sm text-[#EDEDED]/70 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs uppercase tracking-wider text-[#C9A24B] font-semibold">
                      Spesifikasiyalar və Standartlar:
                    </div>
                    <ul className="space-y-2.5">
                      {service.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#EDEDED]/85">
                          <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scope tags as clean unboxed text with bullets */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#EDEDED]/60">
                    <span className="text-[#C9A24B] uppercase tracking-wider">İcra Sahəsi:</span>
                    {service.scope.map((scopeItem, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span>{scopeItem}</span>
                        {sIdx < service.scope.length - 1 && <span className="text-white/20">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-[#C9A24B] hover:text-[#DFC06E] transition-colors cursor-pointer group"
                    >
                      <span>Bu Xidmət Üzrə Təklif Al</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Process Timeline Section: "Ölçü → Plan → İcra" */}
      <section className="py-24 sm:py-32 bg-[#141414] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C9A24B]">
              İş Reqlamenti
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#EDEDED] uppercase">
              Ölçüdən Təhvilədək: 4 Mərhələ
            </h2>
            <p className="text-xs sm:text-sm text-[#EDEDED]/70">
              Qeyri-müəyyənlik olmadan, dəqiq nizamnamə və daimi nəzarət altında icra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {WORK_PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-[#0D0D0D] border border-white/10 p-8 space-y-4 relative group hover:border-[#C9A24B]/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-bold text-[#C9A24B] tabular-nums">
                    {step.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#C9A24B]" />
                </div>

                <h3 className="text-base sm:text-lg font-serif text-[#EDEDED] uppercase">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#EDEDED]/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Closing CTA Section */}
      <section className="py-24 sm:py-28 bg-[#0D0D0D] text-center border-t border-[#C9A24B]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C9A24B]">
            Mühəndis Məsləhəti
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#EDEDED] uppercase">
            Layihəniz Üçün Texniki Baxış Təyin Edin
          </h2>
          <p className="text-sm text-[#EDEDED]/70 max-w-lg mx-auto">
            Mütəxəssislərimiz sahəyə gələrək yerində ölçü götürsün və ilkin rəy təqdim etsin.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold text-black bg-[#C9A24B] hover:bg-[#DFC06E] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Görüş Təyin Et</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
