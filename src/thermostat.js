class Thermostat {
  constructor() {
    this.MIN_TEMP = 10;
    this.MAX_ON = 25;
    this.MAX_OFF = 32;
    this._temp = 20;
    this.powerSavingMode = true;
  }

  getTemp() {
    return this._temp;
  }

  up() {
    if (this.isMaxTemp()) {
      return;
    }
    this._temp += 1;
  }

  down() {
    if (this.isMinTemp()) {
      return;
    }
    this._temp -= 1; // ternary?
  }

  isMinTemp() {
    return this._temp === this.MIN_TEMP;
  }

  isMaxTemp() {
    if (this.isPowerSavingModeOn()) {
      return this._temp === this.MAX_ON;
    }
    return this._temp === this.MAX_OFF;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }
}
