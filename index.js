const owner = {
    name: 'Jonah',
    lastName: 'Theussl-Parseghian',
    age: '18',
    fullName() {
        return this.name + ' ' + this.lastName;
    }
}

document.getElementById('owner').innerHTML = `The owner of this webpage is ${owner.fullName()}`;
console.log(`${owner.name} is ${owner.age} years old`);
