const { expect } = require('chai');
const { add, subtract } = require('../controllers/calculatorController');

describe('Calculator Controller', () => {
  describe('add', () => {
    it('should add two numbers correctly', () => {
      const result = add(2, 3);
      expect(result).to.equal(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      const result = subtract(5, 2);
      expect(result).to.equal(3);
    });
  });
});
