// Merchant type
export type Merchant = {
	id: string;
	businessName: string;
	businessDescription: string;
	email: string;
	password: string;
	phone: string;
	businessAddress: string;
	businessLicense: {
		licenseNumber: string;
		expirationDate: string;
	};
	paymentMethod?: string;
	paymentHistory?: Array<any>;
	orderHistory?: Array<any>;
};
