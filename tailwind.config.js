module.exports = {
    mode: "jit",
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Raleway', 'Helvetica', 'Arial', 'sans-serif']
            }
        },
        container: {
            center: true
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}