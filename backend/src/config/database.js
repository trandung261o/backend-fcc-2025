import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\nMongoDB connected!!!
            ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection failed:", error);
        process(1);
    }
}

export default connectDB;