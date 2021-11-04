/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-05-28 01:59:15
 * @LastEditTime: 2021-05-28 02:10:52
 * @FilePath: \my-app-ts\.stylelintrc.js
 */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  ignoreFiles: ['**/*.ts', '**/*.tsx', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.mp3', '**/*.json'],
  rules: {
    "color-no-invalid-hex": true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'ignores']
      }
    ],
    indentation: 4,
    'number-leading-zero': null,
    'unit-allowed-list': ['em', 'rem', 's', 'px', 'deg', 'all', 'vh', '%'],
    'no-eol-whitespace': [
      true,
      {
        ignore: 'empty-lines'
      }
    ],
    'declaration-block-trailing-semicolon': 'always',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'block-closing-brace-newline-after': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'no-descending-specificity': null,
    'selector-list-comma-newline-after': 'always',
    'selector-pseudo-element-colon-notation': 'single'
  }
}
