import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type CarouselActionsProps = {
  current: number;
  btnClick: (dir: number) => void;
  slides: number[];
};
const CarouselActions: React.FC<CarouselActionsProps> = ({
  current,
  btnClick,
  slides,
}) => {
  return (
    <div className="w-full flex justify-between">
      <button
        onClick={() => btnClick(-1)}
        className="size-6 rounded-full hover:scale-110 hover:bg-neutral-0 hover:border hover:border-foreground transition"
        aria-label="Previous Slide"
      >
        <ChevronLeftIcon className="w-full" />
      </button>
      <div className="flex justify-center gap-3 p-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`rounded-full w-3 h-3 transition ${
              idx === current ? "bg-secondary" : "bg-foreground"
            }`}
            onClick={() => btnClick(idx - current)}
            aria-label="Slide Index"
          ></button>
        ))}
      </div>
      <button
        onClick={() => btnClick(1)}
        className="size-6 rounded-full hover:scale-110 hover:bg-neutral-0 hover:border hover:border-foreground transition"
        aria-label="Previous Slide"
      >
        <ChevronRightIcon className="w-full" />
      </button>
    </div>
  );
};

export default CarouselActions;
