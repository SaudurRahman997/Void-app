/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        glitch: ['Beauty Glitch Demo', 'sans-serif'],
        orbitron: ['Orbitron Light', 'sans-serif'],
        neuropol: ['Neuropol', 'sans-serif'],
        futura: ['Futura Rener', 'sans-serif'],
        noxis: ['Noxis', 'sans-serif'],
        siegra: ['Siegra', 'sans-serif'],
        astroz: ['Astroz Style', 'sans-serif'],
        death: ['Death Star', 'sans-serif'],
        rocky: ['Rockybilly', 'sans-serif'],
        higher: ['Higher Jump', 'sans-serif'],
        awesome: ['Awesome', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',           // existing blue
        'glow-line': 'glow 1.5s ease-in-out infinite',
        'glow-orange': 'glow-orange 2s ease-in-out infinite',  // new orange
        'glow-slate': 'glow-slate 2s ease-in-out infinite',
        'glow-purple': 'glow-purple 2s ease-in-out infinite',

      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px 2px rgba(0, 183, 255, 0.8)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(0, 183, 255, 1)' },
        },
        'glow-orange': {   // new orange keyframes
          '0%, 100%': { boxShadow: '0 0 10px 2px rgba(255, 165, 0, 0.8)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(255, 140, 0, 1)' },
        },
        'glow-purple': {   // new purple keyframes
          '0%, 100%': { boxShadow: '0 0 10px 2px rgba(168, 0, 255, 0.8)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(138, 43, 226, 1)' }, // purple-violet
        },
        'glow-slate': {
          '0%, 100%': {
            boxShadow: '0 0 10px 2px rgba(192, 192, 192, 0.6), 0 0 15px 3px rgba(128, 128, 128, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 20px 4px rgba(169, 169, 169, 0.8), 0 0 25px 5px rgba(105, 105, 105, 0.5)',
          },
        },


      },
    },
  },

  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
