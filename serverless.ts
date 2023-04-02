import { AWS } from "@serverless/typescript";

const config: AWS = {
	service: "users-api",
	org: "WeCarry",
	useDotenv: true,
	custom: {
		"serverless-plugin-typescript": {
			tsconfig: "./tsconfig.json",
		},
	},
	plugins: ["serverless-plugin-typescript"],
	provider: {
		name: "aws",
		runtime: "nodejs18.x",
		stage: '${opt:stage, "dev"}',
		region: "us-east-1",
		memorySize: 256,
		timeout: 30,
		environment: {
			DATABASE_URI: "${self:custom.dbUri}",
		},
	},
	functions: {
		usersApi: {
			name: "users-api",
			handler: "dist/functions/hello/handler",
			events: [
				{
					http: {
						path: "hello",
						method: "get",
					},
				},
			],
		},
		// graphql: {
		// 	handler: "src/handler.graphqlHandler",
		// 	events: [
		// 		{
		// 			http: {
		// 				path: "graphql",
		// 				method: "any",
		// 				cors: true,
		// 			},
		// 		},
		// 	],
		// },
	},
};

module.exports = config;
