// User type
export type User = {
	id: string;
	username: string;
	email: string;
	password: string;
	phone: string;
	profilePicture?: string;
	paymentMethod?: string;
	paymentHistory?: Array<any>;
	rideHistory?: Array<any>;
	deliveryHistory?: Array<any>;
};
