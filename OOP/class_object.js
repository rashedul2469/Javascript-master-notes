class user{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    info(){
        return this.name+" "+this.age;
    }

}

const ob=new user("jhon",22);
console.log(ob.name,ob.age);
console.log(ob.info());



class User {
  name = "Guest";
  age = 18;
  isActive = true;

  //using let var const is not supported

  constructor(name, age) {
    if (name) this.name = name;
    if (age)  this.age = age;
  }
}

const u1 = new User();
console.log(u1.name, u1.age); // Guest 18

const u2 = new User("Sami", 22);
console.log(u2.name, u2.age); // Sami 22


//Static 
class User1{
  static role = "general-user";  // class-level

  constructor(name) {
    this.name = name;
  }

  static sayHello() {
    console.log("Hello from User class (static)");
  }
}

console.log(User1.role); // "general-user"
User1.sayHello();
const u = new User1("Sami");
console.log(u.name);    // "Sami"



//private

class BankAccount {
  #balance = 0;   // private field

  constructor(owner) {
    this.owner = owner;
  }

  #deposit(amount) {    //private method
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

//private +static

class MathHelper {
  static #logUse(operation) {
    console.log(`Using operation: ${operation}`);
  }

  static square(x) {
    this.#logUse("square");
    return x * x;
  }
}

console.log(MathHelper.square(5));  // 25
// MathHelper.#logUse("test");      // ❌ Error: private



