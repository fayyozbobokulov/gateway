import { Secret } from 'jsonwebtoken';

export const config = {
	jwtSecret: process.env.JWT_SECRET as Secret,
};
