'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Denis Gichana, I&apos;m a front-end developer from Nairobi.
          I&apos;ve been a software developer for over 3 years. During my Computer
          Science bachelors degree, I decided to pursue my passion for programming.
          Every project I take on is personal. Whether it’s solving a complex problem, building
          something from scratch, or refining the small details that make a product truly
          shine, I bring my creativity and dedication to the table.
          My core stack is React, Next.js, TypeScript, and Tailwind
          CSS. I am also familiar with Nest.js and Prisma. I am always looking
          to learn new technologies.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
