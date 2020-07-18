function debounce(fn, timeout) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        let args = arguments;
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, timeout);
    }
}

