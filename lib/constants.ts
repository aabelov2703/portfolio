import { NAV_PORTOLIO } from "./const-portfolio";

export const NAV_MAIN = [
  {
    href: "/",
    label: "Portfolio",

    /* The internal navigation menu can be embedded into the mobile version's burger menu as a submenu of the selected navigation item. */
    sub: {
      size: "md",
      source: NAV_PORTOLIO,
      pathIn: ["/", "/portfolio"],
    },
  },
  { href: "about", label: "About" },
];
