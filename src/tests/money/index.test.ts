import { Dollar, DollarInterface } from "../../services/dollar";

// beforeAll(async (done) => {
//   done();
// });

// afterAll(async (done) => {
//   done()
// })

describe("Dollarのテスト", () => {
  test("掛け算のテスト", () => {
    const five = new Dollar(5);
    let product: DollarInterface = five.times(2);
    expect(10).toBe(product.amount);
    product = five.times(3);
    expect(15).toBe(product.amount);
  });
});
