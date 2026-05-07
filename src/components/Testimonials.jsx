import { useState, useEffect, useRef } from "react";
import webimg4 from "../assets/feedback.png";

const testimonials = [
  {
    name: "Nupur Sharma",
    role: "Client",
    text: "Professional approach, friendly communication, and impressive results made this partnership truly valuable for our business growth.",
  },
  {
    name: "Isha Singh",
    role: "Client",
    text: "We truly appreciate the dedication and professionalism shown throughout the project, and the final outcome exceeded our expectations in every possible way.",
  },
  {
    name: "Nikhil Share",
    role: "Client",
    text: "We are extremely satisfied with the quality of work and the timely delivery, and we would gladly recommend their services to anyone looking for excellence.",
  },
];

export default function Testimonial() {
  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState("");
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  const changeTo = (newIdx, direction) => {
    setVisible(false);
    setTimeout(() => {
      setIdx(newIdx);
      setAnim(direction);
      setVisible(true);
    }, 250);
  };

  const prev = () => {
    const newIdx = (idx - 1 + testimonials.length) % testimonials.length;
    changeTo(newIdx, "slide-in-left");
  };

  const next = () => {
    const newIdx = (idx + 1) % testimonials.length;
    changeTo(newIdx, "slide-in-right");
  };

  // Auto play
  useEffect(() => {
    timerRef.current = setInterval(() => {
      const newIdx = (idx + 1) % testimonials.length;
      changeTo(newIdx, "slide-in-right");
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [idx]);

  const t = testimonials[idx];

  return (
    <section id="testimonial" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="flex-1">
          <img
            src={webimg4}
            alt="testimonials"
            className="w-full max-w-sm mx-auto"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-[#6f34fe] text-xl font-semibold">Testimonials</p>
          <h3 className="text-4xl font-bold mt-2 mb-6 text-[#3f396d]">
            Happy Clients Feedback
          </h3>

          {/* Animated Card */}
          <div
            className="flex gap-4 items-start"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateX(0)"
                : anim === "slide-in-right"
                ? "translateX(40px)"
                : "translateX(-40px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <i
              className="bi bi-quote text-5xl"
              style={{ color: "#fca61f", flexShrink: 0 }}
            ></i>

            <div>
              <p className="text-gray-500 mb-4">{t.text}</p>
              <h4 className="font-bold text-lg text-[#3f396d]">{t.name}</h4>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={prev}
              className="text-3xl text-gray-400 hover:text-[#6f34fe] hover:-translate-x-1 transition-all duration-300"
            >
              <i className="bi bi-arrow-left-circle-fill"></i>
            </button>

            <button
              onClick={next}
              className="text-3xl text-gray-400 hover:text-[#6f34fe] hover:translate-x-1 transition-all duration-300"
            >
              <i className="bi bi-arrow-right-circle-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}