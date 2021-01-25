const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path');
const cors = require('cors');

const userRouter = require('./routers/userRouter');


const app = express();
app.use(morgan('tiny'));





mongoose.connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('-----------------Connected to database server-----------------');
});


app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.send('Welcome, to my app');
});

app.use('/api/users', userRouter);



app.use((req, res, next) => {
    let err = new Error('Not found!');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status || 500);
    res.json({
        status: 'error',
        message: err.message
    });
});


app.listen(process.env.Port, () => {
    console.log(`Server is running at localhost:${process.env.Port}`);
});