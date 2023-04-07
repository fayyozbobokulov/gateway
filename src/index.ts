import express from 'express';
import dotenv from 'dotenv';
import { setupLogging } from './logging';
import { setupProxies } from './proxy';
import { ROUTES, registerRoutes } from './routes';
import { setupAuth } from './auth';
import { connectToMongoDB } from './mongodb';

(async function () {
	dotenv.config();
	const app = express();

	const port = process.env.PORT || 3000;

	setupLogging(app);
	setupAuth(app, ROUTES);
	await connectToMongoDB();
	registerRoutes(app);
	setupProxies(app, ROUTES);

	app.listen(port, () => {
		console.log(`App is running on port ${port}`);
	});
})().then(() => {
	console.log('App run successfully');
});
