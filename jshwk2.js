//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parseObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ':');
            if (Array.isArray(obj[key])) {
                obj[key].forEach(item => {
                    if (typeof item === 'object') {
                        for (let subKey in item) {
                            if (item.hasOwnProperty(subKey)) {
                                console.log('  ' + subKey + ': ' + item[subKey]);
                            }
                        }
                    } else {
                        console.log('  ' + item);
                    }
                });
            } else {
                console.log('  ' + obj[key]);
            }
        }
    }
}

parseObject(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

Person.prototype.addAge = function() {
    this.age += 1;
    return this;
};

let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

person1.printInfo();
person2.printInfo();

person1.addAge().addAge().addAge();
person2.addAge();


person1.printInfo();
person2.printInfo();



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkLength = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            console.log("Big word");
            resolve(true);
        } else {
            console.log("Small Number");
            reject(false);
        }
    });
}

checkLength("Hello World");