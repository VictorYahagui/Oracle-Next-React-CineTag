/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Roboto", "sans-serif"'],
      },
      backgroundImage: {
        'banner-favoritos': "url(./public/BannerFavoritos.png)",
        'banner-home': "url(./public/BannerHome.png)",
        'banner-player': "url(./public/BannerPlayer.png)",
      },
    },
  },
  plugins: [],
}