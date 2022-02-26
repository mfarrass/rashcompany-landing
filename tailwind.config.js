module.exports = {
  content: ['./public**/*.{html,js}' ],
  theme: {
    extend: {
        screens: {
            'xs': '488px',
            'sm': '640px',
            'md': '1024px',
            'lg': '1280px',
            'xl': '1024px',
            '2xl': '1536px',
      },
      spacing: {
            13: '3.25rem',
      },
      fontFamily: {
          'dongel': ['Dongle'],
          'roboto': ['Roboto'],
      },
        colors: {
          'primary': '#eaeaea',
          'bermuda': '#78dcca',
      },
      animation: {
          'spin-slow': 'spin 3s linear infinite',
          'bergoyang': 'bergoyang 1s ease-in-out infinite'
      },
      keyframes :{
          shake: {
              '0%, 100%' : { transform: 'rotate (-3deg)'},
              '50%' : { transform: 'rotate(3deg)' },
          },
      },
    },    
},
}

