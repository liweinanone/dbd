function useTime(i, cb) {
    setTimeout(cb, 100 * Math.random(), i * 2);
}
var total = 10;
var index = total;
var results = new Array(total);
var _loop_1 = function (i) {
    useTime(i, function (result) {
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
};
for (var i = 0; i < total; i++) {
    _loop_1(i);
}
// 上述方法需要等到获取到全部数据的时候才能进行处理
// 尽可能快的处理数据, 同时保持相对顺序, 那就做判断, 如果下一顺序的数据到了, 处理它
var results2 = new Array(total);
var nextVisit = 0;
var countTasks = 2;
var _loop_2 = function (i) {
    useTime(i, function (result) {
        results2[i] = result;
        if (results2[nextVisit] !== undefined) {
            console.log("\u7B2C ".concat(countTasks, " \u9636\u6BB5"));
            countTasks++;
            // 如果这里是 results2[nextVisit], 那啥都不会 log, 真 tm 奇怪
            // while (results2[nextVisit]) {
            while (results2[nextVisit] !== undefined) {
                console.log(nextVisit + '->' + results2[nextVisit]);
                nextVisit++;
            }
        }
    });
};
for (var i = 0; i < total; i++) {
    _loop_2(i);
}
