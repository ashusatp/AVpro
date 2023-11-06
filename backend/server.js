require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes');
const DbConnect = require('./database');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5500;
const cors = require('cors')


app.use(cookieParser());
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));
app.use('/storage',express.static('storage'));

DbConnect();
app.use(express.json({limit:'8mb'}));
app.use(router);


app.get('/', (req,res) =>{
    res.send('Hello king')
})




app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));