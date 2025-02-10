import mongoose from "mongoose";

mongoose.connect(process.env.DB_CONECCTION_STRING);

let db = mongoose.connection;

export default db;