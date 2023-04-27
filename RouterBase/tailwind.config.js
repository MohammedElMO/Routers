/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "pop":["Poppins","sans-serif"],
      "inter":["Inter","sans-serif"]
    },


     
    extend: {
      screens:{
        "phone" : "305px",
        'sm': {'min': '640px', 'max': '767px'},
        
        'x-sm': {'min': '653px', 'max': '767px'},
        'phone': {'min': '0px', 'max': '661px'},
        // => @media (661min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
      keyframes:{
        "shake":{  
          "5% ,10%":{ transform:"translateX(5%)" },
          "15% ,20%":{ transform:"translateX(5%)" },
          "25% ,30%":{ transform:"translateX(-5%)" },
          "35% ,40%":{ transform:"translateX(5%)" },
          "45% ,50%":{ transform:"translateX(-5%)" },
          "55% ,60%":{ transform:"translateX(5%)" },
          "65% ,70%":{ transform:"translateX(-5%)" },
          "75% ,80%":{ transform:"translateX(5%)" },
          "85% ,90%":{ transform:"translateX(-5%)" },
          "95% ,100%":{ transform:"translateX(5%)" },
        }
      },
      animation:{
        shake:"shake 2s ease infinite"
      }


    },
  },
  plugins: [],
}