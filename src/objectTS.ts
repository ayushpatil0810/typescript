// -----------------------------
// Basic Object Type Annotation
// -----------------------------

// Simple object
const Food = {
  name: "Indian",
  price: 1000,
  isHot: true,
};

// Explicit object type definition
let food: {
  name: string;
  price: number;
  isHot: boolean;
};

food = {
  name: "Italian",
  price: 500,
  isHot: false,
};


// -----------------------------
// Using Type Alias for Objects
// -----------------------------

// Reusable type definition
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const GingerTea: Tea = {
  name: "Ginger Tea",
  price: 15,
  ingredients: ["Ginger", "Milk", "Tea Leaves"],
};


// -----------------------------
// Duck Typing in TypeScript
// -----------------------------
// If an object has at least the required properties,
// it can be assigned to that type.

type Cup = {
  size: string;
};

let smallCup: Cup = {
  size: "200ml",
};

// Extra properties are allowed
let bigCup = {
  size: "500ml",
  material: "steel",
};

// Works because "size" exists
smallCup = bigCup;


// -----------------------------
// Another Duck Typing Example
// -----------------------------

type Brew = {
  brewTime: number;
};

const coffee = {
  brewTime: 5,
  beans: "Arabica",
};

// Valid because brewTime exists
const teaBrew: Brew = coffee;


// -----------------------------
// Basic User Type
// -----------------------------

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "ayush",
  password: "123",
};


// -----------------------------
// Splitting Types for Better Design
// -----------------------------

// Item inside an order
type Item = {
  name: string;
  quantity: number;
};

// Delivery address
type Address = {
  street: string;
  pin: number;
};

// Order structure
type Order = {
  id: string;
  items: Item[];
  address: Address;
};


// -----------------------------
// Utility Type: Partial
// -----------------------------
// Makes all properties optional

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("Updating Chai With", updates);
};

// Only price is updated
updateChai({ price: 25 });


// -----------------------------
// Utility Type: Required
// -----------------------------
// Makes all optional properties required

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

// Must provide both properties
placeOrder({ name: "Masala Chai", quantity: 2 });


// -----------------------------
// Utility Type: Pick
// -----------------------------
// Select specific properties from a type

type Coffee = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

// Only pick name and price
type BasicCoffeeInfo = Pick<Coffee, "name" | "price">;

const chaiInfo: BasicCoffeeInfo = {
  name: "Black Coffee",
  price: 30,
};


// -----------------------------
// Utility Type: Omit
// -----------------------------
// Remove specific properties from a type

type NewChai = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

// Public version without secret ingredients
type PublicChai = Omit<NewChai, "secretIngredients">;

const publicChai: PublicChai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};