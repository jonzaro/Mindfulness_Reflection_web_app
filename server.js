require('dotenv').config()
const express = require('express')
const app = express()
const favicon = require('express-favicon');
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(morgan('dev'))
app.use(favicon(__dirname + '/public/favicon.ico'));


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database');

        app.listen(port, (err) => {
            if (err) {
                throw new Error(err);
            }
            console.log('Server is Successfully Running, and App is listening on port ' + port);
        });
    })
    .catch(err => {
        console.error(err);
    });



// mongoose.connect(
// 'mongodb+srv://reflection:reflectionpass@cluster0.n9rb8od.mongodb.net/test',

// () => console.log('Connected to the DB')
// )


// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// }

// connectDB().then(() => {
//   app.listen( () => {
//       console.log("listening for requests");
//   })
// })

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) // req.user
app.use('/api/reflection', require('./routes/reflectionRouter.js'))

app.all('*', (req,res) => {
  
  app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })
})


// app.listen(9000, () => {
//   console.log(`Server is running on local port 9000`)
// })