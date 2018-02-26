module.exports = {
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-tag-spacing': [ 2, {
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    } ]
  }
};