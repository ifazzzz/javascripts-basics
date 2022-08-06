function arraysum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        sum = sum + elements;
        // console.log(index, elements, sum);
        
    }
    return sum;
}

function arrayOddNumbers(numbers) {
    // declare an array
    const oddnumbers =[];
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        if(elements % 2 !==0){
            console.log(elements);
            // push the gotten elements in the array
            oddnumbers.push(elements);
        }      
    }
    return oddnumbers;  
}

const arraynumbers = [12, 34, 55, 78, 93, 127];
const oddnumbers = arrayOddNumbers(arraynumbers);
console.log(oddnumbers);
const oddnumbersum = arraysum(oddnumbers);
console.log(oddnumbersum);