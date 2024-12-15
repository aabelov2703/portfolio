import { ReactNode, useEffect, useRef, useState } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
};
const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.005 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition duration-500 ease-in-out 
        ${isVisible ? "opacity-100" : "opacity-0 md:translate-x-full"}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
