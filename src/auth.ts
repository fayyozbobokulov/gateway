import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from './config';

export function authMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const token = req.header('x-auth-token');
	if (!token)
		return res.status(401).send('Access denied. No token provided.');

	try {
		const decoded = jwt.verify(token, config.jwtSecret);
		(req as any).user = decoded;
		next();
	} catch (ex) {
		res.status(400).send('Invalid token.');
	}
}
