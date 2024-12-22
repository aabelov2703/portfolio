import { ReactNode, useEffect, useRef, useState } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  direction?: string;
  duration?: number;
  delay?: number;
};
const AnimatedSection = ({
  children,
  direction,
  duration,
  delay,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.001 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const style = {
    transitionDuration: duration ? `${duration}ms` : "500ms",
    transitionDelay: delay ? `${delay}ms` : "0ms",
  };
  const optClass = visible
    ? "opacity-100"
    : `opacity-0 ${direction ?? "translate-x-full"}`;

  return (
    <div
      ref={ref}
      style={style}
      className={`transition ease-in-out ${optClass}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
