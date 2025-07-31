// components/NextPrevButtons.jsx

import { ArrowBigRightDash, ArrowBigLeftDash } from 'lucide-react'

export default function NextPrevButtons({ onPrev, onNext }) {
  return (
    <div className="flex gap-4 items-center justify-center mt-6">
      <button
        onClick={onPrev}
        className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full shadow-lg transition-all duration-200"
        aria-label="Previous"
      >
        <ArrowBigLeftDash size={28} strokeWidth={2.5} className="text-white" />
      </button>

      <button
        onClick={onNext}
        className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full shadow-lg transition-all duration-200"
        aria-label="Next"
      >
        <ArrowBigRightDash size={28} strokeWidth={2.5} className="text-white" />
      </button>
    </div>
  );
}
