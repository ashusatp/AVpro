require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes');
const DbConnect = require('./database');
const PORT = process.env.PORT || 5500;
const cors = require('cors')
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));
DbConnect();
app.use(express.json());
app.use(router);


app.get('/', (req,res) =>{
    res.send('Hello king')
})




app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));