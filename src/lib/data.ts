import { Github, Linkedin, Mail } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#resume' },
  { name: 'Certifications', href: '#certifications' },
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
  { name: 'Email', href: 'mailto:dhlaminisiyanda68@gmail.com', icon: Mail },
];

export const projects = [
  {
    title: 'AI Resume Builder Platform',
    description:
      'AI Resume Platform is an intelligent tool designed to help job seekers create professional, tailored resumes effortlessly.Leveraging artificial Intelligence, the platform analyzes your skills, experience, and career goals to generate optimized resumes that stand out to recruiters and applicant tracking systems (ATS)',
    image: '/AI Resume Builder.png',
    liveUrl: 'https://llamacoder.together.ai/share/v2/Q5yB7Ufwy4xR1QcP',
    repoUrl: 'https://github.com/siyandadhlamini',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
  },
  {
    title: 'Lesson Craft',
    description:
      'A responsive dashboard for visualizing complex datasets, providing insightful analytics through interactive charts and graphs.',
    image: '/LessonCraft.PNG',
    liveUrl: '/study.html',
    repoUrl: 'https://github.com/siyandadhlamini',
    tags: ['React', 'D3.js', 'Node.js', 'Express'],
  },
  {
    title: 'Chatbot',
    description:
      'A cross-platform mobile application that helps users plan trips, discover new destinations, and book accommodations on the go.',
    image: '/Chatbot.PNG',
    liveUrl: 'https://poe.com/NETFUSEBOT',
    repoUrl: 'https://github.com/siyandadhlamini',
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
    role: 'Rental Sales Agent',
    company: 'First Car Rental',
    period: '2023',
    description: 'As a Car Rental Agent, I assist customers with their vehicle rental needs by handling reservations, explaining rental terms, and preparing agreements. I process payments, verify licenses, and provide information on vehicle features, upgrades, and insurance options. I also inspect vehicles before and after rentals, report any damages, and make sure each car is clean and ready for the next customer. In this role, I focus on delivering excellent customer service, promoting company services, and maintaining accurate records to ensure smooth and professional operations.',
  },
  {
    role: 'Office Assistant',
    company: 'Training Force',
    period: '2020',
    description: 'As an Office Assistant, I provide basic administrative support to ensure the smooth daily operations of the office. My responsibilities include answering phones, managing emails, filing documents, and handling data entry tasks. I assist with scheduling appointments, organizing meetings, and maintaining office supplies. I also support staff with routine clerical duties and help direct visitors or clients to the appropriate person. This role requires good communication, attention to detail, and the ability to multitask in a professional office environment.',
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
  pdfUrl?: string;
};

export const certifications: Certification[] = [
  {
    institution: 'Google',
    name: 'Python for Data Science and AI',
    period: '2025',
    description: 'I have gained core skills in Python programming, including knowledge of critical data structures, programming fundamentals, and hands-on experience with key Python libraries for data science. I can apply this knowledge to work with data, build applications for data analysis, and confidently use Python tools to solve real-world problems. My training has equipped me with sufficient Python expertise to work effectively with libraries commonly used in data science.',
    pdfUrl: '/Python for Data Science and AI Certificate.pdf'
  },
  {
    institution: '',
    name: 'AI Essentials',
    period: '',
    description: 'Through the AI Essentials program, I gained practical knowledge and experience in Artificial Intelligence (AI) and Machine Learning (ML), including deep learning, generative AI, and automation. I also developed strong skills in data analysis and explored the application of AI in B2B sales and business contexts. This training has provided me with a solid foundation to apply AI/ML techniques in solving real-world problems and building intelligent solutions.',
    pdfUrl: '/AI Essentials Certificate.pdf'
  },
  {
    institution: '',
    name: 'Generative AI',
    period: '',
    description: 'I completed a Generative AI course where I gained foundational knowledge, practical skills, and a functional understanding of how generative AI works. The course included exploration of the latest research in Gen AI, focusing on how organizations are leveraging cutting-edge technology to create value. I received instruction from expert AWS AI practitioners, learning directly from professionals who actively build and deploy AI in real-world business use cases.',
    pdfUrl: '/Generative AI Certificate.pdf'
  },
  {
    institution: '',
    name: 'AI Prompt Engineering',
    period: '',
    description: 'I completed an AI Prompt Engineering course where I developed skills in prompt engineering, generative AI, and large language modeling. The course strengthened my ability to design effective prompts for tools like ChatGPT, while also emphasizing data ethics, ideation, creativity, and research. This training equipped me with the knowledge to responsibly and creatively apply generative AI in solving real-world problems.',
    pdfUrl: '/AI Prompt Engineering Certificate.pdf'
  }
];
