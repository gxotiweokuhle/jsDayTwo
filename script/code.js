const calculator = document.getElementById("screen");//display expression on screen
function digit(num){
    calculator.value += num;//for each number and operator when clicked to display on screen
}
function equal(){
    calculator.value = eval(calculator.value);//works better similar to parsefloat and converts final answer of strings to number
}
function bracket(){
    calculator.value += '('//display bracket for bodmas
}
function bracket2(){
    calculator.value += ')'//bodmas calculation for precedence
}
clearbutton = document.getElementById('cleared');//declare variable for clear button
clearbutton.addEventListener('click', function() {//arrow function to add eventlistner to record clicks
   // console.log('all cleared'); prints message to test if my event is working
    calculator.value = " ";//assign the screen to nothing when clear is pressed
});
    deletebutton = document.getElementById('deleted');//declared var to access element
    deletebutton.addEventListener('click', function(){
    //console.log('deleted num');
    calculator.value = calculator.value.slice(0, -1);//slices each num on the array
});


/*const buttons = document.querySelectorAll('add', 'minus','times', 'divide');
buttons.addEventListener('click', function(){
            console.log('button who dis?');
            if(calculator.value === '+'){

            }
})
high order function, callback function!!
let clear = ()=>{
    let calculator = document.getElementById("screen");
    if (calculator.value !="") {
        calculator.value = "";
    }
}
function add(num1, num2){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    sum = num1 + num2;
    document.getElementById("answer").value = sum
    
}
function subtract(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    sum = num1 - num2;
    document.getElementById("answer").value = sum;
}
function mulitply(){
    let result = num1 * num2;
    return result
}*/
