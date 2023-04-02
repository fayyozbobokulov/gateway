import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
	res.send('Payment Gateway');
});

router.get('/:id', async (req: Request, res: Response) => {
	res.send('Payment get Payment info');
});

export default router;
