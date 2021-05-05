class Thermostat {
  constructor() {
    this.DEFAULT_TEMP = 20;
    this.MIN_TEMP = 10;
    this.MAX_ON_TEMP = 25;
    this.MAX_OFF_TEMP = 32;
    this.MEDIUM_USAGE_LIMIT = 18;
    this.HIGH_USAGE_LIMIT = 25;
    this._temp = this.DEFAULT_TEMP;
    this._powerSavingMode = true;
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
    this._temp -= 1;
  }

  reset() {
    this._temp = this.DEFAULT_TEMP;
  }

  switchPowerSavingModeOff() {
    this._powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this._powerSavingMode = true;
    if (this.getTemp() > this.HIGH_USAGE_LIMIT) {
      this._temp = this.HIGH_USAGE_LIMIT;
    }
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
    return this._powerSavingMode;
  }

  usage() {
    if (this._temp < this.MEDIUM_USAGE_LIMIT) {
      return "low-usage";
    } else if (this._temp <= this.HIGH_USAGE_LIMIT) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }

  getTemp() {
    return this._temp;
  }
}
