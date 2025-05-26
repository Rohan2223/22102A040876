import React, { useState, useEffect } from "react";

function Calculator() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const data = [20, 30, 40, 50];
    setArr(data);
  }, []);

  // Factorial function
  const factorial = (n) => {
    if (n < 0) return "Undefined for negative numbers";
    let fact = 1;
    for (let i = 2; i <= n; i++) fact *= i;
    return fact;
  };

  // Prime check function
  const isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };

  // Even number check
  const isEven = (n) => n % 2 === 0;

  // Calculate average of array
  const calculateAverage = () => {
    if (arr.length === 0) {
      setResult("Array is empty");
      return;
    }
    const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
    setResult(`Average of [${arr.join(", ")}] is ${avg}`);
  };

  // Generate Fibonacci sequence up to n terms
  const fibonacci = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  };

  // Event handlers
  const handleFactorial = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("Please enter a valid number");
      return;
    }
    setResult(`Factorial of ${num} is ${factorial(num)}`);
  };

  const handlePrimeCheck = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("Please enter a valid number");
      return;
    }
    setResult(`${num} is ${isPrime(num) ? "a prime number" : "not a prime number"}`);
  };

  const handleEvenCheck = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("Please enter a valid number");
      return;
    }
    setResult(`${num} is ${isEven(num) ? "an even number" : "an odd number"}`);
  };

  const handleFibonacci = () => {
    const num = parseInt(number);
    if (isNaN(num) || num < 1) {
      setResult("Please enter a valid positive number");
      return;
    }
    const fibSeq = fibonacci(num);
    setResult(`First ${num} Fibonacci numbers: ${fibSeq.join(", ")}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <br />
      <button onClick={handleFactorial} style={{ margin: "10px" }}>
        Calculate Factorial
      </button>
      <button onClick={handlePrimeCheck}>Check Prime</button>
      <button onClick={handleEvenCheck}>Check Even</button>
      <button onClick={calculateAverage} style={{ margin: "10px" }}>
        Get Average (Static Array)
      </button>
      <button onClick={handleFibonacci}>Generate Fibonacci</button>
      <h3>{result}</h3>
    </div>
  );
}

export default Calculator;
