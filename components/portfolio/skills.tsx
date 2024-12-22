import { SKILLS } from "@/lib/const-portfolio";
import Skill from "./skill";
import AnimatedSection from "../animated-section";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center my-10"
    >
      <h2 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-tl from-primary-1 via-primary-1 to-warning-1 text-transparent">
        Skills
      </h2>
      <article className="flex justify-center flex-wrap py-4">
        {SKILLS.map((skill, idx) => (
          <AnimatedSection
            key={idx}
            delay={150}
            direction="translate-y-10"
            duration={300}
          >
            <Skill name={skill.name} img={skill.img} color={skill.color} />
          </AnimatedSection>
        ))}
      </article>
    </section>
  );
};

export default Skills;
