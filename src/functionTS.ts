// -----------------------------
// Basic Function with Parameters
// -----------------------------

// Function that takes tea type and number of cups
function makeTea(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

// Function call
makeTea("Masala", 2);


// -----------------------------
// Function with Return Type
// -----------------------------

// Explicit return type → number
function getTeaPrice(): number {
  return 25;
}

// ❌ This would cause an error because return type must be number
/*
function getTeaPrice(): number {
  return "25 Rupees";
}
*/


// -----------------------------
// Function Returning string | null
// -----------------------------

// If order is empty → return null
function makeOrder(order: string): string | null {
  if (!order) return null;

  return order;
}


// -----------------------------
// Function with void Return Type
// -----------------------------

// void → function does not return anything
function logTea(): void {
  console.log("Tea is Ready");
}


// -----------------------------
// Optional Parameters
// -----------------------------

// Parameter may or may not be passed
/*
function orderTea(type?: string) {
  console.log(type);
}
*/


// -----------------------------
// Default Parameters
// -----------------------------

// If no value is provided → default "Masala"
function orderTea(type: string = "Masala") {
  console.log(`Ordering ${type} tea`);
}


// -----------------------------
// Function with Object Parameter
// -----------------------------

// Function expecting an object with specific structure
function createTea(order: {
  type: string;
  sugar: number;
  size: "small" | "large"; // union type
}): number {
  console.log(order);

  return 4; // maybe preparation time
}


// Example call
createTea({
  type: "Ginger",
  sugar: 2,
  size: "large",
});