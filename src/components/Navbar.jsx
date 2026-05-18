import { useEffect, useState } from "react";

const Navbar = ({ openContact }) => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 10);
      const sections = ["home", "services", "hire", "contact"];
      const scrollPos = window.scrollY + 120;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) setActive(id);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const labels = { home: "Home", services: "Service", hire: "Why hire me?" };

  const linkClass = (id) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      active === id ? "bg-orange-500 text-white" : "text-white hover:text-orange-400"
    }`;

  return (
    <div className={`w-full flex justify-center px-3 py-3 sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md" : "bg-white"}`}>
      <div className="w-full max-w-[1100px] bg-black rounded-full px-5 py-2">

        {/* Desktop */}
        <div className="hidden sm:flex items-center justify-between gap-1">
          {["home", "services", "hire"].map((id) => (
            <button key={id} onClick={() => scrollToSection(id)} className={linkClass(id)}>
              {labels[id]}
            </button>
          ))}
          <button
            onClick={openContact}
            className="px-4 py-2 text-sm font-medium text-orange-400 hover:text-white transition-colors duration-300"
          >
            Contact
          </button>
        </div>

        {/* Mobile */}
        <div className="flex sm:hidden items-center justify-between px-1">
          <span className="text-white font-bold text-sm">Menu</span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-xl w-8 h-8 flex items-center justify-center"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden absolute top-[60px] left-3 right-3 bg-black rounded-3xl p-4 flex flex-col gap-2 z-50 shadow-2xl"
          style={{ animation: "dropDown 0.25s cubic-bezier(0.22,1,0.36,1)" }}>
          {["home", "services", "hire"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`w-full text-left px-4 py-3 rounded-full text-sm font-medium transition-all ${
                active === id ? "bg-orange-500 text-white" : "text-white hover:bg-white/10"
              }`}
            >
              {labels[id]}
            </button>
          ))}
          <button
            onClick={() => { openContact(); setMenuOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-full text-sm font-medium text-orange-400 hover:bg-white/10"
          >
            Contact
          </button>
        </div>
      )}

      <style>{`
        @keyframes dropDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
