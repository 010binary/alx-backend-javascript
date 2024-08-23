const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when type is SUM and 1.4 and 4.5 are passed', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when type is SUBTRACT and 1.4 and 4.5 are passed', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when type is DIVIDE and 1.4 and 4.5 are passed', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when type is DIVIDE and 1.4 and 0 are passed', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Edge cases', function() {
    it('should return Error for DIVIDE when b rounds to 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.9, 0.1), 'Error');
    });

    it('should handle negative numbers correctly', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -3.7), 2);
      assert.strictEqual(calculateNumber('SUM', -1.5, -3.7), -5);
    });

    it('should throw an error for invalid operation type', function() {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), Error, 'Invalid operation type');
    });
  });
});

