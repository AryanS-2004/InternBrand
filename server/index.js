const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {notFound, errorHandler} = require("./middleware/errorMiddleware");

const userRoutes = require('./routes/userRoutes');
const internshipRoutes = require('./routes/internshipRoutes');
const connectDB = require("./config/db");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cors());


app.use("/api/v1/user", userRoutes);
app.use("/api/v1/internships", internshipRoutes);



app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log('listening on port ' , port);
})