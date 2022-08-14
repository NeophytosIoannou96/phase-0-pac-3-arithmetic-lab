function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}
number=10;
function add5() {
    return (number += 5);
}
function divideBy3() {
    return(number/=3);
}
divideBy3();
add5();

function makeInt(string){
    parseInt(string,10);
}
function preserveDecimal(string){
    parseFloat("2.222");
}