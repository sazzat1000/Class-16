// Addition Function
function add(a, b) {
    return a + b;
}
var addition = add(10, 20);
document.getElementById("add").innerHTML = addition;

// Subtraction Function
function sub(a, b) {
    return a - b;
}
var subtraction = sub(50, 25);
document.getElementById("sub").innerHTML = subtraction;

// Multification Function
function multi(a, b) {
    return a * b;
}
var multification = multi(4, 10);
document.getElementById("multi").innerHTML = multification;

// Division Function
function divi(a, b) {
    return a / b;
}
var division = divi(50, 10);
document.getElementById("divi").innerHTML = division;

// Modulus Function
function mod(a, b) {
    return a % b;
}
var modulus = mod(59, 10);
document.getElementById("mod").innerHTML = modulus;

// Result Check

var num = 75;

if (num >= 33 && num <= 39) {
    document.getElementById("result").innerHTML = "D";
} else if (num >= 40 && num <= 49) {
    document.getElementById("result").innerHTML = "C";
} else if (num >= 50 && num <= 59) {
    document.getElementById("result").innerHTML = "B";
} else if (num >= 60 && num <= 69) {
    document.getElementById("result").innerHTML = "A-";
} else if (num >= 70 && num <= 79) {
    document.getElementById("result").innerHTML = "A";
} else if (num >= 80 && num <= 100) {
    document.getElementById("result").innerHTML = "A+";
} else if (num > 100) {
    document.getElementById("result").innerHTML = "Enter a valid number";
} else {
    document.getElementById("result").innerHTML = "F";
}
