
/**
 * let声明的变量只在其声明的块或子块中可用，这一点，与var相似。
 * 二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数。
 * 在程序和方法的最顶端，let不像 var 一样，let不会在全局对象里新建一个属性
 */

function setupHelp() {
    var helpText = [
        { 'id': 'email', 'help': 'Your e-mail address' },
        { 'id': 'name', 'help': 'Your full name' },
        { 'id': 'age', 'help': 'Your age (you must be over 16)' }
    ];
    let rst = []
    for (var i = 0; i < helpText.length; i++) {
        let item = helpText[i];
        rst.push(function () {
            console.log(item.id)
        })
    }
    return rst;
}

let rst = setupHelp();
rst[0]();
rst[1]();
rst[2]();

/*这里 三个闭包函数 共同引用了item变量。如果使用了var 声明 item，则变量会进行提升。每次引用的都是同一个item。
* 使用let则不会，因为let声明的是块级作用域，每次执行的块都是不同的引用
*/


//这个例子也是同理 对i 的声明使用let和var 会有不同的结果
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}