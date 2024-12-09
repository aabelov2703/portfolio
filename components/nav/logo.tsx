import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="relative py-3 p-2">
        <div className="bg-gradient-to-br  from-blue-950 via-amber-400/70 to-blue-50 blur-[1px] rounded-full w-10 h-6" />
        <div className="text-xl font-semibold absolute top-[9px] left-[12px] blur-[1px]">
          <span className="italic text-amber-200">A</span>
          <span className="italic text-blue-700">B</span>
        </div>
        <div className="text-xl font-semibold absolute top-[10px] left-[14px]">
          <span className="italic text-amber-200">A</span>
          <span className="italic text-blue-950">B</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
