const expect = require('chai').expect;
const BrowserHistory = require('./answer');

describe('Browser History', () => {
  it('shoud navigate', () => {
    const history = new BrowserHistory();
    history.onPageVisit('http://google.com');
    expect(history.getHistory()).to.deep.equal(['http://google.com'])
  });
  it('should allow forward and backward access to history', () => {
    const history = new BrowserHistory();
    history.onPageVisit('a');
    history.onPageVisit('b');
    history.onPageVisit('c');
    history.onPageVisit('d');
    history.onPageVisit('e');
    expect(history.getHistory()).to.deep.equal(['a', 'b', 'c', 'd', 'e']);
    expect(history.getHistory(0)).to.deep.equal(['e']);
    expect(history.getHistory(1)).to.deep.equal(['e']);
    expect(history.getHistory(10)).to.deep.equal(['e']);
    expect(history.getHistory(-2)).to.deep.equal(['c', 'd', 'e']);
    expect(history.getHistory(-10)).to.deep.equal(['a', 'b', 'c', 'd', 'e']);
  });
  it('should navigate backward and forward', () => {
    const history = new BrowserHistory();
    history.onPageVisit('a');
    history.onPageVisit('b');
    history.onPageVisit('c');
    history.onPageVisit('d');
    history.onPageVisit('e');
    expect(history.getHistory(0)).to.deep.equal(['e']);
    expect(history.navigateBack()).to.equal('d');
    expect(history.navigateBack()).to.equal('c');
    expect(history.getHistory(0)).to.deep.equal(['c']);
    expect(history.navigateForward()).to.equal('d');
    expect(history.navigateForward()).to.equal('e');
  });
  it('should forget history after new page visit', () => {
    const history = new BrowserHistory();
    history.onPageVisit('a');
    history.onPageVisit('b');
    history.onPageVisit('c');
    history.onPageVisit('d');
    history.onPageVisit('e');
    expect(history.getHistory(0)).to.deep.equal(['e']);
    expect(history.navigateBack()).to.equal('d');
    expect(history.navigateBack()).to.equal('c');
    history.onPageVisit('f');
    expect(history.getHistory()).to.deep.equal(['a', 'b', 'c', 'f'])
    history.navigateBack();
  });
})
