function ageInDays(obj, logResult){
    let fullName = obj.firstName.split(" ") + " " + obj.lastName.split(" ");
    let ageInDays = obj.age * 365;
    return logResult(fullName, ageInDays);
}

function logResult(fullName, ageInDays){
  return `The person's full name is ${fullName} and their age in days is ${ageInDays}`;
}

const person = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 24
}

console.log(ageInDays(person, logResult));










