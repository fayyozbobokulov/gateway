import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import { Session } from './session';

const secretKey = process.env.SECRET_KEY as Secret;

interface RequestWithSession extends Request {
	session?: Session;
}

export const authenticate = (optional = false) => {
	return (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) => {
		const originalMethod = descriptor.value;

		descriptor.value = (
			req: RequestWithSession,
			res: Response,
			next: NextFunction
		) => {
			const authHeader = req.headers['authorization'];
			const token = authHeader && authHeader.split(' ')[1];

			if (!token) {
				if (optional) {
					return originalMethod(req, res, next);
				}
				return res.status(401).json({ message: 'Unauthorized' });
			}

			jwt.verify(token, secretKey, (err, decoded) => {
				if (err) {
					return res.status(403).json({ message: 'Forbidden' });
				}

				req.session = decoded as Session;
				return originalMethod(req, res, next);
			});
		};

		return descriptor;
	};
};
