import { createClient } from 'redis';

export const redisClient = createClient({
  url: 'redis://127.0.0.1:6379',
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (error) => {
  console.error('Error connecting to Redis:', error);
});
