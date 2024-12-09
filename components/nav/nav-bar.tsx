"use client";
import Logo from "./logo";
import ThemeToggler from "./theme";
import NavItems from "./nav-items";
import { NAV_MAIN } from "@/lib/constants";

const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full flex justify-center bg-gradient-to-r from-dark via-blue-950 to-dark text-light">
      <div className="w-full h-12 flex justify-between lg:w-[1024px] px-6 relative">
        <div className="absolute left-6 h-full z-10">
          <Logo />
        </div>
        <NavItems
          items={NAV_MAIN}
          containerClass="absolute left-0 right-0 h-full"
        />
        <div className="absolute right-6 flex items-center h-full">
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
