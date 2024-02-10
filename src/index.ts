// basic types

let company: string = "Silky dev";
let isPublished: boolean | string = true;
let x: any = "awka rd";
x = true;
let age: number;
age = 22;
let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, "typewriter", true];
arr.push({
  age: 23,
});

//tuple
let person: [number, string, boolean, object] = [1, "ike", true, { age: 23 }];
//tuple arr
let employee: [number, string][];
employee = [
  [1, "ike"],
  [2, "sammy"],
];

//unions
let id: number | string = 22;
//enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// object
type User = {
  id: number;
  name?: string;
};
const user: User = {
  id: 1,
  name: "john",
};
const newUser: User[] = [
  {
    id: Math.random(),
    name: "iyke",
  },
  {
    id: Math.random(),
    name: "me",
  },
  {
    id: 3,
    name: "iyke",
  },
];

//Type assertion
let cid: any = 2;
let customerId = cid as number;
// functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

//interface

interface UserInterface {
  id: string | number;
  name: string;
  age?: number;
}

const users: UserInterface[] = [
  {
    id: 12,
    name: "iyke prosper",
    age: 22,
  },
  {
    id: 12,
    name: "kene igwebuike",
    age: 24,
  },
];

const me: UserInterface[] = [
  {
    age: 6,
    id: "56",
    name: "ikechukwu",
  },
];

users.forEach((user) => {
  console.log(user.age);
});

const user2: UserInterface = {
  id: 23,
  name: "ike",
  age: 22,
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x - y;

// Classes

interface PersonInterface {
  id: string | number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const iyke = new Person(1, "Iyke");

// sub class
class Employee extends Person {
  position: string;
  yearEmployed?: number;

  constructor(
    id: number,
    name: string,
    position: string,
    yearEmployed: number
  ) {
    super(id, name);
    this.position = position;
    this.yearEmployed = yearEmployed;
  }
}

const emp = new Employee(3, "prosper", "dev", 78);

//Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["iyke", "prosper", "igwebuike"]);
let objArray = getArray<object>([{ name: "ike", age: 22 }]);
numArray.push(23);
