/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageType, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#EDEDED] flex flex-col font-sans selection:bg-[#C9A24B] selection:text-black">
      {/* Sticky Luxury Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
        onNavigate={handleNavigate}
      />

      {/* Luxury Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
