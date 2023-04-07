import { NextFunction, Request, Response, Router } from 'express';
import {
	createApiConfig,
	deleteApiConfig,
	getAllApiConfigs,
	getApiConfigById,
	updateApiConfig,
} from '../repositories/apiConfig.repository';
import Joi from 'joi';

const router = Router();
const apiConfigValidationSchema = Joi.object({
	url: Joi.string().uri().required(),
	auth: Joi.boolean().required(),
	additional: Joi.object(),
	rateLimit: Joi.object({
		windowMs: Joi.number().integer().min(0).required(),
		max: Joi.number().integer().min(0).required(),
	}),
	proxy: Joi.object({
		target: Joi.string().uri().required(),
		changeOrigin: Joi.boolean().required(),
		pathRewrite: Joi.object()
			.pattern(Joi.string(), Joi.string())
			.required(),
	}),
});
const validateApiConfig = (req: Request, res: Response, next: NextFunction) => {
	const { error } = apiConfigValidationSchema.validate(req.body);
	if (error) {
		return res.status(400).json({ error: error.details[0].message });
	}
	next();
};
router.get('/', async (_req, res) => {
	const apiConfigs = await getAllApiConfigs();
	res.json(apiConfigs);
});

router.get('/:id', async (req, res) => {
	const apiConfig = await getApiConfigById(req.params.id);
	if (apiConfig) {
		res.json(apiConfig);
	} else {
		res.status(404).json({ error: 'ApiConfig not found' });
	}
});

router.post('/', validateApiConfig, async (req, res) => {
	const apiConfig = await createApiConfig(req.body);
	res.status(201).json(apiConfig);
});

router.put('/:id', validateApiConfig, async (req, res) => {
	const apiConfig = await updateApiConfig(req.params.id, req.body);
	if (apiConfig) {
		res.json(apiConfig);
	} else {
		res.status(404).json({ error: 'ApiConfig not found' });
	}
});

router.delete('/:id', async (req, res) => {
	const apiConfig = await deleteApiConfig(req.params.id);
	if (apiConfig) {
		res.json({ message: 'ApiConfig deleted successfully', apiConfig });
	} else {
		res.status(404).json({ error: 'ApiConfig not found' });
	}
});

export default router;
