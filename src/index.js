import 'core-js/stable';
import 'regenerator-runtime/runtime';

import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import initializeMongoose from './config/mongoose-config';

dotenv.config();
initializeMongoose(process.env.ATLAS_URI);

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.get('/api/sanity-check', (req, res) => {
  res.send('Yep, still sane. Also, hippies suck.');
});

import users from './routes/users';
import clients from './routes/clients';
import cases from './routes/cases';
import auth from './routes/auth';
app.use('/api/users', users);
app.use('/api/clients', clients);
app.use('/api/cases', cases);
app.use('/api/auth', auth);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
