import { numerosPerfeitos, divisoresDoNumero } from "../numerosPerfeitos";

describe('Geração da lista de divisores de um número', () => {
    test('Lista de divisores de 6', () => {
        const input = 6;
        const expected = [1, 2, 3];
        expect(divisoresDoNumero(input)).toEqual(expected);
    });

    test('Lista de divisores de 28', () => {
        const input = 28;
        const expected = [1, 2, 4, 7, 14];
        expect(divisoresDoNumero(input)).toEqual(expected);
    });
});


describe('Cálculo de Números Perfeitos', () => {
    test('O números 6 é o primeiro número perfeito', () => {
        const input = 6;
        const expected = true;
        expect(numerosPerfeitos(input)).toEqual(expected);
    });

    test('0 não pertence aos números perfeitos ', () => {
        const input = 0;
        const expected = false;
        expect(numerosPerfeitos(input)).toEqual(expected);
    });

    test('Números negativos não pertencem aos números perfeitos', () => {
        const input = -1;
        const expected = false;
        expect(numerosPerfeitos(input)).toEqual(expected)
    });

    test('Floats não pertencem aos números perfeitos', () => {
        const input = 1.5;
        const expected = false;
        expect(numerosPerfeitos(input)).toEqual(expected);
    });

    test('O números 28 é o segundo número perfeito', () => {
        const input = 28;
        const expected = true;
        expect(numerosPerfeitos(input)).toEqual(expected);
    });

    test('O números 496 é o terceiro número perfeito', () => {
        const input = 496;
        const expected = true;
        expect(numerosPerfeitos(input)).toEqual(expected);
    });

    test('O números 8589869056 é o sexto número perfeito', () => {
        const input = 8_589_869_056;
        const expected = true;
        expect(numerosPerfeitos(input)).toEqual(expected);
    });

});