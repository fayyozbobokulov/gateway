import express from 'express';
import { setupLogging } from './logging';
import { setupProxies } from './proxy';
import { ROUTES } from './routes';
import { setupAuth } from './auth';

const app = express();

const port = process.env.PORT || 3000;

setupLogging(app);
setupAuth(app, ROUTES);
setupProxies(app, ROUTES);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
