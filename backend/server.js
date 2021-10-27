const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

//Appel du fichier .env
dotenv.config();
//appel du body parser
app.use(express.json());
//mise en place du CORS policy
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }
  app.use(cors(corsOptions));
  
//mise en place du multer
app.use('/images', express.static(path.join(__dirname, 'images')));
// Connect to DB
mongoose
    .connect(process.env.DB_CONNECT, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, console.log('je suis connecté à la base'))
    .catch(
        //TODO : Envoyer un email pour alerter
        (error) => console.log(error)
    );

//Import routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

//Route Middlewares
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);

//lancement du server
app.listen(process.env.APP_PORT, () => console.log('Server Up and Running'));