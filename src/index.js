const { default: header } = require('./header')

;(() => {
  const body = document.querySelector('body')
  body.appendChild(header())
})()
