import { Application } from 'express';
import userRoutes from './services/users/user.routes';
import paymentRoutes from './services/payments/payment.routes';

export default function registerRoutes(app: Application) {
	app.use('/api/users', userRoutes);
	app.use('/api/payments', paymentRoutes);
}
