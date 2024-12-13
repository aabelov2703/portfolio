"use client";
import { useState } from "react";
import CarouselActions from "./carousel-actions";
import CarouselFrame from "./carousel-frame";

type CarouselProps = {
  data: { header?: string; code?: string; img?: string }[];
};
const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const btnClick = (dir: number) => {
    if (isAnimating) return;
    setDirection(dir === -1 ? "left" : "right");
    setIsAnimating(true);

    setCurrent((prev) => (prev + dir + data.length) % data.length);
    setIsAnimating(false);
    setDirection(null);
  };

  return (
    <div className="relative w-full flex flex-col items-center gap-2">
      <div className="relative w-full h-40 overflow-hidden">
        {data.map((item, idx) => (
          <CarouselFrame
            key={idx}
            data={item}
            className={`${
              idx === current
                ? "translate-x-0"
                : idx > current
                ? direction === "left"
                  ? "translate-x-full"
                  : "-translate-x-full"
                : direction === "left"
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          />
        ))}
      </div>
      <CarouselActions
        current={current}
        btnClick={btnClick}
        slides={data.map((_, idx) => idx)}
      />
    </div>
  );
};

export default Carousel;
