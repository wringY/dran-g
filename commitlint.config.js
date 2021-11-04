/*
 * @Desc:
 * @Author: wringY
 * @Date: 2021-05-28 02:28:26
 * @LastEditTime: 2021-05-28 02:31:56
 * @FilePath: \my-app-ts\commitlint.config.js
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert']],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
