/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        glitch: ['Beauty Glitch Demo', 'sans-serif'],
        orbitron: ['Orbitron Light', 'sans-serif'],
        neuropol: ['Neuropol', 'sans-serif'],
        futura: ['Futura Rener', 'sans-serif']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #fff, 0 0 10px #00f' },
          '50%': { boxShadow: '0 0 20px #0ff, 0 0 30px #00f' },
        },
      },
    },

  },



  plugins: [],

}



