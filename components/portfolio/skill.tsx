import Image from "next/image";

type SkillProps = {
  name: string;
  img?: string;
  color?: string;
  className?: string;
  size?: string;
};
const Skill = ({ name, img, color, className, size }: SkillProps) => {
  const imgSize = size === "lg" ? 40 : size === "sm" ? 20 : 30;
  const fontSize =
    size === "lg" ? "text-base" : size === "sm" ? "text-[13px]" : "text-sm";

  return (
    <article
      className={`m-1 py-1 px-2 flex items-center gap-2 text-nowrap rounded shadow shadow-blue-700/15 
        ${className ? className : ""}`}
      style={{ boxShadow: ` ${color ?? "#8C8C8C"} 0px 2px 11px -6px` }}
    >
      {img && <Image src={img} width={imgSize} height={imgSize} alt="" />}
      <span
        className={`text-primary-1 font-light ${fontSize}
        ${img ? "left-10" : ""}`}
      >
        {name}
      </span>
    </article>
  );
};

export default Skill;
