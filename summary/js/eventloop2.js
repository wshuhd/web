//2 asyn await
console.log(1)
async function A() {
    console.log(2)
    await B()
    console.log(3)
}
async function B() {
    console.log(4)
}
A()
new Promise(function (resolve) {
    console.log(5)
    resolve()
}).then(res => console.log(6))

//这里的A() 等价于
// new Promise(resolve1 => {
//     console.log(2);
//     new Promise((resolve2) => {
//         console.log(4);
//         resolve2();
//     }).then(val => {
//         console.log(3)
//     })
// });
