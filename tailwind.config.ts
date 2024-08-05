import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        feature: ['Comfortaa', 'Comfortaa fallback']
      },
      colors: {
        green: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16'
        },
        blue: {
          50: '#f1f8fa',
          100: '#dcecf1',
          200: '#bed9e3',
          300: '#91becf',
          400: '#5c9ab4',
          500: '#407c97',
          600: '#396781',
          700: '#33566b',
          800: '#30495a',
          900: '#2c3f4d',
          950: '#192833'
        }
      }
    }
  }
}
