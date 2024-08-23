const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let bigBrother;

  beforeEach(() => {
    if (!bigBrother) {
      bigBrother = sinon.spy(console);
    }
  });

  afterEach(() => {
    bigBrother.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 50) logs "The total is: 150" to the console', () => {
    sendPaymentRequestToApi(100, 50);
    expect(bigBrother.log.calledWith('The total is: 150')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(40, 10) logs "The total is: 50" to the console', () => {
    sendPaymentRequestToApi(40, 10);
    expect(bigBrother.log.calledWith('The total is: 50')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });
});
