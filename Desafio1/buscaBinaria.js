const buscaBinaria = (list, val) => {
    let init = 0;
    let end = list.length - 1;
    let m;

    while(init <= end) {
        m = Math.floor((init + end) / 2);

        if(list[m] < val)
            init = m + 1;
        else if(list[m] > val)
            end = m - 1;
        else
            return m;
    }

    return -1;
}

export { buscaBinaria };