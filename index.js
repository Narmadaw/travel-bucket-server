const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const PORT = process.env.PORT || 5050;
const { JWT_SECRET_KEY } = process.env;

/*
 * Middleware
 * -----------------------------------
 */
app.use(cors()); // allows sharing cross origin requests
app.use(express.json()); // adds req.body
app.use(express.static("public/user-avatar")); // adds public folder to server images

const userRoutes = require('./routes/userRoutes')

app.use('/users', userRoutes)

/*
 * Start the server
 */
app.listen(PORT, () => console.log(`app running at http://localhost:${PORT}`));