/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        oox: {
          bg: {
            dark: '#0b0d14',
            light: '#f8fafc',
          },
          surface: {
            dark: '#131722',
            light: '#ffffff',
          },
          card: {
            dark: 'rgba(19, 23, 34, 0.75)',
            light: 'rgba(255, 255, 255, 0.9)',
          },
          border: {
            dark: 'rgba(255, 255, 255, 0.08)',
            light: 'rgba(0, 0, 0, 0.08)',
          },
          cyan: {
            DEFAULT: '#00f2fe',
            glow: '#00c6ff',
          },
          purple: {
            DEFAULT: '#7928ca',
            glow: '#8a2be2',
          },
          pink: '#ff0080',
          gold: '#ffb703',
        },
      },
      fontSize: {
        '2xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'xs': ['0.8125rem', { lineHeight: '1.25rem' }],  // 13px (was 12px, +1px)
        'sm': ['0.9375rem', { lineHeight: '1.375rem' }], // 15px (was 14px, +1px)
        'base': ['1.0625rem', { lineHeight: '1.625rem' }],// 17px (was 16px, +1px)
        'lg': ['1.1875rem', { lineHeight: '1.75rem' }],  // 19px (was 18px, +1px)
        'xl': ['1.3125rem', { lineHeight: '1.875rem' }], // 21px (was 20px, +1px)
        '2xl': ['1.5625rem', { lineHeight: '2.125rem' }],// 25px (was 24px, +1px)
        '3xl': ['1.9375rem', { lineHeight: '2.375rem' }],// 31px (was 30px, +1px)
        '4xl': ['2.3125rem', { lineHeight: '2.625rem' }],// 37px (was 36px, +1px)
        '5xl': ['3.0625rem', { lineHeight: '1.1' }],     // 49px (was 48px, +1px)
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 242, 254, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(121, 40, 202, 0.3)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'card-light': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
