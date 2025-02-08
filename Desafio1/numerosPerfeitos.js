
const divisoresDoNumero = (num) => {
    const res = [];

    for (let i = 1; i < num; i++) {
        if(num % i === 0)
            res.push(i);        
    }

    return res;
}

const numerosPerfeitos = (num) => {
    if(num > 0 && Number.isInteger(num)) {
        const sumDivisors = divisoresDoNumero(num)
                                .reduce((acc, val) => acc + val, 0);
        
        return sumDivisors === num;
    }
        
    return false;
}

// const num = 8_589_869_056;
// console.log(numerosPerfeitos(num));

export { 
    numerosPerfeitos,
    divisoresDoNumero
};