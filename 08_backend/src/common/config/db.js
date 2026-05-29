import mongoose from "mongoose";

const dbConnect = async () => {
   const connect= await mongoose.connect(process.env.MONGO_URI)

   console.log(connect);
   
   console.log(`MongoDb connected : ${connect.connection.host}`);
   
}


dbConnect.then().catch()

export default dbConnect