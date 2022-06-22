class bankAccount {
  constructor(agency, number, type) {
    this.agency = agency;
    this.number = number;
    this.type = type;
    this._balance = 0;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  withdraw(value) {
    if (value > this._balance) return 'Invalid operation';

    this._balance -= value;
    return this._balance;
  }

  deposit(value) {
    this.balance += value;
  }
}

class currentAccount extends bankAccount {
  constructor(agency, number, card) {
    super(agency, number);
    this.type = 'current';
    this._card = card;
  }

  get card() {
    return this._card;
  }

  set card(number) {
    this._card = number;
  }
}

class savingsAccount extends bankAccount {
  constructor(agency, number) {
    super(agency, number);
    this.type = 'savings';
  }
}

class universityAccount extends bankAccount {
  constructor(agency, number) {
    super(agency, number);
    this.type = 'university';
  }

  withdraw(value) {
    if (value > 500) return 'The value must have less than 500 dollars.';

    this._balance -= value;
  }
}
