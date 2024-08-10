// main.js
/**
 * @param {string} name - O nome da pessoa.
 * @returns {string} Uma saudação personalizada.
 */
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;

if (require.main === module) {
  console.log(greet("World"));
}
