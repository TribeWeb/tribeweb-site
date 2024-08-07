import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .override('nuxt/stylistic', {
    rules: {
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'never']
    }
  })
