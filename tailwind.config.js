/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        'container' : '1144px',
        'containerx' : '1920px'
      },
      colors : {
        'primary' : '#F40404',
        'overlay' : 'rgba(0, 0, 0, 0.60)'
      },
      fontFamily : {
        'pops' : ['Poppins','Sans-Serif'],
        'robo' : ['Roboto','Sans-Serif'],
        'sans' : ['Open Sans','Sans-Serif']
      },
      backgroundImage : {
        'banner' : "url(../src/assets/banner.png)",
        'servicesone' : "url(../src/assets/servicesone.png)",
        'blogone' : "url(../src/assets/blogone.png)",
        'blogtwo' : "url(../src/assets/blogtwo.png)",
        'blogthree' : "url(../src/assets/blogthree.png)",
      },
      screens : {
        'xmd' : '769px',
        'xxl' : '1288px'
      },
    },
  },
  plugins: [],
}
