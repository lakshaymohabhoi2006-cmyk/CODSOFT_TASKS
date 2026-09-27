import { Project, Skill, SocialLink } from '@/types';

export const SITE_CONFIG = {
  title: 'Lakshay Mohabhoi - Full Stack Developer',
  description: 'Professional portfolio showcasing projects, skills, and experience',
  author: 'Lakshay Mohabhoi',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio.example.com',
  keywords: ['portfolio', 'developer', 'full-stack', 'web development'],
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/lakshaymohabhoi2006-cmyk',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lakshay-mohabhoi-b89b8a325',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter',
  },
  {
    name: 'Email',
    url: 'mailto:lakshay@example.com',
    icon: 'Mail',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Project Title 1',
    description: 'Brief project description',
    longDescription: 'Detailed description of your first project',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/lakshaymohabhoi2006-cmyk/project-1',
      live: 'https://project-1.example.com',
    },
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Project Title 2',
    description: 'Brief project description',
    longDescription: 'Detailed description of your second project',
    technologies: ['React', 'Node.js', 'MongoDB'],
    links: {
      github: 'https://github.com/lakshaymohabhoi2006-cmyk/project-2',
      live: 'https://project-2.example.com',
    },
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Project Title 3',
    description: 'Brief project description',
    longDescription: 'Detailed description of your third project',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/lakshaymohabhoi2006-cmyk/project-3',
    },
    featured: false,
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'VS Code'],
  },
  {
    category: 'Soft Skills',
    items: ['Problem Solving', 'Communication', 'Team Collaboration', 'Project Management'],
  },
];

export const ABOUT_TEXT = {
  bio: "Hi! I'm Lakshay Mohabhoi, a passionate full-stack developer with experience building modern web applications.",
  intro: 'I love creating beautiful, functional, and user-centric web experiences. With expertise in frontend and backend technologies, I can help bring your ideas to life.',
  details: "I'm constantly learning and exploring new technologies to stay updated with industry trends. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.",
};

export const NAVIGATION_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];
