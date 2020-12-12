'use strict';

const loggerMiddle = require('../source/middleware/logger.js');

describe('testing logger middleware', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
  it('properly logs an output', () => {
    loggerMiddle(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('properly moves on', () => {
    loggerMiddle(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
})