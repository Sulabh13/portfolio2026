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
    img: roomrenatl,
    tags: ["React JS", "Node.js", "MongoDB", "Tailwind CSS"],
    filter: "website",
    link: "https://roomfindernearby.netlify.app",
  },
  {
    title: "Excellup Coding Classes",
    img: tic,
    tags: ["React JS", "Node.js", "MongoDB", "Razorpay"],
    filter: "website",
    link: "https://excellup.in/",
  },
  {
    title: "Foodify – Food Delivery",
    img: foodWeb,
    tags: ["React JS", "Node.js", "MongoDB", "Context API"],
    filter: "website",
    link: "https://foodifyweb.netlify.app",
  },
  {
    title: "Nishok Hospital Website",
    img: hospital,
    tags: ["Freelance Client", "HTML & CSS", "JavaScript"],
    filter: "brand",
    link: "https://nishokhospital.in/",
  },
  {
    title: "Stone Paper Scissors",
    img: rps,
    tags: ["HTML & CSS", "JavaScript", "Game"],
    filter: "game",
    link: "#",
  },
  {
    title: "YouTube Clone",
    img: youtube,
    tags: ["HTML & CSS", "JavaScript", "WebApp"],
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

              <div className="p-4 text-center">

                <h4
                  className="font-bold text-base mb-2"
                  style={{ color: "#3f396d" }}
                >
                  {p.title}
                </h4>

                {/* Tags */}
                <div className="flex gap-2 justify-center flex-wrap mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Live Website */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`font-medium transition-colors ${
                    p.link === "#"
                      ? "text-gray-400 cursor-not-allowed pointer-events-none"
                      : "text-[#fca61f] hover:text-[#6f34fe]"
                  }`}
                >
                  {p.link === "#" ? "Coming Soon" : "View Live"}
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}