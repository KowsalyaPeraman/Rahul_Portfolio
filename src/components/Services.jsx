import { useNavigate } from "react-router-dom";
import poster3 from "../assets/posters/poster3.jpg";

const services = [
  {
    title: "Posters",
    img: poster3,
    path: "/poster",
  },
  {
    title: "Advertisement Works",
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=900&auto=format&fit=crop",
    path: "/meta",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div id="services" className="w-full bg-[#f3f3f3] px-4 py-10 flex justify-center">
      <div className="w-full max-w-[1200px] rounded-[35px] overflow-hidden relative bg-orange-500">

        {/* Background blur blobs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-600 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 p-6 sm:p-10">

          {/* Top */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-10">
            <h1 className="text-white text-[36px] sm:text-[48px] font-bold leading-tight">
              My <span className="text-white">Services</span>
            </h1>
          </div>

          {/* 3-column cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className="cursor-pointer bg-white/5 border border-white/10 rounded-[24px] overflow-hidden p-4 relative hover:border-orange-400 hover:scale-[1.02] transition-all duration-300"
              >
                <h2 className="text-white text-[20px] font-semibold mb-4">
                  {item.title}
                </h2>

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[260px] object-cover rounded-[16px]"
                />

                {/* Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(item.path);
                  }}
                  className="absolute bottom-8 right-8 bg-[#1a1a2e] text-white w-[56px] h-[56px] rounded-full text-[24px] hover:bg-orange-500 transition-all duration-300 flex items-center justify-center"
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
