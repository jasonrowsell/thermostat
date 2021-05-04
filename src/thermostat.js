class Thermostat {
  constructor() {
    this.MIN_TEMP = 10;
    this.MAX_ON = 25;
    this._temp = 20;
    this.powerSavingMode = true;
  }
  getTemp() {
    return this._temp;
  }
  up() {
    if (this.isPowerSavingModeOn === true) {
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

  isPowerSavingModeOn() {
    return this.powerSavingMode;
  }

  powerSavingModeOff() {
    this.powerSavingMode = false;
  }
}
