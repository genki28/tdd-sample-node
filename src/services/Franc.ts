export interface FrancInterface {
  times(multiplier: number): void;
  equals(object: Franc): boolean;
}

export class Franc implements FrancInterface {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }

  equals(object: Franc) {
    return this.amount === object.amount;
  }
}
