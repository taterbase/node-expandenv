module.exports = expandenv

function expandenv(string, env) {
  if (!string)
    throw new Error('Please pass a string into expandenv')

  env = merge(process.env, (env || {}))

  return string.replace(/\${*[\w]+}*/g, function(match) {
    return env[match.replace('$', '').replace("{",'').replace("}",'')] || match
  });
  
}

function merge(orig, newObj) {
  var result = new Object(orig)

  Object.keys(newObj).forEach(function(key) {
    if (newObj.hasOwnProperty(key))
      result[key] = newObj[key]
  })

  return result
}
