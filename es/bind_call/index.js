function greet() {
    console.log(this.name)
}

const user = {
    name: 'steven',
}

greet.bind(user)()

Function.prototype._bind = function (context) {
    const fn = this

    return function () {
        fn._call(context)
    }
}

Function.prototype._call = function (context) {
    context.fn = this
    context.fn()

    delete context.fn
}

greet._bind(user)()
