describe('coinCombo', function() {
  it("returns the correct amount of the appropriate coins, in case of 1 cent", function() {
    expect(coinCombo(0.01)).to.equal("Your coin combo is 1 pennies");
  });

  it("returns the correct amount of the appropriate coins, in case of 1.17", function() {
    expect(coinCombo(1.17)).to.equal("Your coin combo is 2 half-dollars, 1 dimes, 1 nickels, 2 pennies");
  });

  it("returns the correct amount of the appropriate coins, in case of 2.34", function() {
    expect(coinCombo(2.34)).to.equal("Your coin combo is 4 half-dollars, 1 quarters, 1 nickels, 4 pennies");
  });
});
