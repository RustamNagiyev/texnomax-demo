import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data/content';
import { Phone, Mail, MapPin, Clock, Instagram, CheckCircle2, Send, Navigation } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Zəhmət olmasa, Ad Soyad və Telefon nömrənizi qeyd edin.');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="bg-[#0D0D0D] text-[#EDEDED] pt-20">
      
      {/* 1. Page Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#141414] border-b border-[#C9A24B]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#C9A24B] block mb-3">
            Dialoqa Hazırıq
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#EDEDED] uppercase">
            Bizimlə Əlaqə
          </h1>
          <p className="max-w-xl mx-auto mt-4 text-sm sm:text-base text-[#EDEDED]/70">
            Yeni tikinti, əsaslı təmir və ya fərdi dizayn layihənizi müzakirə etmək üçün bizə yazın və ya zəng edin.
          </p>
        </div>
      </section>

      {/* 2. Two-Column Layout */}
      <section className="py-20 sm:py-28 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-[#141414] border border-white/10 p-8 sm:p-12 relative">
              <div className="mb-8">
                <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#C9A24B] block mb-2">
                  Sorğu Formu
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#EDEDED] uppercase">
                  Məsləhət və Hesablama İstəyin
                </h2>
                <p className="text-xs sm:text-sm text-[#EDEDED]/70 mt-2">
                  Formu doldurun, mühəndisimiz 1 saat ərzində sizinlə əlaqə saxlasın.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#C9A24B]/10 border border-[#C9A24B] text-[#C9A24B]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-white uppercase">
                    Müraciətiniz Qəbul Olundu!
                  </h3>
                  <p className="text-sm text-[#EDEDED]/80 max-w-md mx-auto leading-relaxed">
                    Hörmətli <span className="text-[#C9A24B] font-semibold">{formData.fullName}</span>, müraciətiniz qeydə alındı. Tezliklə <span className="text-white font-mono">{formData.phone}</span> nömrənizlə əlaqə saxlayacağıq.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs uppercase tracking-wider text-[#C9A24B] hover:text-[#DFC06E] border border-[#C9A24B]/30 hover:border-[#C9A24B] transition-colors cursor-pointer mt-4"
                  >
                    Yeni Müraciət Göndər
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-3 bg-red-950/40 border border-red-500/40 text-red-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-wider text-[#EDEDED]/70">
                        Ad Soyad <span className="text-[#C9A24B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Məsələn: Rəşad Əliyev"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#0D0D0D] border border-white/15 focus:border-[#C9A24B] px-4 py-3 text-sm text-[#EDEDED] outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-wider text-[#EDEDED]/70">
                        Telefon Nömrəsi <span className="text-[#C9A24B]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="050 000 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0D0D0D] border border-white/15 focus:border-[#C9A24B] px-4 py-3 text-sm text-[#EDEDED] outline-none transition-colors tabular-nums"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider text-[#EDEDED]/70">
                      E-poçt Ünvanı (İstəyə bağlı)
                    </label>
                    <input
                      type="email"
                      placeholder="ad@shexsi.az"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-white/15 focus:border-[#C9A24B] px-4 py-3 text-sm text-[#EDEDED] outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider text-[#EDEDED]/70">
                      Layihə Haqqında Qısa Məlumat
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Məsələn: Bilgəh qəsəbəsində 600 kv.m villa inşası və ya Port Bakuda mənzil təmiri planlaşdırıram..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-white/15 focus:border-[#C9A24B] px-4 py-3 text-sm text-[#EDEDED] outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Gold Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 text-xs uppercase tracking-[0.2em] font-semibold text-black bg-[#C9A24B] hover:bg-[#DFC06E] transition-all duration-200 cursor-pointer shadow-lg shadow-black/40 flex items-center justify-center gap-2"
                  >
                    <span>Göndər</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-[#EDEDED]/40 text-center">
                    Məlumatlarınızın məxfiliyinə tam zəmanət verilir.
                  </p>
                </form>
              )}
            </div>

            {/* Right: Contact Details Card */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-[#141414] border border-white/10 p-8 sm:p-10 space-y-8">
                <div>
                  <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#C9A24B] block mb-2">
                    Ofis və Əlaqə
                  </span>
                  <h3 className="text-2xl font-serif text-[#EDEDED] uppercase">
                    Baş Qərargah
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#0D0D0D] border border-[#C9A24B]/30 text-[#C9A24B]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#EDEDED]/50 mb-1">
                        Birbaşa Əlaqə
                      </div>
                      <a
                        href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`}
                        className="text-lg font-serif text-white hover:text-[#C9A24B] transition-colors tabular-nums block font-bold"
                      >
                        {COMPANY_CONTACT.phone}
                      </a>
                      <span className="text-xs text-[#EDEDED]/60">Whatsapp & Zəng aktivdir</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#0D0D0D] border border-[#C9A24B]/30 text-[#C9A24B]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#EDEDED]/50 mb-1">
                        Ünvan
                      </div>
                      <div className="text-sm text-white font-medium">
                        {COMPANY_CONTACT.address}
                      </div>
                      <span className="text-xs text-[#EDEDED]/60">Azərbaycan, AZ1029</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#0D0D0D] border border-[#C9A24B]/30 text-[#C9A24B]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#EDEDED]/50 mb-1">
                        Rəsmi E-poçt
                      </div>
                      <a
                        href={`mailto:${COMPANY_CONTACT.email}`}
                        className="text-sm text-white hover:text-[#C9A24B] transition-colors block"
                      >
                        {COMPANY_CONTACT.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#0D0D0D] border border-[#C9A24B]/30 text-[#C9A24B]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#EDEDED]/50 mb-1">
                        İş Saatları
                      </div>
                      <div className="text-sm text-white font-medium">
                        {COMPANY_CONTACT.workingHours}
                      </div>
                      <span className="text-xs text-[#EDEDED]/60">Bazar: İstirahət günü</span>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4 pt-2">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#0D0D0D] border border-[#C9A24B]/30 text-[#C9A24B]">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#EDEDED]/50 mb-1">
                        Sosial Şəbəkə
                      </div>
                      <a
                        href={COMPANY_CONTACT.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-[#C9A24B] hover:text-[#DFC06E] transition-colors"
                      >
                        {COMPANY_CONTACT.instagram}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Map Placeholder Section (styled dark architectural grid map) */}
      <section className="pb-24 sm:pb-32 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative w-full h-80 sm:h-96 bg-[#141414] border border-[#C9A24B]/30 overflow-hidden flex items-center justify-center">
            {/* Architectural Grid pattern */}
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'radial-gradient(#C9A24B 1px, transparent 1px), linear-gradient(to right, #C9A24B 1px, transparent 1px), linear-gradient(to bottom, #C9A24B 1px, transparent 1px)',
                backgroundSize: '40px 40px, 80px 80px, 80px 80px',
              }}
            />

            {/* Subtle radar / crosshair lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 border border-[#C9A24B]/20 rounded-full" />
              <div className="w-96 h-96 border border-[#C9A24B]/10 rounded-full" />
            </div>

            {/* Pinpoint Card */}
            <div className="relative z-10 bg-[#0D0D0D]/90 backdrop-blur-md border border-[#C9A24B] p-6 max-w-sm text-center shadow-2xl space-y-3">
              <div className="w-10 h-10 mx-auto flex items-center justify-center bg-[#C9A24B] text-black">
                <Navigation className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#C9A24B] font-serif">
                TEXNOMAX Baş Qərargahı
              </div>
              <div className="text-sm text-[#EDEDED] font-medium">
                {COMPANY_CONTACT.address}
              </div>
              <div className="text-[11px] font-mono text-[#EDEDED]/50 tabular-nums">
                Koordinatlar: {COMPANY_CONTACT.coordinates}
              </div>
            </div>

            {/* Corner tags */}
            <div className="absolute top-4 left-4 text-[10px] uppercase font-mono tracking-widest text-[#C9A24B]/60">
              BAKU METROPOLITAN AREA · SECTOR A
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] uppercase font-mono tracking-widest text-[#EDEDED]/40">
              LOCATION ID: AZ-BAKU-TXM
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
