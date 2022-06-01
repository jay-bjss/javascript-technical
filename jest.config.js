// jest.config.js
module.exports = {
    "transform": {
        "\\.m?jsx?$": "jest-esm-transformer"
    },
    "testRegex": "test/.*",
    "transformIgnorePatterns": [
      "node_modules/(?!split-lines)"
    ]
};