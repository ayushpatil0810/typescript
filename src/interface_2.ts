// -----------------------------
// Basic Interface
// -----------------------------

// Defines structure of Tea object
interface Tea {
  flavour: string;
  price: number;
}

const masalaTea: Tea = {
  flavour: "Masala",
  price: 30,
};

// -----------------------------
// Readonly Property in Interface
// -----------------------------

interface Shop {
  readonly id: number; // cannot be modified after initialization
  name: string;
}

const s: Shop = { id: 1, name: "Chaicode cafe" };

// s.id = 2; ❌ Error: readonly

// -----------------------------
// Function Type Interface
// -----------------------------

// Interface describing a function shape
interface DiscountCalculator {
  (price: number): number;
}

// Function matching the interface
const apply50: DiscountCalculator = (price) => price * 0.5;

// -----------------------------
// Method Interface (Object with Functions)
// -----------------------------

interface TeaMachine {
  start(): void;
  stop(): void;
}

// Object implementing the interface
const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

// -----------------------------
// Index Signature
// -----------------------------
// Allows dynamic keys with fixed value type

interface TeaRating {
  [flavour: string]: number;
}

const rating: TeaRating = {
  masala: 4.5,
  ginger: 4.5,
};

// -----------------------------
// Interface Merging (Important)
// -----------------------------
// Same interface name → automatically merged

interface User {
  age: number;
}

interface User {
  name: string;
}

// Final type: { name: string; age: number }

const user: User = {
  name: "Ayush",
  age: 19,
};

// -----------------------------
// Interface Inheritance
// -----------------------------

interface A {
  a: string;
}

interface B {
  b: string;
}

// C inherits both A and B
interface C extends A, B {}

const obj: C = {
  a: "hello",
  b: "world",
};

// -----------------------------
// Generics (Very Important)
// -----------------------------

// Generic function → works with any type
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10);
const str = identity<string>("Tea");

// Generic Interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 100 };
const stringBox: Box<string> = { value: "Masala" };

// -----------------------------
// Summary Notes (Revision)
// -----------------------------

/*
Interfaces:
- Define object structure
- Can include readonly properties
- Can define function shapes
- Can define methods

Special Features:
- Index Signature → dynamic keys
- Interface Merging → auto merge same names
- extends → inheritance
*/
