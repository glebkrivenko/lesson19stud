class Storage {
  constructor() {
    this.drinkStorage = {};
  }
  addValue(key, value) {
    this.drinkStorage[key] = value;
  }

  getValue(key) {
    return this.drinkStorage[key];
  }

  getKeys() {
    return Object.keys(this.drinkStorage);
  }

  deleteValue(key) {
    if (!(key in this.drinkStorage)) {
      return false;
    }

    return delete this.drinkStorage;
  }

  reset() {
    this.drinkStorage = {};
  }
}

const drinks = new Storage();
drinks.addValue("vodka", "alcash");
drinks.addValue("tea", "sportsmen");
console.log(drinks.getValue("vodka"));
console.log(drinks.getKeys());
console.log(drinks.deleteValue());
console.log(drinks.reset());
