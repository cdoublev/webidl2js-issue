
[Exposed=Window]
interface Foo {
    constructor();
    Promise<Foo> getAsyncThis();
    Promise<Bar> getAsyncBar();
};
