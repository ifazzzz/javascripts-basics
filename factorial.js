function factorial(numbers){
    let result = 1;
    for(let i = numbers; i >= 1; i--) {
        result = result * i;
    }
        return result;
}
const number = 7
const result = factorial(number);
console.log('factorial of:', number , 'is', result);
