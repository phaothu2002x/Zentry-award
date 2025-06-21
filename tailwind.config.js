/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                circular: ['circular-web', 'sans-serif'],
                general: ['general', 'sans-serif'],
                robertMedium: ['robert-medium', 'sans-serif'],
                robert: ['robert-regular', 'sans-serif'],
                zentry: ['zentry', 'sans-serif'],
            },
            colors: {
                blue: {
                    50: '#dfdff0',
                    75: '#dfdff2',
                    100: '#f0f2fa',
                    200: '#010101',
                    300: '#4fb7bd',
                },
                violet: {
                    300: '#5724ff',
                },
                yellow: {
                    100: '#8e983f',
                    300: '#edff66',
                },
            },
        },
    },
    plugins: [],
};
