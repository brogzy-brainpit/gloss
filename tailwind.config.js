/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
    
    extend: {
      keyframes: {
    'color-fade': {
      '0%': { color: '#000' },
      '50%': { color: '#ff6600' },
      '100%': { color: '#000' },
    },
  },
  animation: {
    'color-fade': 'color-fade 3s ease-in-out infinite',
  },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
         fontSize:{
        'button': 'clamp(14px, 3.5vw, 18px)',
        'para': 'clamp(1.2em, 1vw + 0.2em, 1.3em)',
        'heading1': 'clamp(3em, 4.8vw + 0.5em, 5.5em)',
        'heading2': 'clamp(2.4em, 4.5vw + 0.5em, 4.5em)',
        'heading3': 'clamp(2em, 3.4vw + 0.3em, 4em)',
        'heading4': 'clamp(2em, 2vw + 0.3em, 4em)',
        'display': 'clamp(4em, 6.5vw + 0.5em, 8em)',
        'footer': 'clamp(40px, 9vw, 80px)',
      },
       zIndex:{
        'preloader': '9999',
        'header': '999',
        
      },
      colors:{
        'brand-text':"#1c2218",
        'brand-white':"#f6fcfd",
        'brand-accent':"#614d70", //accent for links, hover state 
        'brand-black':"#101718",
        'brand-secondary':"#a3e3ed", 
        'brand-background':"#FACC15",
        
      },
      fontFamily:{
        'custom': ["var(--font-custom2)", "serif"],
        'custom2': ["var(--font-custom2)", "serif"],
        'body': ["var(--font-body)", "sans-serif"],
        // 'custom2': ["var(--font-lora)", "sans-serif"],
        'univers': ['"Univers LT Std"', 'sans-serif'],
        'custom-condensed':['NewSpiritCondensed','Helvetica_Neue', 'Helvetica'],
        // 'body':['Helvetica_Neue, Helvetica'],
        // 'custom':['bebas','Helvetica_Neue', 'Helvetica'],
      }
    },
  },
  plugins: [],
};
