var expandenv = require('../index')

describe('expandenv', function() {
  
  it('should leave strings without environment variables untouched', function() {
    var example = "This is a string"
    expandenv(example).should.match(example)
  })

  describe('Original style', function() {
    it('should expand environment variables in strings', function() {
      var example = "The current working directory is: $PWD"
      expandenv(example).should.match("The current working directory is: " + process.env.PWD)
    })

    it('should let you pass in your own variables', function() {
      var example = 'Hi $PARENT'
      expandenv(example, {PARENT: 'Mom'}).should.match("Hi Mom")
    })
  })

  describe('Windows style (%...%)', function() {
    
    it('should expand environment variables in strings', function() {
      var example = "The current working directory is: %PWD%!"
      expandenv(example).should.match("The current working directory is: " + process.env.PWD + "!")
    })

    it('should let you pass in your own variables', function() {
      var example = 'Hi %PARENT%'
      expandenv(example, {PARENT: 'Mom'}).should.match("Hi Mom")
    })
  })
 
  describe('Unix style (${...})', function() {
    
    it('should expand environment variables in strings', function() {
      var example = "The current working directory is: ${PWD}!"
      expandenv(example).should.match("The current working directory is: " + process.env.PWD + "!")
    })

    it('should let you pass in your own variables', function() {
      var example = 'Hi ${PARENT}'
      expandenv(example, {PARENT: 'Mom'}).should.match("Hi Mom")
    })
  })
  
  // Make sure it works even though we wouldn't expect it to be used this way
  describe('Mixed styles', function() {
    
    it('should expand environment variables in strings with a mix of styles', function() {
      var example = "$PWD%PWD%${PWD}"
      var pwd = process.env.PWD
      expandenv(example).should.match(pwd + pwd + pwd)
    })
  })
})
