describe("Thermostat", () => {
  let thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  describe("initialisation", () => {
    it("has an initial reading of 20", () => {
      expect(thermostat._temp).toEqual(20);
    });
  });

  it("has an initial reading of 20", () => {
    expect(thermostat._temp).toEqual(20);
  });

  describe("cicking the button", () => {
    it("increase the temperature", () => {
      thermostat.up();
      expect(thermostat.getTemp()).toEqual(21);
    });
  });
});
