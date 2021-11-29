import { Dollar } from "../../services/dollar";

// beforeAll(async (done) => {
//   done();
// });

// afterAll(async (done) => {
//   done()
// })

describe("Dollarのテスト", () => {
  test("掛け算のテスト", () => {
    const five = new Dollar(5);
    five.times(2);
    expect(10).toBe(five.amount);
  });
});
