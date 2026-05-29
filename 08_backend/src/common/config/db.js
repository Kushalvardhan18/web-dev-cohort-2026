import mongoose from "mongoose";

const dbConnect = async () => {
   try {
      const connect = await mongoose.connect(process.env.MONGO_URI)

      console.log(connect);

      console.log(`MongoDb connected : ${connect.connection.host}`);
   } catch (error) {
      console.error(`Error connecting to database : ${error}`);
   }

}


export default dbConnect