import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .override('nuxt/stylistic', {
    rules: {
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/vue/key-spacing': ['error', { afterColon: true, beforeColon: false }],
      // '@stylistic/comma-dangle': ['error', 'never']
      // '@stylistic/max-statements': ['error', { max: 2 }],
      // '@stylistic/no-multi-spaces': ['error', 'always']
    }
  })

  // 'vue/array-bracket-spacing': ['error', 'never'],
  // 'vue/arrow-spacing': ['error', { after: true, before: true }],
  // 'vue/block-spacing': ['error', 'always'],
  // 'vue/block-tag-newline': ['error', {
  //   multiline: 'always',
  //   singleline: 'always',
  // }],
  // 'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
  // 'vue/comma-dangle': ['error', 'always-multiline'],
  // 'vue/comma-spacing': ['error', { after: true, before: false }],
  // 'vue/comma-style': ['error', 'last'],
  // 'vue/html-comment-content-spacing': ['error', 'always', {
  //   exceptions: ['-'],
  // }],
  // 'vue/key-spacing': ['error', { afterColon: true, beforeColon: false }],
  // 'vue/keyword-spacing': ['error', { after: true, before: true }],
  // 'vue/object-curly-newline': 'off',
  // 'vue/object-curly-spacing': ['error', 'always'],
  // 'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
  // 'vue/operator-linebreak': ['error', 'before'],
  // 'vue/padding-line-between-blocks': ['error', 'always'],
  // 'vue/quote-props': ['error', 'consistent-as-needed'],
  // 'vue/space-in-parens': ['error', 'never'],
  // 'vue/template-curly-spacing': 'error',


// @ts-check
// import antfu from '@antfu/eslint-config'
// import withNuxt from './.nuxt/eslint.config.mjs'

// export default withNuxt(
//   antfu({
//     // ...@antfu/eslint-config options
//   })
//   // ...your other rules
// )
