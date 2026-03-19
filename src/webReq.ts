// -----------------------------
// Axios + TypeScript Example
// -----------------------------

import axios from "axios";
import type { AxiosResponse } from "axios";


// -----------------------------
// Define API Data Type
// -----------------------------

// Structure of Todo coming from API
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


// -----------------------------
// Async Function with Generics
// -----------------------------

const fetchData = async (): Promise<void> => {
  try {
    // AxiosResponse<T> ensures response.data is strongly typed
    const response: AxiosResponse<Todo> = await axios.get<Todo>(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log("Todo:", response.data);

  } catch (error: unknown) {

    // -----------------------------
    // Proper Error Handling
    // -----------------------------

    // Check if error is AxiosError
    if (axios.isAxiosError(error)) {
      console.log("Axios Error:", error.message);

      // Check if response exists
      if (error.response) {
        console.log("Status Code:", error.response.status);
      }

    } else {
      // Non-Axios errors
      console.log("Unexpected Error:", error);
    }
  }
};


// Call function
fetchData();


// -----------------------------
// Summary Notes (Revision)
// -----------------------------

/*
Axios + TS:

1. axios.get<T>() → defines response.data type
2. AxiosResponse<T> → full response type
3. error: unknown → safest error type
4. axios.isAxiosError(error) → type narrowing

Best Practices:
- Avoid "any" in catch
- Always check error type before accessing properties
*/