// let average = "80";
// let grade = "A" ;
// let names = "John"
//
//
//
//
//
// document.getElementById("header").innerHTML = "My name is " + names + " and I scored an average of " + average + " which is the grade " + grade + " .";
//
// let number = 12001
// let reminder = number % 2
// let value;
//
// if (reminder === 0 ){
//    value="It is an even number"
// }else{
//     value="It is an odd number"
// }
//  document.getElementById("sentence").innerHTML = value;


let avg = 90;
let outcome;

if(avg <=20 ){
    outcome="E"
}else if((avg>=21) && (avg <=39)){
    outcome="D"
}else if((avg>=40)&&(avg<=59)){
    outcome="C"
}else if((avg>=60)&&(avg<=79)){
    outcome="B"
}else if((avg>=80)&&(avg<=100)){
    outcome="A"
}
document.getElementById("header").innerHTML=outcome