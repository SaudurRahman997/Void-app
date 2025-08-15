import React from "react";

export default function Button() {
    return (
        <button
            aria-label="Delete item"
            className="relative p-1 bg-transparent cursor-pointer text-base transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 group"
        >
            <svg
                className="w-8 h-8 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] drop-shadow-md overflow-visible hover:rotate-3 hover:scale-110 active:scale-95 active:rotate-[-1deg]"
                viewBox="0 -10 64 74"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="trash-can">
                    {/* Trash body */}
                    <rect x={16} y={24} width={32} height={30} rx={3} ry={3} fill="#ffffff" />

                    {/* Lid */}
                    <g
                        id="lid-group"
                        className="origin-[12px_18px] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[28deg] group-hover:translate-y-[2px] group-active:-rotate-[12deg] group-active:scale-95"
                    >
                        <rect x={12} y={12} width={40} height={6} rx={2} ry={2} fill="#c0392b" />
                        <rect x={26} y={8} width={12} height={4} rx={2} ry={2} fill="#c0392b" />
                    </g>
                </g>
            </svg>
        </button>
    );
}
