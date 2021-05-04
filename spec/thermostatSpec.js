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

  describe("cicking the up button", () => {
    it("increase the temperature", () => {
      thermostat.up();
      expect(thermostat.getTemp()).toEqual(21);
    });
  });

  describe("cicking the down button", () => {
    it("decreases the temperature", () => {
      thermostat.down();
      expect(thermostat.getTemp()).toEqual(19);
    });
  });

  it("has a minimum temperature", () => {
    for (i = 0; i < 11; i++) thermostat.down();
    expect(thermostat.getTemp()).toEqual(10);
  });

  it("has power saving mode turned on by default", () => {
    expect(thermostat.isPowerSavingModeOn()).toBeTruthy;
  });

  describe("toggling power saving mode", () => {
    it("can be turned off", () => {
      thermostat.powerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBeFalsy;
    });
  });
});
