class BrowserHistory {
  constructor() {
    this.history = [];
    this.currentLocation = 0;
  }
  onPageVisit(url) {
    this.history.splice(this.currentLocation + 1, this.history.length - this.currentLocation, url);
    this.currentLocation = this.history.length - 1;
  }
  navigateBack() {
    if (this.currentLocation === 0) return;
    return this.history[--this.currentLocation];
  }
  navigateForward() {
    if (this.currentLocation === this.history.length - 1) return;
    return this.history[++this.currentLocation];
  }
  getHistory(numItems) {
    if (numItems === undefined) {
      return this.history;
    } else if (numItems < 0) {
      return this.history.slice(Math.max(0, this.currentLocation + numItems), this.currentLocation + 1);
    } else {
      return this.history.slice(this.currentLocation, Math.min(this.history.length, this.currentLocation + numItems + 1));
    }
  }
}
module.exports = BrowserHistory;
