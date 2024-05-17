/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        duckyYellow: "#FFD700",
        tealishGreen: "#19DA66",
        ragoonGreen: "#191919",
        smokeyGrey: "#717171",
        midnight: "#0A142F",
        mountainMist: "#959595",
        darkGreen: "#1E1E1E",
        lightTan: "#FBEC9D",
        sunriseOrange: "#EB664E",
        earlyDawn: "#FFFAE1",
        blackCow: "#4A4343",
        seaShell: "#F0F0F0",
      },
      fontFamily: {
        Abhaya: "Abhaya Libre",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      backgroundImage: {
        heroBg: `url('./assets/bro.png')`,
        heroBg2: `url('./assets/pana.png')`,
        ellipse3: `url('./assets/Ellipse3.png)`,
        ellipse4: `url('./assets/Ellipse4.png)`,
      },
    },
  },
  plugins: [],
};
