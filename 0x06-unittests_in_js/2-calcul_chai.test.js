const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when type is SUM and 1.4 and 4.5 are passed', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when type is SUBTRACT and 1.4 and 4.5 are passed', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when type is DIVIDE and 1.4 and 4.5 are passed', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error when type is DIVIDE and 1.4 and 0 are passed', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Edge cases', function() {
    it('should return Error for DIVIDE when b rounds to 0', function() {
      expect(calculateNumber('DIVIDE', 1.9, 0.1)).to.equal('Error');
    });

    it('should handle negative numbers correctly', function() {
      expect(calculateNumber('SUBTRACT', -1.5, -3.7)).to.equal(2);
      expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
    });

    it('should throw an error for invalid operation type', function() {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw('Invalid operation type');
    });
  });
});
