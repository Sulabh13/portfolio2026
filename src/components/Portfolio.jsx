import { useState } from "react";
import tic from "../assets/excellup.png";
import foodWeb from "../assets/foodweb.jpg";
import rps from "../assets/images.jpg";
import roomrenatl from "../assets/roomrenatl.jpg";
import youtube from "../assets/you.jpg";
import hospital from "../assets/logo.png";

const projects = [
  {
    title: "RoomFinder Nearby",
    subtitle: "Room Rental Web App",
    desc: "Full-stack rental platform with search, location & price filters, JWT auth, and role-based access for landlords and tenants.",
    img: roomrenatl,
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    filter: "website",
    link: "https://roomfindernearby.netlify.app",
  },
  {
    title: "Excellup Coding Classes",
    subtitle: "Online EdTech Platform",
    desc: "Edtech platform with course listings, enrollment, instructor dashboards, Razorpay payments, supporting 300+ registered students.",
    img: tic,
    tags: ["React.js", "Node.js", "MongoDB", "Bootstrap", "Razorpay"],
    filter: "website",
    link: "https://excellup.in/",
  },
  {
    title: "Foodify – Food Delivery",
    subtitle: "Online Food Delivery Website",
    desc: "Food delivery app with restaurant listings, cart, order tracking using Context API, achieving sub-2s average page load.",
    img: foodWeb,
    tags: ["React.js", "Node.js", "MongoDB", "CSS3", "Context API"],
    filter: "website",
    link: "https://foodifyweb.netlify.app",
  },
  {
    title: "Nishok Hospital Website",
    subtitle: "Doctor's Hospital (Client Project)",
    desc: "Live website designed and deployed for a Balaghat-based doctor as a freelance client project, from requirements to production.",
    img: hospital,
    tags: ["Freelance Client", "HTML5", "CSS3", "JavaScript"],
    filter: "brand",
    link: "https://nishokhospital.in/",
  },
  {
    title: "Stone Paper Scissors",
    subtitle: "Interactive Game App",
    desc: "Browser-based interactive game with responsive animations, score tracking, and clean gameplay logic.",
    img: rps,
    tags: ["JavaScript", "HTML & CSS", "Game"],
    filter: "game",
    link: "#",
  },
  {
    title: "YouTube Clone",
    subtitle: "Video Streaming Platform",
    desc: "Responsive video streaming platform interface with search, categories, video grid, and responsive media player.",
    img: youtube,
    tags: ["JavaScript", "HTML & CSS", "WebApp"],
    filter: "webapp",
    link: "https://cloneyoutubecom.netlify.app",
  },
];

const filters = ["all", "game", "webapp", "website", "brand"];

export default function Portfolio() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.filter === active);

  return (
    <section id="portfolio" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-[#6f34fe] text-xl font-semibold">
            Creative Work
          </p>

          <h3
            className="text-4xl font-bold mt-2"
            style={{ color: "#3f396d" }}
          >
            Check My Portfolio
          </h3>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-lg font-semibold capitalize transition-colors duration-200 ${
                active === f
                  ? "text-[#fca61f]"
                  : "text-gray-700 hover:text-[#fca61f]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 bg-white"
              data-aos="fade-up"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full object-cover"
                style={{ height: 250 }}
              />

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5 text-left">
                    <h4
                      className="font-bold text-lg"
                      style={{ color: "#3f396d" }}
                    >
                      {p.title}
                    </h4>
                    {p.subtitle && (
                      <span className="text-[11px] font-semibold text-[#6f34fe] bg-[#f0ebff] px-2.5 py-0.5 rounded-full border border-[#6f34fe20] w-fit">
                        {p.subtitle}
                      </span>
                    )}
                  </div>

                  {p.desc && (
                    <p className="text-gray-500 text-xs text-left mb-3.5 leading-relaxed line-clamp-2">
                      {p.desc}
                    </p>
                  )}

                  {/* Tags */}
                  <div className="flex gap-1.5 justify-start flex-wrap mb-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-[#f4f4f8] text-[#3f396d] border border-gray-200 text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Website */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">Production Link</span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full transition-all ${
                      p.link === "#"
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none"
                        : "bg-[#fca61f]/10 text-[#fca61f] hover:bg-[#fca61f] hover:text-white"
                    }`}
                  >
                    <span>{p.link === "#" ? "Coming Soon" : "View Live"}</span>
                    {p.link !== "#" && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}