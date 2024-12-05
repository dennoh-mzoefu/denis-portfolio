'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import BackgroundCircles from './BackgroundCircles';
import { Header } from './header';

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      `Hello👋, am Denis Gichana`,
      'I enjoy learning 📓✍🏻💡',
      'I like to code; 👩🏻‍💻',
      'I like listening to music 🎵',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="scroll-mt-96 h-full my-10 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-contain"
          src="/assets/portfolio_image.jpg"
          alt=""
        />

        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
            Software Developer
          </h2>
          <h1 className="text-2xl md:text-5xl lg:text-5xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#785c0e" />
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="flex flex-row gap-2"
        >
          <Button asChild size="lg">
            <Link href="#contact">
              Get in touch <Icons.arrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="hidden sm:flex"
            asChild
          >
            <a href="/Denis_Gichana-Cv.pdf" download>
              Download CV <Icons.download className="ml-2 size-4" />
            </a>
          </Button>
          <Button variant="secondary" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/denis-gichana-806855241/"
              aria-label="Linkedin"
              download
            >
              <Icons.linkedin className="size-6" />
            </a>
          </Button>
          <Button variant="secondary" size="icon" asChild>
            <a href="https://github.com/dennoh-mzoefu" aria-label="Github">
              <Icons.github className="size-6" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
