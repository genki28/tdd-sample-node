export interface DollarInterface {
  times(multiplier: number): void;
  equals(object: Dollar): boolean;
}

export class Dollar implements DollarInterface {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): DollarInterface {
    return new Dollar(this.amount * multiplier);
  }

  equals(object: Dollar): boolean {
    return this.amount === object.amount;
  }
}
