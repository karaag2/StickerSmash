/** @type {import('tailwindcss').Config} */
const colorsi = {
	accent: "#7e22ce",
	screen: "#fff",
	subtle: "#ededed",
	text: "#111",
	darkEmerald: "#111F21", // Vert très foncé / noir bleuté
	tealShadow: "#15525A", // Vert sarcelle sombre
	brightTurquoise: "#20C9DF", // Bleu turquoise vif
	deepBlackGreen: "#10191A", // Noir verdâtre
	forestShadow: "#111E20", // Vert très foncé
	graphiteGreen: "#112022", // Vert graphite
	anthraciteGreen: "#122022", // Vert gris anthracite
	petrolGreen: "#1E3434", // Vert pétrole
	darkSea: "#101E20", // Vert-noir profond
	darkTeal: "#15545C", // Sarcelle foncé
	duckBlue: "#144950", // Bleu canard
	softTeal: "#1A8896", // Bleu-vert doux
	deepBlueGray: "#13373C", // Gris bleu sombre
	fadedAzure: "#1C97A7", // Bleu azur atténué
	steelGreen: "#1E3435", // Vert acier foncé
};
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './Navigation.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Base colors
        accent: {
          DEFAULT: '#eaffff',
          foreground: '#1a1a1a',
        },
        background: '#0d1c11',
        border: '#1a332a',
        card: {
          DEFAULT: '#102314',
          foreground: '#e4f3f4',
        },
        destructive: {
          DEFAULT: '#26a879',
          foreground: '#ffffff',
        },
        foreground: '#a9ffea',
        input: '#243f34',
        muted: {
          DEFAULT: '#1a1e19',
          foreground: '#b3b3c0',
        },
        popover: {
          DEFAULT: '#1c1e19',
          foreground: '#e4f3f4',
        },
        primary: {
          DEFAULT: '#62dfa0',
          foreground: '#ffffff',
        },
        ring: '#274b36',
        secondary: {
          DEFAULT: '#1cd7a2',
          foreground: '#ffffff',
        },
        colorsi
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      animation: {},
      filter: {
        dropShadowDark: 'drop-shadow(0 1px 1px rgb(255 255 255 / 1))',
        dropShadowLight: 'drop-shadow(0 1px 1px rgb(0 0 0 / 1))',
      },
      fontFamily: {
        mono: ['SpaceMono'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [],
};
