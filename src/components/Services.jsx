import { useNavigate } from "react-router-dom";
import poster3 from "../assets/posters/poster3.jpg";
import useScrollAnimation from "../hooks/useScrollAnimation";

const services = [
  { title: "Posters", img: poster3, path: "/poster" },
  {
    title: "Advertisement Works",
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=900&auto=format&fit=crop",
    path: "/meta",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const headingRef = useScrollAnimation("up", 0);
  const card0Ref   = useScrollAnimation("up", 150);
  const card1Ref   = useScrollAnimation("up", 280);
  const cardRefs   = [card0Ref, card1Ref];

  return (
    <div id="services" className="w-full bg-[#f3f3f3] px-3 sm:px-4 py-8 sm:py-10 flex justify-center">
      <div className="w-full max-w-[1200px] rounded-[28px] sm:rounded-[35px] overflow-hidden relative bg-orange-500">

        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#1a1a2e] rounded-full opacity-20 blur-3xl pointer-events-none" />

        <div className="relative z-10 p-5 sm:p-8 md:p-10">

          {/* Heading */}
          <div ref={headingRef} className="mb-8">
            <h1 className="text-white text-[30px] sm:text-[42px] font-bold leading-tight">
              My <span className="text-white">Services</span>
            </h1>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((item, index) => (
              <div
                key={index}
                ref={cardRefs[index]}
                onClick={() => navigate(item.path)}
                className="cursor-pointer bg-white/10 border border-white/20 rounded-[20px] overflow-hidden p-4 relative hover:bg-white/20 hover:scale-[1.02] transition-all duration-300"
              >
                <h2 className="text-white text-lg font-semibold mb-3">{item.title}</h2>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] sm:h-[260px] object-cover rounded-[14px]"
                />
                <button
                  onClick={(e) => { e.stopPropagation(); navigate(item.path); }}
                  className="absolute bottom-7 right-7 bg-[#1a1a2e] text-white w-[50px] h-[50px] rounded-full text-xl hover:bg-white hover:text-orange-500 transition-all duration-300 flex items-center justify-center"
                >
                  ↗
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
