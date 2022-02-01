
const BarWrapper = require('./lib/Bar.js')
const FooWrapper = require('./lib/Foo.js')

const window = { Array, Object, Number, String, TypeError }

BarWrapper.install(window, ['Window'])
FooWrapper.install(window, ['Window'])

const foo = FooWrapper.create(window)

foo.getAsyncThis().then(res => {
    console.log('Does Foo.getAsyncThis() returns an instance of the implementation of Foo?', FooWrapper.isImpl(res))
    console.log('Does Foo.getAsyncThis() returns an instance of the wrapper of Foo?', FooWrapper.is(res))
})
foo.getAsyncBar().then(res => {
    console.log('Does Foo.getAsyncBar() returns an instance of the implementation of Bar?', BarWrapper.isImpl(res))
    console.log('Does Foo.getAsyncBar() returns an instance of the wrapper of Bar?', BarWrapper.is(res))
})
