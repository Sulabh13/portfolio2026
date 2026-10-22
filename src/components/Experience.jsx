import { useState } from 'react'

/* ─────────────────────────────────────────────
   Professional Experience Data
───────────────────────────────────────────── */
const experiences = [
  {
    id: 'excellup',
    company: 'Excellup Coding Classes',
    role: 'Full-Stack Developer & Instructor',
    period: '[2026] – Present',
    isCurrent: true,
    category: 'development-teaching',
    typeBadge: 'Full-Stack & Mentorship',
    accentColor: '#6f34fe',
    badgeBg: '#f0ebff',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f34fe" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    summary:
      'Currently driving end-to-end web application development while teaching programming and web technologies to aspiring developers through hands-on practical projects.',
    responsibilities: [
      'Develop and maintain modern, scalable websites and web applications.',
      'Work with both frontend and backend technologies to architect and build practical production-ready projects.',
      'Teach students programming, modern web development, and core coding fundamentals.',
      'Guide students through hands-on coding exercises, real-world project development, and debugging.',
      'Contribute actively to coding classes, technical curriculum planning, student mentoring, and hackathons.',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript (ES6+)',
      'HTML5 & CSS3',
      'REST APIs',
      'Student Mentorship',
    ],
    projects: [
      {
        name: 'Excellup Coding Classes',
        url: 'https://excellup.in/',
        badge: 'Live Website',
        desc: 'Official platform for coding classes, courses, and student development',
      },
    ],
  },
  {
    id: 'leelawati',
    company: 'Leelawati Institute of Technology',
    role: 'Instructor / Faculty',
    period: '[1 Year | Academic Teaching Experience]',
    isCurrent: false,
    category: 'teaching',
    typeBadge: 'Academic & Faculty Instruction',
    accentColor: '#20c997',
    badgeBg: '#e6faf5',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20c997" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    summary:
      'Taught technical lessons in a structured and student-friendly manner, breaking down complex programming concepts into intuitive, practical hands-on learning.',
    responsibilities: [
      'Taught technical courses and computer science subjects to students for approximately one year.',
      'Delivered technical lessons in a well-structured, engaging, and student-friendly manner.',
      'Explained programming concepts, algorithm analysis, and technical subjects using practical real-life examples.',
      'Helped students understand complex topics through hands-on lab learning, problem-solving workshops, and continuous guidance.',
    ],
    technologies: [
      'C & C++',
      'Data Structures',
      'Algorithms',
      'Programming Fundamentals',
      'Logic Building',
      'Technical Teaching',
    ],
    projects: [],
  },
  {
    id: 'connect-shiksha',
    company: 'Connect Shiksha Coding Institute, Balaghat, India',
    role: 'Full-Stack Developer Intern',
    period: 'Jan 2025 – March 2026',
    isCurrent: false,
    category: 'development-teaching',
    typeBadge: 'Full-Stack Internship',
    accentColor: '#38bdf8',
    badgeBg: '#e8f7ff',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    summary:
      'Developed MERN stack web applications, contributing to 3 live client projects while building scalable RESTful APIs and dynamic MongoDB schemas.',
    responsibilities: [
      'Developed MERN stack web applications, contributing to 3 live client projects during the internship.',
      'Built RESTful APIs with Node.js/Express.js and designed MongoDB schemas for dynamic data-driven features.',
      'Collaborated with the team using Git/GitHub for version control and issue tracking.',
      'Participated in code reviews and agile sprint planning sessions to deliver high-quality code on time.',
    ],
    technologies: [
      'MERN Stack',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Git & GitHub',
      'Agile Sprint Planning',
    ],
    projects: [],
  },
  {
    id: 'freelance',
    company: 'Freelance Full-Stack Web Development Projects',
    role: 'Freelance Full-Stack Developer',
    period: '[ Ongoing Freelance Projects]',
    isCurrent: true,
    category: 'freelance',
    typeBadge: 'Production Web Applications',
    accentColor: '#fca61f',
    badgeBg: '#fff8ed',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fca61f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    summary:
      'Architected and developed complete end-to-end web applications for freelance clients and personal production platforms with a focus on UI, usability, and speed.',
    responsibilities: [
      'Developed multiple production-ready web projects for freelance clients and personal portfolio work.',
      'Built responsive websites and interactive web applications with modern interfaces and practical functionality.',
      'Handled complete frontend development, backend API integration, authentication, and database-related functionality where applicable.',
      'Focused strictly on clean UI design, cross-device usability, performance optimization, and maintainable code architecture.',
    ],
    technologies: [
      'MERN Stack',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'REST APIs',
      'Netlify / Cloud Deployment',
    ],
    projects: [
      {
        name: 'RoomFinder Nearby',
        url: 'https://roomfindernearby.netlify.app/',
        badge: 'Room Rental WebApp',
        desc: 'Room rental platform with search, filters, JWT authentication, and role-based access',
      },
      {
        name: 'Excellup Coding Classes',
        url: 'https://excellup.in/',
        badge: 'EdTech Platform',
        desc: 'Online coding courses platform with enrollment, dashboards, and Razorpay integration',
      },
      {
        name: 'Foodify',
        url: 'https://foodifyweb.netlify.app/',
        badge: 'Food Delivery WebApp',
        desc: 'MERN stack food ordering website with responsive menu, cart, and sub-2s page load',
      },
      {
        name: 'Nishok Hospital Website',
        url: 'https://nishokhospital.in/',
        badge: 'Client Project',
        desc: 'Live freelance client website for a Balaghat doctor, from requirements to deployment',
      },
    ],
  },
]


export default function Experience() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredExperiences =
    activeFilter === 'all'
      ? experiences
      : experiences.filter((exp) =>
        activeFilter === 'teaching'
          ? exp.category === 'teaching' || exp.category === 'development-teaching'
          : exp.category === activeFilter
      )

  return (
    <section
      id="experience"
      className="py-20 px-6 relative"
      style={{
        backgroundColor: '#f8f9fa',
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section Header (Matches My Expertise & Skills style) ── */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-[#6f34fe] text-xl font-semibold mb-2">
            Career &amp; Teaching Journey
          </p>

          <h3 className="text-4xl md:text-5xl font-bold text-[#3f396d] mb-4">
            Professional <span style={{ color: '#6f34fe' }}>Experience</span>
          </h3>

          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            A track record of engineering scalable full-stack applications combined with a passion for
            mentoring students and delivering high-impact technical education.
          </p>

          {/* Quick Dual-Strength Highlights Bar */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-[#3f396d] border border-[#e5e1f8] shadow-sm">
              <span className="text-[#6f34fe]">⚡</span> Full-Stack Web Development
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-[#3f396d] border border-[#e5e1f8] shadow-sm">
              <span className="text-[#20c997]">🎓</span> Technical Instructor &amp; Faculty
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-[#3f396d] border border-[#e5e1f8] shadow-sm">
              <span className="text-[#fca61f]">🚀</span> Production &amp; Freelance WebApps
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-[#3f396d] border border-[#e5e1f8] shadow-sm">
              <span className="text-[#0284c7]">👥</span> Student Mentorship &amp; Coding Classes
            </span>
          </div>

          {/* Filter Tabs */}
          <div className="mt-9 inline-flex p-1.5 rounded-full bg-white border border-[#e8e5f8] shadow-sm">
            {[
              { id: 'all', label: 'All Experience (4)' },
              { id: 'development-teaching', label: 'Dev & Teaching' },
              { id: 'teaching', label: 'Faculty & Mentorship' },
              { id: 'freelance', label: 'Freelance Projects' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${activeFilter === tab.id
                  ? 'bg-[#6f34fe] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#6f34fe]'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Timeline Container ── */}
        <div className="relative">
          {/* Vertical Central Line (Desktop) */}
          <div
            className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] rounded-full pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, #6f34fe 0%, #20c997 33%, #38bdf8 66%, #fca61f 100%)',
              opacity: 0.35,
            }}
          />

          {/* Mobile Vertical Left Line */}
          <div
            className="md:hidden absolute left-5 top-4 bottom-4 w-[2px] rounded-full pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, #6f34fe 0%, #20c997 33%, #38bdf8 66%, #fca61f 100%)',
              opacity: 0.35,
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-10 md:space-y-12">
            {filteredExperiences.map((exp, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  data-aos="fade-up"
                >
                  {/* Timeline Node */}
                  <div
                    className="absolute left-5 md:left-1/2 -translate-x-1/2 w-11 h-11 rounded-2xl flex items-center justify-center z-20 shadow-md transition-transform duration-300 hover:scale-110"
                    style={{
                      background: '#ffffff',
                      border: `2px solid ${exp.accentColor}`,
                    }}
                  >
                    {exp.icon}
                    {exp.isCurrent && (
                      <span
                        className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white"
                        style={{
                          background: '#fca61f',
                        }}
                      />
                    )}
                  </div>

                  {/* Card Container */}
                  <div className="pl-14 md:pl-0 w-full md:w-[calc(50%-40px)]">
                    <div
                      className="bg-white rounded-3xl p-7 md:p-8 shadow-sm border border-[#f0eeff] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                          style={{
                            background: exp.badgeBg,
                            color: exp.accentColor,
                            border: `1px solid ${exp.accentColor}33`,
                          }}
                        >
                          {exp.typeBadge}
                        </span>

                        <span className="text-xs font-semibold text-gray-500 bg-[#f4f4f8] px-3 py-1 rounded-full border border-gray-200">
                          📅 {exp.period}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h4 className="text-2xl font-bold text-[#3f396d] mb-1">
                        {exp.role}
                      </h4>
                      <p
                        className="text-base font-semibold mb-4"
                        style={{ color: exp.accentColor }}
                      >
                        {exp.company}
                      </p>

                      {/* Summary */}
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">
                        {exp.summary}
                      </p>

                      {/* Responsibilities List */}
                      <div className="mb-6">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: exp.accentColor }}
                          />
                          Key Responsibilities &amp; Contributions
                        </h5>
                        <ul className="space-y-2.5">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-600">
                              <span
                                className="mt-1 flex-shrink-0 text-xs font-bold"
                                style={{ color: exp.accentColor }}
                              >
                                ▹
                              </span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Associated Project Links (If Any) */}
                      {exp.projects.length > 0 && (
                        <div className="mb-6 pt-4 border-t border-gray-100">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-[#fca61f] mb-3 flex items-center gap-2">
                            <span>🚀</span> Real-World Projects &amp; Live Platforms
                          </h5>
                          <div className="grid grid-cols-1 gap-2.5">
                            {exp.projects.map((proj, pi) => (
                              <a
                                key={pi}
                                href={proj.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#f8f9fe] border border-[#ebe7fa] hover:border-[#fca61f] hover:bg-white hover:shadow-md transition-all duration-300 group/link"
                                style={{ textDecoration: 'none' }}
                              >
                                <div className="pr-3">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-[#3f396d] group-hover/link:text-[#6f34fe] transition-colors">
                                      {proj.name}
                                    </span>
                                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-[#e6faf5] text-[#20c997] border border-[#20c99740]">
                                      {proj.badge}
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                                    {proj.desc}
                                  </p>
                                </div>
                                <div className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold text-[#fca61f] bg-[#fff8ed] px-3 py-1.5 rounded-full border border-[#fca61f40] group-hover/link:bg-[#fca61f] group-hover/link:text-white transition-all">
                                  <span>Visit Live</span>
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                  </svg>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technologies Badges */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f4f4f8] text-gray-600 border border-transparent hover:bg-[#ede8ff] hover:text-[#6f34fe] hover:border-[#6f34fe] transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Empty counterpart for desktop grid balance */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Bottom Call-to-Action / Portfolio Bridge ── */}
        <div
          className="mt-16 p-8 rounded-3xl text-center bg-white border border-[#f0eeff] shadow-sm"
          data-aos="fade-up"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-[#3f396d] mb-2">
            Want to see my completed projects in action?
          </h4>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mb-6">
            Explore live deployed web applications, case studies, and creative development work in the portfolio section below.
          </p>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 bg-[#fca61f] text-white px-8 py-3 rounded-full text-sm font-semibold shadow hover:bg-[#6f34fe] hover:-translate-y-0.5 transition-all duration-300"
            style={{ textDecoration: 'none' }}
          >
            <span>Explore Portfolio Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
