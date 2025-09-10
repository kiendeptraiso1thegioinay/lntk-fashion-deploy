import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tkien3318:03082004@webnangcao.xmnte.mongodb.net/food-del').then(() => console.log("DB Connected"))
}