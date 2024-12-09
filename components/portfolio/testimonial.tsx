import { TESTIMONIAL } from "@/lib/const-portfolio";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="flex flex-col justify-center items-center my-10"
    >
      <h2 className="text-3xl font-semibold mb-4 bg-clip-text bg-gradient-to-tl from-primary-1 via-primary-1 to-warning-1 text-transparent">
        Testimonial
      </h2>
      <div className="w-full flex flex-col justify-center gap-4 md:gap-6 py-4">
        {TESTIMONIAL.map((el, idx) => (
          <article key={idx} className="text-base md:text-lg">
            <Image
              src={el.img}
              width={100}
              height={100}
              className="rounded-full mx-auto mb-4"
              alt=""
            />
            <p className="text-center mb-2">&quot;{el.review}&quot;</p>
            <p className="text-center">{el.person}</p>
            <p className="text-center">
              {el.role}, {el.company}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
