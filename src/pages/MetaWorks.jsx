import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const videos = [
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta1_r9bgs2.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta2_v4csjc.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta3_oxkr4u.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta4_zrurjr.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta5_idowlh.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta6_r4rkqs.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta7_a9qgnz.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta8_rwx7vv.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta9_dssi0v.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta10_crmv3v.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta11_r8uaoa.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta12_eihd2r.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta13_e4ncgr.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta14_wosfgz.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta15_jpgyar.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta16_bhzy7p.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta17_kw4nr9.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta18_kysas3.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta19_gcsbuh.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta20_vphh6g.mp4",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta21_kqfe3n.mp4",
];

// Animated video card
const AnimatedVideoCard = ({ video, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = `opacity 0.5s ease ${(index % 3) * 100}ms, transform 0.5s ease ${(index % 3) * 100}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-[30px] bg-white/10 border border-white/20 p-3 hover:border-white/50 hover:scale-[1.01] duration-300"
    >
      <video
        src={video}
        controls
        autoPlay={false}
        muted
        playsInline
        preload="metadata"
        className="w-full h-[500px] object-cover rounded-[25px]"
      />
    </div>
  );
};

function MetaWorks() {
  const navigate = useNavigate();
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(-20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-orange-500 px-4 sm:px-6 pt-5 pb-10">

      {/* Header */}
      <div className="relative flex items-center justify-center mb-10">
        <button
          onClick={() => navigate("/")}
          className="absolute left-0 w-12 h-12 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-orange-500 duration-300 text-2xl"
        >
          ←
        </button>
        <p ref={titleRef} className="text-white text-3xl sm:text-4xl font-semibold text-center px-14">
          Meta Ad Works
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1400px] mx-auto">
        {videos.map((video, index) => (
          <AnimatedVideoCard key={index} video={video} index={index} />
        ))}
      </div>

    </div>
  );
}

export default MetaWorks;
