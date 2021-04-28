const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const initializeMongoose = require('./config/mongoose-config');

require('dotenv').config();
initializeMongoose(process.env.ATLAS_URI);

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.get('/api/sanity-check', (req, res) => {
  res.send('Yep, still sane. Also, hippies suck.');
});

const users = require('./routes/users');
const clients = require('./routes/clients');
const cases = require('./routes/cases');
const auth = require('./routes/auth');
app.use('/api/users', users);
app.use('/api/clients', clients);
app.use('/api/cases', cases);
app.use('/api/auth', auth);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
