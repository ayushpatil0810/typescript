// Example 1: Union Types
// A variable can hold more than one possible type

let subs: number | string = 10;

// Here subs can be either number OR string
subs = "10"; // valid



// Example 2: Literal Union Types

// apiRequestStatus can ONLY be one of these exact values
let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "success"; // valid

// apiRequestStatus = "ayush" ❌
// Error because "ayush" is not part of the allowed literal values



// Example 3: Literal Union Example (Airline Seat)

let airlineSeat: "aisle" | "window" | "middle" = "aisle";

// Only these three values are allowed
airlineSeat = "window"; // valid

// airlineSeat = "front" ❌ invalid



// Example 4: Array of strings

const orders = ["8", "12", "16", "20", "24"];

// TypeScript infers:
// orders: string[]



// Example 5: Variable that may be undefined

let currentorders: string | undefined;

// This means the variable may hold:
// string OR undefined



// Example 6: Searching in an array

for (let order of orders) {

  // Iterate through each value in orders array
  if (order == "20") {

    // When "20" is found we store it
    currentorders = order;

    break; // stop loop once found
  }
}



// If the value was found → currentorders = "20"
// If not found → currentorders stays undefined

console.log(currentorders);