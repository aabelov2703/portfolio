import Image from "next/image";
import Carousel from "../carousel/carousel";

type ProjectProps = {
  title: string;
  descr: string;
  techs: string[];
  img: string;
  snippets: { header: string; code: string }[];
};
const Project = ({ title, descr, techs, img, snippets }: ProjectProps) => {
  return (
    <div className="flex flex-col rounded-xl shadow shadow-blue-500/25 bg-primary-0">
      <div className="relative w-full h-36 ">
        <Image
          className="w-full object-cover rounded-t-xl -p-1"
          src={img}
          fill
          sizes="(max-width: 768px) 100vw"
          alt=""
        />
      </div>
      <div className="flex flex-col grow gap-y-4 p-4">
        <h3 className="text-xl font-medium text-center tracking-tight leading-none">
          {title}
        </h3>
        <p className="leading-0 text-base md:text-lg">{descr}</p>
        <div>
          <p className="bolder mb-1">Tech Stack:</p>
          <ul className="flex flex-wrap opacity-95">
            {techs.map((tech) => (
              <li
                key={tech}
                className="m-[2px] px-2 text-sm bg-gradient-to-br from-primary to-dark text-light transition rounded-full border border-blue-500 border-opacity-20"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <p className="bolder mb-1">Snippet Gallery:</p>
          <Carousel data={snippets} />
        </div>
      </div>
    </div>
  );
};

export default Project;
