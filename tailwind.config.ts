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
          50: '#e4faff',
          100: '#93eaff',
          200: '#70d1e7',
          300: '#55b7cd',
          400: '#389db3',
          500: '#00859b',
          600: '#00859b',
          700: '#006e81',
          800: '#00515f',
          900: '#00343e',
          950: '#001c23'
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
