module.exports = expandenv

function expandenv(string, env) {
  if (!string)
    throw new Error('Please pass a string into expandenv')

  env = merge(process.env, (env || {}))

  string = string.replace(/\$[\w]+/g, function(match) {
    return env[match.replace('$', '')] || match
  })
  
  string = string.replace(/%.+?%/g, function(match) {
    return env[match.substr(1, match.length - 2)] || match
  })
  
  string = string.replace(/\$\{.+\}/g, function(match) {
    return env[match.substr(2, match.length - 3)] || match
  })
    
  return string
}

function merge(orig, newObj) {
  var result = new Object(orig)

  Object.keys(newObj).forEach(function(key) {
    if (newObj.hasOwnProperty(key))
      result[key] = newObj[key]
  })

  return result
}
