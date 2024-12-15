import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import useOutsideClick from "@/hook/use-outside-click";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NavPortfolio from "../portfolio/nav-portfolio";

type NavItemType = {
  href: string;
  label: string;
  sub?: { size: string; source: NavItemType[]; pathIn?: string[] };
};
type NavItemProps = {
  items: NavItemType[];
  containerClass?: string;
};

const NavItems: React.FC<NavItemProps> = ({ items, containerClass }) => {
  const [showBurger, setShowBurger] = useState(false);
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const path = usePathname();

  useOutsideClick(showBurger, toggleRef, () => setShowBurger(false));

  const openBurger = () => {
    setShowBurger(true);
  };

  const renderNavItems = (styles?: string) =>
    items.map((item) => (
      <div key={item.href}>
        <Link
          className={`md:hover:text-warning ${styles}`}
          href={item.href}
          onClick={() => setShowBurger(false)}
        >
          <div className="hover:-translate-y-[.5px] transition">
            {item.label}
          </div>
        </Link>
        {/* Mobile version: additional submenu in burger menu for a given page */}
        {item.sub?.pathIn?.includes(path) ? (
          <NavPortfolio
            className={`max-w-lg grid gap-x-8 gap-y-[2px] grid-cols-2 flex-wrap ${item.sub.size}:hidden`}
            onClick={() => setShowBurger(false)}
          />
        ) : null}
      </div>
    ));

  return (
    <div className={`w-full h-full ${containerClass}`} ref={toggleRef}>
      <div className="w-full flex justify-end relative md:hidden">
        {!showBurger ? (
          <button
            id="burger-btn"
            aria-label="Burger Toggler"
            className="w-9 my-[1px] h-12 px-2 rounded-sm hover:shadow hover:text-warning absolute right-16"
            onClick={openBurger}
          >
            <Bars3Icon />
          </button>
        ) : (
          <div className="sticky z-50 w-full flex flex-col items-center gap-2 left-0 py-4 rounded-b-xl bg-gradient-to-b from-dark via-blue-950 to-dark text-light opacity-90">
            {renderNavItems("w-full text-lg text-center")}
          </div>
        )}
      </div>
      <div className="hidden h-12 md:flex md:justify-center md:items-center gap-6">
        {renderNavItems()}
      </div>
    </div>
  );
};

export default NavItems;
