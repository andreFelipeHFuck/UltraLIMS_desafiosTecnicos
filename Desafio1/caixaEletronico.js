const caixaEletronico = (value) => {
    const notes = [100, 50, 20, 10, 5, 2, 1];
    const res = [];

    let rest = value;
    let num = 0;

    for (const n of notes) {
        if (rest === 0) break;

        num = Math.floor(rest / n);
        rest = rest % n;

        if(num > 0){
            if(n !== 1)
                res.push(`${num} nota de ${n}`);
            else
                res.push(`${num} moeda de 1`);
        }
    }

    return res;
}

export { caixaEletronico }