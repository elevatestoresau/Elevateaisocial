
export type Language = 'en' | 'es';

export interface ServiceItem {
  name: string;
  target: string;
  result: string;
  cta: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type PageView = 'home' | 'proposal' | 'landing' | 'strategy';
