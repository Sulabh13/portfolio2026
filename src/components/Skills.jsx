import { useEffect } from 'react'

const skills = [
  { cls: 'html-css', valCls: 'html-val', end: 90, color: '#fca61f', label: 'HTML & CSS' },
  { cls: 'js-skill', valCls: 'js-val', end: 75, color: '#7d2ae8', label: 'JavaScript' },
  { cls: 'cpp-skill', valCls: 'cpp-val', end: 70, color: '#20c997', label: 'C & C++' },
  { cls: 'react-skill', valCls: 'react-val', end: 80, color: '#3f396d', label: 'ReactJS' },
]

export default function Skills() {
  useEffect(() => {
    skills.forEach(({ cls, valCls, end, color }) => {
      let val = 0
      const ring = document.querySelector('.' + cls)
      const label = document.querySelector('.' + valCls)
      if (!ring || !label) return
      const t = setInterval(() => {
        val++
        label.textContent = `${val}%`
        ring.style.background = `conic-gradient(${color} ${val * 3.6}deg, #ededed 0deg)`
        if (val === end) clearInterval(t)
      }, 30)
    })
  }, [])

  return (
    <section id="about" className="py-16 px-6" style={{ backgroundColor: 'rgb(234,234,249)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Circular Progress Grid */}
        <div className="grid grid-cols-2 gap-6 flex-1" data-aos="slide-right">
          {skills.map(({ cls, valCls, label }) => (
            <div
              key={cls}
              className="bg-white rounded-[20%] flex flex-col items-center justify-center py-10 px-6 hover:scale-110 transition-transform duration-500"
            >
              <div
                className={`relative flex items-center justify-center rounded-full ${cls}`}
                style={{ width: 130, height: 130, background: 'conic-gradient(#ededed 0deg, #ededed 360deg)' }}
              >
                <div className="absolute rounded-full bg-white" style={{ width: 120, height: 120 }} />
                <span className={`relative text-2xl font-semibold ${valCls}`}>0%</span>
              </div>
              <span className="mt-3 text-lg font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="flex-1" data-aos="slide-left">
          <p className="text-[#6f34fe] text-xl font-semibold">My Skills</p>
          <h3 className="text-4xl font-bold mt-2 mb-4" style={{ color: '#3f396d' }}>
            Beautiful & Unique Digital Experiences
          </h3>
          <p className="text-gray-500 mb-4">
I am a Full Stack Web Developer with experience in designing and developing responsive, scalable, and user-focused web applications.

On the front end, I build clean and modern user interfaces using HTML, CSS, Tailwind CSS, JavaScript, and React, ensuring high performance, accessibility, and cross-device compatibility.          </p>
          <p className="text-gray-500 mb-6">
In addition, I have a strong foundation in C/C++, which strengthens my problem-solving abilities and enables me to develop efficient, optimized solutions using data structures and algorithms.

I am passionate about building end-to-end web applications and continuously improving my skills to deliver reliable and high-quality software solutions.          </p>
          <button className="bg-[#fca61f] text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-[#6f34fe] hover:-translate-y-2 transition-all duration-500">
            <a href="\src\assets\Sulabh hathi resume 2026 full stack devloper new img.docx" download style={{ textDecoration: 'none', color: '#fff' }}>
              Download CV
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}