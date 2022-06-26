"use strict";
var Occupation;
(function (Occupation) {
    Occupation[Occupation["Teacher"] = 0] = "Teacher";
    Occupation[Occupation["Actor"] = 1] = "Actor";
    Occupation[Occupation["Developer"] = 2] = "Developer";
    Occupation[Occupation["SoccerPlayer"] = 3] = "SoccerPlayer";
})(Occupation || (Occupation = {}));
const john = {
    name: 'John',
    age: 23,
    occupation: Occupation.Developer
};
const jesse = {
    name: 'Jesse',
    age: 21,
    subjects: ['math', 'english', 'biology', 'chemistry']
};
function list(list) {
    for (const item of list) {
        console.log('-', item);
    }
}
list(jesse.subjects);
