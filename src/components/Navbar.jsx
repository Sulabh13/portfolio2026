import { useEffect, useState } from "react";
import resumePdf from "../assets/Sulabh_Hathi_Resume 22.10.26.pdf?url";

const links = [
  { label: "Home", href: "#home" },
  { label: "Service", href: "#service" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonial" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu when link clicked
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`w-full z-50 bg-white transition-all duration-300 ${
        scrolled ? "fixed top-0 shadow-md" : "sticky top-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* LOGO */}
        <a href="#home" className="text-2xl font-bold text-[#3f396d]">
          Sulabh
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative text-gray-800 font-medium text-[1.05rem] hover:text-[#fca61f] transition duration-200 group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fca61f] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="border-2 border-[#6f34fe]/25 text-[#3f396d] px-5 py-2 rounded-full font-semibold hover:border-[#6f34fe] hover:text-[#6f34fe] transition duration-300 text-sm flex items-center gap-1.5"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <span>Resume</span>
          </a>

          <a href="#contact">
            <button className="bg-[#fca61f] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#6f34fe] transition duration-300 text-sm">
              Contact
            </button>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-[#fca61f] text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 shadow-lg">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={handleCloseMenu}
                  className="text-gray-800 font-medium hover:text-[#fca61f] transition"
                >
                  {label}
                </a>
              </li>
            ))}

            <li className="pt-2 flex flex-col gap-2">
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                onClick={handleCloseMenu}
                className="w-full text-center border-2 border-[#6f34fe]/25 text-[#3f396d] py-2.5 rounded-full font-semibold block"
              >
                View Resume (PDF)
              </a>
              <a href="#contact" onClick={handleCloseMenu}>
                <button className="bg-[#fca61f] text-white px-6 py-2.5 rounded-full w-full font-semibold">
                  Contact
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}