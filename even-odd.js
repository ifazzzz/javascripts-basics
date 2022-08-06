function evenodd(value) {
    const remainder = value % 2;
    if(remainder === 0) {
       return true
    }
    else {
        return false
    }
}

const number = 158;
const numberiseven = evenodd(number);
console.log(numberiseven);