
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
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
  { name: 'Call', href: 'tel:+27737846410', icon: Phone },
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
    institution: 'College of Cape Town',
    degree: 'Electrical Engineering',
    period: '2015',
    description:
      '',
  },
];

export type Certification = {
  institution: string;
  name: string;
  period: string;
  description: string;
  imageUrl?: string;
  pdfUrl?: string;
};

export const certifications: Certification[] = [
  {
    institution: 'Google',
    name: 'Python for Data Science and AI',
    period: '2025',
    description: 'I have gained core skills in Python programming, including knowledge of critical data structures, programming fundamentals, and hands-on experience with key Python libraries for data science. I can apply this knowledge to work with data, build applications for data analysis, and confidently use Python tools to solve real-world problems. My training has equipped me with sufficient Python expertise to work effectively with libraries commonly used in data science.',
    pdfUrl: '/Python Certificate.pdf'
  },
  {
    institution: '',
    name: 'AI Essentials',
    period: '',
    description: 'Through the AI Essentials program, I gained practical knowledge and experience in Artificial Intelligence (AI) and Machine Learning (ML), including deep learning, generative AI, and automation. I also developed strong skills in data analysis and explored the application of AI in B2B sales and business contexts. This training has provided me with a solid foundation to apply AI/ML techniques in solving real-world problems and building intelligent solutions.',
    imageUrl: 'certificate-ai'
  },
  {
    institution: '',
    name: 'Generative AI',
    period: '',
    description: 'I completed a Generative AI course where I gained foundational knowledge, practical skills, and a functional understanding of how generative AI works. The course included exploration of the latest research in Gen AI, focusing on how organizations are leveraging cutting-edge technology to create value. I received instruction from expert AWS AI practitioners, learning directly from professionals who actively build and deploy AI in real-world business use cases.',
    imageUrl: 'certificate-genai'
  },
  {
    institution: '',
    name: 'AI Prompt Engineering',
    period: '',
    description: 'I completed an AI Prompt Engineering course where I developed skills in prompt engineering, generative AI, and large language modeling. The course strengthened my ability to design effective prompts for tools like ChatGPT, while also emphasizing data ethics, ideation, creativity, and research. This training equipped me with the knowledge to responsibly and creatively apply generative AI in solving real-world problems.',
    imageUrl: 'certificate-prompt'
  }
];
