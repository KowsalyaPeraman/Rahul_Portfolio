import { useEffect, useRef } from "react";

// Works on all devices - mobile, tablet, desktop
const useScrollAnimation = (direction = "up", delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const translateMap = {
      up:    "translateY(50px)",
      down:  "translateY(-50px)",
      left:  "translateX(-50px)",
      right: "translateX(50px)",
    };

    // Set initial hidden state
    el.style.opacity = "0";
    el.style.transform = translateMap[direction] || "translateY(50px)";
    el.style.transition = `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;
    el.style.willChange = "opacity, transform";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateX(0) translateY(0)";
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.08,   // trigger early — good for mobile small screens
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay]);

  return ref;
};

export default useScrollAnimation;
