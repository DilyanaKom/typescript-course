let names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}` } };
let loc = { city:'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() { return `${this.street} ${this.number}, ${this.city}${this.postalCode}`} };

type namesType = typeof names;
type locationType = typeof loc;

function createCombinedFunction(names: namesType, location: locationType){
    return function(person: namesType & locationType){
       console.log(`Hello, ${person.getPersonInfo()} from ${person.getAddressInfo()}`); 
    }
}

let combinedFunction = createCombinedFunction(names, loc);
let combinedPerson = Object.assign({}, names, loc);
combinedFunction(combinedPerson);