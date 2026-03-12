// Example 1: Type Inference
// TypeScript automatically determines the type based on the assigned value

let car = "hyundai";

// Here TypeScript infers:
// car: string
// Because the assigned value is a string



// Example 2: Inference with expressions

let cups = Math.random() > 0.5 ? 10 : 5;

// TypeScript looks at both possible values (10 and 5)
// Both are numbers, so it infers:

// cups: number



// Example 3: Type Annotation
// Explicitly telling TypeScript what the type should be

let name: string = "Ayush";

// Here we manually specify the type using `: string`

name = "MyName"; // allowed because it's still a string



// If we try assigning a different type, TypeScript will throw an error

// name = 10 ❌
// Error: Type 'number' is not assignable to type 'string'