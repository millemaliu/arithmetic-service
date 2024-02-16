const { add, subtract, divide, multiply } = require("../arithmetica")


test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
    });
    

test('1 + 7 is equal to 7', () => {
    expect(add(1, 7)).toBe(8);
    });
    

test('7 - 1 is equal to 6', () => {
    expect(subtract(7, 1)).toBe(6);
    });
    

test('2 * 3 is equal to 6', () => {
    expect(multiply(2, 3)).toBe(6);
    });
    

test('6 / 3 is equal to 2', () => {
    expect(divide(6, 3)).toBe(2);
    });
    
    
    
