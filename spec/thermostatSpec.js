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

  it("has a minimum temperature", () => {
    for (i = 0; i < 11; i++) thermostat.down();
    expect(thermostat.getTemp()).toEqual(10);
  });

  it("can have the temperature resetted", () => {
    thermostat.up();
    thermostat.reset();
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

  describe("power saving mode on", () => {
    it("has power saving mode turned on by default", () => {
      expect(thermostat.isPowerSavingModeOn()).toBeTruthy;
    });
    it("can be turned on", () => {
      thermostat.switchPowerSavingModeOff();
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBeTruthy;
    });
    it("has a maximum temperature of 25", () => {
      for (i = 0; i < 6; i++) thermostat.up();
      expect(thermostat.getTemp()).toEqual(25);
    });
  });

  describe("power saving mode off", () => {
    it("can be turned off", () => {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBeFalsy;
    });
    it("has a maximum temperature of 32", () => {
      thermostat.switchPowerSavingModeOff();
      for (i = 0; i < 13; i++) thermostat.up();
      expect(thermostat.getTemp()).toEqual(32);
    });
  });
});
