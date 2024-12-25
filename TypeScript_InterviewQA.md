Here are 20 commonly asked interview questions about TypeScript, along with their answers in **English** and **Bangla** for better understanding:

---

### **1. What is TypeScript?**
**English:**  
TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds static typing and other features to JavaScript.  
**Bangla:**  
TypeScript হল JavaScript-এর একটি শক্তিশালী টাইপ করা superset, যা সাধারণ JavaScript-এ কম্পাইল হয়। এটি JavaScript-এ স্ট্যাটিক টাইপিং এবং অন্যান্য বৈশিষ্ট্য যোগ করে।

---

### **2. What are the main benefits of TypeScript?**
**English:**  
- Static Typing  
- Early Detection of Errors  
- Better IDE Support  
- Object-Oriented Programming Features  
**Bangla:**  
- স্ট্যাটিক টাইপিং  
- ত্রুটি দ্রুত সনাক্ত করা  
- উন্নত IDE সাপোর্ট  
- অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং বৈশিষ্ট্য  

---

### **3. How is TypeScript different from JavaScript?**
**English:**  
TypeScript has static typing, interfaces, enums, and advanced features like generics, which are not present in JavaScript.  
**Bangla:**  
TypeScript-এ স্ট্যাটিক টাইপিং, ইন্টারফেস, এনাম এবং জেনেরিকের মতো উন্নত বৈশিষ্ট্য রয়েছে, যা JavaScript-এ নেই।

---

### **4. How do you install TypeScript?**
**English:**  
Using npm:  
```bash
npm install -g typescript
```  
**Bangla:**  
npm ব্যবহার করে ইনস্টল করতে পারেন:  
```bash
npm install -g typescript
```

---

### **5. What is a `.ts` file?**
**English:**  
A `.ts` file is a TypeScript file that contains TypeScript code, which is later compiled into JavaScript.  
**Bangla:**  
`.ts` ফাইল হল একটি TypeScript ফাইল, যেখানে TypeScript কোড থাকে যা পরে JavaScript-এ কম্পাইল করা হয়।

---

### **6. What is type inference in TypeScript?**
**English:**  
TypeScript automatically infers the type of a variable based on its value.  
**Bangla:**  
TypeScript স্বয়ংক্রিয়ভাবে একটি ভেরিয়েবলের টাইপ তার মানের উপর ভিত্তি করে নির্ধারণ করে।

---

### **7. What are interfaces in TypeScript?**
**English:**  
Interfaces define the structure of an object, ensuring the object adheres to a specific shape.  
**Bangla:**  
Interfaces একটি অবজেক্টের কাঠামো সংজ্ঞায়িত করে, যা নিশ্চিত করে যে অবজেক্টটি একটি নির্দিষ্ট কাঠামো অনুসরণ করে।

---

### **8. What are enums in TypeScript?**
**English:**  
Enums allow us to define a set of named constants.  
**Bangla:**  
Enums আমাদের একটি নির্দিষ্ট সেটের নামকৃত ধ্রুবক সংজ্ঞায়িত করার সুযোগ দেয়।  
```typescript
enum Color {
  Red,
  Green,
  Blue,
}
```

---

### **9. What is the `any` type in TypeScript?**
**English:**  
The `any` type can hold any value, bypassing TypeScript’s type-checking.  
**Bangla:**  
`any` টাইপ যেকোনো মান ধারণ করতে পারে এবং এটি TypeScript-এর টাইপ-চেকিং এড়িয়ে যায়।  

---

### **10. What is the difference between `undefined` and `null` in TypeScript?**
**English:**  
- `undefined`: A variable that has been declared but not assigned a value.  
- `null`: Represents the intentional absence of a value.  
**Bangla:**  
- `undefined`: একটি ভেরিয়েবল ঘোষণা করা হয়েছে কিন্তু মান নির্ধারণ করা হয়নি।  
- `null`: মানের ইচ্ছাকৃত অনুপস্থিতি বোঝায়।

---

### **11. What is a tuple in TypeScript?**
**English:**  
A tuple is an array with fixed types and length.  
**Bangla:**  
Tuple হল একটি অ্যারে যার নির্দিষ্ট টাইপ এবং দৈর্ঘ্য থাকে।  
```typescript
let tuple: [string, number] = ["Alice", 30];
```

---

### **12. What are generics in TypeScript?**
**English:**  
Generics allow us to write reusable and type-safe code.  
**Bangla:**  
Generics আমাদের পুনর্ব্যবহারযোগ্য এবং টাইপ-সেফ কোড লিখতে সাহায্য করে।  
```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

---

### **13. How do you define a function in TypeScript?**
**English:**  
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```  
**Bangla:**  
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

---

### **14. What is the `readonly` modifier in TypeScript?**
**English:**  
It makes a property immutable after it has been initialized.  
**Bangla:**  
এটি একটি প্রপার্টিকে অপরিবর্তনীয় করে তোলে যখন এটি একবার ইনিশিয়ালাইজ করা হয়।  
```typescript
interface User {
  readonly id: number;
  name: string;
}
```

---

### **15. What is the use of `never` type?**
**English:**  
The `never` type represents values that never occur (e.g., functions that always throw errors).  
**Bangla:**  
`never` টাইপ সেই মান বোঝায় যা কখনো ঘটে না (যেমন, এমন ফাংশন যা সর্বদা ত্রুটি তৈরি করে)।  

---

### **16. How do you handle type assertions in TypeScript?**
**English:**  
Type assertions tell the compiler to treat a value as a specific type.  
**Bangla:**  
টাইপ অ্যাসার্টেশন কম্পাইলারকে নির্দেশ দেয় একটি মানকে নির্দিষ্ট টাইপ হিসাবে বিবেচনা করতে।  
```typescript
let value: any = "hello";
let strLength: number = (value as string).length;
```

---

### **17. What is the difference between `interface` and `type`?**
**English:**  
- `interface`: Used for object shapes.  
- `type`: More flexible, can alias primitives, unions, etc.  
**Bangla:**  
- `interface`: অবজেক্টের গঠন সংজ্ঞায়িত করতে ব্যবহৃত।  
- `type`: আরও নমনীয় এবং প্রিমিটিভস, ইউনিয়ন ইত্যাদির জন্য ব্যবহার করা যায়।

---

### **18. Can TypeScript work with JavaScript libraries?**
**English:**  
Yes, with the help of declaration files (`.d.ts`).  
**Bangla:**  
হ্যাঁ, ডিক্লারেশন ফাইল (`.d.ts`) এর মাধ্যমে।  

---

### **19. How do you handle modules in TypeScript?**
**English:**  
Modules in TypeScript allow us to break the code into smaller, reusable pieces.  
**Bangla:**  
TypeScript-এ মডিউল কোডকে ছোট, পুনর্ব্যবহারযোগ্য অংশে ভাগ করতে সাহায্য করে।  

---

### **20. What is the difference between `Union` and `Intersection` types?**
**English:**  
- **Union (`|`)**: A value can be of any one type.  
- **Intersection (`&`)**: Combines multiple types into one.  
**Bangla:**  
- **Union (`|`)**: একটি মান যে কোনো এক ধরনের হতে পারে।  
- **Intersection (`&`)**: একাধিক টাইপকে একটিতে সংযুক্ত করে।  

---
