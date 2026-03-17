// -----------------------------
// Basic Class & Constructor
// -----------------------------

class Tea {
  flavour: string;

  // Constructor initializes properties
  constructor(flavour: string) {
    this.flavour = flavour;
    console.log(this);
  }
}

// Object creation
const masalaTea = new Tea("Masala");

// -----------------------------
// Access Modifiers
// -----------------------------

class Chai {
  public flavour: string = "Masala"; // accessible everywhere
  private secretIngredients = "Cardamon"; // only inside class

  // Method to access private property
  reveal() {
    return this.secretIngredients;
  }
}

class Shop {
  protected shopName = "Tea corner"; // accessible in subclasses
}

class Branch extends Shop {
  getName() {
    return this.shopName; // ✅ allowed (protected)
  }
}

// -----------------------------
// Private Fields (# syntax)
// -----------------------------

class Wallet {
  #balance = 100; // truly private (JS level)

  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();
// w.#balance ❌ not accessible outside

// -----------------------------
// Readonly Properties
// -----------------------------

class Cup {
  readonly capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity; // can assign once
  }
}

// const cup = new Cup(250);
// cup.capacity = 300 ❌ not allowed

// -----------------------------
// Getters & Setters (Encapsulation)
// -----------------------------

class ModernTea {
  private _sugar = 2;

  // Getter → access like property
  get sugar() {
    return this._sugar;
  }

  // Setter → control updates
  set sugar(value: number) {
    if (value > 5) throw new Error("Too Sweet");
    this._sugar = value;
  }
}

const c = new ModernTea();
c.sugar = 3; // setter called

// -----------------------------
// Static Properties
// -----------------------------

class OneTea {
  static shopName = "Chaicode cafe"; // belongs to class, not instance

  constructor(public flavour: string) {}
}

// Access without creating object
console.log(OneTea.shopName);

// -----------------------------
// Abstract Classes
// -----------------------------

// Cannot be instantiated directly
abstract class Drink {
  abstract make(): void; // must be implemented
}

class MyTea extends Drink {
  make(): void {
    console.log("Making Tea");
  }
}

// -----------------------------
// Dependency Injection Example
// -----------------------------

class Heater {
  heat() {
    console.log("Heating...");
  }
}

class TeaMaker {
  // Inject dependency via constructor
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat(); // ✅ FIXED (was missing parentheses)
  }
}

const heater = new Heater();
const teaMaker = new TeaMaker(heater);
teaMaker.make();

// -----------------------------
// Summary Notes (Revision)
// -----------------------------

/*
Classes:
- constructor → initialize values

Access Modifiers:
- public → everywhere
- private → only inside class
- protected → class + subclasses

Modern JS Private:
- #property → truly private

readonly:
- assign once (constructor or declaration)

Getters/Setters:
- control access & validation

static:
- belongs to class, not instance

abstract:
- blueprint class, cannot instantiate

Dependency Injection:
- pass dependencies via constructor (clean design)
*/
