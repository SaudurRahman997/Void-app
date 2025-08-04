// components/NextPrevButtons.jsx

import { ChevronRight, ChevronLeft } from 'lucide-react'

export default function NextPrevButtons({ onPrev, onNext }) {
  return (
    <div className="flex gap-4 items-center justify-center mt-6">
      <button
        onClick={onPrev}
        className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full shadow-lg transition-all duration-200"
        aria-label="Previous"
      >
        <ChevronLeft size={28} strokeWidth={2.5} className="text-white" />
      </button>

      <button
        onClick={onNext}
        className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full shadow-lg transition-all duration-200"
        aria-label="Next"
      >
        <ChevronRight size={28} strokeWidth={2.5} className="text-white" />
      </button>
    </div>
  );
}
