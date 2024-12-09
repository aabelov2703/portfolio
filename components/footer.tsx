import { LINKS } from "@/lib/const-portfolio";
import Logo from "./nav/logo";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const wrapClass = `w-full flex justify-center text-light bg-gradient-to-r from-dark via-blue-950 to-dark`;
  const containerClass = `w-full flex justify-between items-center px-6 lg:w-[1024px]`;

  return (
    <footer className={wrapClass}>
      <div className={containerClass}>
        <Logo />
        <div className="w-full flex justify-center items-center gap-2">
          <Link
            className="mx-0 flex gap-2 items-center"
            href="mailto:aleksandr.belov.2703@gmail.com"
          >
            <Image
              className="hover:scale-110 hover:saturate-200 transition"
              src={"/assets/icons/Email_et.svg"}
              width={20}
              height={20}
              alt="email to"
            />
          </Link>
          {LINKS.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="hover:scale-110 hover:saturate-200 transition"
                src={link.img}
                width={20}
                height={20}
                alt={link.label}
              />
            </Link>
          ))}
        </div>
        <div className="flex gap-2">©2024</div>
      </div>
    </footer>
  );
};

export default Footer;
