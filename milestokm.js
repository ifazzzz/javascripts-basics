function milestokm(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}

const mile1 = 4;
const mile1tokm = milestokm(mile1);
console.log(mile1tokm);