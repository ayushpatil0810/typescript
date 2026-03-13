// -----------------------------
// Basic Type Definition
// -----------------------------

// Describes a tea order structure
type TeaOrder = {
  type: string; // type of tea (masala, ginger, etc.)
  sugar: number; // number of sugar spoons
  strong: boolean; // whether tea should be strong
};

// Function accepting a TeaOrder object
function makeTea(order: TeaOrder) {
  console.log(order);
}

// Another function using the same type
function serveTea(order: TeaOrder) {
  console.log(order);
}

// -----------------------------
// Class implementing a Type (Shape enforcement)
// -----------------------------

// Defines the recipe structure for tea
type TeaRecipe = {
  water: number;
  milk: number;
};

// Class must include all properties from TeaRecipe
class MasalaTea implements TeaRecipe {
  water = 50;
  milk = 100;
}

// -----------------------------
// Interface Implementation
// -----------------------------

// Interface describing cup size options
interface CupSize {
  size: "small" | "large"; // union literal type
}

// Class implementing the interface
class Tea implements CupSize {
  size: "small" | "large" = "large";
}

// -----------------------------
// Union Type Example
// -----------------------------

// Union type → value must be one of these options
type TeaType = "masala" | "ginger" | "lemon";

function orderTea(tea: TeaType) {
  console.log(tea);
}

// -----------------------------
// Intersection Type Example
// -----------------------------

// Base properties
type BaseTea = {
  teaLeaves: number;
};

// Extra properties
type Extra = {
  masala: number;
};

// Intersection → combines both types
type MasalaChai = BaseTea & Extra;

const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

// -----------------------------
// Optional Properties
// -----------------------------

type User = {
  username: string;
  bio?: string; // optional property
};

const u1: User = {
  username: "ayush", // bio not required
};

const u2: User = {
  username: "ayush",
  bio: "ayushpatil.in",
};

// -----------------------------
// Readonly Properties
// -----------------------------

type Config = {
  readonly appName: string; // cannot be reassigned after initialization
  version: number;
};

const cfg: Config = {
  appName: "Ayush", // must be set at creation
  version: 1,
};

// cfg.appName = "New App Name"; ❌ Error: Cannot assign to readonly property

// -----------------------------
// Union Object Type Issue (Important)
// -----------------------------

// Union of two possible response shapes
type Response = { ok: true } | { ok: false };

// ❌ Classes cannot correctly implement union types
// because the class would need to satisfy BOTH possibilities

/*
class MyResponse implements Response {
  ok: boolean = true; // ❌ Not allowed
}
*/

// Instead use an object:
const res: Response = { ok: true };
