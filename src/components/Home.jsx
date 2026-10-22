import { useEffect } from 'react'
import sulabh from "../assets/sulabh.jpeg"

const words = ['FullStack Developer', 'Problem Solver & Developer ', 'JavaScript', 'React js']

const InstagramLogo = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" fill="url(#igGrad)" />
    <circle cx="12" cy="12" r="4.2" fill="none" stroke="white" strokeWidth="1.8" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="white" />
  </svg>
)

const socialLinks = [
  {
    href: 'https://in.linkedin.com/in/sulabh-hathi-933a512b5',
    icon: <i className="fa-brands fa-linkedin fa-xl" style={{ color: '#0077b5' }} />,
  },
  {
    href: 'https://github.com/Sulabh13',
    icon: <i className="fa-brands fa-github fa-xl" style={{ color: '#1a1a1a' }} />,
  },
  {
    href: 'https://www.instagram.com/im_sulabh13',
    icon: <InstagramLogo />,
  },
]

export default function Home() {
  useEffect(() => {
    let wordIndex = 0, charIndex = 0, isDeleting = false
    const span = document.getElementById('typing-span')
    if (!span) return

    const typeEffect = () => {
      const currentWord = words[wordIndex]
      span.textContent = currentWord.substring(0, charIndex)

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++
        setTimeout(typeEffect, 120)
      } else if (isDeleting && charIndex > 0) {
        charIndex--
        setTimeout(typeEffect, 70)
      } else {
        isDeleting = !isDeleting
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex
        setTimeout(typeEffect, 1000)
      }
    }
    typeEffect()
  }, [])

  return (
    <section
      id="home"
      className="pt-16 pb-12 min-h-screen flex items-center"
      style={{ background: 'linear-gradient(33deg, rgba(242,242,255,1) 0%, rgba(235,249,255,1) 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-10 w-full">

        {/* Text */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl font-bold mb-1" style={{ color: '#3f396d' }}>Hello! I Am</h2>
          <h1 className="text-5xl font-extrabold mb-2 tracking-tight" style={{ color: '#6f34fe' }}>
            Sulabh Hathi
          </h1>

          <div className="flex items-center justify-center md:justify-start min-h-[3rem] mb-5">
            <span
              id="typing-span"
              className="text-2xl font-bold"
              style={{ color: '#3f396d' }}
            />
            <span
              className="inline-block w-[3px] h-7 ml-1 rounded-sm"
              style={{ background: '#6f34fe', animation: 'blink 0.75s step-end infinite' }}
            />
          </div>

          <p className="text-gray-500 text-base leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
            Building responsive, user-friendly applications from concept to deployment
            with expertise in front-end and back-end development.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 justify-center md:justify-start mb-7">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <a href="mailto:kumarsulabh2003@gmail.com">
            <button
              className="text-white px-10 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#fca61f' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#6f34fe')}
              onMouseLeave={e => (e.currentTarget.style.background = '#fca61f')}
            >
              Hire Me
            </button>
          </a>
        </div>

        {/* Image */}
        <div className="flex flex-1 justify-center md:justify-end items-center">
          <div className="relative w-64 h-64">
            <div
              className="absolute inset-[-6px] rounded-full"
              style={{
                background: 'linear-gradient(135deg, #6f34fe, #fca61f, #B197FC)',
                animation: 'rotateBorder 4s linear infinite',
              }}
            />
            <img
              src={sulabh}
              alt="Sulabh"
              className="w-full h-full object-cover rounded-full border-[5px] border-white relative z-10"
              style={{ animation: 'floatimg 4s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatimg {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes rotateBorder {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}