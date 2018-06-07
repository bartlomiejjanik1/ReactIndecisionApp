const nameVar = 'Bart';


console.log('nameVar', nameVar);

const nameLet = 'Jen';
console.log('nameLet', nameLet);

const nameConst = 'Frank';

console.log('nameConst', nameConst);

//Block scoping
const
 fullName = 'Bartekk J';

if (fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);