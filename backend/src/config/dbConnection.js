import { connect } from 'mongoose';

export const dbConnection = async () => {
  try {
    const con = await connect(process.env.MONGO_URI);
    console.log('DB Connection Successful');
    console.log('DB Host:', con?.connection?.host);
    console.log('DB Name:', con?.connection?.name);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};
