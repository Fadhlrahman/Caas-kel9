import express from "express";
import db from "./config/DB.js";
import router from "./routes/indexroutes.js"; // Adjusted import path
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
}   catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(router); // Use the router with '/api' prefix

const PORT = 5000; // Define the port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));