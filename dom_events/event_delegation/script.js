// 事件传播: capture --- target --- bubble
const treeEl = document.querySelector('.tree');
for (let liEl of treeEl.querySelectorAll('li')) {
    const spanEl = document.createElement('span');
    liEl.prepend(spanEl);
    spanEl.append(spanEl.nextSibling);
}
treeEl.onclick = function (ev) {
    const target = ev.target;
    if (target.tagName !== 'SPAN') {
        return;
    }
    const childrenContainer = target.parentElement.querySelector('ul');
    if (childrenContainer === null) {
        return;
    }
    childrenContainer.hidden = !childrenContainer.hidden;
};
