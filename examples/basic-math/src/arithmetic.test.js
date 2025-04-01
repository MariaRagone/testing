import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {

    it('should add two positive numbers', () => {
        expect(add(2,4)).toBe(6)
});
})
describe('subtract', () => {
    it('should subtract a number from another number', () => {
        expect(subtract(6,3)).toBe(3)
    })
});

describe.todo('multiply', () => {});

describe.todo('divide', () => {});
