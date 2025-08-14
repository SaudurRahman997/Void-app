import React from 'react';

export default function TopBanner({ text }) {
    return (
        <div className="w-full bg-slate-900 flex items-center justify-center shadow-md z-50 border-3 border-black animate-glow rounded-xl py-4">
            <h1 className="text-white text-xl font-higher">{text}</h1>
        </div>
    );
}
