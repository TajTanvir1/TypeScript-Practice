# The Significance of Union and Intersection Types in TypeScript

TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds static typing and other features to JavaScript. Typescript have many notable features where Union and Intersection types are very important. Union types allow a variable to be one of several possible types, denoted by the "|" symbol and Intersection types combine multiple types into one, denoted by the "&" symbol.

## Union Type
Union type helps us to use a set of possible multiple types. If we are not sure about upcoming data type then we can set multiple choices by Union type. Union type symbol is '|'. An example below,

type UserId = string | number;

userId = 123
or
userId = "id123"


Here, we see a type of user where the user id could be a string or number but we are not sure about the upcoming data type and their Union types help us to choose multiple data types.


## Intersection Type

Intersection type helps us add data types to another type. If we have a data type and we want to add another data type with this we use Intersection type. Intersection type symbol is '&'. An example below,


type User = {
    name: string;
    age: number;
};

type Admin = {
    role: string;
};

type AdminUser = User & Admin;

Here, we see a type of User where name and age type are declared, and after that role of Admin type is declared so now if we need to combine Admin and User along we need to use Intersection type to combine as AdminUser.

So, Union and Intersection types are very important features in typescript. They help in large-scale projects and simple projects. Union and Intersection types enhance our code and make it easy for developers.
