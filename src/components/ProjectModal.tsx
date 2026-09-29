import React from 'react';
import { ProjectItem, PageType } from '../types';
import { X, MapPin, Calendar, Maximize2, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigate: (page: PageType) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNavigate }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#141414] border border-[#C9A24B]/30 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-[#C9A24B] bg-black/60 hover:bg-black/90 transition-colors cursor-pointer"
          aria-label="Bağla"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C9A24B] mb-1">
              {project.category}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#EDEDED]/70 border-b border-white/10 pb-4">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>{project.location}</span>
            </div>
            <span aria-hidden="true" className="text-white/20">·</span>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span className="tabular-nums">{project.area}</span>
            </div>
            <span aria-hidden="true" className="text-white/20">·</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span className="tabular-nums">{project.year}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#EDEDED]/80 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#C9A24B] font-semibold">
              Layihənin Üstünlükləri və Spesifikasiyası
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#EDEDED]/85">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/10">
            <p className="text-xs text-[#EDEDED]/60">
              Bu layihəyə bənzər fərdi inşaat və ya təmir planlayırsınız?
            </p>
            <button
              onClick={() => {
                onClose();
                onNavigate('contact');
              }}
              className="px-6 py-3 text-xs uppercase tracking-[0.15em] font-semibold text-black bg-[#C9A24B] hover:bg-[#DFC06E] transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Hesablama və Məsləhət İstə</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
