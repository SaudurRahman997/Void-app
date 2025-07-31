import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalaxyCard from "./galaxyCard"; // assume this is your card component
import NextPrevButtons from "./nextPrev";
const cards = [
  { image: "/textures/UGC.jpg", title: "UGC" },
  { image: "/textures/whirlpool.jpg", title: "Whirlpool" },
  { image: "/textures/milkyway.jpeg", title: "Milky Way" },
  { image: "/textures/sombrero.jpg", title: "Sombrero" },
  { image: "/textures/triangulum.jpg", title: "Triangulum" },
  { image: "/textures/pinwheel.jpg", title: "Pinwheel" },
  { image: "/textures/messier.jpeg", title: "Messier" },
  { image: "/textures/centaurus.jpg", title: "Centaurus A" },
  { image: "/textures/Andromeda.jpg", title: "Andromeda" },
];

export default function CardSlider() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % cards.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden h-screen ">
      {/* Slide Cards */}
      <div className="flex items-center justify-center gap-4 relative w-full">
        {
          cards.map((card, i) => {
            const isActive = i === index;
            const offset = i - index;

            return (
              <motion.div
                key={i}
                className="absolute"
                animate={{
                  x: `${offset * 300}px`,
                  scale: isActive ? 1 : 0.8,
                  zIndex: isActive ? 10 : 5,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <GalaxyCard image={card.image} title={card.title} />
              </motion.div>
            );
          })
        }
      </div >

      {/* Buttons */}
      < div className="absolute bottom-4 flex gap-4" >
        {/* <button
          onClick={handlePrev}
          className="bg-white/20 backdrop-blur px-4 py-2 rounded text-white"
        > 
          Prev
        </button> */}
        <NextPrevButtons onPrev={handlePrev} onNext={handleNext} />
        {/* <button
          onClick={handleNext}
          className="bg-white/20 backdrop-blur px-4 py-2 rounded text-white"
        >
          Next
        </button> */}

      </div >
    </div >
  );
}


