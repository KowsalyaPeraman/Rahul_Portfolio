import { useState } from "react";
import { useNavigate } from "react-router-dom";

import poster1 from "../assets/posters/poster1.jpg";
import poster2 from "../assets/posters/poster2.png";
import poster3 from "../assets/posters/poster3.jpg";
import poster4 from "../assets/posters/poster4.jpg";
import poster5 from "../assets/posters/poster5.jpg";
import poster6 from "../assets/posters/poster6.jpg";
import poster7 from "../assets/posters/poster7.jpg";
import poster8 from "../assets/posters/poster8.png";
import poster9 from "../assets/posters/poster9.png";
import poster10 from "../assets/posters/poster10.png";
import poster11 from "../assets/posters/poster11.jpg";
import poster12 from "../assets/posters/poster12.png";
import poster13 from "../assets/posters/poster13.png";
import poster14 from "../assets/posters/poster14.png";
import poster15 from "../assets/posters/poster15.png";
import poster16 from "../assets/posters/poster16.jpg";
import poster17 from "../assets/posters/poster17.png";
import poster18 from "../assets/posters/poster18.png";
import poster19 from "../assets/posters/poster19.png";
import poster20 from "../assets/posters/poster20.png";
import poster21 from "../assets/posters/poster21.jpg";
import poster22 from "../assets/posters/poster22.jpg";
import poster23 from "../assets/posters/poster23.jpg";
import poster24 from "../assets/posters/poster24.png";
import poster25 from "../assets/posters/poster25.png";
import poster26 from "../assets/posters/poster26.jpg";
import poster27 from "../assets/posters/poster27.jpg";
import poster28 from "../assets/posters/poster28.jpg";
import poster29 from "../assets/posters/poster29.png";
import poster30 from "../assets/posters/poster30.jpg";
import poster31 from "../assets/posters/poster31.png";
import poster32 from "../assets/posters/poster32.png";
import poster33 from "../assets/posters/poster33.png";
import poster34 from "../assets/posters/poster34.png";
import poster35 from "../assets/posters/poster35.png";
import poster36 from "../assets/posters/poster36.png";
import poster37 from "../assets/posters/poster37.png";
import poster38 from "../assets/posters/poster38.jpg";
import poster39 from "../assets/posters/poster39.png";
import poster40 from "../assets/posters/poster40.png";
import poster41 from "../assets/posters/poster41.png";
import poster42 from "../assets/posters/poster42.png";
import poster43 from "../assets/posters/poster43.png";
import poster44 from "../assets/posters/poster44.jpg";
import poster45 from "../assets/posters/poster45.jpg";
import poster46 from "../assets/posters/poster46.png";
import poster47 from "../assets/posters/poster47.png";
import poster48 from "../assets/posters/poster48.png";
import poster49 from "../assets/posters/poster49.jpg";
import poster50 from "../assets/posters/poster50.png";
import poster51 from "../assets/posters/poster51.png";
import poster52 from "../assets/posters/poster52.png";
import poster53 from "../assets/posters/poster53.png";
import poster54 from "../assets/posters/poster54.png";
import poster55 from "../assets/posters/poster55.png";
import poster56 from "../assets/posters/poster56.png";

const posterImages = [
  poster1, poster2, poster3, poster4,
  poster5, poster6, poster7, poster8,poster9 ,poster10 ,poster11, poster12, poster13, poster14,
  poster15, poster16, poster17, poster18,poster19 ,poster20, poster21, poster22, poster23, poster24,
  poster25, poster26, poster27, poster28,poster29 ,poster30 ,poster31, poster32, poster33, poster34,
  poster35, poster36, poster37, poster38,poster39 ,poster40 ,poster41, poster42, poster43, poster44,
  poster45, poster46, poster47, poster48,poster49 ,poster50 ,poster51, poster52, poster53, poster54,
  poster55, poster56
];

function PosterWorks() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-orange-500 px-6 pt-5 pb-10">

      {/* Top */}
      <div className="relative flex items-center justify-center mb-8">
        <button
          onClick={() => navigate("/")}
          className="absolute left-0 w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 duration-300 text-2xl"
        >
          ←
        </button>
        <p className="text-gray-300 text-3xl font-semibold text-center">
          Creative Posters & Social Media Designs
        </p>
      </div>

      {/* Poster Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posterImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className="group relative overflow-hidden rounded-[30px] cursor-pointer bg-white/5 border border-white/10 hover:border-orange-400 duration-500 shadow-xl"
          >
            <img
              src={img}
              alt=""
              className="w-full h-[420px] object-cover group-hover:scale-110 duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 duration-500"></div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-5"
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-[90vw] max-h-[90vh] rounded-[30px]"
          />
        </div>
      )}

    </div>
  );
}

export default PosterWorks;
