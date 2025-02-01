function calculate(a, b, operator) {
    // Check if inputs are valid numbers
    if (typeof a !== "number" || typeof b !== "number") {
      return "Invalid arguments";
    }
  
    // Perform operations based on the operator
    switch (operator) {
      case "sum":
        return a + b;
      case "sub":
        return a - b;
      case "mult":
        return a * b;
      case "div":
        if (b === 0) {
          return "Division by zero is not allowed";
        }
        return a / b;
      default:
        return "Invalid arguments";
    }
  }

  console.log(calculate(-5, 3, "sum"));
  
  console.log(calculate(5, 3, "sub"));
  
  console.log(calculate(5, NaN, "mult"));
  
  console.log(calculate(5, 3, "div"));
  
  console.log(calculate(5, 0, "div"));
  
  console.log(calculate(5, "test", "div"));
  
  console.log(calculate(5, 3, "mod"));