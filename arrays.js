//logically John is index 0
const people =[
    "John","Mark","Isaac"
];
//Adding a value to the initial values
people[3] = "Hannah";
//or
people.push("Collins");

//Removing the last item in the list
people.pop()


document.getElementById("names").innerHTML = people
//displaying the last value
document.getElementById("array").innerHTML = people[people.length-1];

// displaying number of values
document.getElementById("array2").innerHTML = people.length;

//displaying a specific value(use the index)
//displays the value "Mark"
document.getElementById("array3").innerHTML = people[1];


const colors =[
    "Red","Orange","Yellow","Green","Blue","Indigo","Violet"
];

console.log(colors[2]);

//name
//age
//subjects;maths,physics,english

const Student = {
    name : "Ann",
    age : 17,
    subject : [
        "Math",
        "English",
        "Physics"]

};

document.getElementById("array4").innerHTML = Student.name;
document.getElementById("array5").innerHTML = Student.age;
document.getElementById("array6").innerHTML = Student.subject;






















