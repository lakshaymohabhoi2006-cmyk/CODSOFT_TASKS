export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
