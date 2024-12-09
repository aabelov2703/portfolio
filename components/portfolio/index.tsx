import NavPortfolio from "@/components/portfolio/nav-portfolio";
import Hero from "@/components/portfolio/hero";
import Projects from "@/components/portfolio/projects";
import Skills from "@/components/portfolio/skills";
import Experiences from "@/components/portfolio/experiences";
import Education from "@/components/portfolio/education";
import Testimonial from "@/components/portfolio/testimonial";
import Contact from "@/components/portfolio/contact";

export default function Porfolio() {
  return (
    <div className="w-full">
      <NavPortfolio
        className="hidden md:flex justify-center sticky z-50 left-4 right-4 top-12 shrink max-w-3/4 mx-auto rounded-b-3xl text-center text-light
          bg-gradient-to-t from-dark via-blue-950 to-blue-950 opacity-90"
      />
      <div className="flex flex-col text-primary-1 px-4 xs:px-6 md:px-8 gap-10 ">
        <Hero />
        <Projects />
        <Skills />
        <Experiences />
        <Education />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}
