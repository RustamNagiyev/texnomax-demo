import React, { useState } from 'react';
import { PageType, ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/content';
import { MapPin, Maximize2, ArrowRight } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageType) => void;
  onSelectProject: (project: ProjectItem) => void;
}

type CategoryFilter = 'Hamısı' | 'Villa' | 'Ofis' | 'Bina' | 'Mənzil';

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('Hamısı');

  const filterOptions: CategoryFilter[] = ['Hamısı', 'Villa', 'Ofis', 'Bina', 'Mənzil'];

  const filteredProjects = activeFilter === 'Hamısı'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-[#0D0D0D] text-[#EDEDED] pt-20">
      
      {/* 1. Page Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#141414] border-b border-[#C9A24B]/20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#C9A24B] block mb-3">
            Həyata Keçirdiyimiz İmzalar
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#EDEDED] uppercase">
            Layihələrimiz
          </h1>
          <p className="max-w-xl mx-auto mt-4 text-sm sm:text-base text-[#EDEDED]/70">
            Bakının seçilmiş nöqtələrində tamamlanmış elit villalar, penthouse-lar və biznes rezidensiyaları.
          </p>
        </div>
      </section>

      {/* 2. Filter Tabs & Gallery Grid */}
      <section className="py-20 sm:py-28 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Functional Filter Tabs (interactive button elements with clean aesthetic) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#C9A24B] text-black font-semibold shadow-md shadow-[#C9A24B]/20'
                      : 'bg-[#141414] text-[#EDEDED]/80 hover:text-[#C9A24B] border border-white/10 hover:border-[#C9A24B]/40'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-[#141414] border border-white/10 hover:border-[#C9A24B]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                  
                  {/* Clean unboxed tag overlay */}
                  <div className="absolute top-4 left-4 text-[11px] uppercase tracking-wider text-[#C9A24B] bg-black/80 px-2.5 py-1 border border-[#C9A24B]/30 font-serif">
                    {project.category}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#EDEDED]/80">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
                      <span>{project.location}</span>
                    </span>
                    <span className="flex items-center gap-1.5 tabular-nums text-white/70">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C9A24B]" />
                      <span>{project.area}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-[#EDEDED] group-hover:text-[#C9A24B] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#EDEDED]/70 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#C9A24B]">
                    <span className="uppercase tracking-wider">Layihəyə Bax</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-[#EDEDED]/50 text-sm">
              Bu kateqoriyada hazırda göstəriləcək layihə tapılmadı.
            </div>
          )}

        </div>
      </section>

      {/* 3. Closing CTA Section */}
      <section className="py-24 sm:py-28 bg-[#141414] text-center border-t border-[#C9A24B]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C9A24B]">
            Öz Layihənizi Əlavə Edin
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#EDEDED] uppercase">
            Sizin Məkanınız Növbəti Şah Əsərimiz Olsun
          </h2>
          <p className="text-sm text-[#EDEDED]/70 max-w-lg mx-auto">
            İstər yeni torpaq sahəsində villa inşası, istərsə də mövcud mənzilinizin lüks təmiri üçün bizimlə məsləhətləşin.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold text-black bg-[#C9A24B] hover:bg-[#DFC06E] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Layihəni Müzakirə Et</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
