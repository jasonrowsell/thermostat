const Thermostat = require('../src/thermostat.js');

describe('Thermostat', () => {
  let thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  describe('initialisation', () => {
    it('has an initial reading of 20', () => {
      expect(thermostat._temperature).toEqual(20);
    });
  });

  it('has a minimum temperature', () => {
    for (i = 0; i < 11; i++) thermostat.down();
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('can have the temperature resetted', () => {
    thermostat.up();
    thermostat.reset();
    expect(thermostat._temperature).toEqual(20);
  });

  describe('cicking the up button', () => {
    it('increase the temperature', () => {
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(21);
    });
  });

  describe('cicking the down button', () => {
    it('decreases the temperature', () => {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
    });
  });

  describe('power saving mode on', () => {
    it('has power saving mode turned on by default', () => {
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });
    it('can be turned on', () => {
      thermostat.switchPowerSavingModeOff();
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });
    it('has a maximum temperature of 25', () => {
      for (i = 0; i < 6; i++) thermostat.up();
      expect(thermostat.getTemperature()).toEqual(25);
    });
    it('resets temperature to 25 when turned on', () => {
      thermostat.switchPowerSavingModeOff();
      for (i = 0; i < 6; i++) thermostat.up();
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.getTemperature()).toEqual(25);
    });
  });

  describe('power saving mode off', () => {
    it('can be turned off', () => {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toEqual(false);
    });
    it('has a maximum temperature of 32', () => {
      thermostat.switchPowerSavingModeOff();
      for (i = 0; i < 13; i++) thermostat.up();
      expect(thermostat.getTemperature()).toEqual(32);
    });
  });

  describe('querying energy usage', () => {
    describe('when temp < 18', () => {
      it('returns low-usage', () => {
        for (i = 0; i < 3; i++) thermostat.down();
        expect(thermostat.usage()).toEqual('low-usage');
      });
    });
    describe('when temp <= 25', () => {
      it('returns medium-usage', () => {
        thermostat.down();
        expect(thermostat.usage()).toEqual('medium-usage');
      });
    });
    describe('when temp > 25', () => {
      it('returns high-usage', () => {
        thermostat.switchPowerSavingModeOff();
        for (i = 0; i < 6; i++) thermostat.up();
        expect(thermostat.usage()).toEqual('high-usage');
      });
    });
  });
});
