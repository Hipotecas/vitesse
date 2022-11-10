import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  shortcuts: {
    container: 'w-300 mx-auto',
  },
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
})
