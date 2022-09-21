module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"',],
    },
    daisyui: {
      DoctorTheme: {
        primary: "#41D9FB",
        secondary: "#41D9FB",
        accent: "#092B66",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },
  },

  plugins: [require("daisyui")],
}
