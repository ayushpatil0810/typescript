// Example 1: Union Types + Type Narrowing using typeof

function food(kind: string | number) {

    // `kind` can be either string or number
    // We use typeof to narrow the type

    if (typeof kind == "string") {

        // Inside this block TypeScript knows `kind` is string
        return `Making ${kind}.`; // string case
    }

    // Here TypeScript knows `kind` is number
    return `Food Order: ${kind}`; // number case
}



// Example 2: Optional Parameters

function serveFood(msg?: string) {

    // `msg?` means the parameter is optional
    // msg type becomes: string | undefined

    if (msg) {
        return `Serving ${msg}`;
    }

    // If msg is undefined
    return `Serving default Food.`;
}



// Example 3: Literal Types + Union Types

function orderFood(size: "small" | "medium" | "large" | number) {

    // Here size can be:
    // "small" | "medium" | "large" | any number

    if (size === "small") {
        return `Small food.`;
    }

    // Multiple conditions
    if (size === "medium" || size === "large") {
        return `make extra food`;
    }

    // If size is a number
    return `Food Order Size: ${size}.`;
}



// Example 4: Classes + instanceof Type Guard

class IndianFood {

    serve() {
        return `Serving Indian Food`
    }

}

class ItalianFood {

    serve() {
        return `Serving Italian Food`
    }

}



// `food` can be instance of either class
function serve(food: IndianFood | ItalianFood) {

    // instanceof checks class type at runtime
    if (food instanceof IndianFood) {

        // TypeScript now knows food is IndianFood
        return food.serve();
    }

    // NOTE:
    // If it's ItalianFood, function currently returns undefined
    // Better practice would be handling both cases
}



// Example 5: Custom Object Type

type FoodOrder = {
    type: string
    sugar: number
}



// Example 6: Custom Type Guard

function isFoodOrder(obj: any): obj is FoodOrder {

    // This function checks if obj matches the FoodOrder structure

    return (
        typeof obj === "object" && // must be object
        obj !== null &&            // cannot be null
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )

    // `obj is FoodOrder` tells TypeScript that if this returns true,
    // then obj should be treated as FoodOrder
}



// Example 7: Using Custom Type Guard

function serveOrder(item: FoodOrder | string) {

    // If item is FoodOrder object
    if (isFoodOrder(item)) {

        // TypeScript now treats item as FoodOrder
        return `Serving ${item.type} with ${item.sugar} sugar`
    }

    // Otherwise it's a string
    return `Serving custom food: ${item}`
}



// Example 8: Discriminated Union

type ChineaseFood = {
    type: "chinease"; // discriminator property
    spiceLevel: number
}

type SpanishFood = {
    type: "spanish";
    spiceLevel: number
}

type MexicanFood = {
    type: "mexican";
    spiceLevel: number
}



// Union of all food types
type Food = ChineaseFood | SpanishFood | MexicanFood



// Example 9: Exhaustive checking using discriminated unions

function MakeFood(order: Food) {

    // Switch based on the discriminator field: "type"
    switch (order.type) {

        case "chinease":
            return `Chinese Food`

        case "mexican":
            return `Mexican Food`

        case "spanish":
            return `Spanish Food`
    }

    // If a new food type is added later,
    // TypeScript can help detect missing cases
}



// Example 10: Property existence check using `in`

function brew(order: ChineaseFood | SpanishFood) {

    // "in" checks if a property exists in the object
    if ("spiceLevel" in order) {

        // Both types actually have spiceLevel
        // So this condition is always true
    }
}



// Example 11: Custom Type Guard for Arrays (commented example)

// function StringArray(arr: unknown): arr is string[] {

//     // Would check if arr is array and all elements are strings
// }



// Concept Note:
//
// In TypeScript:
//
// any
// → disables type checking completely
//
// unknown
// → forces you to narrow the type before using it
//
// Think of:
//
// any      = "I don't care about the type"
// unknown  = "I don't know the type yet, so check first"