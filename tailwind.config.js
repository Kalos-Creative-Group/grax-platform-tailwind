module.exports = {
  content: ['*.html', '_site/*.html','_site/**/*.html', '_pages/**/*.md', '_posts/**/*.md', '_layouts/**/*.html', '_includes/**/*.html'],
  theme: {
    screens: {
      sm: '580px',
      md: '760px',
      lg: '940px',
      xl: '1180px',
    },
    fontSize: {
      '3xs': ['0.75rem', { lineHeight: '1rem' }],
      '2xs': ['0.8125rem', { lineHeight: '1rem' }],
      xs: ['0.875rem', { lineHeight: '1rem' }],
      sm: ['0.9375rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.5rem' }],
      xl: ['1.25rem', { lineHeight: '1.5rem' }],
      '2xl': ['1.5rem', { lineHeight: '1.75rem' }],
      '3xl': ['2rem', { lineHeight: '2rem' }],
      '4xl': ['2.5rem', { lineHeight: '2.25rem' }],
      '5xl': ['3.5rem', { lineHeight: '1' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#f7f7f7', // gray-extra-extra-light
        100: '#ecedeb', // gray-extra-light
        200: '#9698a3', // gray-light
        300: '#dfe0de', // gray-medium-light
        400: '#bcbdcc', // gray-medium
        500: '#555', 
        600: '#444', 
        700: '#333', // gray-dark
        800: '#222', // gray-darker
        900: '#111', // gray-extra-dark
        950: '#0a0a0a',
      },
      pink: {
        '50': '#fcf5fe',
        '100': '#f7eafd',
        '200': '#efd3fb',
        '300': '#e799ff', // pink-light
        '400': '#d681f1',
        '500': '#c459e5', // pink
        '600': '#a731c8',
        '700': '#8d26a5',
        '800': '#742187',
        '900': '#63206f',
        '950': '#3f0949',
      },
      rose: {
        '50': '#fdf2f8',
        '100': '#fde6f2',
        '200': '#fccee6',
        '300': '#fba6d1',
        '400': '#f75aa6', // pink-bright
        '500': '#f14392',
        '600': '#e0226f',
        '700': '#c31355',
        '800': '#a11346',
        '900': '#86153e',
        '950': '#520521',
      },
      lavendar: {
        '50': '#fef4ff',
        '100': '#fbe8ff',
        '200': '#f8d0fe',
        '300': '#f4acfb',
        '400': '#ee7af8',
        '500': '#e147ee',
        '600': '#c226cb', // pink-extra-bright
        '700': '#a91dae',
        '800': '#8b1a8e',
        '900': '#741b74',
        '950': '#4d054c',
      },
      purple: {
        '50': '#eff4fe',
        '100': '#e2ebfd',
        '200': '#cad9fb',
        '300': '#aabff7',
        '400': '#99a5ff', // purple-light
        '500': '#5f6fe6', // purple
        '600': '#5462cc', // purple-dark
        '700': '#434ea3', // purple-darker
        '800': '#373b9c',
        '900': '#33377c',
        '950': '#1e1f48',
      },
      blue: {
        '50': '#f1fafe',
        '100': '#e3f3fb',
        '200': '#c0e8f7',
        '300': '#83e2ff', // blue-light
        '400': '#61caea', // blue (or teal)
        '500': '#22abd5',
        '600': '#148ab5',
        '700': '#116f93',
        '800': '#125e7a',
        '900': '#154e65',
        '950': '#0e3243',
      },
      fire: {
        '50': '#fef3f2',
        '100': '#fee4e2',
        '200': '#fecfca',
        '300': '#ff8f85', // fire-light
        '400': '#f7685a', // fire
        '500': '#ef5344',
        '600': '#dc3626',
        '700': '#b92a1c',
        '800': '#99261b',
        '900': '#7f261d',
        '950': '#450f0a',
      },
      steel: {
        '50': '#f4f7fa',
        '100': '#e7ecf2',
        '200': '#d4dee9',
        '300': '#b6c8da',
        '400': '#9fb5cd', // blue-gray
        '500': '#7993b8',
        '600': '#677ea9',
        '700': '#5b6e9a',
        '800': '#4e5b7f',
        '900': '#424c66',
        '950': '#2b3140',
      },
      green: {
        '50': '#ecfdf5',
        '100': '#d2f9e4',
        '200': '#a8f2cf',
        '300': '#70e5b5',
        '400': '#44e3ac', // green-light
        '500': '#15cd8d', // green
        '600': '#079466',
        '700': '#067654',
        '800': '#075e44',
        '900': '#074d39',
        '950': '#032b21',
      },
      red: {
        '50': '#fff0f0',
        '100': '#ffdddd',
        '200': '#ffc0c0',
        '300': '#ff9494',
        '400': '#ff5757',
        '500': '#ff2323',
        '600': '#ff0000', // red (or error)
        '700': '#d70000',
        '800': '#b10303',
        '900': '#920a0a',
        '950': '#500000',
      }
    },
    extend: {
      borderRadius: {
        none: '0',
        px: '1px',
        sm: '0.125rem',
        default: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2.5rem',
        '5xl': '5rem',
        full: '9999px',
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        light: '0 4px 8px rgba(0,0,0,0.12)',
        default: '0 4px 8px rgba(0,0,0,0.24)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 16px 104px 0 rgba(0,0,0,0.24)',
        'xl-light': '0 16px 104px 0 rgba(0,0,0,0.12)',
        '2xl': '0 40px 104px 0 rgba(0,0,0,0.24)',
        '2xl-light': '0 40px 104px 0 rgba(0,0,0,0.12)',
        inner: 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.32)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
        'blue-light': '0 0 24px 4px #83E2FF',
        'pink-500': '0 0 24px 4px #c459e5',
        'fire': '0 0 24px 4px #f7685a',
        'purple': '0 0 24px 4px #5f6fe6',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        heading: [
          'Work Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      opacity: {
        8: '0.08',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
