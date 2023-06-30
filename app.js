const express = require('express')
const mongoose = require('mongoose')
const PORT = 4000;
const userRoutes = require('./routes/Userroutes')
const Reservation = require('./routes/ReservationRoutes')
const vehicule = require('./routes/VehiculeRoutes')
const cookieParser = require("cookie-parser")
const URI = "mongodb+srv://coudadm:2Isr013PvGtn0qvj@backendtransport.kxqmqsl.mongodb.net/?retryWrites=true&w=majority"
const app = express()
const cors = require('cors')


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



app.use(cookieParser());



app.use('/user', userRoutes)
app.use('/Reservation', Reservation)
app.use('/vehicule', vehicule)