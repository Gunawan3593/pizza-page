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
            transform: 'translateY(0)'
          },
          '50%': {
            'animation-timing-function': 'linear'
          },
          '100%': {
            transform: 'translateY(500px)'
          }
        },
        'fade-in-down': {
          '0%': {
            transform: 'translateY(-500px)'
          },
          '50%': {
            'animation-timing-function': 'linear'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        'fade-out-up': {
          '0%': {
            transform: 'translateY(0)'
          },
          '50%': {
            'animation-timing-function': 'linear'
          },
          '100%': {
            transform: 'translateY(-500px)'
          }
        },
        'fade-in-up': {
          '0%': {
            transform: 'translateY(500px)'
          },
          '50%': {
            'animation-timing-function': 'linear'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down .9s ease-out forwards',
        'fade-out-down': 'fade-out-down .9s ease-out forwards',
        'fade-in-up': 'fade-in-up .9s ease-out forwards',
        'fade-out-up': 'fade-out-up .9s ease-out forwards',
      }
    },
    container: {
      padding: '6rem',
      center: true
    }
  },
  plugins: [],
}
