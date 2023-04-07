import mongoose, { Document, Schema } from 'mongoose';

export interface IApiConfig extends Document {
	url: string;
	auth: boolean;
	additional: object;
	rateLimit?: {
		windowMs: number;
		max: number;
	};
	proxy: {
		target: string;
		changeOrigin: boolean;
		pathRewrite: {
			[key: string]: string;
		};
	};
}
const RateLimitSchema: Schema = new Schema({
	windowMs: { type: Number, required: true },
	max: { type: Number, required: true },
});

const ProxySchema: Schema = new Schema({
	target: { type: String, required: true },
	changeOrigin: { type: Boolean, required: true },
	pathRewrite: { type: Map, of: String, required: true },
});

const ApiConfigSchema: Schema = new Schema({
	url: { type: String, required: true, unique: true },
	auth: { type: Boolean, required: true },
	additional: { type: Object, required: false },
	rateLimit: { type: RateLimitSchema, required: false },
	proxy: { type: ProxySchema, required: true },
});

const ApiConfig = mongoose.model<IApiConfig>('ApiConfig', ApiConfigSchema);

export default ApiConfig;
