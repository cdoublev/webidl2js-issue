
const Bar = require('../lib/Bar.js')

class FooImpl {
    constructor(globalObject) {
        this.globalObject = globalObject
    }
    getAsyncThis() {
        return Promise.resolve(this)
    }
    getAsyncBar() {
        return Promise.resolve(Bar.createImpl(this.globalObject))
    }
}

module.exports = {
    implementation: FooImpl,
}
