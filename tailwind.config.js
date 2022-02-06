module.exports = {
    darkMode: 'class',
    content: [
        "./*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: '#00E400',
                light: '#FFFFFF',
                lightAccent: '#a9a9a9',
                dark: '#000000',
                darkAccent: '#00E400',
                primary: '#1cde24',
                info: '#a9a9a9',
                success: '#3ebd43',
                warning: '#bbad0b',
                danger: '#f44336',
            }
        },
        fontFamily: {
            sans: ['VT323', 'monospace'],
            serif: ['Cutive Mono', 'monospace']
        },
        fontSize: {
            'xs': ['.875rem', {
                letterSpacing: '0.05em',
            }],
            'sm': ['1rem', {
                letterSpacing: '0.05em',
            }],
            'base': ['1.125rem', {
                letterSpacing: '0.05em',
            }],
            'lg': ['1.25rem', {
                letterSpacing: '0.05em',
            }],
            'xl': ['1.5rem', {
                letterSpacing: '0.05em',
            }],
            '2xl': ['1.875rem', {
                letterSpacing: '0.05em',
            }],
            '3xl': ['2.25rem', {
                letterSpacing: '0.05em',
            }],
            '4xl': ['3rem', {
                letterSpacing: '0.05em',
            }],
            '5xl': ['4rem', {
                letterSpacing: '0.05em',
            }],
            '6xl': ['5rem', {
                letterSpacing: '0.05em',
            }],
            '7xl': ['6rem', {
                letterSpacing: '0.05em',
            }],
            '8xl': ['7rem', {
                letterSpacing: '0.05em',
            }],
            '9xl': ['8rem', {
                letterSpacing: '0.05em',
            }],
        },
        fontWeight: {
            thin: 300,
            'extra-light': 300,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 500,
            bold: 500,
            extrabold: 500,
            'extra-bold': 500,
            black: 500,
        },
        borderWidth: {
            DEFAULT: '2px',
            '0': '0',
            '2': '3px',
            '3': '4px',
            '4': '5px',
            '6': '6px',
            '8': '7px',
        },
    },
    corePlugins: {
        borderRadius: false,
    },
    plugins: [],
}
