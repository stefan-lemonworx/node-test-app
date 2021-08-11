'use strict';

const express = require('express');
const path = require('path');
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://node-test-app-5a3eb.firebaseio.com',
});
const app = express();
const port = 3000;
app.listen(port, () => console.log('listening on port 3000'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRoutes = require('./routes/usersRoutes');
const newAccount = require('./auth/newAccount');

app.post('/register/email', newAccount.addUserByEmail);
// res.sendFile(path.join(__dirname + '/views/index.html'));

app.use('/users', userRoutes);


module.exports = app;
