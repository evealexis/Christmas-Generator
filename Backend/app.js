const express = require('express');
const bodyParser = require('body-parser');

const activityRoutes = require('./routes/activities-routes');
const HttpError = require('./models/http-error')

const app = express();

app.use(bodyParser.json()); 

// Links the other route with the app.js
app.use('/api/activities', activityRoutes);


app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent){
        return next(error); 
    }
    res.status(error.code || 500) 
    res.json({message: error.message || 'An unknown error occurred!'}); 
});

app.listen(5000);