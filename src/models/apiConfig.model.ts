import mongoose, { Document, Schema } from 'mongoose';

export interface IApiConfig extends Document {
	url: string;
	auth: boolean;
	additional: object;
	proxy: {
		target: string;
		changeOrigin: boolean;
		pathRewrite: {
			[key: string]: string;
		};
	};
}

const ProxySchema: Schema = new Schema({
	target: { type: String, required: false },
	changeOrigin: { type: Boolean, required: false },
	pathRewrite: { type: Map, of: String, required: false },
});

const ApiConfigSchema: Schema = new Schema({
	url: { type: String, required: true, unique: true },
	auth: { type: Boolean, required: true },
	additional: { type: Object, required: false },
	proxy: { type: ProxySchema, required: true },
});

const ApiConfig = mongoose.model<IApiConfig>('ApiConfig', ApiConfigSchema);

export default ApiConfig;
