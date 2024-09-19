/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%)',
      },
    },
  },
  plugins: [],
};
