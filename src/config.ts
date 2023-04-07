import { Secret } from 'jsonwebtoken';

export const config = {
	jwtSecret: process.env.JWT_SECRET as Secret,
	db_url:
		process.env.MAIN_DB_URL ||
		'mongodb+srv://carry-main:qVwON1lL2Wl5Wj1S@main.zp05kok.mongodb.net/?retryWrites=true&w=majority',
};
