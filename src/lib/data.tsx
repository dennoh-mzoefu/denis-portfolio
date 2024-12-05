import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/projects/projectGo.png',
    title: 'ProjectGO',
    description:
      'App for managing projects and tasks with great ui and dashboard.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Redux toolkit',
      'Express.Js',
      'Prisma',
    ],
    links: {
      preview: 'https://master.d25kc6xwxyg1q5.amplifyapp.com/projects/1',
      github: 'https://github.com/dennoh-mzoefu/project-management',
      githubApi:
        'https://api.github.com/repos/dennoh-mzoefu/project-management',
    },
  },
  {
    image: '/projects/webcrawler.png',
    title: 'Web Crawler',
    description: 'Search app that emulates google.',
    technologies: [
      'React',
      'Tailwind CSS',
      'Javascript',
      'Axios',
      'Google Api',
    ],
    links: {
      preview: 'https://enchanting-haupia-1a1edb.netlify.app/',
      github: 'https://github.com/dennoh-mzoefu/google-app',
      githubApi: 'https://api.github.com/repos/dennoh-mzoefu/google-app',
    },
  },
  {
    image: '/projects/docs.png',
    title: 'Google Docs',
    description:
      'Online editor with synced document functionality resembling google docs.',
    technologies: ['Quill', 'Socket io', 'React.js', 'JavaScript', 'CSS'],
    links: {
      preview: 'https://denis-google-docs.netlify.app/',
      github: 'https://github.com/dennoh-mzoefu/google-docs',
      githubApi: 'https://api.github.com/repos/dennoh-mzoefu/google-docs',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Frontend developer & UI/UX designer, InterIntel',
    location: 'Remote, ',
    description:
      'I have been collaborating with IT team working on both designing and frontend roles. During this period I have gained alot of experience in designing and also advanced my proficiency in LitJs and JS.',
    date: '2023 - present',
  },
  {
    title: 'Full-stack developer (short term contract) Yashio KE',
    location: 'Nairobi',
    description:
      'During this period I engaged in Frontend website development, converting designs into web apps with JavaScript and libraries (React, Nextjs, Vue)',
    date: '2023',
  },
  {
    title: 'Full-Stack developer (intern) THE Jitu',
    location: 'Nyeri',
    description:
      'Involved with developing a number of websites such as Parcel sender app using React and Node.',
    date: '2022',
  },
  {
    title: 'Freelancing',
    location: 'Remote',
    description:
      'As a freelancer, I specialized in graphic design using Figma and website development using Next.js with Strapy CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
    date: '2023 - present',
  },
] as const;

export const skillsData = [
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.AWS className="size-12" /> },
] as const;
