import cors from 'cors';
import express from 'express';

import authRoutes from './routes/authRoutes.js';
import patientRoutes from './routes/patientRoutes.js';
import workerRoutes from './routes/workerRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'maternal-health-risk-dashboard-api' });
});

app.use('/api/auth', authRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/worker', workerRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/admin', adminRoutes);

export default app;
