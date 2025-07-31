import React from 'react';

export default function TopBanner({ text }) {
    return (
        <div className="w-full h-[60px] bg-slate-900 flex items-center justify-center shadow-md z-50 border-3 border-black animate-glow">
            <h1 className="text-white text-xl font-glitch">{text}</h1>
        </div>
    );
}
