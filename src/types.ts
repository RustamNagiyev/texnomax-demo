export type PageType = 'home' | 'about' | 'services' | 'projects' | 'contact';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Villa' | 'Ofis' | 'Bina' | 'Mənzil';
  location: string;
  area: string;
  year: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
  scope: string[];
}
