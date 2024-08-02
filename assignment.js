let a = 10;
let b = 20;
let c = 30;

if((a>b)&&(a>c)){
    document.getElementById("number").innerHTML="A is the greatest number"
}else if ((b>a)&&(b>c)){
    document.getElementById("number").innerHTML="B is the greatest number"
}else if((c>a)&&(c>b)){
    document.getElementById("number").innerHTML="C is the greatest number"
}