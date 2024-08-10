// __tests__/main.test.js
const greet = require('../main');

test('greet function', () => {
    expect(greet("World")).toBe("Hello, World!");
    expect(greet("Alice")).toBe("Hello, Alice!");
});
