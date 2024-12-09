import { useAppContext } from "@/context/app-context";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

const Theme = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <button
      id="theme-btn"
      aria-label="Theme Toggler"
      className="min-w-9 py-1 px-2 h-7 text-white rounded-sm hover:shadow hover:opacity-100 hover:text-warning"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default Theme;
