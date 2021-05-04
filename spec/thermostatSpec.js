describe("Thermostat", () => {
  let thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  describe("initialisation", () => {
    it("has an initial reading of 20", () => {
      expect(thermostat.temp).toEqual(20);
    });
  });
});
