/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/flowbite/**/*.js",
    //     "./node_modules/flowbite-react/lib/**/*.js",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   headingColor: " #094396",
    // },
  },
  // plugins: [require("daisyui", "flowbite/plugin")],
  plugins: [require("daisyui", "flowbite/plugin")],
};
