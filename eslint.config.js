import antfu from '@antfu/eslint-config'
// import vueI18n from '@intlify/eslint-plugin-vue-i18n'

export default antfu(
  {
    unocss: true,
    ignores: [
      'public',
      'dist*',
      'src/ui/shadcn/ui',
    ],
  },
  // ...vueI18n.configs['flat/recommended'],
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'curly': ['error', 'all'],
      'ts/no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
      }],
    },
  },
  {
    files: [
      'src/**/*.vue',
    ],
    rules: {
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style'],
      }],
    },
  },
)
