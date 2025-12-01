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