 //GENERATORS
    
 function* numberGenerator() {
    yield 1;
      yield 2;
      yield 3;
      yield 4;
      return 5;
  }
  const gen = numberGenerator();
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3
  console.log(gen.next().value); // 4
  console.log(gen.next().value); // 5

/////////////////////////////////

function* infiniteCounter() {
    let i = 1
    while (true) {
        yield i++
    }
  }
  const gen1 = infiniteCounter();
  for(const i of gen1){
    if(i > 10) break;
    console.log(i);
}

  ///////////////

  function* rangeGenerator(start, end) {
    let i = start
    while (i <= end) {
        yield i++
    }
  }
  const gen = rangeGenerator(5, 10);
  console.log(gen.next().value); // 5
  console.log(gen.next().value); // 6

  ////////////////////////////////////

  function* calculator() {
    const num1 = yield;
    const operator = yield;
    const num2 = yield;
    switch (operator) {
      case '+': yield num1 + num2;
      case '-': yield num1 - num2;
      case '*': yield num1 * num2;
      case '/': yield num1 / num2;
      // Add more operations as needed
    }
  }
  const calc = calculator();
  calc.next(); // Start the generator
  console.log(calc.next(10).value); // Provide num1
  console.log(calc.next('-').value); // Provide operator
  console.log(calc.next(5).value); // Provide num2 and get result

  //////////////////////////////////////////