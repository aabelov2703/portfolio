import { EXPERIENCE } from "@/lib/const-portfolio";
import Experience from "./experience";

const Experiences = () => {
  return (
    <section
      id="exp"
      className="flex flex-col justify-center items-center my-10"
    >
      <h2 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-tl from-primary-1 via-primary-1 to-warning-1 text-transparent">
        Experience
      </h2>
      <div className="w-full flex flex-col m-4 gap-8 md:gap-10">
        {EXPERIENCE.map((exp, idx) => (
          <Experience
            key={idx}
            company={exp.company}
            period={exp.period}
            positions={exp.positions}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
