// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDispaly(input){
  display.value += input;
}
function clearDisplay(){
  display.value = "";
}
try{
function claculate(){
  display.value = eval(display.value);
}
}
catch(error){
  console.error(error);
};
