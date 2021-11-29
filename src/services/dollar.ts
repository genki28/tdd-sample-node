export interface DollarInterface {
  amount: number;
  times(multiplier: number): void;
}

export class Dollar implements DollarInterface {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): DollarInterface {
    return new Dollar(this.amount * multiplier);
  }
}
