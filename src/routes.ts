import { Application } from 'express';
import apiConfigRoutes from './routes/apiConfig.routes';
export const ROUTES = [
	{
		url: '/free',
		auth: false,
		creditCheck: false,
		rateLimit: {
			windowMs: 15 * 60 * 1000,
			max: 5,
		},
		proxy: {
			target: 'https://www.google.com',
			changeOrigin: true,
			pathRewrite: {
				[`^/free`]: '',
			},
		},
	},
	{
		url: '/premium',
		auth: true,
		creditCheck: true,
		proxy: {
			target: 'https://www.google.com',
			changeOrigin: true,
			pathRewrite: {
				[`^/premium`]: '',
			},
		},
	},
];

export async function registerRoutes(app: Application) {
	app.use('/api-config', apiConfigRoutes);
}
