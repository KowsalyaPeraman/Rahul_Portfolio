import poster1 from "../assets/posters/poster1.jpg";

const HireMe = ({ openContact }) => {
  return (
    <section id="hire" className="w-full bg-[#f3f3f3] py-16 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto bg-[#eaeaea] rounded-[40px] px-6 sm:px-12 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* IMAGE SECTION */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[300px] bg-[#f7b26a] rounded-[120px]"></div>
              <img
                src={poster1}
                alt="rahul"
                className="relative z-10 w-[300px] object-contain"
              />
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div>
            <h1 className="text-[48px] sm:text-[56px] font-extrabold text-[#1a1a2e] leading-tight">
              Why <span className="text-orange-500">Hire me?</span>
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed">
              I create visually compelling and creative designs that help brands stand out.
              Turning ideas into eye-catching visuals with creativity and attention to detail,
              I design modern graphics for social media, branding, and marketing materials.
            </p>

            {/* STATS (CENTER FIXED) */}
            {/* STATS */}
            <div className="mt-8 flex justify-center">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-[#1a1a2e]">100+</p>
                <p className="text-gray-400 text-sm mt-1">Project Completed</p>
              </div>
            </div>

            {/* BUTTON (WORKING HOVER - SAFE VERSION) */}
            <button
              onClick={openContact}
              className="mt-8 px-10 py-4 rounded-2xl border-2 border-[#1a1a2e] text-lg font-semibold 
              transition-all duration-300 hover:bg-[#1a1a2e] hover:text-white hover:scale-105"
            >
              Hire me
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HireMe;