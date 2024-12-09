import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Hero = () => {
  const textGradientClass = `bg-clip-text bg-gradient-to-tl from-primary-1 via-primary-1 to-warning-1 text-transparent`;
  const btnGradientClass = `bg-gradient-to-br from-primary to-dark`;

  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center mt-2 xs:mt-8 md:mt-10"
    >
      <h1
        className={`text-center text-4xl uppercase font-semibold tracking-tight leading-none ${textGradientClass}`}
      >
        Aleksandr Belov
      </h1>
      <h2
        className={`mb-4 text-3xl font-semibold text-center ${textGradientClass}`}
      >
        Full Stack Developer
      </h2>
      <div className="flex flex-col md:flex-row py-4 gap-4 md:gap-8">
        <div className="relative w-72 h-72 mx-auto">
          <Image
            className="rounded-full drop-shadow shadow-lg"
            src="/assets/AB.jpg"
            fill
            sizes="(max-width: 1280px) 100vw"
            alt="Hero"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-base md:text-lg">
          <p className="mb-4">
            Full-Stack Developer with 5 years of experience, proficient in
            JavaScript frameworks (React, Next.js), TypeScript, HTML5, CSS3,
            Java Spring Boot, Flask, and Node.js.
          </p>
          <p className="mb-4">
            With over 20 years as a database developer, I combine deep expertise
            in data architecture with modern frontend and backend technologies.
          </p>
          <p className="mb-4">
            Skilled in SQL/NoSQL databases, designing RESTful APIs, and
            delivering scalable solutions.
          </p>
          <p className="mb-4">
            Passionate about exploring new technologies, with strong experience
            in troubleshooting, debugging, and mentoring.
          </p>
          <a
            className={`w-[130px] md:w-[142px] flex justify-between rounded-full py-2 px-6 text-white opacity-85
              transition duration-300 hover:opacity-100 hover:saturate-200 hover:bg-primary-1 ${btnGradientClass}`}
            href="/Aleksandr Belov - Fullstack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Resume
            <ArrowDownTrayIcon className="w-5 md:w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
