function delay(cb, ms) {
    setTimeout(() => {
        cb()
    }, ms)
}

class User {
    constructor(username) {
        this.name = username
    }

    sayHi = () => {
        console.log('Hello ' + this.name)
    }

    sayHi2() {
        console.log('Hello ' + this.name)
    }
}

const peter = new User('peter')

// delay(peter.sayHi, 1000)
delay(peter.sayHi2, 2000)

/**
 * 以前搜索 箭头函数的 this 为什么会有效果, 得到的答案总是: 箭头函数没有 this
 * 只给出结论, 没有为什么, 下面是我的 ‘为什么’
 *
 * 执行上下文, 箭头函数 2022/01/30 (虽然已经查阅并且学习了相关资料, 但还是无法保证理解正确)
 *
 * setTimeout 会进入事件队列
 * 每一次事件循环都是从宏任务开始, 且每一次只执行一个宏任务
 * 程序运行时 this 的值会根据执行上下文发生变化, 其值为某个执行上下文或者 undefined(strict mode)
 *
 * 可以把上下文想象成一颗 n 叉树
 * 每次执行函数会回到函数所在的上下文, 也就是树中的某个节点
 * 从这个节点开始寻找需要的变量, 如果没有就去寻找父节点, 直到根节点
 * 不会去兄弟节点或者后代节点中寻找
 *
 * 在上述事例中, 为什么箭头函数可以找到 this.name?
 * 箭头函数的 this 会与‘父节点’绑定, 其本身无 this
 * 而函数的执行上下文为 global, this 的值为 undefined
 */
