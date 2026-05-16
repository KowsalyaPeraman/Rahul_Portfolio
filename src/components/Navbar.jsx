import { useEffect, useState } from "react";

const Navbar = ({ openContact }) => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "hire", "contact"];
      const scrollPos = window.scrollY + 150;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const labels = {
    home: "Home",
    services: "Service",
    hire: "Why hire me?",
  };

  const linkClass = (id) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      active === id
        ? "bg-orange-500 text-white"
        : "text-white hover:text-orange-400"
    }`;

  return (
    <div className="w-full flex justify-center px-3 py-3 bg-white sticky top-0 z-50">
      <div className="w-full max-w-[1100px] bg-black rounded-full px-6 sm:px-16 py-2">

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center justify-between gap-1">
          {["home", "services", "hire"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={linkClass(id)}
            >
              {labels[id]}
            </button>
          ))}

          <button
            onClick={() => openContact()}
            className="px-4 py-2 text-sm font-medium text-orange-400 hover:text-white transition-colors duration-300"
          >
            Contact
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="flex sm:hidden items-center justify-between">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-xl px-2 py-1"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden absolute top-[60px] left-3 right-3 bg-black rounded-3xl p-4 flex flex-col gap-2 z-50 shadow-2xl">
          {["home", "services", "hire"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`w-full text-left px-4 py-3 rounded-full text-sm font-medium transition-all ${
                active === id
                  ? "bg-orange-500 text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {labels[id]}
            </button>
          ))}

          <button
            onClick={() => {
              openContact();
              setMenuOpen(false);
            }}
            className="w-full text-left px-4 py-3 rounded-full text-sm font-medium text-orange-400 hover:bg-white/10"
          >
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;