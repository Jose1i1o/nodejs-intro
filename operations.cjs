const multiply = (a, b) => {
  console.log(__dirname, __filename) // Con common js podemos acceder a estos métodos
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}

// cualquier export se denomina named export o exportación nombrada
module.exports = {
  multiply: multiply,
  divide: divide
}