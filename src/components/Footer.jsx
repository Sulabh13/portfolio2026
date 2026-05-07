const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const socialIcons = [
  { href: 'https://www.facebook.com/share/16FCCC9CAN/', icon: 'fa-brands fa-facebook fa-xl', color: '#1877f2' },
  { href: 'https://wa.me/916263110540', icon: 'bi bi-whatsapp', color: '#25D366' },
  { href: 'https://github.com/Sulabh13', icon: 'fa-brands fa-github fa-xl', color: '#1a1a1a' },
  // { href: '#', icon: 'fa-brands fa-x-twitter fa-xl', color: '#fff' },
]

export default function Footer() {
  return (
    <footer className="text-center py-10 px-6" style={{ backgroundColor: '#211e39' }}>
      <h3 className="text-white text-2xl font-bold mb-6" data-aos="fade-up">Portfolio</h3>

      <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up">
        {navLinks.map(({ label, href }, i) => (
          <span key={label} className="flex items-center gap-4">
            <a href={href} className="text-gray-500 hover:text-[#fca61f] transition-colors text-base">
              {label}
            </a>
            {i < navLinks.length - 1 && <span className="text-gray-600">|</span>}
          </span>
        ))}
      </div>

      <div className="flex justify-center gap-4 mb-8" data-aos="fade-up">
        {socialIcons.map(({ href, icon, color }) => (
          <a key={icon} href={href} target="_blank" rel="noreferrer">
            <button className="bg-white w-12 h-12 rounded-full flex items-center justify-center hover:-translate-y-4 transition-transform duration-500">
              <i className={icon} style={{ color }}></i>
            </button>
          </a>
        ))}
      </div>

      <hr className="border-gray-700 mb-4" />
      <p className="text-gray-500 text-sm">© 2024 Sulabh Hathi. All rights reserved.</p>
    </footer>
  )
}