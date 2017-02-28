var names = ['Joaquin', 'Nacho', 'Faca'];

names.forEach(function (name) {
    console.log('foreach', name);
});

//arrow functions with several lines using {}
names.forEach((name) => {
    console.log('arrow', name);
});

//arriw function with only one line.
names.forEach((name) => console.log(name));

var returnName = (name) => name + '!';
console.log(returnName('joaqui'));

var person = {
    name: 'joaquin',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' and ' + name);
        });   
    }
};

person.greet();

console.log('-----------------------');

//addStatement

var addStatement = (a, b) => {
    var result = a + b;
    console.log('result addStatement ', result);
};

addStatement(4, 7);

var addExpression = (a, b) => a + b;
console.log('result addExpression ', addExpression(5, 10));