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
        'glow-line': 'glow 1.5s ease-in-out infinite',
        // 'pulse-glow': 'pulseGlow 1.5s infinite',
      },
      keyframes: {
        glow: {
          // '0%, 100%': { boxShadow: '0 0 5px #fff, 0 0 10px #00f' },
          // '50%': { boxShadow: '0 0 20px #0ff, 0 0 30px #00f' },
          '0%, 100%': { boxShadow: '0 0 10px 2px rgba(0, 183, 255, 0.8)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(0, 183, 255, 1)' },
        },
        // pulseGlow: {
        //   '0%, 100%': { boxShadow: '0 0 10px #0ff, 0 0 20px #0ff' },
        //   '50%': { boxShadow: '0 0 20px #0ff, 0 0 30px #0ff' },
        // },
      },
    },

  },



  plugins: [],

}



