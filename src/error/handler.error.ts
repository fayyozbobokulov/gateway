import { Request, Response, NextFunction } from 'express';
import {ErrorHandler} from './basic.error';

function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (err instanceof ErrorHandler) {
		// Custom error handling
		res.status(err.statusCode).send({ message: err.message });
	} else {
		// Generic error handling
		res.status(500).send({ message: 'An unexpected error occurred' });
	}
}

export default errorHandler;
