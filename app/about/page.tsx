import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="flex grow flex-col items-center my-4 gap-4 md:gap-8 p-6 text-base md:text-lg"
    >
      <h1 className={`text-center text-4xl font-medium leading-1`}>About</h1>

      <p className="w-full">
        This website is a personal portfolio showcasing my projects, skills,
        experience and education. Designed with simplicity and responsiveness in
        mind, it provides intuitive navigation on both desktop and mobile.
        Developed entirely without the use of third-party libraries, it uses
        only Next.js and Tailwind CSS to ensure a clean and efficient
        implementation.
      </p>

      <div>
        <h3 className="w-full text-xl md:text-2xl font-medium underline mb-2">
          Key Features:
        </h3>
        <ul className="flex flex-col gap-3 md:gap-4">
          <li className="ml-2 before:content-['➤'] before:mr-2 before:text-secondary-1">
            <strong>Built with Modern Tools: </strong>
            <ul className="flex flex-col gap-2">
              <li className="ml-5 before:content-['✓'] before:font-bold before:mr-2 before:text-secondary-1">
                Developed using <strong>Next.js</strong> for fast rendering and{" "}
                <strong>Tailwind CSS</strong> for streamlined styling, this site
                is both aesthetically pleasing and highly performant.
              </li>
            </ul>
          </li>
          <li className="ml-2 before:content-['➤'] before:mr-2 before:text-secondary-1">
            <strong>Responsive Navigation:</strong>
            <ul className="flex flex-col gap-2">
              <li className="ml-5 before:content-['✓'] before:font-bold before:mr-2 before:text-secondary-1">
                Desktop navigation includes links to <em>Portfolio</em> and{" "}
                <em>About</em>, along with an anchor navigation bar for quickly
                jumping to sections like Projects, Skills, Experience,
                Education, and Contacts.
              </li>

              <li className="ml-5 before:content-['✓'] before:font-bold before:mr-2 before:text-secondary-1">
                Mobile navigation adapts with a <strong>burger menu</strong>,
                where anchor navigation is seamlessly integrated under the{" "}
                <em>Portfolio</em> section for a clean and compact layout.
              </li>
            </ul>
          </li>
          <li className="ml-2 before:content-['➤'] before:mr-2 before:text-secondary-1">
            <strong>Animation: </strong>
            <ul className="flex flex-col gap-2">
              <li className="ml-5 before:content-['✓'] before:font-bold before:mr-2 before:text-secondary-1">
                Highlights the Portfolio&apos;s active section dynamically using
                the
                <Link
                  className="underline italic text-primary-1 mx-2"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IntersectionObserver API
                </Link>
                for a clear browsing experience, with smooth animations that
                make the new section gently appear as it enters the viewport.
              </li>
              <li className="ml-5 before:content-['✓'] before:font-bold before:mr-2 before:text-secondary-1">
                Smooth animations also enhance project demo transitions, making
                the browsing experience more dynamic and visually engaging.
              </li>
            </ul>
          </li>

          <li className="ml-2 before:content-['➤'] before:mr-2 before:text-secondary-1">
            <strong>Dark/Light Mode Toggle: </strong>
            <ul className="flex flex-col gap-2">
              <li className="ml-5 before:content-['✓'] before:font-bold before:mr-2 before:text-secondary-1">
                Users can easily switch between themes to enhance their browsing
                experience, whether in a light or dark environment.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="w-full text-xl md:text-2xl font-medium underline mb-2">
          Purpose:
        </h3>
        <p className="w-full">
          The portfolio is designed to highlight my professional journey and
          technical expertise, while also demonstrating practical implementation
          of modern web development technologies.
        </p>

        <p className="w-full">
          Explore the sections to see more details about my work and
          achievements!
        </p>
      </div>
    </section>
  );
};

export default About;
