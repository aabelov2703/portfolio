"use client";
import { useState } from "react";
import CarouselActions from "./carousel-actions";
import CarouselFrame from "./carousel-frame";

type CarouselProps = {
  data: { header?: string; code?: string; img?: string }[];
};
const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const frameTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const frameTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    btnClick(deltaX > 0 ? -1 : 1);
    setTouchStartX(0);
  };

  const btnClick = (dir: number) => {
    setCurrent((prev) => (prev + dir + data.length) % data.length);
  };

  return (
    <div className="relative w-full flex flex-col items-center gap-2">
      <div
        className="relative w-full h-40 overflow-hidden"
        onTouchStart={frameTouchStart}
        onTouchEnd={frameTouchEnd}
      >
        {data.map((item, idx) => {
          const className =
            idx === current
              ? "translate-x-0"
              : idx > current
              ? "translate-x-full"
              : "-translate-x-full";
          return <CarouselFrame key={idx} data={item} className={className} />;
        })}
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
