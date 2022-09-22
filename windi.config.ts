import { defineConfig } from 'windicss/helpers'
import Animations from '@windicss/plugin-animations'
import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        titanOne: ['Titan One', 'cursive'],
      },
    },
  },
  plugins: [
    // https://windicss.org/plugins/community/animations.html
    Animations(),
    // https://windicss.org/guide/configuration.html#configuring-windi-css
    plugin(({ addComponents }) => {
      const custom = {
        '.btn': {
          padding: '.5rem .75rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          display: 'flex',
          flexFlow: 'row nowrap',
          placeItems: 'center',
        },
      }
      addComponents(custom)
    }),
  ],
})
