module.exports = {
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Noto Serif KR"', 'serif'],
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(100%)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 }
                },
            },
            animation: {
                'slide': 'slide 0.7s ease-in-out',
                'slide-bg': 'slide-bg 10s linear infinite',
            }
        },
    },
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
