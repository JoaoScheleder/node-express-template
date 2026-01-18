import request from 'supertest';
import { createApp } from '../app';

describe('Ping Endpoint', () => {
  const app = createApp();

  it('should return pong when GET /ping is called', async () => {
    const response = await request(app).get('/ping');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'pong' });
  });

  it('should return 404 for unknown routes', async () => {
    const response = await request(app).get('/unknown');

    expect(response.status).toBe(404);
  });
});
