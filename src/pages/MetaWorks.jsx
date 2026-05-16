import { useNavigate } from "react-router-dom";
const videos = [
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta1_r9bgs2",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta2_v4csjc",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta3_oxkr4u",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta4_zrurjr",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta5_idowlh",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta6_r4rkqs",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta7_a9qgnz",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta8_rwx7vv",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta9_dssi0v",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta10_crmv3v",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta11_r8uaoa",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta12_eihd2r",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta13_e4ncgr",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta14_wosfgz",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta15_jpgyar",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta16_bhzy7p",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta17_kw4nr9",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta18_kysas3",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta19_gcsbuh",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta20_vphh6g",
  "https://res.cloudinary.com/dxawos8pp/video/upload/meta21_kqfe3n"
];

function MetaWorks() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-500 px-6 pt-5 pb-10">

      {/* Header */}
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[30px] bg-white/5 border border-white/10 p-3 hover:border-pink-500 duration-300"
          >
            <video
              src={video}
              controls
              autoPlay={false}
              muted
              playsInline
              preload="metadata"
              className="w-full h-[500px] object-cover rounded-[25px]"
              onError={() => console.log("Video failed to load:", video)}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default MetaWorks;