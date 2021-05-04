class Thermostat {
  constructor() {
    this._temp = 20;
  }
  getTemp() {
    return this._temp;
  }
  up() {
    this._temp += 1;
  }
}
