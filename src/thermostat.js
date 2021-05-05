class Thermostat {
  constructor() {
    this.MIN_TEMP = 10;
    this.MAX_ON_TEMP = 25;
    this.MAX_OFF_TEMP = 32;
    this.DEFAULT_TEMP = 20;
    this._temp = this.DEFAULT_TEMP;
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

  reset() {
    this._temp = 20;
  }

  isMinTemp() {
    return this._temp === this.MIN_TEMP;
  }

  isMaxTemp() {
    if (this.isPowerSavingModeOn()) {
      return this._temp === this.MAX_ON_TEMP;
    }
    return this._temp === this.MAX_OFF_TEMP;
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

  usage() {
    if (this._temp < 18) {
      return "low-usage";
    } else if (this._temp <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}
