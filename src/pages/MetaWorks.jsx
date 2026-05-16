import { useNavigate } from "react-router-dom";



const videos = [
  "/videos/meta1.mp4",
  "/videos/meta2.mp4",
  "/videos/meta3.mp4",
  "/videos/meta4.mp4",
  "/videos/meta5.mp4",
  "/videos/meta6.mp4",
  "/videos/meta7.mp4",
  "/videos/meta8.mp4",
  "/videos/meta9.mp4",
  "/videos/meta10.mp4",
  "/videos/meta11.mp4",
  "/videos/meta12.mp4",
  "/videos/meta13.mp4",
  "/videos/meta14.mp4",
  "/videos/meta15.mp4",
  "/videos/meta16.mp4",
  "/videos/meta17.mp4",
  "/videos/meta18.mp4",
  "/videos/meta19.mp4",
  "/videos/meta20.mp4",
  "/videos/meta21.mp4",
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
