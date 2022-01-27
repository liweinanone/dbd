function debounce(callbackFn: Function, wait: number) {
    let timeoutId: number

    return function () {
        // if (!timeoutId) {
        //     callbackFn(i)
        // }

        clearTimeout(timeoutId)
        timeoutId = setTimeout(callbackFn, wait)
    }
}

const click = debounce(() => {
    console.log(Date.now() - startTime) // about 1100
}, 1000)
const startTime = Date.now()

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        click()
    }, Math.floor(Math.random() * 100))
}
