import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Denis Gichana | Software developer',
  description:
    "Hello, I'm Denis. I am full stack developer from Nairobi. I enjoy building sites and apps. My focus is React (Next.js).",
  keywords: [
    'Dneis Gichana',
    'Front-end developer',
    'Back-end developer',
    'Nairobi',
    'remote',
    'React',
    'Next.js',
    'Web development',
    'Front-end',
    'UI/UX',
    'Responsive design',
    'JavaScript',
    'HTML',
    'CSS',
    'Portfolio',
    'Projects',
    'Website',
    'Web applications',
    'Developer',
    'Code',
    'Programming',
    'Tech enthusiast',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
