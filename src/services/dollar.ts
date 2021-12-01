export interface DollarInterface {
  amount: number;
  times(multiplier: number): void;
  equals(object: DollarInterface): boolean;
}

export class Dollar implements DollarInterface {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): DollarInterface {
    return new Dollar(this.amount * multiplier);
  }

  equals(object: DollarInterface): boolean {
    return this.amount === object.amount;
  }
}
