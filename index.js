require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes.js");
const resourceRoutes = require("./routes/resource.routes.js");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB(); // ✅ Call the function to establish the connection

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/resource", resourceRoutes);

// Server Listening
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
