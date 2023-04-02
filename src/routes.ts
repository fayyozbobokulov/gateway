import { Application } from 'express';
import paymentRoutes from './services/payments/payment.routes';
import userRoutes from './services/users/user.routes';
export default function registerRoutes(app: Application) {
	app.use('/api/users', userRoutes);
	app.use('/api/payments', paymentRoutes);
}
