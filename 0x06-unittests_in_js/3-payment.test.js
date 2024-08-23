const sinon = require("sinon");
const Utils = require("./utils");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("send Payment Request To Api uses the calculate Number method of Utils", () => {
    const bigBrother = sinon.spy(Utils);

    sendPaymentRequestToApi(90, 10);
    expect(bigBrother.calculateNumber.calledWith("SUM", 90, 10)).to.be.true;
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
    bigBrother.calculateNumber.restore();
  });
});
