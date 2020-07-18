class Promise {
    static all(list) {
        return new Promise((resolve, reject) => {
            let rst = []
            list.forEach((promiseItme, i) => {
                promiseItme.then(val => {
                    //这里注意不能使用push，保证有序
                    rst[i] = val;
                    if (rst.length === list.length) {
                        resolve(rst);
                    }
                }, err => {
                    reject(err);
                })
            });
        })
    }
}