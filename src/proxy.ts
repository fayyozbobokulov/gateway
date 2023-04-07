import { createProxyMiddleware } from 'http-proxy-middleware';
import { Application } from 'express';

export const setupProxies = (app: Application, routes: any[]) => {
	routes.forEach((r) => {
		app.use(r.url, createProxyMiddleware(r.proxy));
	});
};
