import { Secret } from 'jsonwebtoken';

export const config = {
	jwtSecret: process.env.JWT_SECRET as Secret,
	db_url: process.env.MAIN_DB_URL,
};
