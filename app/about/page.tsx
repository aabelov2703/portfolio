const About = () => {
  return (
    <section
      id="about"
      className="flex grow flex-col items-center my-4 gap-4 md:gap-8 p-6 text-base md:text-lg"
    >
      <h1 className={`text-center text-4xl font-medium leading-1`}>About</h1>

      <p className="w-full">
        This website is a personal portfolio show-casing my projects, skills,
        experience, and education. Designed with a focus on simplicity and
        responsiveness, it provides an intuitive navigation experience across
        both desktop and mobile devices.
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
            <strong>Dark/Light Mode Toggle: </strong>
            <ul className="flex flex-col gap-2">
              <li className="ml-5 before:content-['✓'] before:font-bold before:mr-2 before:text-secondary-1">
                Users can easily switch between themes to enhance their browsing
                experience, whether in a light or dark environment.
              </li>
            </ul>
          </li>
          <li className="ml-2 before:content-['➤'] before:mr-2 before:text-secondary-1">
            <strong>Animated Code Slides: </strong>
            <ul className="flex flex-col gap-2">
              <li className="ml-5 before:content-['✓'] before:font-bold before:mr-2 before:text-secondary-1">
                Smooth animations enhance project demo transitions, making the
                browsing experience more dynamic and visually engaging.
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
