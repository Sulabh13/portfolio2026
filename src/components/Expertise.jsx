import webimg1 from "../assets/webDesign.png";
import webimg2 from "../assets/webDev.png";
import webimg3 from "../assets/debbuging.png";

const services = [
  {
    icon: webimg1,
    title: "Web Design",
    desc: "Creating modern, intuitive, and responsive designs that elevate user experience.",
  },
  {
    icon: webimg2,
    title: "Web Development",
    desc: "Developing clean, efficient, and scalable websites tailored to your needs.",
  },
  {
    icon: webimg3,
    title: "Debugging",
    desc: "Identifying and resolving issues to ensure smooth and error-free performance.",
  },
];

export default function Expertise() {
  return (
    <section className="py-16 px-6 bg-[#f8f9fa]" id="service">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#6f34fe] text-xl font-semibold">My Expertise</p>
          <h3 className="text-4xl font-bold mt-2 text-[#3f396d]">
            Provide Wide Range of <br /> Digital Services
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              {/* Icon */}
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 mx-auto mb-4"
              />

              <h4 className="text-xl font-bold mb-3 text-[#3f396d]">
                {service.title}
              </h4>

              <p className="text-gray-500 mb-4">{service.desc}</p>

              <a
                href="#"
                className="text-[#fca61f] font-medium hover:text-[#6f34fe] transition-colors relative group"
              >
                Read More
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6f34fe] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}