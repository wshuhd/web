function _new(fn, ...args) {
    let obj = Object.create(fn.prototype);

    let ins = fn.apply(obj, args);
    //这里之所以需要判断，是因为 构造函数也可以返回一个object。若返回，则用返回的
    return typeof ins === 'object' ? ins : obj
}