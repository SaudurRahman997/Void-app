import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PinContainer({ imageUrl, title, href = "/" }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-56 h-56 group" // square dimensions
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Circular Card with image */}
            <motion.div
                className="w-full h-full rounded-full overflow-hidden shadow-lg border border-white/20"
                initial={{ rotateX: 0, scale: 1 }}
                animate={isHovered ? { rotateX: 20, scale: 0.95 } : { rotateX: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d", backgroundColor: "black" }}
            >
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Glowing animated blue line (adjusted for circle) */}
            {isHovered && (
                <>
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0.5 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-[14px] w-0.5 h-28 bg-blue-400 animate-glow-line"
                    />
                    <motion.div
                        className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-[14px] w-0.5 h-28 bg-blue-400 blur-md opacity-50 animate-glow-line"
                    />
                    <div className="absolute right-1/2 bottom-1/2 translate-x-1.5 translate-y-[14px] w-2 h-2 rounded-full bg-blue-400 blur-md animate-pulse" />
                    <div className="absolute right-1/2 bottom-1/2 translate-x-0.5 translate-y-[14px] w-1 h-1 rounded-full bg-blue-200" />
                </>
            )}

            {/* Floating title above */}
            <motion.div
                className="absolute top-0 inset-x-0 flex justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative flex items-center space-x-2 z-10 rounded-full bg-black/70 py-1 px-4 ring-1 ring-white/10">
                    <span className="text-white text-xs font-bold">{title}</span>
                </div>
            </motion.div>
        </a>
    );
}
