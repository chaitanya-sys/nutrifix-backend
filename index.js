import express, { json } from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(json());

import authRoutes from './routes/auth';
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
