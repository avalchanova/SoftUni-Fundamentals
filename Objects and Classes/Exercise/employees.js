function employees(input) {

    let person = {};

    for (let name of input) {
        person.name = name;
        person.number = name.length;
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
    }
    console.log(person);

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);