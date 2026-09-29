import React from 'react';
import { PageType } from '../types';
import { COMPANY_CONTACT } from '../data/content';
import { Phone, Mail, MapPin, Clock, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#C9A24B]/20 text-[#EDEDED] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-5">
            <button
              onClick={() => handleNavClick('home')}
              className="text-2xl font-serif tracking-[0.25em] text-[#EDEDED] uppercase cursor-pointer text-left block"
            >
              TEXNO<span className="text-[#C9A24B]">MAX</span>
            </button>
            <p className="text-sm text-[#EDEDED]/70 leading-relaxed max-w-sm">
              Bakıda və Abşeron yarımadasında fərdi villaların, lüks mənzillərin və kommersiya məkanlarının yüksək dəqiqliklə inşası və müəllif təmiri.
            </p>
            <div className="pt-2">
              <a
                href={COMPANY_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A24B] hover:text-[#DFC06E] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>{COMPANY_CONTACT.instagram}</span>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-serif uppercase tracking-[0.2em] text-[#C9A24B]">
              Naviqasiya
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-[#EDEDED]/75 hover:text-[#C9A24B] transition-colors cursor-pointer"
                >
                  Ana Səhifə
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-[#EDEDED]/75 hover:text-[#C9A24B] transition-colors cursor-pointer"
                >
                  Haqqımızda
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-[#EDEDED]/75 hover:text-[#C9A24B] transition-colors cursor-pointer"
                >
                  Xidmətlərimiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('projects')}
                  className="text-[#EDEDED]/75 hover:text-[#C9A24B] transition-colors cursor-pointer"
                >
                  Layihələrimiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-[#EDEDED]/75 hover:text-[#C9A24B] transition-colors cursor-pointer"
                >
                  Bizimlə Əlaqə
                </button>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div className="space-y-4">
            <h3 className="text-xs font-serif uppercase tracking-[0.2em] text-[#C9A24B]">
              İstiqamətlər
            </h3>
            <ul className="space-y-2.5 text-sm text-[#EDEDED]/75">
              <li>Fərdi Villa və İqamətgah Tikintisi</li>
              <li>Lüks Mənzil və Penthouse Təmiri</li>
              <li>Müəllif İnteryer və Eksteryer Dizaynı</li>
              <li>Konstruktiv Layihələndirmə və Smeta</li>
              <li>Kommersiya və Ofis Renovasiyası</li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            <h3 className="text-xs font-serif uppercase tracking-[0.2em] text-[#C9A24B]">
              Əlaqə Məlumatları
            </h3>
            <div className="space-y-3 text-sm text-[#EDEDED]/80">
              <a
                href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`}
                className="flex items-start gap-3 hover:text-[#C9A24B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                <span className="tabular-nums">{COMPANY_CONTACT.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-start gap-3 hover:text-[#C9A24B] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.email}</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.address}</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#EDEDED]/60">
                <Clock className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDEDED]/50">
          <div>
            &copy; {new Date().getFullYear()} TEXNOMAX MMC. Bütün hüquqlar qorunur.
          </div>
          <div className="flex items-center gap-6">
            <span>Bakı, Azərbaycan</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#C9A24B] hover:text-[#DFC06E] transition-colors cursor-pointer uppercase tracking-wider"
            >
              <span>Yuxarı</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
