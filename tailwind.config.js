module.exports = {
  content: ['index.html', 'assets/js/script.js'],
  theme: {
    extend: {
      colors: {
        primary: '#fa7e1e',
        secondary: '#496dff',
        dark: '#18222c'
      },
      keyframes: {
        'fade-out-down': {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(500px)',
            opacity: 0,
          }
        },
        'fade-in-down': {
          '0%': {
            transform: 'translateY(-500px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        },
        'fade-out-up': {
          '0%': {
            transform: 'translateY(0)',
            opacity: 1
          },
          '100%': {
            transform: 'translateY(-500px)',
            opacity: 0
          }
        },
        'fade-in-up': {
          '0%': {
            transform: 'translateY(500px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-in-out forwards',
        'fade-out-down': 'fade-out-down 0.8s ease-in-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-in-out forwards',
        'fade-out-up': 'fade-out-up 0.8s ease-in-out forwards',
      }
    },
    container: {
      padding: '6rem',
      center: true
    }
  },
  plugins: [],
}
