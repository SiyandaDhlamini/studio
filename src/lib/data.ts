
import { Github, Linkedin, Mail } from 'lucide-react';
import type { StaticImageData } from 'next/image';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/siyanda-dhlamini-4b8821203',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/siyandadhlamini',
    icon: Github,
  },
  { name: 'Email', href: 'mailto:siyandanxele68@gmail.com', icon: Mail },
];

export const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce website with features like product catalog, shopping cart, and user authentication, built with a modern tech stack.',
    image: 'project-1',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
  },
  {
    title: 'Data Visualization Dashboard',
    description:
      'A responsive dashboard for visualizing complex datasets, providing insightful analytics through interactive charts and graphs.',
    image: 'project-2',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['React', 'D3.js', 'Node.js', 'Express'],
  },
  {
    title: 'Mobile Travel App',
    description:
      'A cross-platform mobile application that helps users plan trips, discover new destinations, and book accommodations on the go.',
    image: 'project-3',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['React Native', 'Firebase', 'Google Maps API'],
  },
];

export const skills = {
  technical: [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React / Next.js', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'SQL / NoSQL', level: 75 },
    { name: 'Python', level: 70 },
  ],
  soft: [
    { name: 'Problem Solving', level: 95 },
    { name: 'Communication', level: 90 },
    { name: 'Teamwork', level: 95 },
    { name: 'Adaptability', level: 85 },
  ],
};

export const experience = [
  {
    company: 'Tech Innovators Inc.',
    role: 'Frontend Developer Intern',
    period: 'Summer 2023',
    description:
      'Contributed to the development of a major client-facing web application. Collaborated with designers and backend engineers to implement new features and improve user experience.',
  },
  {
    company: 'Code University',
    role: 'Teaching Assistant',
    period: '2022 - 2023',
    description:
      'Assisted in teaching introductory programming courses. Led lab sessions, graded assignments, and provided one-on-one support to students.',
  },
];

export const education = [
  {
    institution: 'University of Technology',
    degree: 'B.Sc. in Computer Science',
    period: '2020 - 2024',
    description:
      'Focused on software engineering, data structures, and algorithms. Graduated with honors.',
  },
];

export type Certification = {
  institution: string;
  name: string;
  period: string;
  description: string;
  pdfUrl?: string;
}

export const certifications: Certification[] = [
  {
    institution: 'Google',
    name: 'Professional Python Certificate',
    period: '2024',
    description: 'A professional certificate demonstrating proficiency in Python for data science and automation.',
    pdfUrl: 'https://www.credly.com/badges/f2cbe4f3-1bab-404d-a451-fb21eecdfa1c/linked_in_profile',
  },
];
