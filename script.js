var css = document.querySelector("h3");   
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2 ");
var body= document.querySelector("body");
var hehe = document.getElementById("GRADIENT");
console.log(body);
console.log(hehe);
console.log(color1.value);
console.log(color2.value);
console.log(body.style.background);
function setGradient(){ 
	body.style.background="linear-gradient(to right , "+color1.value
    +","+color2.value+")";

	css.textContent= body.style.background+ " ";
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);