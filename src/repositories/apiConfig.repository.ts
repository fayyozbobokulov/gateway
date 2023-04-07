import ApiConfig, { IApiConfig } from "../models/apiConfig.model";

export const getAllApiConfigs = async (): Promise<IApiConfig[]> => {
	return await ApiConfig.find();
};

export const getApiConfigById = async (
	id: string
): Promise<IApiConfig | null> => {
	return await ApiConfig.findById(id);
};

export const createApiConfig = async (
	apiConfigData: IApiConfig
): Promise<IApiConfig> => {
	const apiConfig = new ApiConfig(apiConfigData);
	return await apiConfig.save();
};

export const updateApiConfig = async (
	id: string,
	apiConfigData: Partial<IApiConfig>
): Promise<IApiConfig | null> => {
	return await ApiConfig.findByIdAndUpdate(id, apiConfigData, { new: true });
};

export const deleteApiConfig = async (
	id: string
): Promise<IApiConfig | null> => {
	return await ApiConfig.findByIdAndDelete(id);
};
