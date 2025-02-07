import { fibonacci } from "../fibonacci";

describe('Sequência de Fibonacci', () => {
    test('Quando a entrada for 0', () => {
        const input = 0;
        const expected = [];
        expect(fibonacci(input)).toEqual(expected)
    });

    test('Quando a entrada for 1', () => {
        const input = 1;
        const expected = [0];
        expect(fibonacci(input)).toEqual(expected);
    });

    test('Quando a entrada for 6', () => {
        const input = 6;
        const expected = [0, 1, 1, 2, 3, 5];
        expect(fibonacci(input)).toEqual(expected);
    });

    test('Quando a entrada for 10', () => {
        const input = 10;
        const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        expect(fibonacci(input)).toEqual(expected);
    });
});
