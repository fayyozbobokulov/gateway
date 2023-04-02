import express from 'express';
import cors from 'cors';
import registerRoutes from './routes';

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

registerRoutes(app);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
