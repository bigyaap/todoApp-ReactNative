/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                almost_white: '#e8e8e8'
            },
            borderRadius: {
                half: '50%'
            },
        },
    },
    plugins: [],
}

