// -----------------------------
// Define API Data Type
// -----------------------------

// Structure of Todo from API
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// -----------------------------
// Fetch API with TypeScript
// -----------------------------

const fetchData = async (): Promise<void> => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse JSON (typed)
    const data: Todo = await response.json();

    console.log("Todo:", data);
  } catch (error: unknown) {
    // -----------------------------
    // Safe Error Handling
    // -----------------------------

    if (error instanceof Error) {
      console.error("Error fetching data:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

// Call function
fetchData();

// -----------------------------
// Summary Notes (Revision)
// -----------------------------

/*
Fetch + TS:

1. fetch() → does NOT throw on HTTP errors
   → must check response.ok manually

2. response.json() → returns any
   → manually type it (const data: Todo)

3. error: unknown → safest practice

4. instanceof Error → type narrowing

Best Practice:
- Always validate response.ok
- Avoid "any" in catch
*/
