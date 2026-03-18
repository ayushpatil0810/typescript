// -----------------------------
// Generic Function
// -----------------------------

// Wraps any value into an array of same type
function wrapInArray<T>(item: T): T[] {
  return [item];
}

// Type is inferred automatically
wrapInArray("Hello"); // ["Hello"]
wrapInArray(95); // [95]
wrapInArray({ name: "Alice", age: 30 });
// [{ name: "Alice", age: 30 }]


// -----------------------------
// Multiple Generic Types
// -----------------------------

// Function returning a tuple of two different types
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("Hello", "World"); // [string, string]
pair("Hello", { name: "Alice", age: 30 }); // [string, object]


// -----------------------------
// Generic Interface
// -----------------------------

// Box can hold any type of content
interface Box<T> {
  content: T;
}

// Using Box with different types
const numberBox: Box<number> = { content: 42 };
const stringBox: Box<string> = { content: "10" };


// -----------------------------
// Generic API Response Pattern
// -----------------------------

// Generic API response structure
interface ApiResponse<T> {
  status: number;
  data: T;
}

// Using generic with object type
const res: ApiResponse<{ flavour: string }> = {
  status: 200,
  data: { flavour: "Masala" },
};


// -----------------------------
// Summary Notes (Revision)
// -----------------------------

/*
Generics:
- <T> → placeholder type
- Makes code reusable & type-safe

Patterns:
- T → single type
- <A, B> → multiple types

Use Cases:
- Functions (wrap, pair)
- Interfaces (Box<T>)
- API responses (ApiResponse<T>)

Type Inference:
- TypeScript usually infers T automatically
*/