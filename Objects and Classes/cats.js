function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for (let el of arr) {
        let command = el.split(" ");
        let catName = command[0];
        let catAge = command[1];
        let myCat = new Cat(catName, catAge);
        // console.log(catName);
        // console.log(catAge);
        cats.push(myCat);
    }
    for (let myCat of cats) {
        myCat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);