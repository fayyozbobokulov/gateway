export type Driver = {
	id: string;
	fullName: string;
	email: string;
	password: string;
	phone: string;
	profilePicture: string;
	vehicleType: string;
	vehicleDetails: string;
	licenseNumber: string;
	licenseExpiryDate: string;
	paymentMethod: string;
	paymentHistory: any[];
	rideHistory: any[];
	deliveryHistory: any[];
	rating: number;
};
