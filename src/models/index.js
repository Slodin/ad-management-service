import mongoose from 'mongoose';

import Advertisements from './advertisements';

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_HOST

const connectDb = () => {
	console.log(`mongodb+srv://${user}:${password}@${database}`)
  	return mongoose.connect(`mongodb+srv://${user}:${password}@${database}`, {useNewUrlParser: true});
};


const models = { Advertisements };

export { connectDb };

export default models;