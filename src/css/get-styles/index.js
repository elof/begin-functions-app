let begin = require('@architect/functions')

function route(req, res) {
  let request = JSON.stringify(req, null, 2)
  console.log('hello backend', request)
  res({
    css: `body { background: pink; }`
  })
}

exports.handler = begin.css.get(route)
