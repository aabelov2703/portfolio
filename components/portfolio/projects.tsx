import { PROJECTS } from "@/lib/const-portfolio";
import Project from "./project";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center my-10"
    >
      <h2 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-tl from-primary-1 via-primary-1 to-warning-1 text-transparent">
        Projects
      </h2>
      <article className="grid grid-cols-1 sm:grid-cols-2 base:grid-cols-3 gap-8 py-4">
        {PROJECTS.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            descr={project.descr}
            techs={project.techs}
            img={project.img}
          />
        ))}
      </article>
    </section>
  );
};

export default Projects;
