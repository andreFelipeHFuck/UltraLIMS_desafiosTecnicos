import { caixaEletronico } from "../caixaEletronico";

describe('Simulação de Saque em Caixa Eletrônico', () => {
    test('Um saque no valor de 135', () => {
        const input = 135;
        const expected = [
            '1 nota de 100',
            '1 nota de 20',
            '1 nota de 10',
            '1 nota de 5'
        ];
        expect(caixaEletronico(input)).toEqual(expected);
    });

    test('Um saque no valor de 8', () => {
        const input = 8;
        const expected = [
            '1 nota de 5',
            '1 nota de 2',
            '1 moeda de 1'
        ];
        expect(caixaEletronico(input)).toEqual(expected);
    });

    test('Um saque no valor de 877', () => {
        const input = 877;
        const expected = [
            '8 nota de 100',
            '1 nota de 50',
            '1 nota de 20',
            '1 nota de 5',
            '1 nota de 2'
        ];
        expect(caixaEletronico(input)).toEqual(expected);
    });
});