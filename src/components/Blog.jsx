import { useState } from "react";
import BlogModal from "./BlogModal";
import roomrenatl from "../assets/roomrenatl.jpg";
import foodWeb from "../assets/foodweb.jpg";
import youtube from "../assets/you.jpg";

const posts = [
  {
    img: foodWeb,
    author: "Sulabh Hathi",
    date: "September 08, 2025",
    title: "🍔 How I Built My First Food Website – FoodifyWeb",
    desc: "Building FoodifyWeb was an exciting project where I learned how to create a modern and responsive food ordering website using frontend technologies.",
    content: {
      tech: [
        "HTML for website structure",
        "CSS & Tailwind for responsive food UI",
        "JavaScript for interactivity and dynamic features",
      ],
      idea: "I wanted to build a modern food website that showcases delicious dishes, menus, and provides a smooth user experience for browsing food online.",
      learned: [
        "How to design a modern food landing page",
        "How to create responsive food cards and menu sections",
        "How to use JavaScript for interactive UI elements",
        "How to improve user experience with clean and attractive design",
      ],
    },
  },
  {
    img: roomrenatl,
    author: "Sulabh Hathi",
    date: "January 11, 2026",
    title: "🏠 How I Built My Room Rent Website using MERN Stack",
    desc: "I developed a full-stack Room Rental platform using the MERN stack where users can browse, search, and list rooms with authentication and database support.",
    content: {
      tech: [
        "MongoDB for database",
        "Express.js & Node.js for backend APIs",
        "React for frontend UI",
        "Tailwind CSS for responsive design",
      ],
      idea: "I wanted to build a real-world room rental platform where users can explore rooms, view details, and property owners can add listings.",
      learned: [
        "How to build REST APIs with Node & Express",
        "How to connect React frontend with backend",
        "User authentication and protected routes",
        "Database design using MongoDB",
        "Building a real full-stack web application",
      ],
    },
  },
  {
    img: youtube,
    author: "Sulabh Hathi",
    date: "March 12, 2026",
    title: "🏥 How I Built My Nishok Hospital Website",
    desc: "A responsive hospital website with information about doctors, departments, and services, featuring a clean, professional, and mobile-friendly design.",
    content: {
      tech: [
       "React for frontend UI",
"CSS / Tailwind for responsive styling",
"JavaScript for functionality",
"API for fetching hospital data",
      ],
      idea: "I wanted to create a hospital website that provides comprehensive information about medical services, doctors, and departments.",
      learned: [
        "Working with APIs to fetch video data",
        "Creating responsive video grid layouts",
        "Building reusable React components",
        "Improving UI/UX similar to real-world apps",
      ],
    },
  },
];

export default function Blog() {
  const [modal, setModal] = useState(null);

  return (
    <section
      id="blog"
      className="py-16 px-6"
      style={{ backgroundColor: "#f2f2ff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#6f34fe] text-xl font-semibold">Latest News</p>
          <h3 className="text-4xl font-bold mt-2" style={{ color: "#3f396d" }}>
            Blog & Articles
          </h3>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {posts.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full object-cover"
                style={{ height: 250 }}
              />
              <div className="p-6">
                <p className="text-[#6f34fe] text-sm font-semibold mb-1">
                  {p.author}
                  <span className="text-gray-400 font-normal ml-2">
                    {p.date}
                  </span>
                </p>
                <h4
                  className="font-bold text-lg mb-2"
                  style={{ color: "#3f396d" }}
                >
                  {p.title}
                </h4>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <button
                  onClick={() => setModal(p)}
                  className="text-[#fca61f] hover:text-[#6f34fe] font-semibold transition-colors"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && <BlogModal post={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
