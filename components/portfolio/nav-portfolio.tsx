"use client";
import { NAV_PORTOLIO } from "@/lib/const-portfolio";
import Link from "next/link";

type NavPortfolioProps = {
  className?: string;
  onClick?: () => void;
};
const NavPortfolio: React.FC<NavPortfolioProps> = ({ className, onClick }) => {
  const linkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elTarget = document.querySelector(href);
    if (elTarget) {
      const offset = elTarget?.clientWidth <= 608 ? -69 : -129;
      const elPosition = elTarget.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    if (onClick) onClick();
  };

  return (
    <div className={className}>
      {NAV_PORTOLIO.map((navItem, idx) => (
        <Link
          key={idx}
          href={navItem.href}
          scroll={true}
          className="px-2 p-0 md:p-2 text-md md:text-base hover:z-50 hover:text-white hover:-translate-y-[.5px] transition"
          onClick={(e) => linkClick(e, navItem.href)}
        >
          {navItem.label}
        </Link>
      ))}
    </div>
  );
};

export default NavPortfolio;
