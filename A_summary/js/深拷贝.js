function deepClone(target) {
    if (target instanceof RegExp) {
        return new RegExp(target);
    }
    if (target instanceof Date) {
        return new Date();
    }
    if (target === null || typeof target !== 'object') {
        return target
    }
    //这里注意 需要使用构造函数 new一个对象
    //不能直接用{}，因为typeof array === 'object'。
    let rts = new target.constructor();

    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            const element = target[key];
            rts[key] = deepClone2(element);
        }
    }
    return rts;
}