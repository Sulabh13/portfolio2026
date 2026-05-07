import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Service", href: "#service" },
  { label: "About", href: "#about" },
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

        {/* CONTACT BUTTON */}
        <a href="#contact" className="hidden md:block">
          <button className="bg-[#fca61f] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#6f34fe] transition duration-300">
            Contact
          </button>
        </a>

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

            <li className="pt-2">
              <a href="#contact" onClick={handleCloseMenu}>
                <button className="bg-[#fca61f] text-white px-6 py-2 rounded-full w-full font-semibold">
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