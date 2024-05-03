import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
async function dbConnect() {
    try {
        // connection to the login_reg database
        await connect(MONGODB_URI, {
            dbName: "HikeClub_db",
        });
        console.log(
            "Pinged your deployment. You successfully connected to HikerClub DB!"
        );
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export default dbConnect;
