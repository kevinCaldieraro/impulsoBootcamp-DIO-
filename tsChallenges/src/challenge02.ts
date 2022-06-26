// Como podemos melhorar o esse código usando TS?

enum Occupation {
  Actor,
  Baker
}

interface Person {
  name: string;
  age: number;
  occupation?: Occupation;
}

let person1: Person = {
  name: 'Maria',
  age: 29,
  occupation: Occupation.Actor
};

person1.name = 'maria';
person1.age = 29;
person1.occupation = Occupation.Actor;

let person2: Person = {
  name: 'Roberto',
  age: 19,
  occupation: Occupation.Baker
};

person2.name = 'roberto';
person2.age = 19;
person2.occupation = Occupation.Baker;

let person3: Person = {
  name: 'laura',
  age: 32,
  occupation: Occupation.Actor
};

let person4: Person = {
  name: 'carlos',
  age: 19,
  occupation: Occupation.Baker
};
