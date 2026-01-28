import connectDB from "./db/mongo.js";
import express from 'express'
import cors from "cors"
import routes from './routes/index.js'

connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/", routes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
})