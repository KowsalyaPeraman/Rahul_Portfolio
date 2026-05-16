import { useNavigate } from "react-router-dom";

import meta1 from "../assets/meta/meta1.mp4";
import meta2 from "../assets/meta/meta2.mp4";
import meta3 from "../assets/meta/meta3.mp4";
import meta4 from "../assets/meta/meta4.mp4";
import meta5 from "../assets/meta/meta5.mp4";
import meta6 from "../assets/meta/meta6.mp4";
import meta7 from "../assets/meta/meta7.mp4";
import meta8 from "../assets/meta/meta8.mp4";
import meta9 from "../assets/meta/meta9.mp4";
import meta10 from "../assets/meta/meta10.mp4";
import meta11 from "../assets/meta/meta11.mp4";
import meta12 from "../assets/meta/meta12.mp4";
import meta13 from "../assets/meta/meta13.mp4";
import meta14 from "../assets/meta/meta14.mp4";
import meta15 from "../assets/meta/meta15.mp4";
import meta16 from "../assets/meta/meta16.mp4";
import meta17 from "../assets/meta/meta17.mp4";
import meta18 from "../assets/meta/meta18.mp4";
import meta19 from "../assets/meta/meta19.mp4";
import meta20 from "../assets/meta/meta20.mp4";
import meta21 from "../assets/meta/meta21.mp4";

const videos = [
  meta1, meta2, meta3, meta4, meta5, meta6,
  meta7, meta8, meta9, meta10, meta11, meta12,
  meta13, meta14, meta15, meta16, meta17,meta18, meta19, meta20,meta21
];

function MetaWorks() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-500 px-6 pt-5 pb-10">

      {/* Top */}
      <div className="relative flex items-center justify-center mb-10">
        <button
          onClick={() => navigate("/")}
          className="absolute left-0 w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 duration-300 text-2xl"
        >
          ←
        </button>
        <p className="text-gray-300 text-4xl font-semibold text-center">
          Meta Ad Works
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[30px] bg-white/5 border border-white/10 p-3 hover:border-pink-500 duration-300"
          >
            <video
              src={video}
              controls
              className="w-full h-[500px] object-cover rounded-[25px]"
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default MetaWorks;
