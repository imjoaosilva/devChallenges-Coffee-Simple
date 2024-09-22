/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mainbg: 'var(--main-bg)',
      bodybg: 'var(--body-bg)',
      bodytext: 'var(--body-text)',
      pricebg: 'var(--price-bg)',
      headingtext: 'var(--heading-text)',
      tagbg: 'var(--tag-bg)',
      soldouttext: 'var(--sold-out-text)',
    },
    extend: {
      backgroundImage: {
        coffeebg: "url(/src/assets/bg-cafe.jpg)"
      },
      fontSize: {
        small: [
          "0.7rem",
          {
            fontWeight: "700",
          },
        ],
        label: [
          "0.875rem",
          {
            fontWeight: "600",
          },
        ],
      }
    }
  },
  plugins: [],
}

