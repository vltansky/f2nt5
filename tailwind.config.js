module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderWidth: {
        2.75: "2.75px;",
        3: "3px;"
      },
      padding: {
        "0.35px": "0.35px"
      },
      width: {
        24.5: "100px"
      },
      spacing: {
        18: "69px",
        18.5: "70px",
        19: "73px",
        19.5: "76px",
        22: "92px",
        23: "94.5px",
        24.5: "100px",
        25: "106.5px"
      },
      animation: {
        // for the light gray backround circle
        "ping-slow": "ping 0.5s cubic-bezier(0.3, 0.2, 0.1, 1) infinite;",
        wiggle: "wiggle 1s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
