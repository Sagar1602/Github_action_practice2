const request = require('supertest');
const app = require('./index');

describe('API Tests', () => {
  test('GET / returns Hello World', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        if (res.body.message !== 'Hello World!') {
          throw new Error('Message not found');
        }
      })
      .end(done);
  });

  test('GET /api/status returns status', (done) => {
    request(app)
      .get('/api/status')
      .expect(200)
      .expect((res) => {
        if (res.body.status !== 'Running') {
          throw new Error('Status not running');
        }
      })
      .end(done);
  });
});