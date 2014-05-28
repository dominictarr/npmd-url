
var tape = require('tape')
var npmUrl = require('../')

function t (input, expected) {
  return tape(input + ' -> ' + expected, function (t) {
    t.equal(npmUrl(input), expected)
    t.end()
  })
}


t('curry@1.2.0', 'https://registry.npmjs.org/curry/-/curry-1.2.0.tgz')
t('highlight.js@8.0.0', 'https://registry.npmjs.org/highlight.js/-/highlight.js-8.0.0.tgz')
t('JSONStream@6.2.0', 'https://registry.npmjs.org/JSONStream/-/JSONStream-6.2.0.tgz')
t({name: 'JSONStream', version: '6.2.0'},
  'https://registry.npmjs.org/JSONStream/-/JSONStream-6.2.0.tgz')
t({tarballUrl: 'https://registry.npmjs.org/JSONStream/-/JSONStream-6.2.0.tgz'},
  'https://registry.npmjs.org/JSONStream/-/JSONStream-6.2.0.tgz')
//git urls are already tested in npm-github-url-resolve

tape('custom registry', function(t){
  var config = { registry: 'https://custom.com' }
  t.equal(npmUrl('curry@1.2.0', config), 'https://custom.com/curry/-/curry-1.2.0.tgz')
  t.end()
})
