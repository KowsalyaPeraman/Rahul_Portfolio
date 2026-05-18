import poster1 from "../assets/posters/poster1.jpg";
import useScrollAnimation from "../hooks/useScrollAnimation";

const HireMe = ({ openContact }) => {
  const titleRef   = useScrollAnimation("up",    0);
  const imgRef     = useScrollAnimation("up",  150);
  const contentRef = useScrollAnimation("up",  280);

  return (
    <section id="hire" className="w-full bg-[#f3f3f3] py-10 sm:py-16 px-3 sm:px-8">
      <div className="max-w-[1200px] mx-auto bg-[#eaeaea] rounded-[28px] sm:rounded-[40px] px-5 sm:px-12 py-10 sm:py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10">

          {/* Image */}
          <div ref={imgRef} className="flex justify-center">
            <div className="relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[260px] h-[240px] sm:h-[300px] bg-[#f7b26a] rounded-[120px]" />
              <img
                src={poster1}
                alt="rahul"
                className="relative z-10 w-[220px] sm:w-[300px] object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="text-center md:text-left">
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-extrabold text-[#1a1a2e] leading-tight">
              Why <span className="text-orange-500">Hire me?</span>
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base max-w-sm mx-auto md:mx-0">
              I create visually compelling and creative designs that help brands stand out.
              Turning ideas into eye-catching visuals with creativity and attention to detail.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-[#1a1a2e]">100+</p>
                <p className="text-gray-400 text-sm mt-1">Project Completed</p>
              </div>
            </div>
            <button
              onClick={openContact}
              className="mt-7 px-8 sm:px-10 py-3 sm:py-4 rounded-2xl border-2 border-[#1a1a2e] text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-[#1a1a2e] hover:text-white hover:scale-105"
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
