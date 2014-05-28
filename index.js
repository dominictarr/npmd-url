
//TODO: redo all of this with tests and stuff...

var github = require('npm-github-resolve-url')

module.exports = function (pkg, config) {
  config = config || {}
  var registry = config.registry || 'https://registry.npmjs.org'
  var name, version, m
  //pkg
  function mvUrl(name, version) {
    return registry + '/' + name + '/-/' + name + '-' + version + '.tgz'
  }

  if('object' === typeof pkg) {
    if(pkg.tarballUrl) return pkg.tarballUrl
    if(pkg.name && pkg.version)
      return mvUrl(pkg.name, pkg.version)
  }
  //module@version
  else if(m = /^([\w._-]+)@(.*)$/.exec(pkg)) {
    return mvUrl(m[1], m[2])
  }

  //handle multilpe type of github urls,
  //including git urls (which will download from github http download api)
  if(m = github(pkg))
    return m

  //http url
  else if(/(https?:\/\/.+)/.test(pkg)) {
    return pkg
  }
  
  throw new Error('loading modules from format:' + JSON.stringify(pkg) + 'not yet implemented')
}


