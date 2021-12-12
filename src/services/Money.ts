export abstract class Money {
  protected currencyName: string;
  protected amount: number;
  // NOTE:
  // constructor(protected amount: number)といった書き方も可能ですが、あえて以下の書き方をしています。
  constructor(amount: number, currencyName: string) {
    this.amount = amount;
    this.currencyName = currencyName;
  }

  abstract times(multiplier: number): Money;

  currency(): string {
    return this.currencyName || "";
  }

  equals(money: Money): boolean {
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Franc {
    return new Franc(amount, "CHF");
  }
}

export class Dollar extends Money {
  constructor(amount: number, currencyName: string) {
    super(amount, currencyName);
  }

  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number, currencyName: string) {
    super(amount, currencyName);
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
