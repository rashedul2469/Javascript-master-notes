class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const animals = [new Dog(), new Cat(), new Animal()];

animals.forEach(a => a.speak());
/*
Dog barks
Cat meows
Animal sound
*/
