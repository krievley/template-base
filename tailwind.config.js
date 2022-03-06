module.exports = {
    darkMode: 'class',
    content: [
        "./*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: '#eec83e',
                light: '#ecf0ee',
                lightAccent: '#1c99ef',
                dark: '#000000',
                darkAccent: '#e52123',
                primary: '#5F6FA3',
                info: '#272829',
                success: '#529c69',
                warning: '#cf8c31',
                danger: '#f44336',
            }
        },
        fontFamily: {
            sans: ['Jedi', 'sans-serif'],
            serif: ['Open Sans', 'serif']
        },
    },
    plugins: [],
}
