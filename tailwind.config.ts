import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
      keyframes:{
        fadeIn:{
          "0%" :{opacity:'0'},
          '100%':{opacity:'1'},
        },

        fadeInDown:{
          "0%" :{opacity:'0',transform:'translateY(-20px)'},
          '100%':{opacity:'1',transform:'translateY(0px)'},
        },

        fadeInUp:{
          "100%" :{opacity:'0',transform:' translateY(0px)'},
          '0%':{opacity:'1',transform:'translateY(-20px)'},
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        
      },
      animation:{
        fadeIn:'fadeIn 1s ease-in-out',
        fadeInDown:'fadeInDown 1s ease-in-out',
        fadeInUp:'fadeInUp 1s ease-in-out',
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

function flattenColorPalette(colors: Record<string, any>): Record<string, string> {
  const flattened: Record<string, string> = {};

  function recurse(colorPalette: Record<string, any>, prefix = '') {
    Object.entries(colorPalette).forEach(([key, value]) => {
      const newKey = prefix ? `${prefix}-${key}` : key;
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        recurse(value, newKey);
      } else {
        flattened[newKey] = value;
      }
    });
  }

  recurse(colors);
  return flattened;
}

export default config;
