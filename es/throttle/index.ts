function _throttle(callbackFn: Function, wait: number) {
    callbackFn()
    let startTime = Date.now()

    return function () {
        const now = Date.now()
        if (now - startTime >= wait) {
            callbackFn()
            startTime = now
        }
    }
}
export function throttle(callback: Function, wait: number) {
    let intervalID: number | undefined
    let killInterval: boolean

    return function () {
        killInterval = false
        if (!intervalID) {
            intervalID = setInterval(() => {
                if (killInterval) {
                    clearInterval(intervalID!)
                    intervalID = undefined

                    return
                }
                callback()
                killInterval = true
            }, wait)
        }
    }
}

window.addEventListener(
    'resize',
    throttle(() => {
        console.log(window.innerWidth)
    }, 250)
)
