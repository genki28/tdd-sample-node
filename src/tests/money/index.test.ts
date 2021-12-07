import { Franc } from "../../services/internal";
import { Dollar } from "../../services/internal";
import { Money } from "../../services/internal";

// beforeAll(async (done) => {
//   done();
// });

// afterAll(async (done) => {
//   done()
// })

describe("Dollarのテスト", () => {
  it("掛け算のテスト", () => {
    const five = Money.dollar(5);
    expect(new Dollar(10)).toEqual(five.times(2));
    expect(new Dollar(15)).toEqual(five.times(3));
  });
  it("equalsのテスト", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});

describe("Francのテスト", () => {
  it("掛け算のテスト", () => {
    const five = new Franc(5);
    expect(new Franc(10)).toEqual(five.times(2));
    expect(new Franc(15)).toEqual(five.times(3));
  });
  it("equalsのテスト", () => {
    expect(new Franc(5).equals(new Franc(5))).toBe(true);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);
    expect(new Franc(5).equals(new Dollar(5))).toBe(false);
  });
});
