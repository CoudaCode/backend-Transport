const express = require('express')
const mongoose = require('mongoose')
const PORT = 4000;
const routes = require('./routes/Userroutes')
const cookieParser = require("cookie-parser")
const URI = "mongodb+srv://coudadm:AnwLUW7PoUGYU0vM@backendtransport.kxqmqsl.mongodb.net/?retryWrites=true&w=majority"
const app = express()
const cors = require('cors')


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


// mongoose.connect(`${URI}`).then(()=>{
//   console.log('connecté a MongoDB')
//   app.listen(PORT, ()=>{
//     console.log(`bien connecté sur le port ${PORT}`);
//   })
// }).catch((error)=>{
//   console.log(error);
// })

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
app.use('/user', routes)

