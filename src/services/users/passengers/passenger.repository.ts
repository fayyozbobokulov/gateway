import { BaseRepository, MongoDBAdapter } from "carry-db-driver";
import { User } from "./passenger.type";
import { userSchema } from "./passenger.schema";


export class PassengerRepository extends BaseRepository<User> {
	constructor(adapter: MongoDBAdapter) {
		super({ adapter, collection: 'users', schema: userSchema });
	}
}
