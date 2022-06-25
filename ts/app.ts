enum Occupation {
  Teacher,
  Actor,
  Developer,
  SoccerPlayer
}

interface Person {
  name: string,
  age: number,
  occupation?: Occupation
}

interface Student extends Person {
  subjects: string[]
}

const john: Person = {
  name: 'John',
  age: 23,
  occupation: Occupation.Developer
}

const jesse: Student = {
  name: 'Jesse',
  age: 21,
  subjects: ['math', 'english', 'biology', 'chemistry']
}