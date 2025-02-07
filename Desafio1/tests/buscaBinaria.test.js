import { buscaBinaria } from "../buscaBinaria";

describe('Busca Binária', () => {
    test('Valor no meio da lista', () => {
        const list = [1, 3, 4, 6, 8, 9, 11];
        expect(buscaBinaria(list, 6)).toEqual(3);
    });

    test('Valor no começo da lista', () => {
        const list = [1, 3, 4, 6, 8, 9, 11];
        expect(buscaBinaria(list, 1)).toEqual(0);
    });

    test('Valor no final da lista', () => {
        const list = [1, 3, 4, 6, 8, 9, 11];
        expect(buscaBinaria(list, 11)).toEqual(6);
    });

    test('Busca de um valor em uma lista de comprimento ímpar', () => {
        const list = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 634];
        expect(buscaBinaria(list, 144)).toEqual(9);
    });

    test('Busca de um valor em uma lista de comprimento par', () => {
        const list = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
        expect(buscaBinaria(list, 21)).toEqual(5);
    })

    test('Valor não está presente na lista', () => {
        const list = [1, 3, 4, 6, 8, 9, 11];
        expect(buscaBinaria(list, 7)).toEqual(-1);
    });
});