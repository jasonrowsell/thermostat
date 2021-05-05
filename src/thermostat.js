class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.MIN_TEMPERATURE = 10;
    this.MAX_ON_TEMPERATURE = 25;
    this.MAX_OFF_TEMPERATURE = 32;
    this.MEDIUM_USAGE_LIMIT = 18;
    this.HIGH_USAGE_LIMIT = 25;
    this._temperature = this.DEFAULT_TEMPERATURE;
    this._powerSavingMode = true;
  }

  up() {
    if (this.isMaxTemperature()) {
      return;
    }
    this._temperature += 1;
  }

  down() {
    if (this.isMinTemperature()) {
      return;
    }
    this._temperature -= 1;
  }

  reset() {
    this._temperature = this.DEFAULT_TEMPERATURE;
  }

  switchPowerSavingModeOff() {
    this._powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this._powerSavingMode = true;
    if (this.getTemperature() > this.HIGH_USAGE_LIMIT) {
      this._temperature = this.HIGH_USAGE_LIMIT;
    }
  }

  isMinTemperature() {
    return this._temperature === this.MIN_TEMPERATURE;
  }

  isMaxTemperature() {
    if (this.isPowerSavingModeOn()) {
      return this._temperature === this.MAX_ON_TEMPERATURE;
    }
    return this._temperature === this.MAX_OFF_TEMPERATURE;
  }

  isPowerSavingModeOn() {
    return this._powerSavingMode;
  }

  usage() {
    if (this._temperature < this.MEDIUM_USAGE_LIMIT) {
      return "low-usage";
    } else if (this._temperature <= this.HIGH_USAGE_LIMIT) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }

  getTemperature() {
    return this._temperature;
  }
}
