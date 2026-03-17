// -----------------------------
// Arrays in TypeScript
// -----------------------------

// Basic array types
const teaFlavours: string[] = ["Masala", "Ginger"];
const teaPrice: number[] = [10, 20];

// Generic array syntax
const rating: Array<number> = [4.5, 5.0];


// -----------------------------
// Array of Objects
// -----------------------------

type Tea = {
  name: string;
  price: number;
};

// Array containing Tea objects
const menu: Tea[] = [
  { name: "Masala", price: 10 },
  { name: "Ginger", price: 20 },
];


// -----------------------------
// Readonly Arrays
// -----------------------------

// Cannot modify (push, pop, etc.)
const cities: readonly string[] = ["Pune", "Nashik"];

// cities.push("Mumbai"); ❌ Error


// -----------------------------
// Multidimensional Arrays
// -----------------------------

// 2D array (matrix)
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];


// -----------------------------
// Tuples
// -----------------------------

// Fixed-length array with fixed types
let teaTuple: [string, number];
teaTuple = ["Masala", 20];

// Optional element in tuple
let userInfo: [string, number, boolean?];
userInfo = ["ayush", 100];
userInfo = ["ayush", 100, true];

// Readonly tuple
const location: readonly [number, number] = [26.32, 45.39];

// Named tuple (better readability)
const teaItems: [name: string, price: number] = ["Masala", 25];


// -----------------------------
// Important Tuple Behavior ⚠️
// -----------------------------

// Tuple is still an array internally
let t: [string, number] = ["tea", 10];

// TypeScript allows push (not strictly safe)
t.push("extra"); // ⚠️ allowed, but breaks tuple structure


// -----------------------------
// Enums
// -----------------------------

// Numeric enum (default starts from 0)
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE; // 2


// Enum with custom starting value
enum Status {
  PENDING = 100,
  SERVED,      // 101
  CANCELLED,   // 102
}


// String enum (more readable in real apps)
enum TeaType {
  MASALA = "masala",
  GINGER = "ginger",
}

// Function using enum
function makeTea(type: TeaType) {
  console.log(`Making: ${type}`);
}

makeTea(TeaType.GINGER);


// Mixed enum (not recommended in real projects)
enum RandomEnum {
  ID = 1,
  NAME = "ayush",
}


// -----------------------------
// Const Enum (Optimized)
// -----------------------------

// Removed during compilation → better performance
const enum Sugar {
  LOW = 1,
  MEDIUM = 2,
  LARGE = 3,
}

const s = Sugar.MEDIUM;


// -----------------------------
// Summary Notes (Revision)
// -----------------------------

/*
Arrays:
- string[], number[]
- Array<T>
- readonly prevents mutation

Tuples:
- Fixed structure
- Optional elements allowed
- Named tuples improve readability
- ⚠️ Still arrays internally (push allowed)

Enums:
- Numeric (default)
- Custom values
- String enums (recommended)
- const enum → optimized (removed at compile time)
*/