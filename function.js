// function passed(gpa){
//     // console.log('gpa peyecho:', gpa);
//     console.log('gpa peyecho:', gpa, 'tumi pass korso')
// }

// passed(5.00);

function gpa(sub1, sub2, sub3) {
     var totalgpa = sub1 + sub2 + sub3;
     var avrgpa = totalgpa / 3 ;
     return avrgpa;
}
var subject1 = 4.75;
var subject2 = 4.50;
var subject3 = 5.00;
var result = gpa(subject1, subject2, subject3);
console.log('result is :', result);