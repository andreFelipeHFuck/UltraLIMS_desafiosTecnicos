const substringsPorTamanho = (word, sliceLength) => {
    const res = new Set();

    let slice;
    let sliceCont = sliceLength;
    let cont = 0;

    while (true) {
        slice = word.slice(cont, sliceCont);

        if(slice.length === sliceLength)
            res.add(slice);
        else
            break;

        cont++;
        sliceCont++;
    }

    return Array.from(res);
}

const geraSubstings = (word) => {
    let res = [];

    for (let i = 1; i <= word.length; i++) {
        res = res.concat(substringsPorTamanho(word, i));
    }

    return res;
}

const reverse = (word) => {
    return word.split('')
                .reverse()
                .join('');
}

const palindromicaMaisLonga = (word) => {
    return geraSubstings(word)
            .filter((w) => w === reverse(w))
            .reduce((max, w) => w.length > max.length ? w : max, '');
}

export { 
    palindromicaMaisLonga,
    geraSubstings,
    substringsPorTamanho
};