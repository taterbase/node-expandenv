var expandenv = require('../index')

describe('expandenv', function() {

  it('should expand environment variables in strings', function() {
    var example = "The current working directory is: $PWD"
    expandenv(example).should.match("The current working directory is: " + process.env.PWD)
  })

  it('should let you pass in your own variables', function() {
    var example = 'Hi $PARENT'
    expandenv(example, {PARENT: 'Mom'}).should.match("Hi Mom")
  })

})
