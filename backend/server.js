const express = require('express');
const cookieParser = require('cookie-parser');
const db =require ('./middleware/dbConnect');
const dotenv = require('dotenv');
const path = require('path');
const {checkUser, requireAuth} = require('./middleware/auth');
const cors = require('cors');

const app = express();

db.sequelize.sync();

app.use(cookieParser());

//Appel du fichier .env
dotenv.config();

//appel du body parser
app.use(express.json());

//mise en place du CORS policy
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }
  app.use(cors(corsOptions));

//mise en place du multer
app.use('/images', express.static(path.join(__dirname, 'images')));


//Import routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');


// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});


//Route Middlewares
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);

//lancement du server
app.listen(process.env.APP_PORT, () => console.log('Server Up and Running'));