import express from 'express';
import db from './database/db.js';
import router from './api/api.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/api',router);


const URL = `mongodb+srv://dev:dev@twitit.cyprt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
db(URL);

app.listen(5000,() => {
    console.log('server is up and running on port 5000');
})

