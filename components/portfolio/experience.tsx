import Skill from "./skill";
import { SKILLS } from "@/lib/const-portfolio";

type PositionType = { role: string; responsibility: string; techs: string[] };
type ExperienceProps = {
  company: string;
  period: string[];
  positions: PositionType[];
};
const Experience = ({ company, period, positions }: ExperienceProps) => {
  return (
    <article>
      <p className="w-full flex justify-between items-center">
        <span className="text-xl md:text-2xl font-semibold bg-clip-text bg-gradient-to-tl from-primary-1 via-primary-1 to-warning-1 text-transparent">
          {company}
        </span>
        <span className="text-base md:text-lg">{period.join(" - ")}</span>
      </p>
      {positions.map((pos, idx) => (
        <div key={idx} className="mb-2">
          <p className="px-4 text-lg md:text-xl font-semibold ">{pos.role}</p>
          <p className="px-4 text-base md:text-lg">{pos.responsibility}</p>
          <ul className="flex flex-wrap gap-x-1 gap-y-0">
            {pos.techs.map((tech) => {
              const skillData = SKILLS.find((skill) => skill.name === tech);
              return (
                <li key={tech}>
                  {skillData ? (
                    <Skill
                      name={skillData.name}
                      img={skillData.img}
                      color={skillData.color}
                      className="py-[1px]"
                      size="sm"
                    />
                  ) : (
                    <Skill name={tech} className="py-[1px]" size="sm" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </article>
  );
};

export default Experience;
