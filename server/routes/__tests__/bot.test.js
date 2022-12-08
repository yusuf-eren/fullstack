import request from 'supertest';
import { app } from '../../app.js';

describe('Send message operations', () => {
  it('send message and get it back', async () => {
    const response = await request(app)
      .post('/api/send-message')
      .send({
        message: 'Heyyo',
      })
      .expect(200);

    expect(response.body.message).toEqual('Heyyo');
  });

  it('return 400 when the message is empty or not defined', async () => {
    await request(app)
      .post('/api/send-message')
      .send({
        message: '',
      })
      .expect(400);

    await request(app).post('/api/send-message').send({}).expect(400);
  });
});
