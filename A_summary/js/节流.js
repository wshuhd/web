function throttle(fn, timeout) {
    let timer = null;
    if (timer) return;
    return function () {
        let args = arguments
        timer = setTimeout(() => {
            fn.apply(this, args)
            timer = null;
        }, timeout);
    }
}

//*******以下为示例******** */
function globalFn() {
    this.name = '外部';

    let newfn = throttle(fn, 1000);
    setTimeout(() => {
        newfn(1, 23, 34);
    }, 200);
}


function fn(a1,a2,a3) {
    console.log(this.name);
    console.log(a1,a2,a3,'there is arguments')
}

globalFn()