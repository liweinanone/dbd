function xss_rpc_call2(n, callback) {
    var callbackName = 'xss_rpc_callback' + n + Math.round(Math.random() * 100000)
    var url = 'https://coolshell.cn/t.php?n=' + n + '&callback=' + callbackName
    xss_ajax(url)
    window[callbackName] = function (result) {
        var timeout = Math.round(Math.random() * 1000)
        callback &&
            setTimeout(function () {
                callback(result)
            }, timeout)
    }
}

const results = new Array()
let index = 1
function cb_arrange(x) {
    return (result) => {
        results[x] = result
        if (x == 1 || results[x - 1] !== undefined) {
            if (x === index) {
                while (results[index] !== undefined) {
                    console.log(`${index} -> ${results[index]}`)
                    index++
                }
            }
        }
    }
}

for (let i = 1; i <= 30; i++) {
    xxx_rpc_call(i, cb_arrange(i))
}
