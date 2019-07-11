const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const connectDB = require('./config/db');
const path = require('path');
require('./models/User')
require('./services/passport')

// Connect Database
connectDB()

const app = express();


app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);


// Init Middleware
app.use(express.json({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Define Routes
require('./routes/authRoutes')(app)
app.use('/auth/google', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/levels', require('./routes/api/levels'));
app.use('/api/quotes', require('./routes/api/quotes'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
