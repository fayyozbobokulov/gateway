export const customerSupportSchema = {
	type: "object",
	properties: {
	  id: { type: "string" },
	  fullName: { type: "string" },
	  email: { type: "string", format: "email" },
	  password: { type: "string", minLength: 6 },
	  phone: { type: "string", minLength: 10, maxLength: 15 },
	},
	required: ["fullName", "email", "password", "phone"],
	additionalProperties: false,
  };
