"use client";
import { NAV_PORTOLIO } from "@/lib/const-portfolio";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavPortfolioProps = {
  className?: string;
  onClick?: () => void;
};
const NavPortfolio: React.FC<NavPortfolioProps> = ({ className, onClick }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0.01,
      }
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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
          className={`px-2 p-0 md:p-2 md:px-3 text-md md:text-base hover:z-50
            ${
              activeSection === navItem.href.slice(1)
                ? "rounded bg-gradient-to-b from-blue-800 via-light to-blue-800 text-dark saturate-50 hover:saturate-[75%] scale-105 transition-transform"
                : "hover:text-white hover:-translate-y-[.5px] transition "
            }`}
          onClick={(e) => linkClick(e, navItem.href)}
        >
          {navItem.label}
        </Link>
      ))}
    </div>
  );
};

export default NavPortfolio;
