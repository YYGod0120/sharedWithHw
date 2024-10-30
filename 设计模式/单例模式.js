class ManageGame {
  static _schedule = null;
  static getInstance() {
    if (ManageGame._schedule) {
      return ManageGame._schedule;
    }
    return new ManageGame();
  }
  constructor() {
    if (ManageGame._schedule) {
      return ManageGame._schedule;
    }
    ManageGame._schedule = this;
  }
}

const schedule1 = new ManageGame();
const schedule2 = new ManageGame();

console.log(schedule1 === schedule2);
