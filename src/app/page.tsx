import { About } from '@/components/about';
import BackgroundCircles from '@/components/BackgroundCircles';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Hero from '@/components/hero';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';
import { env } from '@/env.mjs';
import { projectsData } from '@/lib/data';

const Home = async () => {
  const starsCount = await Promise.all(
    projectsData.map(async ({ links }) => {
      const res = await fetch(links.githubApi, { cache: 'no-store' });
      const data = await res.json();
      return data.stargazers_count;
    })
  );

  return (
    <>
      <div className="container flex flex-col items-center">
        {/* <Header /> */}
        <div className='fixed z-20'>
          <Header />
        </div>
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        {/* <Intro /> */}
        <SectionDivider />
        <About />
        <Projects starsCount={starsCount} />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default Home;
