const fibonacci = (n) => {
    const res = [];

    let init = 0;
    let prev = 1;
    let sum = 0;


    for (let i = 0; i < n; i++) {
        res.push(init);
        sum = init + prev;

        init =prev;
        prev = sum;
    }

    return res;
}

console.log(fibonacci(10))

export { fibonacci }