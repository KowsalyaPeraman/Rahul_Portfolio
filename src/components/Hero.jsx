import poster99 from "../assets/posters/poster99.png";

const Hero = ({ openContact }) => {
  return (
    <section id="home" className="relative bg-white overflow-hidden">

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-2 pb-0 relative z-10">

        {/* Hello badge */}
        <div className="flex justify-center mb-4 sm:mb-6">

          <div className="border border-gray-300 rounded-full px-5 py-1.5 flex items-center gap-2 text-gray-700 text-sm font-medium">
            Hello! <span className="text-orange-400">✦</span>
          </div>

        </div>

        {/* Heading */}
        <div className="text-center ">

          <h1 className="text-[42px] sm:text-[72px] md:text-[96px] font-extrabold leading-none tracking-tight text-[#1a1a2e]">
            I'm <span className="text-orange-500">Rahul Kumar</span>,
          </h1>

          <h1 className="text-[42px] sm:text-[72px] md:text-[96px] font-extrabold leading-none tracking-tight text-[#1a1a2e]">
            Graphic Designer
          </h1>

        </div>

        {/* Hero image section */}
        <div className="relative flex justify-center items-end -mt-16 sm:-mt-20 md:-mt-24 min-h-[180px] sm:min-h-[220px] md:min-h-[260px]">

          {/* Orange semicircle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] sm:w-[320px] h-[240px] sm:h-[360px] max-w-full bg-400 rounded-t-full z-0"></div>

          {/* Person image */}
          <img
            src={poster99}
            alt="Rahul"
            className="relative z-10 w-[240px] sm:w-[320px] md:w-[380px] max-w-full h-auto object-contain -ml-12 -mt-3"
          />

          {/* Left card */}
          <div className="hidden sm:block absolute left-0 md:left-10 bottom-12 bg-white rounded-2xl p-4 shadow-xl max-w-[200px] z-20">

            <div className="text-orange-400 text-xl mb-1">"</div>

            <p className="text-xs text-gray-600 leading-relaxed">
              Rahul's exceptional creative vision ensures stunning and engaging digital experiences. Highly recommended.
            </p>

          </div>

          {/* Right card */}
          <div className="hidden sm:block absolute right-0 md:right-10 bottom-12 bg-white rounded-2xl p-4 shadow-xl z-20 text-right">

            <div className="flex justify-end mb-1">

              {[1, 2, 3, 4].map((i) => (
                <span key={i} className="text-orange-400 text-sm">
                  ★
                </span>
              ))}

            </div>

            <p className="text-3xl font-extrabold text-[#1a1a2e]">
              1 Year
            </p>

            <p className="text-gray-400 text-sm">
              Experience
            </p>

          </div>

        </div>

        {/* Mobile stats */}
        <div className="flex sm:hidden justify-center gap-8 mt-4 pb-2">

          <div className="text-center">

            <div className="flex justify-center">

              {[1, 2, 3, 4].map((i) => (
                <span key={i} className="text-orange-400 text-xs">
                  ★
                </span>
              ))}

            </div>

            <p className="text-xl font-extrabold text-[#1a1a2e]">
              1 Year
            </p>

            <p className="text-gray-400 text-xs">
              Experience
            </p>

          </div>

        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mt-4 pb-10">

          <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-all duration-300 flex items-center gap-2">
            Portfolio <span>↗</span>
          </button>

          <button
            onClick={openContact}
            className="text-[#1a1a2e] font-semibold text-sm sm:text-base hover:text-orange-500 transition-colors duration-300"
          >
            Hire me
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;