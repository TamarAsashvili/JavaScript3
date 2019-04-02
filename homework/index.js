// Step 0: Here's a bar class and object you can use.

class Bar {
    serveDrink(drink) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(drink), 1000);
        })
    }
}

const favoriteBar = new Bar();

// Step 1: declare a class 'Person'.


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        let name = 'Mariam';
        console.log(`Hi ${this.name}, I am Tamar.`);
    }

    drink() {
        console.log(this.toString());
    }

    async getDrink(drink) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(drink), 1000);
        })
    }
}

const newPerson = new Person();



  // A person has 3 properties: a name, an age, and a favorite drink (as just a string).

  // They are all required, and must be specified when creating the person.

  // A person has 2 synchronous functions, and one asynchronous one.

  // Sync: 
  // - greet. You greet another person. You say  his/her name and your own name, in the console.
// - drink. You drink a drink (which is just a string), in the console.
// Async:
// - getDrink. You go and prepare a drink (just a string) from the bar; this takes a while.

// Step 2: create 2 Person instances: yourself, and your favorite waiter or waitress.



// Step 3: Say hi to your favorite waiter/waitress.



// Step 4: The waiter/waitress knows you well, and immediately goes 
// and fetch your favorite drink from the bar.
// Then, when it arrives, drink it!
