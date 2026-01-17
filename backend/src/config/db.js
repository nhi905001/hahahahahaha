import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
        console.log("Kết nối database thành công!");
    } catch (error) {
        console.error("LỖI ĐÂY NÀY:");
        console.error(error.message);
        process.exit(1);
    }
}