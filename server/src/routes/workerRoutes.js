import { Router } from 'express';
import Patient from '../models/Patient.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { allowRoles } from '../middleware/roleMiddleware.js';
import { ROLES } from '../constants/roles.js';

const router = Router();

router.use(authMiddleware, allowRoles(ROLES.WORKER));

router.get('/patients', async (_req, res) => {
  const patients = await Patient.find().populate('userId', 'name email');
  res.json(patients);
});

export default router;
