/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/dist/**/*.{html,js}",
            "'/pages/**/*.{html,js}'",
            "'/components/**/*.{html,js}"],

  theme: {
    extend: {
      backgroundImage: {
        'funko': "url('img/funkos-banner.webp')",
      }
    },
  },
  plugins: [],
}

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        
      },
    },
  },
  // ...
}
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'funko': "url('img/funkos-banner.webp')",
      }
    }
  }
}