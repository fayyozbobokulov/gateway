import express, { Request, Response } from 'express';
import { setupLogging } from './logging';
import { setupProxies } from './proxy';
import { ROUTES } from './routes';

const app = express();

const port = process.env.PORT || 3000;
setupLogging(app);
setupProxies(app, ROUTES);
app.get('/hello', async (req: Request, res: Response) => {
	return res.send('HELLO');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
