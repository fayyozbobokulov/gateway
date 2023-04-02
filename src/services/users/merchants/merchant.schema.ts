// Merchant schema
const merchantSchema = {
	type: 'object',
	properties: {
		id: { type: 'string', format: 'uuid' },
		businessName: { type: 'string', minLength: 3, maxLength: 50 },
		businessDescription: { type: 'string', maxLength: 200 },
		email: { type: 'string', format: 'email' },
		password: { type: 'string', minLength: 8 },
		phone: { type: 'string', minLength: 10, maxLength: 15 },
		businessAddress: { type: 'string', minLength: 5, maxLength: 100 },
		businessLicense: {
			type: 'object',
			properties: {
				licenseNumber: { type: 'string' },
				expirationDate: { type: 'string', format: 'date' },
			},
			required: ['licenseNumber', 'expirationDate'],
		},
		paymentMethod: { type: 'string' },
		paymentHistory: {
			type: 'array',
			items: { type: 'object' },
		},
		orderHistory: {
			type: 'array',
			items: { type: 'object' },
		},
	},
	required: [
		'id',
		'businessName',
		'businessDescription',
		'email',
		'password',
		'phone',
		'businessAddress',
		'businessLicense',
	],
};
