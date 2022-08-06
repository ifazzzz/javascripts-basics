function arraysum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        sum = sum + elements;
        console.log(index, elements, sum);
        
    }
    return sum;
}

const arraynumbers = [12, 34, 55, 78];
arraysum(arraynumbers);