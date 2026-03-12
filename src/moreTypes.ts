// Example 1: Type assertion using `as`

let response: any = "200"

// We know response is actually a string.
// Type assertion tells TypeScript to treat it as a string.
let numericLength: number = (response as string).length // forceful type assertion

// IMPORTANT:
// `as` does NOT convert the value at runtime.
// It only tells TypeScript what type we believe the value is.



// Example 2: Type assertion with JSON.parse()

type Book = {
    name: string
}

let bookString = '{"name": "Dark Matter"}'

// JSON.parse() returns `any`, so TypeScript does not know the structure.
// We assert that the parsed object follows the Book type.
let bookObject = JSON.parse(bookString) as Book // tell TypeScript this object matches the Book type

console.log(bookObject)



// Example 3: DOM Type Assertion

// getElementById() returns: HTMLElement | null
// But we know the element is an <input>, so we assert it as HTMLInputElement
const inputElements = document.getElementById("username") as HTMLInputElement

// This allows access to input-specific properties like:
// inputElements.value



// Example 4: Using `any` (unsafe)

let value: any

// any disables all TypeScript type checking
value = "ayush"
value = [1, 2, 3]
value = 2.5

// TypeScript will NOT warn here even though value might not be a string
// This can cause runtime errors
value.toUpperCase()



// Example 5: Using `unknown` (safe alternative to any)

let newValue: unknown

// unknown can store any type
newValue = "ayush"
newValue = [1, 2, 3]
newValue = 2.5

// But TypeScript will NOT allow accessing properties directly
// because the type is unknown



// Example 6: Type Guard

// When we want to access properties or call methods,
// we must first check the type using a type guard
if (typeof newValue === "string") {

    // Inside this block TypeScript narrows the type to string
    newValue.toUpperCase()
}



// Example 7: Error handling with unknown errors

try {

} catch (error) {

    // In modern TypeScript, `error` is typed as unknown
    // so we must check its type before accessing properties

    if (error instanceof Error) {
        // Error object has properties like message, stack, name
        console.log(error.message)
    }

    // If it's not an Error object, we still log it
    console.log("Error", error)
}



// Example 8: Type assertion from unknown to specific type

const data: unknown = "my name is ayush"

// We assert that this unknown value is actually a string
const strData: string = data as string // "Trust me TypeScript, this is a string"



// Example 9: Literal Union Types

// Role can ONLY be one of these values
type Role = "admin" | "user"



function redirectBasedOnRole(role: Role): void {
    // void means the function does not return any meaningful value

    if (role == "admin") {
        console.log("Redirecting to admin dashboard")
        return
    }

    // BUG in your code:
    // you used assignment (=) instead of comparison (== or ===)

    if (role === "user") {
        console.log("Redirecting to user dashboard")
        return
    }

    // This line should theoretically never execute
    // because Role only allows "admin" or "user"

    role // type becomes `never` here
}



// Example 10: never type

function neverReturn(): never {

    // `never` means the function NEVER finishes execution
    // It either throws an error or runs forever

    while(true) {}
}