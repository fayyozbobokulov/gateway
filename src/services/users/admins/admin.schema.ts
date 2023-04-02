export const adminSchema = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		fullName: { type: 'string' },
		email: { type: 'string', format: 'email' },
		password: { type: 'string', minLength: 6 },
		phone: { type: 'string', minLength: 10, maxLength: 15 },
		role: { type: 'string', enum: ['superadmin', 'admin'] },
	},
	required: ['fullName', 'email', 'password', 'phone', 'role'],
	additionalProperties: false,
};
