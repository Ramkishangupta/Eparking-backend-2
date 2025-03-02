const express = require('express');
const { errorHandler} = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const {connectdb} = require('./config/dbconnection');

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/park",require("./routes/ParkingRoutes"));

app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server is runnng on port ${port}`);
})
