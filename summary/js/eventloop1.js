//1 普通异步
console.log(1);
setTimeout(() => {
    console.log(2)
}, 0);
setTimeout(() => {
    console.log(3)
}, 3000);
new Promise((resolve, rejest) => {
    console.log(4)
    setTimeout(() => {
        console.log(5)
    }, 3000);
    resolve(6)
}).then(res => {
    console.log(res)
});
console.log(7)
