function _new(_constructor, ...args) {
    const context = {}

    _constructor.call(context, ...args)
    Object.setPrototypeOf(context, _constructor.prototype)

    return context
}

function Person(name, gender) {
    this.name = name
    this.gender = gender
}
Person.prototype.greet = function () {
    console.log('Hello ' + this.name)
}

const p1 = _new(Person, 'steven', 'man')
console.log(p1.name)
p1.greet()
