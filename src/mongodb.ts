import mongoose from 'mongoose';
import { config } from './config';

const connectToMongoDB = async () => {
	try {
		if (config.db_url) {
			await mongoose.connect(config.db_url);
			console.log('Connected to MongoDB');
		} else {
			console.error('DB url is not provided');
		}
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
};

export default connectToMongoDB;
