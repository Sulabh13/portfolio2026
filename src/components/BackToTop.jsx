import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return visible ? (
    <button
      onClick={scrollTop}
      className="fixed bottom-10 right-10 z-50 bg-[#fca61f] text-white w-12 h-12 rounded-full text-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      style={{ animation: 'pulse 3s infinite' }}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  ) : null
}
