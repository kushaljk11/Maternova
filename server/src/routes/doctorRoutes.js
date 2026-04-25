import { Router } from 'express';
import HealthRecord from '../models/HealthRecord.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { allowRoles } from '../middleware/roleMiddleware.js';
import { ROLES } from '../constants/roles.js';

const router = Router();

router.use(authMiddleware, allowRoles(ROLES.DOCTOR));

router.get('/reports', async (_req, res) => {
  const reports = await HealthRecord.find().sort({ recordedAt: -1 }).limit(50);
  res.json(reports);
});

export default router;
