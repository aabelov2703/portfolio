import { LINKS } from "@/lib/const-portfolio";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-base md:text-lg mt-30 mb-60"
    >
      <h2 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-tl from-primary-1 via-primary-1 to-warning-1 text-transparent">
        Contact
      </h2>
      <p>Feel free to contact me via email:</p>
      <Link
        className="mb-8 underline hover:text-warning-1 hover:scale-105 transition"
        href="mailto:aleksandr.belov.2703@gmail.com"
      >
        alex.belov.2703@gmail.com
      </Link>
      <div>
        {LINKS.map((item, idx) => (
          <Link
            key={idx}
            className="m-2 flex items-center gap-2 hover:scale-105 hover:saturate-200 transition"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={item.img} width="30" height="30" alt="" />
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
