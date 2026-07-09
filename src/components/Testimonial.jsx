import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import TestimonialBg from "../assets/testimonial-bg.jpg";

const testimonials = [
  {
    id: 1,
    quote:
      "Since partnering with this dispatch team, our trucks stay loaded and profitable. Their communication and route planning have been outstanding.",
    name: "Michael Anderson",
    role: "Owner Operator",
    company: "Anderson Trucking LLC",
    image:
      "https://plus.unsplash.com/premium_photo-1770447616600-139515d59a39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsaWVudCUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    quote:
      "The dispatchers consistently find high-paying loads and handle broker negotiations professionally. It has helped us grow our fleet faster.",
    name: "David Wilson",
    role: "Fleet Manager",
    company: "Wilson Freight",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    quote:
      "Excellent support, quick load booking, and reliable updates. We spend less time searching and more time driving.",
    name: "Robert Miller",
    role: "CDL Driver",
    company: "Miller Logistics",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=900&auto=format&fit=crop&q=80",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const Testimonial = () => {
  const [[activeIndex, direction], setActiveState] = useState([0, 0]);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayTimer = useRef(null);

  const active = testimonials[activeIndex];

  const paginate = (newDirection) => {
    let nextIndex = activeIndex + newDirection;
    if (nextIndex < 0) nextIndex = testimonials.length - 1;
    if (nextIndex >= testimonials.length) nextIndex = 0;
    
    setActiveState([nextIndex, newDirection]);
  };

  // Logically precise slider autoplay + hover handler
  useEffect(() => {
    if (!isHovering) {
      autoPlayTimer.current = setInterval(() => {
        paginate(1);
      }, 5000); // 5 seconds interval for continuous loop
    } else {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    }

    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, [activeIndex, isHovering]);

  return (
    <section
      className="relative py-28 bg-no-repeat bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${TestimonialBg})` }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Premium Multi-layered Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-900/90 to-neutral-950/80" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Modern Section Header */}
        <div className="flex flex-col items-center mb-16 border-b border-white/10 pb-8">
          <span className="text-orange-500 uppercase tracking-[0.25em] text-xs font-bold mb-3">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Trusted Across The Highway.
          </h2>
        </div>

        {/* Content Box with fixed layout constraints */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Grid Section */}
          <div className="md:col-span-7 flex flex-col justify-between h-full relative">
            <Quote className="text-white/10 absolute -top-10 -left-6 w-24 h-24 pointer-events-none" />
            
            {/* Height-stabilized content block */}
            <div className="relative overflow-hidden flex items-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  className="w-full"
                >

                  <p className="text-2xl md:text-3xl font-medium text-neutral-100 leading-snug tracking-tight mb-8">
                    "{active.quote}"
                  </p>

                  <div>
                    <h4 className="font-bold text-xl tracking-wide text-white">{active.name}</h4>
                    <p className="text-neutral-400 text-sm mt-0.5">{active.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Custom Control Bar */}
            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/5">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const targetDirection = index > activeIndex ? 1 : -1;
                      setActiveState([index, targetDirection]);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-orange-500 w-10" : "bg-neutral-700 w-3 hover:bg-neutral-500"
                    }`}
                    aria-label={`Jump to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2 ml-auto">
                <button
                  onClick={() => paginate(-1)}
                  className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500 hover:text-orange-500 transition-all duration-200 active:scale-95"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500 hover:text-orange-500 transition-all duration-200 active:scale-95"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Frame Section */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-full max-w-90 aspect-4/5 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] group">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {/* Image Gradient Frame Depth Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-black/20" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;