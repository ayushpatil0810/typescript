function food(kind: string | number) {
    if (typeof kind == "string") {
        return `Making ${food}.`; // string
    }
    return `Food Order: ${kind}`; // number
}

function serveFood(msg?: string) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default Food.`;
}

function orderFood(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `Small food.`;
    }
    if (size === "medium" || size === "large") {
        return `make extra food`;
    }
    return `Food Order SIze: ${size}.`;
}

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

function serve(food: IndianFood | ItalianFood) {
    if (food instanceof IndianFood) {
        return food.serve();
    }
}

type FoodOrder = {
    type: string
    sugar: number
}

function isFoodOrder(obj: any): obj is FoodOrder {
    return (
        typeof obj === "object" && obj !== null && typeof obj.type === "string" && typeof obj.sugar === "number"
    )
}

function serveOrder(item: FoodOrder | string) {
    if (isFoodOrder(item)) {
        return `Serving ${item.type} with ${item.sugar} sugar`
    }
    return `Serving custom food: ${item}`
}

type ChineaseFood = {
    type: "chinease";
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

type Food = ChineaseFood | SpanishFood | MexicanFood

function MakeFood(order: Food) {
    switch (order.type) {
        case "chinease":
            return `Chinese Food`
            break;
        case "mexican":
            return `Mexican Food`
            break;
        case "spanish":
            return `Spanish Food`
            break;
    }
}

function brew(order: ChineaseFood | SpanishFood) {
    if ("spiceLevel" in order) {
        //
    }
}

// function StringArray(arr: unknown): arr is string[] {

// }

// In TypeScript, the primary difference is that any disables all type checking, while unknown is a type-safe alternative that forces developers to narrow the type before performing operations. Think of any as "I don't care about the type," and unknown as "I don't know the type yet, so force me to check".