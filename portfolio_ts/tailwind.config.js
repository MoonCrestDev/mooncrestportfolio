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
            keyframes: {
                shine: {
                    '0%, 100%': { transform: 'translateX(-100%)' },
                    '50%': { transform: 'translateX(100%)' }
                }
            },
            animation: {
                shine: 'shine 2s ease-in-out infinite'
            }
        },
    },
    plugins: [],
};