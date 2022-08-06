var friends = {
    sohel : 18,
    Rifat : 15,
    shakil : 16,
    ayshi : 13
}

var names = Object.keys(friends);
console.log(names);
var numbers = Object.values(friends);
console.log(numbers);

for (var i = 0; i < names.length; i++) {
    var friendname = names[i];
    var gradenumbers = friends[friendname];
    console.log(friendname, gradenumbers);
}