const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'pre-commit': tasks([
      'sh ./scripts/test-existance.sh',
      'sh ./scripts/no-js-allowed.sh',
      'sh ./scripts/generate-index.sh'
    ]),
    'pre-push': tasks([
      "sh ./scripts/no-js-allowed.sh",
      "sh ./scripts/test-existance.sh",
      "yarn test",
      "lint-staged",
      'sh ./scripts/generate-index.sh'
    ])
  }
}
