/** @type {import('tailwindcss').Config} */
export default {
  // ─── Content paths must include the srcDir prefix ───────────────────
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#635BFF',
          hover:   '#524CC2',
          light:   '#8B7FFF',
        },
        mercury: {
          dark:   '#0A0A0A',
          panel:  '#111111',
          border: '#1f1f1f',
          cream:  '#F5F3EF',
          sage:   '#E8E6E1',
          text:   '#F5F5F5',
          muted:  '#6B6B6B',
          dim:    '#3D3D3D',
        },
      },
      maxWidth: {
        container: '1280px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        pill: '9999px',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        // Brand gradient — indigo (#635BFF) → cyan (#22D3EE)
        'brand-gradient': 'linear-gradient(135deg, #635BFF 0%, #22D3EE 100%)',
      },
      boxShadow: {
        // Brand "glow" used on primary CTAs and accent surfaces
        'glow-primary': '0 0 30px rgba(99, 91, 255, 0.45)',
        'glow-primary-lg': '0 0 45px rgba(99, 91, 255, 0.7)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        shimmer:   'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
}
