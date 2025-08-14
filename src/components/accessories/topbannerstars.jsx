import React from 'react';

export default function TopBannerplanet({ text }) {
    return (
        <div className="w-full bg-orange-600 flex items-center justify-center shadow-md z-50 border-3 border-black animate-glow-orange rounded-xl py-4">
            <h1 className="text-white text-xl font-glitch">{text}</h1>
        </div>
    );
}
