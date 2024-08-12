
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const gameRoutes = require('./routes/games');

const app = express();
app.use(bodyParser.json());
app.use('/api',gameRoutes);

//I USE MONGODB
mongoose.connect('HERE I HAVE TO PUT MONGODB URL',{useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Could not connected to MongoDB'));

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

