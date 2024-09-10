/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "moderate-violet": "#7541c8",
                "very-dark-grayish-blue": "#48556a",
                "very-dark-blackish-blue": "#19212e",
                white: "#ffffff",
                "light-gray": "#cfcfcf",
                "light-grayish-blue": "#ecf2f8",
            },
            fontFamily: {
                "barlow-semi-condensed": ["Barlow Semi Condensed", "sans-serif"],
            },
            backgroundImage: {
                quot: "url(./assets/images/bg-pattern-quotation.svg)",
            },
        },
    },
    plugins: [],
}
