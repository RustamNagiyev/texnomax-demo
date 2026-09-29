import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { COMPANY_CONTACT } from '../data/content';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Ana Səhifə', page: 'home' },
    { label: 'Haqqımızda', page: 'about' },
    { label: 'Xidmətlər', page: 'services' },
    { label: 'Layihələr', page: 'projects' },
    { label: 'Əlaqə', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isTransparent = currentPage === 'home' && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent border-b border-white/10'
          : 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#C9A24B]/20 shadow-lg shadow-black/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left text-2xl font-serif tracking-[0.25em] text-[#EDEDED] hover:text-[#C9A24B] transition-colors uppercase cursor-pointer"
            aria-label="TEXNOMAX Ana Səhifə"
          >
            TEXNO<span className="text-[#C9A24B] group-hover:text-white transition-colors">MAX</span>
          </button>

          {/* Zone 2: Clean text Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-sm tracking-wider uppercase transition-colors relative py-1 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#C9A24B] font-semibold'
                      : 'text-[#EDEDED]/80 hover:text-[#C9A24B]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A24B]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Single Phone Icon Action */}
          <div className="hidden md:flex items-center">
            <a
              href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`}
              className="w-10 h-10 flex items-center justify-center border border-[#C9A24B]/40 text-[#C9A24B] hover:text-black hover:bg-[#C9A24B] transition-all duration-200 cursor-pointer"
              aria-label={`Zəng et: ${COMPANY_CONTACT.phone}`}
              title={`Zəng et: ${COMPANY_CONTACT.phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile phone icon & hamburger toggle */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`}
              className="w-9 h-9 flex items-center justify-center border border-[#C9A24B]/40 text-[#C9A24B] hover:text-black hover:bg-[#C9A24B] transition-colors"
              aria-label={`Zəng et: ${COMPANY_CONTACT.phone}`}
              title={`Zəng et: ${COMPANY_CONTACT.phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#EDEDED] hover:text-[#C9A24B] transition-colors cursor-pointer"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141414] border-b border-[#C9A24B]/30 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left text-base uppercase tracking-wider py-2 transition-colors cursor-pointer ${
                    isActive ? 'text-[#C9A24B] font-semibold pl-2 border-l-2 border-[#C9A24B]' : 'text-[#EDEDED]/90'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 text-sm text-[#C9A24B]"
            >
              <Phone className="w-4 h-4" />
              <span className="tabular-nums font-medium">{COMPANY_CONTACT.phone}</span>
            </a>
            <p className="text-xs text-[#EDEDED]/60">{COMPANY_CONTACT.address}</p>
          </div>
        </div>
      )}
    </header>
  );
};

