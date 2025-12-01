//single inheritance
class AnimaL {
  speak() {
    console.log("Animal speaking...");
  }
}

class Dog extends AnimaL {
  speak() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // Dog barks

//with super keyword
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, id) {
    super(name);   // call parent constructor
    this.id = id;
  }
}

/*
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    super.speak();      // calls Animal.speak()
    console.log("Dog barks");
  }
}
*/



//Multilevel inheritance
class animal {
  move() {
    console.log("Animal is moving");
  }
}

class DoG extends animal {
  bark() {
    console.log("Woof!");
  }
}

class GermanShepherd extends DoG {
  guard() {
    console.log("Guarding...");
  }
}

const g = new GermanShepherd();
g.move();   // from Animal
g.bark();   // from Dog
g.guard();  // from GermanShepherd



//Hierarchical Inheritance
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Meow!");
  }
}

const e = new dog();
const c = new Cat();

e.eat(); // from Animal
c.eat(); // from Animal


