export type Session = {
	_id: string;
	userType: UserType;
};

enum UserType {
	Admin = 'ADMIN',
	Driver = 'DRIVER',
	Passenger = 'PASSENGER',
	Merchant = 'MERCHANT',
}
