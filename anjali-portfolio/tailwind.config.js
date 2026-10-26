export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050510', navy: '#07101F', neon: '#FF2D95', cyan: '#42D9FF',
        lav: '#B9A7FF', blush: '#FFB8E8', muted: '#B9B8CB'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
        hand: ['"Caveat"', 'cursive'],
        graffiti: ['"Rubik Wet Paint"', '"Space Grotesk"', 'sans-serif']
      },
      boxShadow: {
        pink: '0 0 24px rgba(255,45,149,.45)', cyan: '0 0 24px rgba(66,217,255,.4)'
      }
    }
  },
  plugins: []
}
