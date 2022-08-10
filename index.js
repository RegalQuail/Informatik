const owner = {
    name: 'Jonah',
    lastName: 'Theussl-Parseghian',
    age: '18',
    fullName() {
        return this.name + ' ' + this.lastName;
    }
}

document.getElementById('owner').innerHTML = owner.fullName();
