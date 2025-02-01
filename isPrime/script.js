function isPrime(number) {
    if (typeof number === "string") {
      return "Invalid argument";
    }
  
    if (typeof number === "number") {
      if (number < 2) {
        return false;
      }
  
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    return "Invalid argument";
  }

  console.log(isPrime(11));
  console.log(isPrime('sfbjgsd'));
  console.log(isPrime(0));
  console.log(isPrime(NaN));
  console.log(isPrime(2));
  console.log(isPrime(3.75));
