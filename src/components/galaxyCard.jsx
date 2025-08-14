import { motion } from "framer-motion";

export default function GalaxyCard({ image, title, targetId }) {
    const handleClick = () => {
        if (targetId) {
            const el = document.getElementById(targetId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            } else {
                console.warn(`Element with id '${targetId}' not found.`);
            }
        }
    };

    return (
        <motion.div
            onClick={handleClick}
            className="relative w-52 lg:w-64 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
                transformStyle: "preserve-3d",
                background: "linear-gradient(to right, #1f1f1f, #2b2b2b)",
            }}
        >
            {/* Glowing Border Layer */}
            <div className="absolute inset-0 z-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl animate-pulse border-2 border-blue-500 blur-md opacity-50" />
            </div>

            {/* Image + Title Content */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="h-44 lg:h-56 w-full">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover rounded-t-2xl contrast-125 saturate-150"
                        style={{
                            boxShadow: "0 10px 20px rgba(255,255,255,0.1)",
                        }}
                    />
                </div>

                {/* Title Section */}
                <div className="w-full bg-white/10 backdrop-blur-md p-3 text-center font-higher text-xl lg:text-2xl text-white">
                    <h2 className="text-sm lg:text-base group-hover:text-blue-400 transition duration-300">
                        {title}
                    </h2>
                </div>
            </div>
        </motion.div>
    );
}
