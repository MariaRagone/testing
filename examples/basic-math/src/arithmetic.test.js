import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {
    
    it('should add two positive numbers', () => {
        expect(add(2,4)).toBe(6)

    });
    it('should parse strings into numbers', () => {
        expect(add("1","1")).toBe(2) 
    });

    it('should yell at you if the second argument is a word', () => {
        expect(() =>(add(2, "potato"))).toThrow('Please input numbers') 
    });

    it('should yell at you if the first argument is a word', () => {
        expect(() =>(add("potato", 2))).toThrow() 
    });
})

describe('subtract', () => {
    it('should subtract a number from another number', () => {
        expect(subtract(6,3)).toBe(3)
    })
});

describe('multiply', () => {
    it('should multiply two numbers', () => {
        expect(multiply(3,5)).toBe(15)
    })
});

describe('divide', () => {
    it('should divide two numbers', () => {
        expect(divide(10,5)).toBe(2)
    })
});
