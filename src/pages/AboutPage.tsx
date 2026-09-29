import React from 'react';
import { PageType } from '../types';
import { IMAGES, STATS_DATA, VALUES_DATA, WHY_CHOOSE_US } from '../data/content';
import { ShieldCheck, Award, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const valueIcons = [Award, ShieldCheck, Clock, Users];

  return (
    <div className="bg-[#0D0D0D] text-[#EDEDED] pt-20">
      
      {/* 1. Page Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#141414] border-b border-[#C9A24B]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#C9A24B] block mb-3">
            TEXNOMAX İnşaat Qrupu
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#EDEDED] uppercase">
            Haqqımızda
          </h1>
          <p className="max-w-xl mx-auto mt-4 text-sm sm:text-base text-[#EDEDED]/70">
            Dəqiqlik, mühəndislik intizamı və lüks memarlıq fəlsəfəsinin Bakıdakı təcəssümü.
          </p>
        </div>
      </section>

      {/* 2. Company Story */}
      <section className="py-24 sm:py-32 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] overflow-hidden bg-black border border-[#C9A24B]/30 relative group">
                <img
                  src={IMAGES.construction}
                  alt="TEXNOMAX Mühəndisləri və Tikinti Nəzarəti"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-xs text-[#EDEDED]/80">
                  <span className="text-[#C9A24B] font-semibold">Təsisçilərin Mühəndislik Ruhu</span> · 14+ İllik İrsimiz
                </div>
              </div>
            </div>

            {/* Right: 2-3 short paragraphs */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C9A24B]">
                Tariximiz və Missiyamız
              </span>

              <h2 className="text-2xl sm:text-4xl font-serif text-[#EDEDED] uppercase leading-tight">
                Hər Bir Monolitdə Qüsursuzluq İmzası
              </h2>

              <p className="text-sm sm:text-base text-[#EDEDED]/80 leading-relaxed">
                TEXNOMAX — 2012-ci ildən etibarən Azərbaycanın inşaat bazarında premium standartları formalaşdıran mühəndislik və memarlıq şirkətidir. Şirkətimiz Bakının ən nüfuzlu qəsəbələrində — Bilgəh, Şüvəlan, Mərdəkan, Badamdar və Ağ Şəhərdə fərdi iqamətgahların və lüks rezidensiyaların inşasını gerçəkləşdirir.
              </p>

              <p className="text-sm sm:text-base text-[#EDEDED]/75 leading-relaxed">
                Bizim fəlsəfəmiz sadədir: tikinti sadəcə beton və kərpic deyil, insan həyatının ən dəyərli illərini keçirəcəyi etibarlı məkandır. Bu səbəbdən hər bir layihəmizdə seysmik dayanıqlıq, termal akustika və müəllif interyer estetikası bir araya gətirilir.
              </p>

              <p className="text-sm sm:text-base text-[#EDEDED]/75 leading-relaxed">
                Təcrübəli mühəndis-konstruktorlarımız, memarlarımız və ustalarımız hər bir xərc bəndini və icra mərhələsini şəffaf şəkildə idarə edir.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-24 sm:py-32 bg-[#141414] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C9A24B]">
              Əsas Prinsiplərimiz
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#EDEDED] uppercase">
              Bizi Biz Edən Dəyərlər
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_DATA.map((val, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={val.number}
                  className="bg-[#0D0D0D] border border-white/10 p-8 space-y-4 hover:border-[#C9A24B]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 flex items-center justify-center border border-[#C9A24B]/30 text-[#C9A24B]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-serif text-[#EDEDED]/40 tabular-nums">
                      {val.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif text-[#EDEDED] uppercase">
                    {val.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#EDEDED]/70 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. "Niyə Bizi Seçməlisiniz" — 4 Differentiators */}
      <section className="py-24 sm:py-32 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C9A24B]">
              Fərqimiz
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#EDEDED] uppercase">
              Niyə TEXNOMAX?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#141414] border border-white/10 p-8 flex items-start gap-5 hover:border-[#C9A24B]/40 transition-colors"
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#0D0D0D] border border-[#C9A24B]/30 text-[#C9A24B]">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-serif text-[#EDEDED] uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EDEDED]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Stats Bar on Cream Background (#F5F1EA) */}
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

      {/* 6. Closing CTA Section */}
      <section className="py-24 sm:py-28 bg-[#0D0D0D] text-center border-t border-[#C9A24B]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C9A24B]">
            Bizimlə Əməkdaşlıq
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#EDEDED] uppercase">
            Layihənizi Peşəkarlara Həvalə Edin
          </h2>
          <p className="text-sm text-[#EDEDED]/70 max-w-lg mx-auto">
            Hər bir mərhələdə yüksək məsuliyyət və keyfiyyət zəmanəti ilə xidmətinizdəyik.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold text-black bg-[#C9A24B] hover:bg-[#DFC06E] transition-all cursor-pointer inline-flex items-center gap-2"
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
