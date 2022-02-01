
const WebIDL2JS = require('webidl2js')

const transformer = new WebIDL2JS({ implSuffix: '-impl' })

transformer.addSource('src', 'src')
transformer.generate('lib')
