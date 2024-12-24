In TypeScript, each of these types or concepts plays a specific role in defining the structure and behavior of data in your application. Here's a brief overview of how they work:

---

### **1. Number**
- Represents numeric values, including integers and floating-point numbers.
- Example:
  ```typescript
  let age: number = 25;
  let pi: number = 3.14;
  ```

---

### **2. String**
- Represents textual data.
- Example:
  ```typescript
  let name: string = "John Doe";
  let greeting: string = `Hello, ${name}`;
  ```

---

### **3. Boolean**
- Represents `true` or `false`.
- Example:
  ```typescript
  let isActive: boolean = true;
  let isCompleted: boolean = false;
  ```

---

### **4. Null**
- Represents the intentional absence of any object value.
- Example:
  ```typescript
  let data: null = null;
  ```

---

### **5. Undefined**
- Represents a variable that has been declared but has not been assigned a value.
- Example:
  ```typescript
  let value: undefined = undefined;
  ```

---

### **6. Object**
- Represents any non-primitive type (arrays, functions, objects).
- Example:
  ```typescript
  let person: { name: string; age: number } = { name: "Alice", age: 30 };
  ```

---

### **7. Symbol**
- A unique and immutable data type often used as object keys.
- Example:
  ```typescript
  const uniqueKey: symbol = Symbol("key");
  const obj = { [uniqueKey]: "value" };
  ```

---

### **8. Interface**
- Defines the structure of an object or a contract that classes must follow.
- Example:
  ```typescript
  interface User {
    id: number;
    name: string;
  }
  let user: User = { id: 1, name: "Alice" };
  ```

---

### **9. Void**
- Represents the absence of a value, commonly used in functions that do not return anything.
- Example:
  ```typescript
  function logMessage(message: string): void {
    console.log(message);
  }
  ```

---

### **10. Array**
- Represents a list of elements of a specific type.
- Example:
  ```typescript
  let numbers: number[] = [1, 2, 3];
  let strings: Array<string> = ["a", "b", "c"];
  ```

---

### **11. Tuple**
- Represents an array with a fixed number of elements of specific types.
- Example:
  ```typescript
  let tuple: [string, number] = ["Alice", 30];
  ```

---

### **12. Enum**
- Represents a collection of named constant values.
- Example:
  ```typescript
  enum Color {
    Red,
    Green,
    Blue,
  }
  let color: Color = Color.Red;
  ```

---

### **13. Union**
- Represents a value that can be one of several types.
- Example:
  ```typescript
  let value: string | number;
  value = "Hello"; // Valid
  value = 42; // Valid
  ```

---

### **14. Intersection**
- Combines multiple types into one.
- Example:
  ```typescript
  interface Person {
    name: string;
  }
  interface Employee {
    id: number;
  }
  let worker: Person & Employee = { name: "Alice", id: 123 };
  ```

---

### Use Cases
- **Primitive Types (Number, String, Boolean, Null, Undefined):** Represent core data values.
- **Object and Interfaces:** Define structured data and enforce object shapes.
- **Symbol:** Ensure unique keys for object properties.
- **Void:** Indicate functions without return values.
- **Array, Tuple, Enum:** Define collections and fixed structures.
- **Union and Intersection:** Handle complex data types with more flexibility.
