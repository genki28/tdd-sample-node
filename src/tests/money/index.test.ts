import { Dollar, DollarInterface } from "../../services/dollar";

// beforeAll(async (done) => {
//   done();
// });

// afterAll(async (done) => {
//   done()
// })

describe("Dollarのテスト", () => {
  it("掛け算のテスト", () => {
    const five = new Dollar(5);
    let product: DollarInterface = five.times(2);
    expect(10).toBe(product.amount);
    product = five.times(3);
    expect(15).toBe(product.amount);
  });
  it("equalsのテスト", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
