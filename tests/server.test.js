'use strict';

const { server } = require('../source/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it('should respond with 404 on invalid method', async () => {
    const response = await mockRequest.put('/food');
    expect(response.status).toBe(404);
  });
  //make tests for requests
})