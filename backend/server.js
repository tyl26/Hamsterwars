const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

//hämntar mina "secrets"
require('dotenv').config({
    path: "./config.env"
})
const port = process.env.PORT || 1997;

app.use(cors({
    origin: '*'
}));

//middlewears

app.use(
    express.json({
      limit: "5000mb",
      extended: true,
    })
  );
  app.use(
    express.urlencoded({
      limit: "5000mb",
      extended: true,
    })
  );
app.use(require('./routes/hamsters'))
app.use(require('./routes/matches'))

const db = require('./database/database')

//listnar på min port och connectar till min databas 
app.listen(port, () => {
    db.connectToServer(function (err) {
        if (err) {
            console.log(err);
        }
    })
    console.log('listening to port', port);
})