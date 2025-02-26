module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'potato-blue': '#1e88e5',
        'potato-light-blue': '#e3f2fd',
        'potato-dark': '#1e293b',
        'potato-light': '#f8fafc',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-background.png')",
      },
      boxShadow: {
        'feature': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
} 