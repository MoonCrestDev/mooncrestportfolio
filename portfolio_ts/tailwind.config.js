/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // Adjust to match your file structure
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Cabin"', 'sans-serif'],
            },
            animation: {
                'scroll-infinite': 'scroll 15s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },

        },
    },
    plugins: [],
};