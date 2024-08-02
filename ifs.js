let weight = 55;
let height = 1.6;

let BMI= weight/(height*height);
let outcome;

if((BMI < 18)){
    outcome = "You are underweight"
}else if((BMI>18)&&(BMI<=25)){
    outcome="You are healthy"
}else if ((BMI >=26)&&(BMI<=30)){
    outcome="You are overweight"
}else if ((BMI >30)){
    outcome = "You are obese"
}else{
    window.alert("Invalid")
}
document.getElementById("bmi").innerHTML =outcome