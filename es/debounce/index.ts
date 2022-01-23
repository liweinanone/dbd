function debounce(callbackFn: Function, wait: number) {
    let timerId: number

    return function () {
        // if (!timerId) {
        //     callbackFn(i)
        // }

        clearTimeout(timerId)
        timerId = setTimeout(callbackFn, wait)
    }
}

const click = debounce(() => {
    console.log(Date.now() - startTime) // about 1100
}, 1000)
const startTime = Date.now()

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        click()
    }, 100)
}
