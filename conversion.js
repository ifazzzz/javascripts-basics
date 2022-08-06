function avgscore(totalscore) {
    const score = totalscore / 4;
    return score;
}

const std1Scrore = 140;
const stdscore = avgscore(std1Scrore);
console.log(stdscore);

const std2Scrore = 150;
const std2score = avgscore(std2Scrore);
console.log(std2score);