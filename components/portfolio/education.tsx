import { EDUCATION } from "@/lib/const-portfolio";

const Education = () => {
  return (
    <section
      id="edu"
      className="flex flex-col justify-center items-center my-10"
    >
      <h2 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-tl from-primary-1 via-primary-1 to-warning-1 text-transparent">
        Education
      </h2>
      <div className="w-full flex flex-col gap-4 md:gap-6 py-4">
        {EDUCATION.map((edu, idx) => (
          <article
            key={idx}
            className="p-4 text-base md:text-lg rounded-xl shadow shadow-blue-500/25"
          >
            <p>{edu.title}</p>
            <p>{edu.school}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
