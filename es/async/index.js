function useTime(i, cb) {
    setTimeout(cb, 100 * Math.random(), i * 2);
}
const total = 10;
let index = total;
const results = new Array(total);
for (let i = 0; i < total; i++) {
    useTime(i, (result) => {
        results[i] = result;
        index--;
        // if (i === total - 1)
        // 为什么有的数组项为空: 当 i 为 total - 1 时, 其得到(cb 被调用)数据的时间可能
        // 早于其余数据被获取的时间, 比如 ms = 100 * (total - i)
        if (index === 0) {
            while (index !== total) {
                // console.log(index + '->' + results[index])
                index++;
            }
        }
    });
}
// 上述方法需要等到获取到全部数据的时候才能进行处理
// 尽可能快的处理数据, 同时保持相对顺序, 那就做判断, 如果下一顺序的数据到了, 处理它
const results2 = new Array(total);
let nextVisit = 0;
let countTasks = 2;
for (let i = 0; i < total; i++) {
    useTime(i, (result) => {
        results2[i] = result;
        if (results2[nextVisit] !== undefined) {
            // console.log(`第 ${countTasks} 阶段`)
            countTasks++;
            while (results2[nextVisit] !== undefined) {
                // console.log(nextVisit + '->' + results2[nextVisit])
                nextVisit++;
            }
        }
    });
}
// promise
function delay(i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = i * 2;
            resolve(result);
        }, 1000 * Math.random());
    });
}
const requests = new Array(total);
for (let i = 0; i < total; i++) {
    requests[i] = delay(i);
}
Promise.all(requests).then((response) => {
    response.forEach((data, index) => {
        console.log(index, '***', data);
    });
});
