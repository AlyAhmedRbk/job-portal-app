import mongoose from "mongoose";

// MONGO DB Connection
const connectDB = async () => {

    // console.log(process.env.MONGO_DB_URI)
    await mongoose.connect(`${process.env.MONGO_DB_URI}/job-portal-app`)
    .then(() => {
        console.log('Database Connected')
    }).catch((err) => {
        console.log('Unsuccessful to connect Database')
    })
}


export default connectDB;