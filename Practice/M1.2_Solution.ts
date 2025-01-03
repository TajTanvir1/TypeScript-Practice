// Task 1: Basic Data Types and First Program
console.log("Hello World, I will complete this course successfully and become a Next level Web Developer!");

// Task 2: Functions, Optional, and Literal Types
function describePerson(name: string, age: number, role?: 'admin' | 'user' | 'guest'): void {
  console.log(`Name: ${name}, Age: ${age}, Role: ${role ?? 'not provided'}`);
}

describePerson("Alice", 30, "admin");
describePerson("Bob", 25);

// Task 3: Object Types, Type Alias, & Literal Types
type Person = {
  name: string;
  address: string;
  hairColor: string;
  eyeColor: string;
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: string[];
  job: string;
  skills: string[];
  maritalStatus: string;
  friends: string[];
};

const person: Person = {
  name: "John Doe",
  address: "123 Main St",
  hairColor: "Black",
  eyeColor: "Brown",
  income: 5000,
  expense: 3000,
  hobbies: ["Reading", "Traveling"],
  familyMembers: ["Jane", "Jake"],
  job: "Software Engineer",
  skills: ["JavaScript", "TypeScript"],
  maritalStatus: "Single",
  friends: ["Alice", "Bob"],
};

// Task 4: Union and Intersection Types
interface Book {
  title: string;
  author: string;
}

interface Magazine {
  issueNumber: number;
  publisher: string;
}

type BookOrMagazine = Book | Magazine;
type BookAndMagazine = Book & Magazine;

const bookOrMagazineExample: BookOrMagazine = { title: "My Book", author: "Author Name" };
const bookAndMagazineExample: BookAndMagazine = {
  title: "Monthly Digest",
  author: "Editor Name",
  issueNumber: 12,
  publisher: "Publisher Inc",
};

// Task 5: Function Type
function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"

// Task 6: Spread and Rest Operators, Destructuring
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumNumbers(1, 2, 3, 4)); // Output: 10

// Task 7: Type Assertion and Narrowing
function processInput(value: string | number): number | string {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * value;
  }
}

console.log(processInput("hello")); // Output: 5
console.log(processInput(3));       // Output: 9

// Task 8: Intersection Types
type User = {
  name: string;
  email: string;
};

type Admin = {
  adminLevel: number;
};

type AdminUser = User & Admin;

function describeAdmin(user: AdminUser): string {
  return `${user.name} (${user.email}) is an admin with level ${user.adminLevel}.`;
}

const admin: AdminUser = { name: "Alice", email: "alice@example.com", adminLevel: 1 };
console.log(describeAdmin(admin)); // Output: Alice (alice@example.com) is an admin with level 1.

// Task 9: Optional Chaining
function getEmployeeCity(employee: { address?: { city?: string } }): string {
  return employee.address?.city ?? "City not available";
}

const employee = { address: { city: "New York" } };
console.log(getEmployeeCity(employee)); // Output: New York

// Task 10: Nullish Coalescing
function getDisplayName(name: string | null | undefined): string {
  return name ?? "Anonymous";
}

console.log(getDisplayName(null));       // Output: Anonymous
console.log(getDisplayName("John"));    // Output: John

// Task 11: Unknown Type
function processData(data: unknown): string | number | undefined {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return data * data;
  } else {
    return undefined;
  }
}

console.log(processData("hello")); // Output: HELLO
console.log(processData(4));       // Output: 16

// Task 12: Never Type
function handleError(message: string): never {
  throw new Error(message);
}

// Uncomment to test: handleError("Critical error occurred!");

// Task 13: Generics with Functions and Interfaces
function removeDuplicates<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

console.log(removeDuplicates([1, 2, 2, 3])); // Output: [1, 2, 3]

// Task 14: Asynchronous TypeScript and Type Aliases
type UserData = {
  name: string;
  age: number;
};

async function fetchUserData(): Promise<UserData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Alice", age: 25 });
    }, 1000);
  });
}

fetchUserData().then((data) => console.log(data));

// Task 15: Type Guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printUpperCase(value: unknown): void {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log("Value is not a string.");
  }
}

printUpperCase("hello"); // Output: HELLO
printUpperCase(123);      // Output: Value is not a string.

// Task 16: Utility Types and Keyof Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(getProperty(user, "name")); // Output: Alice
