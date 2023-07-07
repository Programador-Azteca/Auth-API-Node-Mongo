import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URI ?? "mongodb://localhost:27017/example-mongo");

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
