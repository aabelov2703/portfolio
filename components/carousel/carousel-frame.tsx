type CarouselFrameProps = {
  className?: string;
  data: { header?: string; code?: string; img?: string };
};
const CarouselFrame: React.FC<CarouselFrameProps> = ({ className, data }) => {
  return (
    <div
      className={`absolute w-full h-full flex flex-col items-center justify-center transition-transform duration-500 ${className}`}
    >
      <h4 className="text-sm">{data.header}</h4>
      {data.code && (
        <pre className="w-full py-1 px-2 h-40 bg-background font-extralight text-xs shadow-inner overflow-hidden">
          {data.code}
        </pre>
      )}
    </div>
  );
};

export default CarouselFrame;
