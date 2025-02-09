import {geraSubstings, palindromicaMaisLonga, substringsPorTamanho} from '../palindromicaMaisLonga';

describe('Geração de todas as substrings pertencentes as strings', () => {
    test('Todas as substrings de tamanho 1 da palavra abaa', () => {
        const input = 'abaa';
        const expected = ['a', 'b'];
        expect(substringsPorTamanho(input, 1)).toEqual(expected);
    });

    test('A substring com maior tamanho é igual a string', () => {
        const input = 'abaa';
        const expected = ['abaa'];
        expect(substringsPorTamanho(input, 4)).toEqual(expected);
    });

    test('Todas as subtring da string abaa', () => {
        const input = 'abaa';
        const expected = ['a', 'b', 'ab', 'ba', 'aa', 'aba', 'baa', 'abaa'];
        expect(geraSubstings(input)).toEqual(expected);
    });
});

describe('Substring Palindrômica Mais Longa', () => {
    test('Palindrômica da string babad', () => {
        const input = 'babad';
        const expected = 'bab';
        expect(palindromicaMaisLonga(input)).toEqual(expected);
    });

    test('Caso a string seja vazia', () => {
        const input = '';
        const expected = '';
        expect(palindromicaMaisLonga(input)).toEqual(expected);
    });

    test('Caso a string seja uma palindrômica', () => {
        const input = 'bababab';
        const expected = 'bababab';
        expect(palindromicaMaisLonga(input)).toEqual(expected);
    });
});