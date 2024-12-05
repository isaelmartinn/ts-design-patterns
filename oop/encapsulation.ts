class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  public get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit Amount");
      return;
    }

    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid withdrawal Amount");
      return;
    }

    if ((this._balance - amount) < 0) {
      console.log("Insufficient Funds");
      return;
    }

    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.balance);
