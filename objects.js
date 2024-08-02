
   const lenovo = {};


lenovo.model = "T490";
lenovo.ram ="8GB";
lenovo.processor = "Intel";
lenovo.year_of_manufacture= 2021;
lenovo.storage = "500GB";
lenovo.manufacture = "Lenovo Inc";



document.getElementById("objects").innerHTML = "The RAM is " + lenovo.ram;
document.getElementById("year").innerHTML = lenovo.storage

   function car(){
    document.getElementById("objects").innerHTML = lenovo.model
   }
    function ram(){
    document.getElementById("objects").innerHTML = lenovo.ram
    }
    function processor(){
    document.getElementById("objects").innerHTML = lenovo.processor
    }
    function year(){
    document.getElementById("objects").innerHTML = lenovo.year_of_manufacture
    }
    function storage(){
    document.getElementById("objects").innerHTML = lenovo.storage
    }
    function manufacture(){
    document.getElementById("objects").innerHTML = lenovo.manufacture
    }
